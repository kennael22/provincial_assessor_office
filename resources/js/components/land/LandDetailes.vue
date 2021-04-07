<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="first"
            label="Property Owner"
            prepend-inner-icon="mdi-account"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
        <v-combobox
          v-model="select"
          :items="items"
          label="Record Status"
          multiple
          outlined
        ></v-combobox>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Claimant"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
        <v-combobox
          v-model="select"
          :items="items"
          label="Municipal"
          multiple
          outlined
        ></v-combobox>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
        <v-combobox
          v-model="select"
          :items="items"
          label="Barangay"
          multiple
          outlined
        ></v-combobox>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
        <v-combobox
          v-model="select"
          :items="items"
          label="Section"
          multiple
          outlined
        ></v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Lot Number"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Block Number"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Survey Number"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
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
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      first: 'John',
      last: 'Doe',
      select: ['Vuetify', 'Programming'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
  }
</script>