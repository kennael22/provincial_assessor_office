<template>
    <v-card outlined>
        <v-card-subtitle>
            Machine Details
        </v-card-subtitle>
        <v-card-text>
            <v-container>
                <v-card outlined>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Machine Owner"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="ARP"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="PIN"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Machine Number"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Code"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Source"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Claimant"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Record Status"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Status Date"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        label="Owner Address"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-card-text>
        <v-card-subtitle>
            Administrator Details
        </v-card-subtitle>
        <v-card-text>
            <v-container>
                <v-card outlined>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        label="Name"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        label="Address"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-card-text>
        <v-card-subtitle>
            Location
        </v-card-subtitle>
        <v-card-text>
            <v-container>
                <v-card outlined>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Province"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Municipality"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Barangay"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-card-text>
        <v-card-subtitle>
            Tax Effectivity
        </v-card-subtitle>
        <v-card-text>
            <v-container>
                <v-card outlined>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Quarter"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Year"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Class"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Tax Code"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Transaction Date"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="4" md="4">
                                    <v-text-field
                                        label="Edit Date"
                                        outlined
                                        dense
                                        readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-card-text>
    </v-card>
</template>