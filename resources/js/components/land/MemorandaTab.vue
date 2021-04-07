<template>
    <v-card outlined>
        <v-card-text>
            <v-container>
                <v-form>
                    <v-row>
                        <v-col cols="12" sm="10" md="10">
                            <v-text-field :label=title v-model="memoranda">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2" md="2">
                            <v-btn color="success" large @click="addMemoranda">
                            <v-icon left>
                                mdi-plus
                            </v-icon>
                            Add
                        </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
                <v-card-text>
                    <v-container>
                        <v-list dense>
                            <v-list-item
                                v-for="(item,index) in items"
                                :key="index"
                            >
                                <v-list-item-icon>
                                    <v-icon small>
                                        mdi-checkbox-blank
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.message"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            </v-list>
                    </v-container>
                </v-card-text>
                <v-row align="center" justify="space-around">
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
    props:['title'],
    data(){
        return {
            items: [
            { message: 'Foo' },
            { message: 'Bar' },
            ],
            memoranda:'',
        }
    },
    methods:{
        addMemoranda(){
            this.items.push({message:this.memoranda})
        }
    }
}
</script>