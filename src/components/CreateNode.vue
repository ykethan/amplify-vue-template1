<script setup lang="ts">
import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import { type FetchUserAttributesOutput, fetchUserAttributes } from 'aws-amplify/auth';
import type { Schema } from '../../amplify/data/resource.ts';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();
const nodes = ref<Array<Schema['AtomicNode']['type']>>([]);
const currentUser = ref<FetchUserAttributesOutput | null>(null);

async function checkUser() {
  try {
    const userAttributes: FetchUserAttributesOutput = await fetchUserAttributes();
    currentUser.value = userAttributes;
    console.log("Authenticated user:", currentUser);
  } catch (error) {
    console.log("User not authenticated:", error);
  }
}

function fetchNodes() {
  client.models.AtomicNode.observeQuery({authMode: 'userPool',}).subscribe({
    next: ({ items, isSynced }) => {
      nodes.value = items;
      console.log("Fetched nodes:", items);
    },
    error: (err) => {
      console.error("Error fetching nodes:", err);
    }
  });
}

async function createNode() {
  const newNodeData = {
    nodeName: "My new Node",
    // Add other fields as necessary
  };

  console.log("Creating node with data:", newNodeData);

  try {
    await client.models.AtomicNode.create(newNodeData,{authMode:'userPool'});
    console.log("Node created successfully");
  } catch (error) {
    console.error("Error creating node:", error);
  }
}

onMounted(async () => {
  await checkUser();
  fetchNodes();
});
</script>

<template>
  <main>
    <h1>My nodes</h1>
    <button @click="createNode">+ new</button>
    <ul>
      <li 
        v-for="todo in nodes" 
        :key="todo.id">
        {{ todo.nodeName }}
      </li>
    </ul>
  </main>
</template>