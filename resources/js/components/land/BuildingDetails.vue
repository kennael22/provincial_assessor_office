<template>
    <v-card flat>
        <v-card outlined>
            <v-card-title>
                <v-row>
                    <v-col cols="6" sm="6" md="6">
                        Building Reference
                    </v-col>
                    <v-col cols="" sm="6" md="6" align="right">
                        <v-btn
                            color="primary"
                            @click="back"
                            >
                            Back
                            <v-icon
                                right
                                dark
                            >
                                mdi-keyboard-backspace
                            </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
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
                            v-model="building.propertyowner"
                            label="Land Owner"
                            outlined
                            dense
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
                            dense
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
                            dense
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
                            dense
                            readonly
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                            <v-btn medium block color="primary"
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
            class="mt-5 mb-20"
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
            <v-tab-item>
                <general-tab/>
            </v-tab-item>
            <v-tab-item>
                <building-structure-tab/>
            </v-tab-item>
            <v-tab-item>
                <appraisal-tab/>
            </v-tab-item>
            <v-tab-item>
                <assessment-tab/>
            </v-tab-item>
            <v-tab-item>
                <signatories-tab/>
            </v-tab-item>
            <v-tab-item>
                <memoranda-tab/>
            </v-tab-item>
            <v-tab-item>
                <history-tab/>
            </v-tab-item>
            <v-tab-item>
                <payment-tab/>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>
<script>
import GeneralTab from '../land/GeneralTab'
import BuildingStructureTab from '../land/BuildingStructureTab'
import AppraisalTab from '../land/AppraisalTab'
import AssessmentTab from '../land/AssessmentTab'
import SignatoriesTab from '../land/SignatoriesTab'
import MemorandaTab from '../land/MemorandaTab'
import HistoryTab from '../land/HistoryTab'
import PaymentTab from '../land/PaymentTab'
export default {
    components:{
        GeneralTab,
        BuildingStructureTab,
        AppraisalTab,
        AssessmentTab,
        SignatoriesTab,
        MemorandaTab,
        HistoryTab,
        PaymentTab
    },
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
        // this.$store.dispatch('updateMenu',true)
        // if (this.building == '') {
        //     this.$router.push({ name : 'FAAS Building' })
        // }
    }
}
</script>