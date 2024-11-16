<script>
import { list } from 'aws-amplify/storage';
import { fetchAuthSession } from 'aws-amplify/auth';
import { ref, onMounted, defineComponent } from 'vue';
import FileExplorer from './FileExplorer.vue'; // Import the FileExplorer component

function processStorageList(response) {
  const filesystem = {};
  
  const add = (source, target, item) => {
    const elements = source.split('/');
    const element = elements.shift();

    if (!element) return; // blank
    target[element] = target[element] || { __data: item, children: {} };
    if (elements.length) {
      target[element].children = target[element].children || {};
      add(elements.join('/'), target[element].children, item);
    }
  };

  response.items.forEach((item) => add(item.path, filesystem, item));
  console.log(filesystem);
  return filesystem;
}

export default defineComponent({
  components: { FileExplorer }, // Register the component here
  setup() {
    const files = ref({});
    const loading = ref(true);
    const error = ref(null);
    const identityId = ref(null); // Add ref for identityId

    const fetchFiles = async () => {
      try {
        const authSess = await fetchAuthSession();
        identityId.value = authSess.identityId; // Store identityId
        const result = await list({
          path: `assets/${identityId.value}/`,
          options: {
            listAll: true,
          },
        });
        console.log(identityId.value);
        // Process the items into a filesystem structure
        files.value = processStorageList(result);

      } catch (err) {
        error.value = 'Error fetching files: ' + err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchFiles); // Fetch files when the component is mounted

    return { files, loading, error, identityId }; // Return identityId
  },
});
</script>

<template>
  <div class="flex flex-col gap-xs w-[400px] items-start">
    <h2>Your Files</h2>
    <div v-if="loading">Loading files...</div>
    <p v-if="error" class="text-red">{{ error }}</p>
    <FileExplorer v-if="!loading && !error" :fileData="files" :identityId="identityId" />
  </div>
</template>

<style scoped>
.text-red {
  color: red;
}
</style>
