<template>
    <v-card>
        <v-list>
            <v-subheader>Criminals</v-subheader>
            <template v-for="(criminal, index) in criminals">
                
                <v-list-item :key="criminal._id">
                    <v-list-item-content disabled>
                        <v-container>
                            <v-row>
                                <v-col>{{criminal.name}}</v-col> 
                                <v-col>{{criminal.address}}</v-col> 
                                <v-col v-if="criminal.hasBeenToPrison">Has served time</v-col>
                                <v-col><v-btn @click="remove(criminal._id, index)">Delete</v-btn> </v-col>
                            </v-row>
                        </v-container>
                    </v-list-item-content>
                </v-list-item>
            
            </template>
        </v-list>
  </v-card>
</template>

<script>
import api from '../../data/api';
export default {
    data() {
        return {
            criminals: undefined,
        }
    },
    methods: {
    getCriminals() {
      api.getCriminals().then(res => {
        this.criminals = res.data.data;
        console.log(res);
      });
    },
    remove(id, index) {
        api.delCriminal(id).then(res => {
            console.log('Action success mabey show alert?', res);
            this.criminals.splice(index, 1);
        }).catch(error => {console.log(error)})
    }

  },
  mounted() {
    this.getCriminals();
  }
    
}
</script>

<style>

</style>