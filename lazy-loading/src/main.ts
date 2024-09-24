import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// #####################
// ### loadComponent ### (insead of => component: ...)
// #####################

// loadComponent: () =>
//   import('./users/user-tasks/user-tasks.component').then(
//     (module) => module.UserTasksComponent
//   ),

// When I het the route that opens this component, angular make a request that returns (a chunck of data) containing the needed component (then).
// If I import any function from a component, so lazy loading will not work. (Because I accualy import the component to get the function, so lazy loading then will be useless)

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// ####################
// ### loadChildren ### (insead of => children: [...])
// ####################

// loadChildren: () =>
//   import('./users/users.routes').then((module) => module.routes),

// Lazy load all children of a main route

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// ################################
// ### ((Service)) lazy loading ###  (Not recommended)
// ################################

// 1) remove (( providedIn: 'root', )) from the service
// 2) go to users.routes (which is loaded lazely) and provide this service for this routes.
// (So since these routes are loaded lazely so thier provider {the service} will be loaded lazely also)

// *in tasks.service.ts
