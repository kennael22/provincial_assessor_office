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
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.propertyowner"
                      prepend-inner-icon="mdi-account"
                      label="Property Owner"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.code"
                      label="code"
                      prepend-inner-icon="mdi-card-account-details-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.arpnumber"
                      label="ARP Number"
                      prepend-inner-icon="mdi-card-account-details-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.pinnumber"
                      label="Pin Number"
                      prepend-inner-icon="mdi-card-account-details-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.claimant"
                      label="claimant"
                      prepend-inner-icon="mdi-account"
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
      <!-- <v-icon
      small
      class="mr-2"
       @click="editViewItem(item, 'View Item')"
      >
      mdi-eye
      </v-icon> -->
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
        { text: 'Code', value: 'code' },
        { text: 'Arp Number', value: 'arpnumber' },
        { text: 'Pin Number', value: 'pinnumber' },
        { text: 'Claimant', value: 'claimant' },
        { text: 'Record Status', value: 'recordstatus' },
        { text: 'OCT/T', value: 'occt' },
        { text: 'Date', value: 'date' },
        { text: 'Survey', value: 'surveynumber' },
        { text: 'Lot Number', value: 'lotnumber' },
        { text: 'Block Number', value: 'blocknumber' },
        { text: 'Action', value: 'actions' },
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
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
    mounted(){
        this.$store.dispatch('updateMenu', true);
    },
    methods: {
      initialize () {
        this.desserts=[{
          propertyowner: 'F1rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F2rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F3rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F4rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F5rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F6rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F7rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F8rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F9rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
        {
          propertyowner: 'F0rozen Yogurt',
          code: 159,
          arpnumber: 6.0,
          pinnumber: 24,
          claimant: 4.0,
          recordstatus: '1%',
          occt: '1%',
          date: '1%',
          surveynumber: '1%',
          lotnumber: '1%',
          blocknumber: '1',
        },
      ]
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