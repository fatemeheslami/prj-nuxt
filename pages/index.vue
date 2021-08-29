<template>

  <v-app width="auto">
    <navbar></navbar>
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
      <v-flex  v-for="post in searchByTitle" :key="post.id"  >
        <v-card max-width="344" class="text-center ma-3" height="300px" color="grey lighten-3">
          <v-card-title >{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body}}</v-card-text>
          <v-btn color="orange lighten-2" text class="mx-3 mb-3" @click= "click(post)">
          Learn More
          </v-btn>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>

     <v-footer>
    <v-col class="text-center"> CopyRight </v-col>
  </v-footer>
  </v-app>
</template>


<script>
// import { mapGetters } from 'vuex'
import Navbar from '../components/Navbar.vue'

  export default{
    name: 'app',
    data(){
      return{
        search: '',
        searchId:1,
        posts:[],
      }
    },

    fetch(){
      return this.Service();
    },

    components: {
      Navbar
    },
    computed:{
      // getData(){
      //   return this.$store.getters.getData
      // ...mapGetters(['getData','getPostByTitle']),
      searchByTitle() {
        return this.posts.filter((post) =>{
          return post.title.includes(this.search) &&  post.userId===Number(this.searchId)
        })
      
        // return this.posts.filter(post => post.userId === Number(this.searchId))
      }
    },
    methods:{
      click(post){
        this.$router.push({path :`/${post.id}`})
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
