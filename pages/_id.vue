<template>

<v-app>
    
    <navbar></navbar>
    <v-container>
        <div  v-for="comment in comments" :key="comment.id">
            <v-card class="my-5" v-if="comment.postId == id">
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
import Navbar from '../components/Navbar'
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
    components:{
        Navbar
    },
    fetch(){
        this.Service();
        // return this.comments.find(comment => comment.postId === this.id)
    },
    methods:{
         Service(id){
        return this.$axios.$get(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) =>{
                
            this.comments = response;
           
            }).catch(() =>{
                console.log('Error');
            })
        },
    }
}
</script>