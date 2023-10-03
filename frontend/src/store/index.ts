import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, text: "Learn Vue", completed: false },
      { id: 2, text: "Learn TypeScript", completed: false },
      { id: 3, text: "Build ToDo App", completed: false },
    ],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
  },
  modules: {},
});
