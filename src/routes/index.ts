import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from 'aws-amplify/auth';

const routes = [
  { name: 'root', path: '/', component: () => import('@/views/Dashboard.vue') },
  { name: 'signin', path: '/signin', component: () => import('@/views/Auth/SignIn.vue') },
  { name: 'signup', path: '/signup', component: () => import('@/views/Auth/SignUp.vue') },
  {
    name: 'reset-password',
    path: '/reset-password',
    component: () => import('@/views/Auth/ResetPassword.vue')
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('@/views/AccountSettings.vue')
  },
  {
    name: 'resources',
    path: '/resources',
    component: () => import('@/views/ResourcesView.vue')
  },

  // define a wildcard route to redirect to the login page
  { name: 'NotFound', path: '/:pathMatch(.*)', redirect: { path: '/settings' } }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

router.beforeEach(async (to, from, next) => {
  const userId = await getCurrentUser().catch(() => {
    console.log('User is not authenticated');
  });
  const isAuthenticated = userId !== undefined;
  console.log('isAuthenticated: ', isAuthenticated);
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'signin' &&
    to.name !== 'signup' &&
    to.name !== 'reset-password'
  ) {
    // redirect the user to the login page
    next({ name: 'signin' });
  } else {
    next(); // proceed with the navigation
  }
});
export default router;
