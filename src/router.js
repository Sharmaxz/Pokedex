import VueRouter from 'vue-router';
import Home from './components/Home';


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ]
});