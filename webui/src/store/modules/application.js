import axios from 'axios'
import defaultapp from '../../../defaults/appinfo'

const state = {
  applications: [],
  filteredApplications: [],
  application: {},
  searchTerm: '',
};

const getters = {
  allApplications: state => state.applications,
  filteredApplications: state => state.filteredApplications,
  application: state => state.application,
  searchTerm: state => state.searchTerm
};

const actions = {
  async fetchApplications({ commit }) {
    const response = await axios.get(
      'http://localhost:5000/api/applications'
    );

    commit('setApplications', response.data);
  },
  
  async fetchApplication({ commit }, id) {
    const response = await axios.get(
      `http://localhost:5000/api/applications/${id}`
    );

    commit('getApplication', response.data);
  },

  async addApplication({ commit }) {
    const response = await axios.post(
      'http://localhost:5000/api/applications',
      state.application
    );

    commit('newApplication', response.data);
  },

  async updateApplication({ commit }, id) {
    const response = await axios.put(
      `http://localhost:5000/api/applications/${id}`,
      state.application
    );

    console.log(response.data);

    commit('updateTodo', response.data);
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

  
  async searchApplication({ commit }, searchTerm) {
    commit('searchApplication', searchTerm);
  },

  async updateAppForm({ commit }, app_info) {
    // console.log(app_info);
    commit('updateAppForm', app_info);
  },
};

const mutations = {
  setApplications: (state, applications) => {
    state.applications = applications;
    state.filteredApplications = applications;
  },

  getApplication: (state, application) => {
    state.application = application
  },

  newApplication: (state, application) => state.applications.unshift(application),

  updateAppForm: (state, application) => state.application = collateAppInfo(application),

  searchApplication: (state, searchTerm) =>  {
    (state.filteredApplications = state.applications.filter(application => {
      const jsonstring = getAllPropertyValues(application).toUpperCase();
      console.log(searchTerm + " --> " + jsonstring);
      return jsonstring.indexOf(searchTerm.toUpperCase()) !== -1;
    }))
  },

  // removeTodo: (state, id) =>
  //   (state.todos = state.todos.filter(todo => todo.id !== id)),

  updateApplication: () => {
    // const index = state.applications.findIndex(a => todo.id === updTodo.id);
    // if (index !== -1) {
    //   state.todos.splice(index, 1, updTodo);
    // }
  }
};

function getAllPropertyValues(application_information) {
  let valuestring = "";
  for (const property in application_information) {
    valuestring += " ~~ " + JSON.stringify(application_information[property])
  }
  return valuestring;
}

function collateAppInfo(application) {
  const application_information = {...defaultapp};
  //console.log("BEFORE: ", application_information);

  for (const property in application_information) {
    if(application[property])
      application_information[property] = application[property];
  }

  //console.log("AFTER: ", application_information);
  return application_information;
}


export default {
  state,
  getters,
  actions,
  mutations
};
