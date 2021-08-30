<template>

<v-app>
    
    
    <v-container>
        <v-layout>
        <v-flex>
        <v-card max-width="344" class="text-center mx-auto my-12" height="300px" color="grey lighten-3">
          <v-card-title >{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body}}</v-card-text>
        </v-card>
        </v-flex>
        </v-layout>
        <div  v-for="comment in comments" :key="comment.id">
            <v-card class="my-5">
                <v-card-title class="grey lighten-2">{{ comment.name }}</v-card-title>
                <v-card-text class="mt-2">{{ comment.body }}</v-card-text>
                <v-card-subtitle>{{ comment.email }}</v-card-subtitle>
            </v-card>
        </div>
    </v-container>
    <div>
    
    </div>
</v-app>
</template>

<script>

export default{
    data(){
        return{
            post:{},
            id: this.$route.params.id,
            comments:[],
            comment:{}
            // postId:this.$route.params.id
            
        }
    },
    layout: 'navbar-comment',
    fetch(){
        this.Service();
        this.servicePost();
    },
    methods:{
             Service(id){
        return this.$axios.$get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
            .then((response) =>{
                
            this.comments = response;
            
           
            }).catch(() =>{
                console.log('Error');
            })
        },
        
        servicePost(id){
            return this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then((response) => {
                this.post = response;
            }).catch(()=>{
                console.log('Error')
            })
        }
    }
}
</script>