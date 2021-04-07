<template>
    <v-card flat>
        <v-card outlined>
            <v-card-title>
                <v-row>
                    <v-col cols="6" sm="6" md="6">
                        Machine Reference
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
                            v-model="machine.propertyowner"
                            label="Land Owner"
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
                            v-model="machine.arpnumber"
                            label="ARP"
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
                            v-model="machine.pinnumber"
                            label="PIN"
                            outlined
                            dense
                            readonly
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-card-subtitle>Land Reference</v-card-subtitle>
                            <v-card outlined>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="landowner"
                                                    label="Land Owner"
                                                    outlined
                                                    dense
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="arp"
                                                    label="ARP"
                                                    outlined
                                                    dense
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="pin"
                                                    label="PIN"
                                                    outlined
                                                    dense
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-btn color="primary">
                                                Reference
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-card-subtitle>Building Reference</v-card-subtitle>
                            <v-card outlined>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="buildingowner"
                                                    label="Building Owner"
                                                    outlined
                                                    dense
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="arp1"
                                                    label="ARP"
                                                    outlined
                                                    dense
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field
                                                    v-model="pin"
                                                    label="PIN"
                                                    outlined
                                                    dense
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-btn color="primary">
                                                Reference
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
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
            Details
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
            History
            </v-tab>
            <v-tab>
            Memoranda
            </v-tab>
            <v-tab>
            Attached Documents
            </v-tab>
            <v-tab>
            Payment
            </v-tab>
            <v-tab-item>
                <machine-details-tab/>
            </v-tab-item>
            <v-tab-item>
                <machine-appraisal-tab/>
            </v-tab-item>
            <v-tab-item>
                <machine-assessment-tab/>
            </v-tab-item>
            <v-tab-item>
                <signatories-tab/>
            </v-tab-item>
            <v-tab-item>
                <history-tab/>
            </v-tab-item>
            <v-tab-item>
                <memoranda-tab :title="'New Memoranda'"/>
            </v-tab-item>
            <v-tab-item>
                <memoranda-tab :title="'Document Title'"/>
            </v-tab-item>
            <v-tab-item>
                <payment-tab/>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>
<script>
import MachineDetailsTab from './MachineDetailsTab';
import MachineAppraisalTab from './MachineAppraisalTab';
import MachineAssessmentTab from './MachineAssessmentTab';
import SignatoriesTab from './SignatoriesTab';
import HistoryTab from './HistoryTab';
import MemorandaTab from './MemorandaTab';
import PaymentTab from './PaymentTab';
export default {
    components:{
        MachineDetailsTab,
        MachineAppraisalTab,
        MachineAssessmentTab,
        SignatoriesTab,
        HistoryTab,
        MemorandaTab,
        PaymentTab
    },
    data(){
        return {
            machineowner:'Shannon',
            arp2: '2019-01-0003',
            landowner: 'John Doe',
            arp: '2014-01-0001',
            pin: '03-03-0000',
            buildingowner: 'John Doe',
            arp1: '2015-02-1119'
        }
    },
    methods:{
        back(){
            this.$router.push({name:'FAAS Machine'})
        }
    },
    computed:{
        machine(){
            return this.$store.state.user.selected_machine;
        }
    },
    mounted() {
        console.log(this.machine)
    }
}
</script>