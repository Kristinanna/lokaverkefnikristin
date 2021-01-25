<template>
  
   <v-data-table
    :headers="headers"
    :items="task"
    :search="search"
    sort-by="Name"
    class="elevation-1"
    
  >
   
    <template v-slot:top>
      <v-toolbar
        flat
        
      >
        <v-toolbar-title>Tasks</v-toolbar-title>
        
        <v-divider
          class="mx-4"
          inset
          vertical
          
        ></v-divider>
          
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              
            >
              New Task
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
          
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Task"
                      label="Task"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Assigned"
                      label="Assigned"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   
                   
                    <v-checkbox
                      v-model="editedItem.Status"
                      :label="Status"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    
    <template item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
data: () => ({
    checkbox: true,
    
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [
        {
          text: 'Task', value: 'Task',
          align: 'start',
          sortable: false,
          },
        
       
        { text: 'Assigned', value: 'Assigned'},
        { text: 'Status', value: 'Status'},
      
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      task: [],
      editedIndex: -1,
      editedItem: {
        Task: '',
        Assigned: '',
        Status: '',
        
      },
      defaultItem: {
          Task: '',
        Assigned: '',
        Status: '',
      },
    
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Task' : 'Edit Task'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.task = [
          {
            Task: 'Taka viðtal við Jónas varðandi morð',
            Assigned: 'REK13',
            Status: '',
          },
          {
           Task: 'Athuga hjá rannsóknarstofu hvort að sýni hefur komið til baka',
            Assigned: 'REK13',
            Status: '',
            
            },
          {
            Task: 'Finna þrjá karlmenn í line-up',
            Assigned: 'REK10',
            Status: 'done',
          },
          {
            Task: 'Gefa út sekt vegna ölvunar-akstur',
            Assigned: 'REK13',
            Status: '',
          }
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.task.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.task.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.task.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.task[this.editedIndex], this.editedItem)
        } else {
          this.task.push(this.editedItem)
        }
        this.close()
      },
    },
  }

</script>

<style>

</style>
