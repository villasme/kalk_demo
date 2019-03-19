const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: () => import('../components/home') },
    { path: '/personal', component: () => import('../components/personal') }
]

export default routes