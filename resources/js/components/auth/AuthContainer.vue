<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list>
                <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                nav
                dense
            >
                <v-list-group
                    :value="listHighlight"
                    prepend-icon="mdi-database"
                >
                    <template v-slot:activator>
                    <v-list-item-title>Faas</v-list-item-title>
                    </template>
                    <v-list-item
                        v-for="([title, icon, to], i) in faas"
                        :key="i"
                        :to="{name:to}"
                        @click="$store.dispatch('updateTitle', to);listHighlight=true"
                        link
                        style="text-decoration:none;"
                    >
                        <v-list-item-title v-text="title"></v-list-item-title>
                        <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                <v-list-item-group
                    :value="$router.currentRoute.name == 'FAAS Statistics'"
                    color="primary"
                >
                <v-list-item
                    v-for="([title, icon, to], i) in statistics"
                    :key="i"
                    :to="{ name : to }"
                    @click="$store.dispatch('updateTitle', to);listHighlight=false"
                    link
                    style="text-decoration:none;"
                >
                    <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="title"></v-list-item-title>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer">
            </v-app-bar-nav-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="text-center d-flex align-center justify-space-around">
                <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                     <v-btn
                     icon
                     color="primary"
                     dark
                     v-bind="attrs"
                     v-on="on"
                     @click="logout">
                    <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </template>
                <span>Logout</span>
                </v-tooltip>
            </div>
        </v-app-bar>
        <v-main>
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        selectedItem: 0,
        faas: [
            ['Land', 'mdi-account-multiple-outline', 'FAAS Land'],
            ['Building', 'mdi-cog-outline', 'FAAS Building'],
            ['Machine','mdi-plus-outline', 'FAAS Machine'],
        ],
        statistics: [
            ['statistics', 'mdi-account-multiple-outline', 'FAAS Statistics'],
        ]
    }),
    computed: {
        title:  {
            get: function() { return this.$store.state.user.app_bar_title },
            set: function(val) { this.$store.dispatch('updateTitle', val) }
        },
        listHighlight:{
            get: function() { 
                return this.$store.state.user.user_active_menu;
            },
            set: function(val) {
                this.$store.dispatch('updateMenu', val)
            }
        }
    },
    mounted(){
        this.title = this.$router.currentRoute.name;
    },
    methods: {
        dashboardPage() {

        },
        logout() {
            axios.post('logout')
            .then(response => {
                // localStorage.clear();
                // sessionStorage.clear();
                if(this.$route.name != 'Login') {
                    this.$router.push({name: 'Login'});
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

}
</script>
