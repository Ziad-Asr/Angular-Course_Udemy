import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// Lazy loading is really important to not render the whole project components from the beggining (which makes the initial bundle heavy)

// there are two way to apply (Lazy loading)
// 1) Routing lazy loading
// 2) Defferable views
