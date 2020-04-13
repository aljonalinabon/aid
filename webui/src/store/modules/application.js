import axios from 'axios'
import defaultapp from '../../../defaults/appinfo'

const state = {
  applications: [],
  application: {}
};

const getters = {
  allApplications: state => state.applications,
  application: state => state.application
};

const actions = {
  async fetchApplications({ commit }) {
    const response = await axios.get(
      'http://localhost:5000/api/applications'
    );

    commit('setApplications', response.data);
  },
  
  async addApplication({ commit }) {
    const response = await axios.post(
      'http://localhost:5000/api/applications',
      state.application
    );

    commit('newApplication', response.data);
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
  async updateAppForm({ commit }, app_info) {
    console.log(app_info);
    commit('updateAppForm', app_info);
  },
};

const mutations = {
  setApplications: (state, applications) => (state.applications = applications),
  newApplication: (state, application) => state.applications.unshift(application),
  updateAppForm: (state, application) => state.application = collateAppInfo(application),
  // removeTodo: (state, id) =>
  //   (state.todos = state.todos.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.todos.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.todos.splice(index, 1, updTodo);
  //   }
  // }
};

function collateAppInfo(application) {
  const application_information = {...defaultapp};
  console.log("BEFORE: ", application_information);

  for (const property in application_information) {
    if(application[property])
      application_information[property] = application[property];
  }

  console.log("AFTER: ", application_information);
  return application_information;
}

export default {
  state,
  getters,
  actions,
  mutations
};
