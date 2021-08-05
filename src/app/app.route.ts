import { Routes } from '@angular/router'
import { RouteConstants } from './shared/constants/route-constants'

export const AppRoutes: Routes = [
  {
    path: RouteConstants.Home,
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: RouteConstants.Login,
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: `/${RouteConstants.Login}`,
    pathMatch: 'full',
  },
]
