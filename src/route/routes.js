const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: () => import('../components/home') },
    { path: '/order', component: () => import('../components/order') },
    { path: '/search', component: () => import('../components/search') },
    { path: '/income', component: () => import('../components/income') },
    { path: '/personal', component: () => import('../components/personal') },
]

export default routes