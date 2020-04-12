import axios from 'axios'

const state = {
  applications: []
};

const getters = {
  allApplications: state => state.applications
};

const actions = {
  async fetchApplications({ commit }) {
    const response = await axios.get(
      'http://localhost:5000/api/applications'
    );

    commit('setApplications', response.data);
  },
  
  async addApplication({ commit }, app_info) {
    const response = await axios.post(
      'http://localhost:5000/api/applications',
      app_info
    );

    commit('newTodo', response.data);
  },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

  //   commit('removeTodo', id);
  // },


  // async filterTodos({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  //   );

  //   commit('setTodos', response.data);
  // },
  // async updateTodo({ commit }, updTodo) {
  //   const response = await axios.put(
  //     `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
  //     updTodo
  //   );

  //   console.log(response.data);

  //   commit('updateTodo', response.data);
  // }
};

const mutations = {
  setApplications: (state, applications) => (state.applications = applications),
  newApplication: (state, application) => state.applications.unshift(application),
  // removeTodo: (state, id) =>
  //   (state.todos = state.todos.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.todos.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.todos.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
