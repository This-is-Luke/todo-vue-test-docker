<template>
  <div id="app">
    <h1>My ToDo App</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const todos = ref([
      { id: 1, text: "Learn Vue" },
      { id: 2, text: "Learn TypeScript" },
      { id: 3, text: "Build ToDo App" },
    ]);

    return { todos };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
