<template>

  <v-app>
    <v-navigation-drawer clipped permanent app>
      <v-list>
        
          <div class="text-center">
          <v-icon x-large color="black"> mdi-police-badge-outline</v-icon>
          </div>
          <v-spacer></v-spacer>
          <router-link tag="li" to="/criminals">Criminals</router-link>  
      <router-link tag="li" to="/case"> Crime Cases</router-link> 
      <router-link tag="li" to="/task">Tasks</router-link> 
         <router-link tag="li" to="/admin">Users</router-link>
         </v-list>
      
      <div class="text-center ">
      <v-btn absolute bottom tag="button" to="/">Logout</v-btn>
      </div>
  
    </v-navigation-drawer>

      
    <v-app-bar app dark color="gray">
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/home')" >
       Löggi
      </v-toolbar-title>
      
 </v-app-bar>
 
    <v-main>
      <router-view/>
    </v-main>
   
  </v-app>

</template>
<script>
export default {
  computed: {
    hide() { return this.$route.path === '/login'}
  }
}
</script>

<style lang="scss" scoped>
nav li {
  color: black;
  margin-left: 15%;
  
padding:12px 10px;
list-style-type: none;
font-size: 1.2em;
font-weight: bold;
cursor: pointer;




}
</style>





