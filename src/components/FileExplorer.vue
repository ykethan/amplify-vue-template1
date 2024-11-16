<script>
import { defineComponent, ref, onMounted } from 'vue';
import { getUrl } from 'aws-amplify/storage'; // Import getUrl

export default defineComponent({
  name: 'FileExplorer', // Name your component for better debugging
  props: {
    fileData: {
      type: Object,
      required: true,
    },
    identityId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // Create a reactive object to hold file URLs
    const fileUrls = ref({});

    // Function to fetch URLs for each file
    const fetchFileUrls = async (data) => {
      for (const key in data) {
        const item = data[key];

        // If it's a file, fetch the URL
        if (item.__data && item.__data.path) {
          try {
            const linkToStorageFile = await getUrl({ path: item.__data.path });
            fileUrls.value[item.__data.path] = linkToStorageFile.url;
          } catch (error) {
            console.error('Error getting file URL:', error);
          }
        }

        // Recursively fetch URLs for child files
        if (item.children && Object.keys(item.children).length) {
          await fetchFileUrls(item.children);
        }
      }
    };

    // Fetch URLs when the component mounts
    onMounted(() => {
      fetchFileUrls(props.fileData);
    });

    return { fileUrls };
  },
  template: `
    <ul>
      <li v-for="(item, key) in fileData" :key="key">
        <p v-if="key !== 'assets' && key !== identityId">__________</p>
        <span v-if="key !== 'assets' && key !== identityId">{{ key }}</span>
        
        <FileExplorer v-if="item.children && Object.keys(item.children).length" :fileData="item.children" :identityId="identityId" />
        
        <div v-if="!item.children || !Object.keys(item.children).length">
          <p v-if="key !== 'assets' && key !== identityId">
            <a v-if="item.__data.path && fileUrls[item.__data.path]" 
               :href="fileUrls[item.__data.path]" 
               target="_blank" 
               rel="noreferrer">
              Path: {{ item.__data.path }}
            </a>
          </p>
          <p v-if="key !== 'assets' && key !== identityId">
            Size: {{ item.__data.size }} bytes
          </p>
          <p v-if="key !== 'assets' && key !== identityId">
            Last Modified: {{ new Date(item.__data.lastModified).toLocaleString() }}
          </p>
        </div>
        
        <p v-if="item.children && Object.keys(item.children).length">This item has children.</p>
      </li>
    </ul>
  `,
});
</script>

<style scoped>
.file-item {
  position: relative;
  padding-left: 20px; /* Indent for better visibility */
}

.folder-name {
  font-weight: bold;
}

.file-details {
  margin-left: 20px; /* Indent file details */
  color: gray; /* Lighter color for file details */
}

.file-item:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-left: 1px solid #ccc; /* Vertical line for folder structure */
  margin-left: -10px; /* Adjust for alignment */
}

.file-item:only-child:before {
  height: 50%; /* Only draw the line for the last child */
}

.file-item:last-child:before {
  display: none; /* Hide line for last item in the list */
}
</style>