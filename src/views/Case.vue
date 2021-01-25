<template>
<div class="case">
  <v-data-table
    :headers="headers"
    :items="cases"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Cases</v-toolbar-title>
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
              New Case
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
                      v-model="editedItem.crime"
                      label="Crime"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.address"
                      label="Address"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.postalcode"
                      label="Postal Code"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.type"
                      label="Type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.date"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    
                    <v-select v-model="editedItem.severness"
                    label="Severness"
                    :items="items">
                    
                    </v-select>
                    
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-select v-model="editedItem.suspect"
                    label="Suspect"
                    :items="suspect">
                    
                    </v-select>
                    
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.notes"
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
    <template >
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
  
 <v-container>
    <v-row>
        <v-col>
            <h3 class="grey--text">Victims</h3>
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
              Name
            </th>
            <th class="text-left">
              Address
            </th>
            <th class="text-left">
              Phone Number
            </th>
            <th class="text-left">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in victims"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone}}</td>
            <td>{{ item.age}}</td>
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
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
       victims: [
        {
          name: 'Hrógmar Hermanns',
          address: 'Dúfnahólar 10',
          phone: '5553212',
          age: '43'
        },
        {
          name: 'Hallbera Halldórs',
          address: 'Hafnarbakki 11',
          phone: '5554312',
          age: '19'
        },
       
        
      ],
      headers: [
        {
         
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Crime', value: 'crime' },
        { text: 'Address', value: 'address' },
        { text: 'Postal code', value: 'postalcode' },
        { text: 'Type', value: 'type' },
        { text: 'Date', value: 'date' },
        { text: 'Severness', value: 'severness' },
        { text: 'Notes', value: 'notes' },
        { text: 'Suspect', value: 'suspect'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      cases: [],
      editedIndex: -1,
      editedItem: {
        crime: '',
        address: '',
        postalcode: '',
        type: '',
        date: '',
        severness: '',
        notes: '',
      },
      defaultItem: {
        crime: '',
        address: '',
        postalcode: '',
        type: '',
        date: '',
        severness: '',
        notes: '',
      },
      items: ['1','2','3','4','5','6','7','8','9','10'],
        suspect: ['Glanni Glæpon']
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Case' : 'Edit Case'
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
        this.cases = [
          {
            crime: 'Morð',
        address: 'Rvk',
        postalcode: 101,
        type: 'Morð',
        date: '01.01.12',
        severness: 10,
        notes: 'Stutt lýsing á glæp',
      },
       {
            crime: 'Morð',
        address: 'Rvk',
        postalcode: 101,
        type: 'Morð',
        date: '01.01.12',
        severness: 10,
        notes: 'Stutt lýsing á glæp',
      },
         
          {
            crime: 'Morð',
        address: 'Rvk',
        postalcode: 101,
        type: 'Morð',
        date: '01.01.12',
        severness: 10,
        notes: 'Stutt lýsing á glæp',
      },
          {
            crime: 'Morð',
        address: 'Rvk',
        postalcode: 101,
        type: 'Morð',
        date: '01.01.12',
        severness: 10,
        notes: 'Stutt lýsing á glæp',
      },
          {
            crime: 'Morð',
        address: 'Rvk',
        postalcode: 101,
        type: 'Morð',
        date: '12.12.01',
        severness: 10,
        notes: 'Stutt lýsing á glæp',
      },
          {
            crime: 'Morð',
        address: 'Rvk',
        postalcode: 101,
        type: 'Morð',
        date: '05.05.12',
        severness: 10,
        notes: 'Stutt lýsing á glæp',
      },
         
          
         
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.cases.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.cases.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.cases.splice(this.editedIndex, 1)
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
          Object.assign(this.cases[this.editedIndex], this.editedItem)
        } else {
          this.cases.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>