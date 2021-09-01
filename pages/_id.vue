<template>

<v-app>
    
    
    <v-container>
        <v-layout>
        <v-flex>
        <v-card max-width="344" class="text-center mx-auto my-12" height="300px" color="grey lighten-3">
          <v-card-title >{{ getPost.title }}</v-card-title>
          <v-card-text>{{ getPost.body}}</v-card-text>
        </v-card>
        </v-flex>
        </v-layout>
        <div  v-for="comment in getComments" :key="comment.id">
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
import { mapGetters} from 'vuex'
export default{

    data(){
        return{
            id: this.$route.params.id,
        }
    },
    layout: 'navbar-comment',
    fetch(){
         this.$store.dispatch('fetchComments' , this.id)
         this.$store.dispatch('fetchPost' , this.id)
    },
    computed:{
        ...mapGetters(['getComments' , 'getPost'])
    },
}
</script>