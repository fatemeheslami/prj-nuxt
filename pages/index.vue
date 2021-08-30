<template>

  <v-app width="auto">
    
    <v-container class="my-5">
      <v-row>
        <v-col >
          <v-text-field
            placeholder="Filter By Title"
            type="text"
            v-model="search"
          ></v-text-field>
    
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-text-field type="text" placeholder="Search By Id" v-model="searchId"></v-text-field>
          
        </v-col>
      </v-row>
    </v-container>

    <v-container class="my-5" >
    <v-layout wrap>
      <v-flex  v-for="post in searchPosts" :key="post.id"  >
        <v-card max-width="344" class="text-center ma-3" height="300px" color="grey lighten-3">
          <v-card-title >{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body}}</v-card-text>
           <nuxt-link :to='`/${post.id}`' class=" link purple--text" >Learn More</nuxt-link>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>

  </v-app>
</template>


<script>
// import { mapGetters } from 'vuex'


  export default{
    name: 'app',
    data(){
      return{
        search: '',
        searchId:'',
        posts:[],
      }
    },

    fetch(){
      return this.Service();
    },

    
    computed:{
      // getData(){
      //   return this.$store.getters.getData
      // ...mapGetters(['getData','getPostByTitle']),
     searchPosts(){
        let posts = this.posts
        if(this.search){
          posts = this.searchByTitle()
        }
      
        
        if(this.searchId){
          posts = this.searchById()
        }
        return posts
     }
    },
    methods:{
        searchByTitle(){
           return this.posts.filter((post) =>{
          return post.title.includes(this.search)
        })
      },
      searchById(){
        
        return this.posts.filter(post => post.userId === Number(this.searchId))
        
        
      },
      Service(){
        return this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>{
                this.posts = response;
            }).catch(() =>{
                console.log('Error');
            })
        },
      },
    }
  
</script>
<style>
.link{
  text-decoration: none
  
}
</style>