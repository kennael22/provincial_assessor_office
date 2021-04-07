<template>
    
        <v-card outlined>
            <v-card-text>
                <v-container fluid> 
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
                            <v-text-field
                            label="Building Type"
                            outlined
                            ></v-text-field>
                        </v-col>    
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
                            <v-combobox
                            :items="items"
                            label="Rating"
                            outlined
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
                            <v-combobox
                            :items="items"
                            label="Structural Type"
                            outlined
                            ></v-combobox>
                        </v-col>
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
                            <v-combobox
                            :items="items"
                            label="Code"
                            outlined
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
                            <v-text-field
                            label="Permit No."
                            outlined
                            ></v-text-field>
                        </v-col>  
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
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
                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                        >
                            <v-text-field
                            outlined
                            label="Condo Title"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
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
                                label="Completion Issue Date"
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
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
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
                                label="Occupy Issue Date"
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
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
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
                                label="Date Constructed"
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
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
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
                                label="Date Occupied"
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
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
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
                                label="Date Completed"
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
                        <v-col
                        cols="12"
                        md="6"
                        sm="6">
                            <v-text-field
                                label="Building Age"
                                type="number"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        sm="12">
                            <v-text-field
                                label="Building Age"
                                type="number"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row
                        align="center"
                        justify="space-around"
                        class="mb-5"
                    >
                        <v-btn
                        large
                        color="success"
                        >
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Add Floor
                        </v-btn>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        sm="12">
                            <v-text-field
                                label="Total Area"
                                type="number"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row
                        align="center"
                        justify="space-around"
                    >
                        <v-btn
                        large
                        color="primary"
                        >
                        <v-icon left>
                            mdi-content-save
                        </v-icon>
                        Save
                        </v-btn>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    
</template>
<script>
export default {
    data(){
        return {
            date: new Date().toISOString().substr(0, 10),
            menu2: false,
            land_owner: "John doe",
            arp: 123123,
            pin: 1234123,
            building_number: 4123214,
            items: [
                'Programming',
                'Design',
                'Vue',
                'Vuetify',
            ],
        }
    },
}
</script>