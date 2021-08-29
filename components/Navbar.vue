<template>
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

            <v-avatar
                size="55"
                color="grey lighten-2"
            >
                <img  src="../public/img.png">
            </v-avatar>
        </v-toolbar>
        
        
    </nav>
</template>

<script>
    export default{
        name: 'Navbar'
    }
</script>