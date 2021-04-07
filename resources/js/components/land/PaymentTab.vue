<template>
    <v-card fluid>
        <v-card-text>
            <v-container>
                <v-row
                    align="right"
                    justify="end"
                    class="mb-5 mt-5"
                >
                    <v-btn
                    large
                    color="success"
                    >
                    <v-icon left>
                        mdi-plus
                    </v-icon>
                    Add
                    </v-btn>
                </v-row>
                <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                ></v-data-table>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        return {
            headers: [
                {
                    text: 'Particulars',
                    align: 'start',
                    filterable: true,
                    value: 'particulars',
                },
                {
                    text: 'Amount',
                    filterable: true,
                    value: 'amount',
                },
                {
                    text: 'OR Number',
                    filterable: true,
                    value: 'or_number',
                },
                {
                    text: 'Date Paid',
                    filterable: true,
                    value: 'date_paid',
                },
            ],
            items:[
                {
                    particulars: "Shannon",
                    amount:1234,
                    or_number: 1,
                    date_paid: '2004-09-04',
                },{
                    particulars: "John",
                    amount:123,
                    or_number: 2,
                    date_paid: '2005-09-04',
                },{
                    particulars: "kevin",
                    amount:12345,
                    or_number: 3,
                    date_paid: '2006-09-04',
                },{
                    particulars: "mark",
                    amount:1233,
                    or_number: 1,
                    date_paid: '2007-09-04',
                },{
                    particulars: "JP",
                    amount:1234,
                    or_number: 1,
                    date_paid: '2008-09-04',
                },{
                    particulars: "kenneth",
                    amount:1234,
                    or_number: 1,
                    date_paid: '2009-09-04',
                },{
                    particulars: "Paul",
                    amount:1234,
                    or_number: 1,
                    date_paid: '2010-09-04',
                },
            ]
        }
    }
}
</script>