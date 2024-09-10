import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Directives => are components without templates
// Components => are (dirctives + templates)

// Directives are an enhancement to the component
// ex:- (ngModle) => that add extra functionality to the input field by making it's value be awaird of in the components file (.ts file)
// (ngModule) => is a (built-in diractive)
// We can also (custom directives) for our project
