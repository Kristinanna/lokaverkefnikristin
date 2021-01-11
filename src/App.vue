<template>
  <v-app>
    <v-app-bar app>
     <v-appbar-title>Löggi</v-appbar-title>
     <div>
      <router-link to="/home">Glæpamenn</router-link> | 
      <router-link to="criminals"> Málaskrá</router-link> |
      <router-link to="/tasks">Verkefni</router-link> | 
     </div>
 </v-app-bar>
 
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>
