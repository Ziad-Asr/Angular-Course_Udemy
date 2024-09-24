import {
  ActivatedRouteSnapshot,
  CanMatchFn,
  RedirectCommand,
  ResolveFn,
  Router,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { inject } from '@angular/core';

import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersService } from './users/users.service';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    // redirectTo: '/users/u1',
    // pathMatch: 'full'
    title: 'No task selected',
  },
  {
    path: 'users/:userId',

    // component: UserTasksComponent,
    loadComponent: () =>
      import('./users/user-tasks/user-tasks.component').then(
        (module) => module.UserTasksComponent
      ),

    // children: userRoutes,
    loadChildren: () =>
      import('./users/users.routes').then((module) => module.routes),

    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
