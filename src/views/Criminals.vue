<template>
   <v-data-table
    :headers="headers"
    :items="criminals"
    :search="search"
    sort-by="Name"
    class="elevation-1"
    
  >
   
    <template v-slot:top>
      <v-toolbar
        flat
        
      >
        <v-toolbar-title>Criminals</v-toolbar-title>
        
        <v-divider
          class="mx-4"
          inset
          vertical
          
        ></v-divider>
          <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
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
              New Criminal
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
                      v-model="editedItem.Name"
                      label="Criminals"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Address"
                      label="Address"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Age"
                      label="Age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Phone"
                      label="Phone number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Jailtime"
                      label="Has served time"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Notes"
                      label="Notes"
                    ></v-text-field>
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
    
    
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [
        {
          text: 'Criminals', value: 'Name',
          align: 'start',
          sortable: false,
          
          
        },
        
        { text: 'Address', value: 'Address'},
        { text: 'Age', value: 'Age'},
        { text: 'Phone number', value: 'Phone'},
        { text: 'Has served time', value:'Jailtime' },
        { text: 'Notes', value: 'Notes' },
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      criminals: [],
      editedIndex: -1,
      editedItem: {
        Name: '',
        Address: '',
        Age: 0,
        Phone: 0,
        Jailtime: '',
        Notes: '',
      },
      defaultItem: {
         Name: '',
        Address: '',
        Age: 0,
        Phone: 0,
        Jailtime: '',
        Notes: '',
      },
    
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New criminal' : 'Edit criminal'
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
        this.criminals = [
          {
            Name: 'Kio Briggs',
            Address: 'Laufrimi 13',
            Age: 56,
            Phone: 5552211,
            Jailtime: 'no',
            Notes: '',
          },
          {
            Name: 'Lalli',
            Address: 'Laugarvegur 33',
            Age: 60,
            Phone: 5553322,
            Jailtime: 'no',
            Notes: 'Mest elskaði smákrimminn'
          },
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.criminals.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.criminals.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.criminals.splice(this.editedIndex, 1)
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
          Object.assign(this.criminals[this.editedIndex], this.editedItem)
        } else {
          this.criminals.push(this.editedItem)
        }
        this.close()
      },
    },
  }

</script>

<style>

</style>