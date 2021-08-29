export const state = () => {
    return{
        
        data: [],
    }
}

export const getters = {
    getData(state){
        return state.data;
    },

    getPostByTitle: (state) => (title) => {
        
        return state.data.find((post) => post.title === title)
    }
}


export const mutations = {
    SET_DATA(state , payload){
        state.data = payload;
    },
    
}

export const actions = {
    fetchData({commit}){
        return this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            
            commit('SET_DATA' , response)
            console.log('hello')
        }).catch(() =>{
            console.log('error')
        })
    }
}