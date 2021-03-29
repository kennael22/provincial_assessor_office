<template>
    <v-card outlined>
        <v-card-text>
            <v-container fluid> 
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    sm="12">
                        <v-combobox
                        :items="items"
                        label="Roof"
                        outlined
                        ></v-combobox>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    sm="12">
                        <v-combobox
                        :items="items"
                        label="Flooring"
                        outlined
                        ></v-combobox>
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
                        <v-combobox
                        :items="items"
                        label="Wall/Partition"
                        outlined
                        ></v-combobox>
                    </v-col> 
                </v-row>
                <v-row justify="center" class="mb-5">
                    <v-btn  color="primary"
                        >
                        Add more floors
                        </v-btn
                    >
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