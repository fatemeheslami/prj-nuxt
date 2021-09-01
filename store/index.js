
export const state = () => {
    return{
         data: [], 
         comments:[],
         post:{}
         
    }
}

export const getters = {
    getData(state){
        return state.data;
    },
    getComments(state){
        return state.comments;
    },
    getPost(state){
        return state.post;
    }
}
export const mutations = {
    SET_DATA(state , payload){
        state.data = payload;
    },

    SET_COMMENTS(state , payload){
        state.comments = payload;
    },
    SET_POST(state , payload){
        state.post = payload;
    }
    
}

export const actions = {
    fetchData({commit} , id){
        if(id){
            return this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                commit('SET_DATA' , response)
            }).catch(()=> {
                console.log('error')
            })
        }
        else{
            return this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                commit('SET_DATA' , response)
            }).catch(() => {
                console.log('error')
            })
        }
    },
  
    fetchComments({commit} , id){
        return this.$axios.$get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`
            
        )
        .then((response) => {
            commit('SET_COMMENTS' , response)
        }).catch(() =>{
            console.log('error')
        })
    },
   
}