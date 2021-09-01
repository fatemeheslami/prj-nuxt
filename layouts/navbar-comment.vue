<template>
  <v-app dark>
   <nav>
        <v-toolbar dark max-width="auto"  color="deep-purple accent-4">
            <v-btn
            class="ma-2"
            outlined
            small fab >
            <v-icon  >mdi-facebook</v-icon>
            </v-btn> 

            <v-btn
            class="ma-2"
            outlined
            small fab>
            <v-icon >mdi-twitter</v-icon>
            </v-btn>

            <v-btn
            class="ma-2"
            outlined
            small fab>
            <v-icon >mdi-google</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <nuxt-link to="/" class=" link white--text font-weight mx-5">Home</nuxt-link>
            <v-avatar
                size="55"
                color="grey lighten-2"
            >
                <img  src="../public/img.png">
            </v-avatar>
            
        </v-toolbar>
        
        
    </nav>
    <v-main>
      <v-container>
        
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
          <v-col class="text-center"> CopyRight </v-col>
          </v-footer>
  </v-app>
  
</template>

<script>

export default {
  
}
</script>

<style>
.likn{

}
</style>