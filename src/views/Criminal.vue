<template>

  <v-container>
    <h1> skrá glæpamann </h1>
      <v-row>
          <v-col>
              <criminal-add></criminal-add>
          </v-col>
      </v-row>
      <v-row>
        <v-col>
          <criminal-photo></criminal-photo>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <criminal-list></criminal-list>
          </v-col>
          
      </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import CriminalList from '../components/criminals/criminal-list.vue';
import CriminalAdd from '../components/criminals/criminal-add.vue';
import CriminalPhoto from '../components/criminals/criminal-photo.vue';

export default {
  name: 'criminals',
  components: {
    CriminalList,
    CriminalAdd,
    CriminalPhoto
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  
}
</script>
