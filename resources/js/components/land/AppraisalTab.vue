<template>
  <v-card outlined>
      <v-card-text>
          <v-simple-table
            fixed-header
            height="300px"
            >
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Particulars
                </th>
                <th class="text-left">
                    Amount
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        <br>
        <v-row>
            <v-col
                cols="12" sm="12" md="12" align="right">
                <v-btn
                    color="success"
                    width="150"
                    >
                    <v-icon left>
                        mdi-pencil
                    </v-icon>
                    Edit
                </v-btn>
                <v-btn  color="info"
                    width="150">
                    <v-icon left>
                      mdi-information-variant
                      </v-icon>
                    Compute
                </v-btn>
            </v-col>
        </v-row>
      </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Rating',
            calories: 159,
          },
          {
            name: 'UCost per Square Meter',
            calories: 237,
          },
          {
            name: 'Additional Items',
            calories: 262,
          },
          {
            name: 'Total Construction Cost',
            calories: 305,
          },
          {
            name: 'Deprecation Rate',
            calories: 356,
          },
          {
            name: 'Adjustment',
            calories: 375,
          },
          {
            name: 'Market Value',
            calories: 392,
          },
        ],
      }
    },
  }
</script>