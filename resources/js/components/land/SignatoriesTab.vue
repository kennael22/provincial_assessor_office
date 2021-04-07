<template>
    <v-card outlined>
        <v-card-subtitle>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <b>Assessed By</b>
                    </v-col>
                </v-row>
            </v-card-subtitle>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Name"
                        :readonly="assessBy"
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Designation"
                        :readonly="assessBy"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                    md="4"
                    sm="4">
                        <v-row>
                            <v-col cols="12"
                            md="6"
                            sm="6">
                                <v-menu
                                    v-model="menu1"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                    >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date1"
                                        label="Date"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                    <v-date-picker
                                        v-model="date1"
                                        @input="menu1 = false"
                                        :readonly="assessBy"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12"
                            md="6"
                            sm="6">
                                <v-btn
                                    color="success"
                                    large
                                    @click="assessBy = false"
                                    >
                                    <v-icon left>
                                        mdi-pencil
                                    </v-icon>
                                    Edit
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>    
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-subtitle>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <b>Recommeding Approval</b>
                    </v-col>
                </v-row>
            </v-card-subtitle>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Name"
                        :readonly="recommendingApproval"
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Designation"
                        :readonly="recommendingApproval"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                    md="4"
                    sm="4">
                        <v-row>
                            <v-col cols="12"
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
                                        v-model="date2"
                                        label="Date"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                    <v-date-picker
                                        v-model="date2"
                                        @input="menu2 = false"
                                        :readonly="recommendingApproval"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12"
                            md="6"
                            sm="6">
                                <v-btn
                                    color="success"
                                    large
                                    @click="recommendingApproval = false"
                                    >
                                    <v-icon left>
                                        mdi-pencil
                                    </v-icon>
                                    Edit
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>    
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-subtitle>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <b>Approved By</b>
                    </v-col>
                </v-row>
            </v-card-subtitle>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Name"
                        :readonly="aprrovedBy"
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Designation"
                        :readonly="aprrovedBy"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                    md="4"
                    sm="4">
                        <v-row>
                            <v-col cols="12"
                            md="6"
                            sm="6">
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
                                        v-model="date3"
                                        label="Date"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                    <v-date-picker
                                        v-model="date3"
                                        @input="menu2 = false"
                                        :readonly="aprrovedBy"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12"
                            md="6"
                            sm="6">
                                <v-btn
                                    color="success"
                                    large
                                    @click="aprrovedBy = false"
                                    >
                                    <v-icon left>
                                        mdi-pencil
                                    </v-icon>
                                    Edit
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>    
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-subtitle>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <b>Encoded By</b>
                    </v-col>
                </v-row>
            </v-card-subtitle>
        <v-card-text>
            <v-container fluid>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Name"
                        :readonly="encodedBy"
                        ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    sm="4">
                        <v-text-field
                        label="Designation"
                        :readonly="encodedBy"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12"
                    md="4"
                    sm="4">
                        <v-row>
                            <v-col cols="12"
                            md="6"
                            sm="6">
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
                                        v-model="date4"
                                        label="Date"
                                        prepend-inner-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                    <v-date-picker
                                        v-model="date4"
                                        @input="menu4 = false"
                                        :readonly="encodedBy"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12"
                            md="6"
                            sm="6">
                                <v-btn
                                    color="success"
                                    large
                                    @click="encodedBy = false"
                                    >
                                    <v-icon left>
                                        mdi-pencil
                                    </v-icon>
                                    Edit
                                </v-btn>
                            </v-col>
                        </v-row>
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
            date1: new Date().toISOString().substr(0, 10),
            date2: new Date().toISOString().substr(0, 10),
            date3: new Date().toISOString().substr(0, 10),
            date4: new Date().toISOString().substr(0, 10),
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,
            assessBy: true,
            recommendingApproval: true,
            aprrovedBy: true,
            encodedBy: true
        }
    }
}
</script>