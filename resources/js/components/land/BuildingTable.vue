<template>
<v-card flat>
  <v-card-title primary-title>
    <v-toolbar flat>
      <v-toolbar-title>Revision: 2014</v-toolbar-title>
      <v-divider class="mx-4" inset vertical />
      <v-spacer />
    </v-toolbar>
    <v-row  >
      <v-col  cols="12" sm="12" md="3" lg="3">
          <v-btn block color="primary" @click.prevent="dialog=true"
          >Create</v-btn
      >
      </v-col>
      <v-col  cols="12" sm="12" md="6" lg="6">
          <v-btn block color="primary"
          >Advanced Search</v-btn
      >
      </v-col>
      <v-col  cols="12" sm="12" md="3" lg="3">
          <v-btn block color="primary"
          >Export</v-btn
      >
      </v-col>
    </v-row>

    <!-- <v-row align="center">
      
      <v-btn color="primary"
          >Export</v-btn
      >
    </v-row> -->
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
       <v-row>
        <v-col class="pr-0">
          <v-text-field
              v-model="search"
              placeholder="Search"
              class="mx-4"
              prepend-inner-icon="mdi-magnify"
          >
          </v-text-field>
        </v-col>
      </v-row>
        <v-dialog
          v-model="dialog"
          max-width="1000px"
        >
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
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.propertyowner"
                      label="Property Owner"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-combobox
                    v-model="editedItem.reference"
                    :items="items"
                    label="Land Reference"
                    outlined
                    ></v-combobox>
                    </v-col>
                </v-row>
                <v-card
                    elevation="1"
                    outlined>
                <v-card-title>Land Reference Details</v-card-title>
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.landowner"
                            readonly
                            label="Property Owner"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.arpnumber"
                            readonly
                            label="ARP number"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.pin"
                            readonly
                            label="PIN"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.taxcode"
                            readonly
                            label="Tax Code"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.assesment"
                            readonly
                            label="Assessment Value"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            v-model="editedItem.landarea"
                            readonly
                            label="Land Area"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-spacer></v-spacer>
                </v-card>
                <br>

                    <v-row>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                            <v-combobox
                            v-model="editedItem.reference"
                            :items="items"
                            label="Code"
                            outlined
                            ></v-combobox>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                            <v-combobox
                            v-model="editedItem.reference"
                            :items="items"
                            label="Record Status"
                            outlined
                            ></v-combobox>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                            <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                    >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date"
                                        label="Picker without buttons"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                        outlined
                                    ></v-text-field>
                                </template>
                                    <v-date-picker
                                        v-model="date"
                                        @input="menu2 = false"
                                    ></v-date-picker>
                                </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12"
                        sm="4"
                        md="4">
                        <v-sheet class="pa-5">
                            <v-switch
                            v-model="switch1"
                            inset
                            :label="`Condo: ${switch1.toString()}`"
                            ></v-switch>
                        </v-sheet>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                            <v-combobox
                            v-model="editedItem.reference"
                            :items="items"
                            label="Effectivity"
                            outlined
                            ></v-combobox>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="4"
                        md="4"
                        >
                        <v-text-field
                            v-model="editedItem.year"
                            label="Year"
                            outlined
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
    <template v-slot:item.actions="{ item }">
      <v-icon
      small
      class="mr-2"
       @click="viewItem(item);$store.dispatch('updateMenu',true)"
      >
      mdi-eye
      </v-icon>
      <v-icon
        small
        class="mr-2"
        @click="editItem(item, 'Edit Item')"
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
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      switch1: true,
      search: '',
      dialog: false,
      title: '',
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {},
      desserts: [],
      headers: [
        {
          text: 'Property Owner',
          align: 'start',
          sortable: false,
          value: 'propertyowner',
        },
        { text: 'Arp Number', value: 'arpnumber' },
        { text: 'Pin Number', value: 'pinnumber' },
        { text: 'Building Number', value: 'buildingnumber' },
        { text: 'Action', value: 'actions' },
      ],
      select: ['Vuetify', 'Programming'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Building' : 'Edit Building'
      },
    },
    mounted(){
        this.$store.dispatch('updateMenu', true);
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      title (val) {
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
        this.desserts=[{
          propertyowner: 'Mark Dy',
          arpnumber: 6.0,
          pinnumber: 24,
          buildingnumber: 3,
          source: 1,
        },
        {
          propertyowner: 'Paul Dy',
          arpnumber: 6.0,
          pinnumber: 24,
          buildingnumber: 3,
          source: 1,
        },
        {
          propertyowner: 'Kenneth Solomon',
          arpnumber: 6.0,
          pinnumber: 24,
          buildingnumber: 3,
          source: 1,
        },
        {
          propertyowner: 'John Paul Grefaldo',
          arpnumber: 6.0,
          pinnumber: 24,
          buildingnumber: 3,
          source: 1,
        },
        {
          propertyowner: 'John Kevin Nogueara',
          arpnumber: 6.0,
          pinnumber: 24,
          buildingnumber: 3,
          source: 1,
        },
        {
          propertyowner: 'Shannon Retuerma',
          arpnumber: 6.0,
          pinnumber: 24,
          buildingnumber: 3,
          source: 1,
        },
      ]
      },
      viewItem(item) {
          if (this.$route.name !== "Building Details") {
            this.$store.dispatch('updateBuilding',item);
                this.$router.push({
                    name: "Building Details",
                    params: { item: item, id: item.id }
                });
            }
      },
      editItem (item, title) {
        this.title = title
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>