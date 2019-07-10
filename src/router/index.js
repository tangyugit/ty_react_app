import Login from '../components/login/login.jsx'
import Err from '../components/error/error.jsx'
import MainPage from '../components/index/index.jsx'

const routes = [
    { path: '/login/:uid', component: Login },
    { path: '/error', component: Err },
    { path: '/index', component: MainPage }
];

export default routes;