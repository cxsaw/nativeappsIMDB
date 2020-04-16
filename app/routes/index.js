import Master from "../components/Master";
import Details from "../components/Details";

export default {
    routes: [
        {
            path: '/',
            name: 'master',
            component: Master
        },
        {
            path: '/Task/:taskName',
            name: 'details',
            component: Details,
            props: true
        }
    ]
}