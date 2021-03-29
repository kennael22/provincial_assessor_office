<template>
    
        <v-card outlined>
            <v-card-subtitle>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <b>Assessment Group</b>
                    </v-col>
                    <v-col
                        cols="12" sm="6" md="6" align="right">
                        <v-btn  color="primary"
                                @click="addRow">
                                Split
                                </v-btn
                            >
                        <v-btn  color="primary"
                                @click="edit  = false">
                                Edit
                                </v-btn
                            >
                    </v-col>
                </v-row>
            </v-card-subtitle>
            <div v-for="row in rows">
            <v-card-text>
                <v-container fluid> 
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        sm="12">
                            <v-text-field
                            label="Actual Use"
                            :readonly="edit"
                            :value="row.full_name"
                            ></v-text-field>
                        </v-col>    
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        sm="12">
                            <v-text-field
                            label="Market Value"
                            :readonly="edit"
                            value="Sample test"
                            ></v-text-field>
                        </v-col>    
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        sm="12">
                            <v-text-field
                            label="Assessment Level"
                            :readonly="edit"
                            value="Sample test"
                            ></v-text-field>
                        </v-col>    
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        sm="12">
                            <v-text-field
                            label="Assessment Value"
                            :readonly="edit"
                            value="Sample test"
                            ></v-text-field>
                        </v-col>    
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"edit
                        sm="12">
                            <v-text-field
                            label="Rounded Value"
                            :readonly="edit"
                            value="Sample test"
                            ></v-text-field>
                        </v-col>    
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12" sm="12" md="12" align="right">
                            <v-btn  color="primary"
                                    width="150">
                                    Save
                                    </v-btn
                                >
                            <v-btn v-if="rows.length > 1"  color="primary"
                                    width="150"
                                    @click="removeRow">
                                    Remove
                                    </v-btn
                                >
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            </div>
        </v-card>
    
</template>
<script>
export default {
    computed:{
        modeEdit:{
            get: function(){
                return this.edit;
            },
            set: function(val) {
                this.edit = val;
            }
        }
    },
    methods:{
        addRow() {
            this.rows.push({full_name: ""});
        },
        removeRow() {
            this.rows.pop();
        }
    },
    data(){
        return {
            rows:[{full_name:'noguera'}],
            assessment: [],
            edit: true,
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