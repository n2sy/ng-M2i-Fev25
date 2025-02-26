import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddComponent } from './add/add.component';
import { InfosComponent } from './infos/infos.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { blockGuard } from './block.guard';
import { allowGuard } from './allow.guard';
import { quitterFormGuard } from './quitter-form.guard';
import { denyGuard } from './deny.guard';

export let myRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/accueil/accueil.component').then(
        (m) => m.AccueilComponent
      ), // LAZY LOADING
  },
  {
    path: 'cv',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../app/cv/cv.component').then((m) => m.CvComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('../app/add/add.component').then((m) => m.AddComponent),
        canActivate: [blockGuard],
        canDeactivate: [quitterFormGuard],
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../app/infos/infos.component').then(
                (m) => m.InfosComponent
              ),
          },
          {
            path: 'edit',
            loadComponent: () =>
              import('../app/edit/edit.component').then((m) => m.EditComponent),
            canActivate: [blockGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'servers',
    loadComponent: () =>
      import('../app/manage-servers/manage-servers.component').then(
        (m) => m.ManageServersComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/login/login.component').then((m) => m.LoginComponent),
    canDeactivate: [allowGuard],
    canActivate: [denyGuard],
  },
  {
    path: 'react',
    loadComponent: () =>
      import('../app/react-form/react-form.component').then(
        (m) => m.ReactFormComponent
      ),
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('../app/accounts/home-account/home-account.component').then(
        (m) => m.HomeAccountComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('../app/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];

// export let myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   { path: 'cv', component: CvComponent },
//   { path: 'cv/add', component: AddComponent },
//   { path: 'cv/:id', component: InfosComponent },
//   { path: 'cv/:id/edit', component: EditComponent },
//   { path: 'servers', component: ManageServersComponent },
//   { path: 'accounts', component: HomeAccountComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];
