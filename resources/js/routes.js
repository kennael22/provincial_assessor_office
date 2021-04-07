const MainContainer = () => import('./components/MainContainer');
const NotFound = () => import('./components/NotFound');
const Login = () => import('./components/general/Login');
const Changelogs = () => import('./components/general/Changelogs');
const About = () => import('./components/general/About');
const GeneralContainer = () => import('./components/general/GeneralContainer');
const AuthContainer = () => import('./components/auth/AuthContainer');
const Dashboard = () => import('./components/auth/Dashboard');
const User = () => import('./components/auth/User');
const LandContainer = () => import('./components/land/LandContainer');

const Land = () => import('./components/land/Land1');
const Detailes = () => import('./components/land/LandDetailes');
const LandTable = () => import('./components/land/LandTable');
const MachineTable = () => import('./components/land/MachineTable');
const BuildingTable = () => import('./components/land/BuildingTable');
const BuildingDetails = () => import('./components/land/BuildingDetails');
const MachineDetails = () => import('./components/land/MachineDetails');

export default {
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound,
            name: 'NotFound'
        },
        {
            path: '/',
            component: MainContainer,
            children: [
                {
                    path: '',
                    redirect: { name: 'Login' },
                    component: GeneralContainer,
                    children: [
                        {
                            path: 'login',
                            component: Login,
                            name: 'Login',

                        },
                        {
                            path: 'changelogs',
                            component: Changelogs,
                            name: 'Changelogs'
                        },
                        {
                            path: 'about',
                            component: About,
                            name: 'About'
                        }
                    ],
                },
                {
                    path: '/',
                    redirect: { name: 'FASS Land' },
                    component: AuthContainer,
                    beforeEnter: (to, from, next) => {
                        axios.get('/api/authenticated').then((response) => {
                            next()
                        }).catch(() => {
                            return next({ name: 'Login'})
                        });
                    },
                    children: [
                        {
                            path: 'land_table',
                            component: LandTable,
                            name: 'FAAS Land',
                        },
                        {
                            path: 'machine_table',
                            component: MachineTable,
                            name: 'FAAS Machine',
                        },
                        {
                            path: 'building_table',
                            component: BuildingTable,
                            name: 'FAAS Building'
                        },
                        {
                            path: 'statistics',
                            component: User,
                            name: 'FAAS Statistics'
                        },
                        {
                            path: 'building_details',
                            component: BuildingDetails,
                            name: 'Building Details'
                        },
                        {
                            path: 'machine_details',
                            component: MachineDetails,
                            name: 'Machine Details'
                        },
                    ]
                },
            ]
        },

    ]
}