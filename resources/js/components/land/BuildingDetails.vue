<template>
    <v-card flat>
        <v-row  justify="end" class="m-3">
            <!-- <v-col  cols="12" sm="12"> -->
                <v-btn icon color="primary"
                @click="back"
                >
                <v-icon>mdi-keyboard-backspace</v-icon>
                </v-btn
            >
            <!-- </v-col> -->
        </v-row>
        <v-card outlined>
            <v-card-title>Building Reference</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                        <v-text-field
                            v-model="building.propertyowner"
                            label="Land Owner"
                            outlined
                            readonly
                        ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                        <v-text-field
                            v-model="building.arpnumber"
                            label="ARP"
                            outlined
                            readonly
                        ></v-text-field>
                        </v-col>
                        
                    </v-row>
                    <v-row>    
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                        <v-text-field
                            v-model="building.pinnumber"
                            label="PIN"
                            outlined
                            readonly
                        ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="3"
                            md="3"
                        >
                        <v-text-field
                            v-model="building.buildingnumber"
                            label="Building Number"
                            outlined
                            readonly
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                            <v-btn x-large block color="primary"
                            >Land Reference</v-btn
                        >
                        </v-col>
                    </v-row>
                    <!-- <v-row align="center" justify="end">
                        
                    </v-row> -->
                </v-container>
            </v-card-text>    
        </v-card>
        <v-tabs
            class="mt-5"
            fixed-tabs
            background-color="primary"
            dark
        >
            <v-tab>
            General
            </v-tab>
            <v-tab>
            Building Structure
            </v-tab>
            <v-tab>
            Appraisal
            </v-tab>
            <v-tab>
            Assessment
            </v-tab>
            <v-tab>
            Signatories
            </v-tab>
            <v-tab>
            Memoranda
            </v-tab>
            <v-tab>
            History
            </v-tab>
            <v-tab>
            Payment Reference
            </v-tab>
            <v-tab-item> <!-- general tab  -->
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
                            <v-row justify="center" class="mb-5">
                                <v-btn  color="primary"
                                    >
                                    Add more floors
                                    </v-btn
                                >
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
                            <v-row justify="center" class="mb-5">
                                <v-btn  color="primary"
                                    >
                                    Save
                                    </v-btn
                                >
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-tab-item> <!-- end general tab -->
        </v-tabs>
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
    methods: {
        back(){
            this.$router.push({name:'FAAS Building'})
        }
    },
    computed: {
        building(){
            return this.$store.state.user.selected_building; 
        }
    },
    mounted(){
        this.$store.dispatch('updateMenu',true)
        if (this.building == '') {
            this.$router.push({ name : 'FAAS Building' })
        }
    }
}
</script>