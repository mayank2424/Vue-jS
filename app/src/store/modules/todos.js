import axios from 'axios';

//Vuex State
const state = {
    todos:[],
    reset_todos:[],
    showModal:false,
    modalMsg:''
};

//actions
const actions = {

    //getting todos 
  async fetchTodos({ commit }){
      const response  = await axios.get('https://jsonplaceholder.typicode.com/todos/');

    //   console.log(response.data);

      //called or commit mutation
      commit('setTodos', response.data)
      //Initially setting all todos to different array
      commit('resetTodos', response.data)
  },

  //Adding todos
  async addTodo({ commit }, title){
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos/',{title, completed:false});

      commit('addTodo', response.data)
  },

  //Delete Todo
  async deleteTodo({commit}, delObj){
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${delObj.id}`);

      console.log(delObj)
      console.log(delObj.showModal, delObj.modalMsg)
      commit('deleteTodo',delObj)

  },
  //filter todo
  async filterTodos({commit},filterObj){
   
    console.log(filterObj)
    //Getting  select option value from targete event
    if(filterObj.f_type === 'num'){
        console.log('num')
        const limit = parseInt(filterObj.e.target.options[filterObj.e.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data)
    } else {
          const value = filterObj.e.target.options[filterObj.e.target.options.selectedIndex].innerText;
          if(value == 'Completed'){
              filterObj.completed = true
             commit('filter', filterObj)
             console.log(filterObj)
          } else {
            filterObj.completed = false;
            commit('filter', filterObj)
            console.log(filterObj)
          }
          console.log(value)
         
    }

  },
  
  //update todo
  async updateTodo({ commit }, updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)

        console.log(response)

        commit('updateTodo',response.data);
  },

  //close Modal
  async closeModal({commit}, modalObj){

    console.log(modalObj)
    commit('closeModal', modalObj)
  }
};

//mutations
const mutations = {
    setTodos : (state, todos) => (state.todos = state.reset_todos = todos),
    resetTodos:(state,todos) => (state.reset_todos =todos),
    addTodo : (state, todo) => state.todos.unshift(todo),
    deleteTodo : (state, delObj) => {state.todos = state.todos.filter(todo => todo.id !== delObj.id), state.showModal = delObj.showModal, state.modalMsg = delObj.modalMsg},
    updateTodo : (state,updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if(index !== -1) {
            //replaced selected id with updated id
            state.todos.splice(index, 1, updTodo)
        }
    },
    filter:(state, filterObj) => {state.todos = state.reset_todos.filter(todo => todo.completed == filterObj.completed)},
    closeModal:(state, modalObj) => {state.showModal = modalObj.showModal, state.modalMsg = modalObj.modalMsg}
};

//getters

const getters = {
    allTodos : (state) => state.todos,
    modal:(state) => state
};

export default {
    state,
    getters,
    mutations,
    actions
}