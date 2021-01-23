<template>
 <v-container>
    <v-row>
        <v-col>
            <h1 class="grey--text">Task list</h1>
        </v-col>
    </v-row>
    <v-row>
        <v-col
        cols="12"
        md="8"
        xs="8"
        sm="8"
        >
        <v-card>
            <v-card-text>
                <v-form>
                    
                    <v-simple-table>
      
        <thead>
          <tr>
            <th class="text-left">
              Task
            </th>
            <th class="text-left">
              Assigned
            </th>
            <th class="text-left">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in todoList"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.assigned }}</td>
            <td>{{ item.status}}</td>
          </tr>
        </tbody>
      
    </v-simple-table>
                </v-form>
            </v-card-text>
        </v-card>
        </v-col>
    </v-row>
 </v-container>
 
</template>

<script>
export default {
data() {
    return {
        todoList: [
           { id: 1, name: 'Taka viðtal við jónas varðandi morð', assigned: 'Rek13', status: 'false'},
            { id: 2, name: 'Athuga hjá rannsóknarstofu hvort að sýni hefur komið til baka', assigned: 'Rek13', status: 'false'},
             { id: 3, name: 'Finna þrjá karlmenn í line-up', assigned: 'Rek10', status: 'done'},
              { id: 4, name: 'Gefa út sekt vegna ölvunar-akstur', assigned: 'Rek13', status: 'false'},
               
        ]
    }
},
computed: {},
methods: {},
}
</script>

<style>

</style>