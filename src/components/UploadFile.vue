<script>
import { uploadData } from 'aws-amplify/storage';
import { fetchAuthSession } from 'aws-amplify/auth';

export default {
  props: {
    id: String,
    name: String,
    type: String,
    placeholder: String,
    size: String,
    style: String,
    label: String,
    help: String,
    required: Boolean,
    error: Boolean,
    customClass: String,
    modelValue: String,
    disabled: Boolean
  },
  data() {
    return {
      file: null, // Store the selected file
      fileSelected: false // Track if a file has been selected
    };
  },
  methods: {
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      console.log('file', selectedFile);
      this.file = selectedFile;
      this.fileSelected = !!selectedFile; // Update fileSelected based on file existence
    },
    async update() {
      const fileData = this.file;
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(fileData);
      const authSess = await fetchAuthSession();
      fileReader.onload = async (event) => {
        console.log('Complete File read successfully!', event.target.result);
        try {
          await uploadData({
            data: event.target.result,
            path: `assets/${authSess.identityId}/${fileData.name}`
          });
        } catch (e) {
          console.log('error', e);
        }
      };
    }
  }
};
</script>
<template>
  <div class="flex flex-col gap-xs w-[400px] items-start">
    <input id="fileUpload" type="file" @change="handleFileChange" />
    <Button label="Upload" class="grey-button" @click="update" :disabled="!fileSelected">Upload!</Button>
  </div>
</template>

<style scoped>

.grey-button {
  background-color: whitesmoke; /* Grey background */
  color: red; /* Red text color */
  border: 2px solid black; /* No border */
  padding: 10px 20px; /* Padding for a rectangular shape */
  border-radius: 5px; /* Slightly rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.grey-button:hover {
  background-color: darkgrey; /* Darker grey on hover */
}
.grey-button:disabled {
  background-color: lightgrey; /* Light grey when disabled */
  cursor: not-allowed; /* Change cursor style when disabled */
  opacity: 0.5; /* Make it look more disabled */
}
</style>