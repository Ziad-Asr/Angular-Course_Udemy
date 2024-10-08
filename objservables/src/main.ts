import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));

  // (Objservables) are not intreduced in angular, but intreduces in (RXJS) library.
  // (Objservable) is an object that [produces and use] (((a stream of data))).