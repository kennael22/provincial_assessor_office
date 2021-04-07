<template>
    <v-card flat>
        <v-card-text>
            <v-row >
                <v-col align="end" cols="12" sm="12" md="12">
                    <v-btn @click.prevent="dialog = true;formTitle = 'Add Appraisal Entry' " width="150px" color="primary"
                    >Add</v-btn>
                </v-col>
        </v-row>
        </v-card-text>
        <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        >
        <template v-slot:top>
        <v-toolbar
            flat
        >
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
                            <v-combobox
                            v-model="kind"
                            :items="items"
                            label="Kind"
                            :multiple='false'
                            outlined
                            dense
                            ></v-combobox>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                            outlined
                            dense
                            label="Brand/Model"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="4" md="4">
                            <v-text-field
                            outlined
                            dense
                            label="Cap/HP"
                            ></v-text-field>
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
                                dense
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
                            sm="6"
                            md="4"
                        >
                            <v-combobox
                            v-model="kind"
                            :items="items"
                            label="Condition Acquired"
                            :multiple='false'
                            outlined
                            dense
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Estimated Economic Life"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Estimated Remaining Life"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-menu
                                v-model="menu3"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date1"
                                    label="Year installed"
                                    prepend-inner-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                    dense
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="date1"
                                @input="menu3 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-menu
                                v-model="menu4"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date2"
                                    label="Year operational"
                                    prepend-inner-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                    dense
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="date2"
                                @input="menu4 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Original Cost"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Quantity"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-combobox
                            v-model="kind"
                            :items="items"
                            label="Currency"
                            :multiple='false'
                            outlined
                            dense
                            ></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Conversion Factor"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Reproduction New Cost"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Year Usd"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Depreciation Rate"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                            outlined
                            dense
                            type="number"
                            label="Depreciation %"
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
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
            >
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            date1: new Date().toISOString().substr(0, 10),
            date2: new Date().toISOString().substr(0, 10),
            menu2: false,
            menu3: false,
            menu4: false,
            kind: [],
            items: [
                'AGRI',
                'IND',
                'RES',
                'SPC'
            ],
            formTitle: '',
            dialog: false,
            search: '',
            headers: [
            {
                text: 'Kind',
                align: 'start',
                filterable: true,
                value: 'name',
                sortable:false
            },
            { text: 'Brand Model', value: 'calories', sortable:false },
            { text: 'Cap/HP', value: 'fat', sortable:false },
            { text: 'Date Acquired', value: 'carbs', sortable:false },
            { text: 'Acq condition', value: 'protein', sortable:false },
            { text: 'Eco Est', value: 'iron', sortable:false },
            { text: 'Life Rem', value: 'iron', sortable:false },
            { text: 'Year Inst', value: 'iron', sortable:false },
            { text: 'Year Op', value: 'iron', sortable:false },
            { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [
                {
                    name: 'Agri',
                    calories: '12 KVA Generator',
                    fat: '',
                    carbs: '',
                    protein: 'New',
                    iron: 0,
                },
            ],
        }
    }
}
</script>