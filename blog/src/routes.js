import { createWebHistory, createRouter } from "vue-router"
import AboutUs from './components/AboutUs.vue';
import Customers from './components/Customers.vue';
import Services from './components/Services.vue';

const routes = [
    {   
        name:'AboutUs',
        path:'/',
        component: AboutUs
    },
    {   
        name:'Customers',
        path:'/customers',
        component: Customers
    },
    {   
        name:'Services',
        path:'/services',
        component: Services
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;