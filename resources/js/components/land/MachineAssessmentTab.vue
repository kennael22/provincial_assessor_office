<template>
    <v-card flat>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field
                        outlined
                        dense
                        label="Tax Code"
                        readonly
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field
                        outlined
                        dense
                        label="Effectivity Quarter"
                        readonly
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field
                        outlined
                        dense
                        label="Effectivity Year"
                        readonly
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-simple-table
                    fixed-header
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Use
                        </th>
                        <th class="text-left">
                            Count
                        </th>
                        <th class="text-left">
                            Market Value
                        </th>
                        <th class="text-left">
                            Assessment level
                        </th>
                        <th class="text-left">
                            Assess Value
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in desserts"
                        :key="item.use"
                        >
                        <td>{{ item.use }}</td>
                        <td>{{ item.count }}</td>
                        <td>{{ item.market_value }}</td>
                        <td>{{ item.assessment_lvl }}</td>
                        <td>{{ item.assess_value }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                    </v-col>
                </v-row>
                <v-row align="right" justify="end">
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field
                        outlined
                        dense
                        label="Actual Total"
                        readonly
                        value='370,000.48'
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row align="right" justify="end">
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field
                        outlined
                        dense
                        label="Rounded Total"
                        value="370,000"
                        readonly
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data () {
      return {
        desserts: [
          {
            use: 'Agri',
            count: 7,
            market_value:86752.25,
            assessment_lvl: 0.40,
            assess_value: 35703.43
          },
          {
            use: 'Res',
            count: 1,
            market_value: 12345,
            assessment_lvl: 0.5,
            assess_value:6172.5
          },
        ],
      }
    },
}
</script>