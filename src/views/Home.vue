<template>
  <div class="home">
     <v-row>
          <v-col
            cols="12"
            md="6"
          >
    <v-btn to="/criminals">Create new crime case</v-btn>
          </v-col>
     </v-row>
           <v-row>
          <v-col
            cols="12"
            md="6"
          >
    <v-btn to="/task">Create new Task</v-btn>
          </v-col>
           </v-row>

    <div>
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
            v-for="item in tasks"
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
        <div>
     <v-container>
    <v-row>
        <v-col>
            <h1 class="grey--text">Crime cases</h1>
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
              Case
            </th>
            <th class="text-left">
              Description
            </th>
            <th class="text-left">
              severness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cases"
            :key="item.case"
          >
            <td>{{ item.case }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.severness}}</td>
          </tr>
        </tbody>
      
    </v-simple-table>
                   

                </v-form>
            </v-card-text>
        </v-card>
        </v-col>
    </v-row>
     </v-container>
    </div>
  </div>
  </div>
</template>





<style>

</style>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
    tasks: [
        {
          name: 'Taka viðtal við Jónas varðandi morð',
          assigned: 'REK13',
          status: false,
        },
        {
          name: 'Taka viðtal við Jónas varðandi morð',
          assigned: 'REK13',
          status: false,
        },
        {
          name: 'Taka viðtal við Jónas varðandi morð',
          assigned: 'REK10',
          status: 'done',
        },
        {
          name: 'Taka viðtal við Jónas varðandi morð',
          assigned: 'REK13',
          status: false,
        },
        {
          name: 'Taka viðtal við Jónas varðandi morð',
          assigned: 'REK10',
          status: false,
        },
        
      ],
      cases: [
        {
          case: 'Morð 14.12.2020 Rvk',
          description: 'stutt lýsing um glæp',
          severness: 10,
        },
        {
          case: 'Morð 14.12.2020 Rvk',
          description: 'stutt lýsing um glæp',
          severness: 10,
        },
        {
          case: 'Morð 14.12.2020 Rvk',
          description: 'stutt lýsing um glæp',
          severness: 10,
        },
        {
          case: 'Morð 14.12.2020 Rvk',
          description: 'stutt lýsing um glæp',
          severness: 10,
        },
        {
          case: 'Morð 14.12.2020 Rvk',
          description: 'stutt lýsing um glæp',
          severness: 10,
        },
      ]
    }
  },
}
    


</script>
