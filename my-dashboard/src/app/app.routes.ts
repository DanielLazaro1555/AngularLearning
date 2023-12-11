import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'change-detection',
                title: 'Change-detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {
                path: 'control-flow',
                title: 'Control-flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path: 'defer-opcions',
                title: 'Defer-opcions',
                loadComponent: () => import('./dashboard/pages/defer-opcions/defer-opcions.component'),
            },
            {
                path: 'defer-views',
                title: 'Defer-views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            },
            {
                path: 'user/:id',
                title: 'User View',
                loadComponent: () => import('./dashboard/pages/user/user.component'),
            },
            {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./dashboard/pages/users/users.component'),
            },
            {
                path: 'view-transition',
                title: 'View-transition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
            },
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
