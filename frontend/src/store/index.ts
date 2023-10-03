import { createStore } from "vuex";
import axios from "axios";
import { Todo } from "./types";

export default createStore({
  state: {
    todos: [] as Todo[],
  },
  mutations: {
    setTodos(state, todos: Todo[]) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get("http://localhost:3000/todos");
      commit("setTodos", response.data);
    },
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
  },
  modules: {},
});
