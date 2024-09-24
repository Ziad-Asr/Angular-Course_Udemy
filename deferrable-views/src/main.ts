import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// This feature comes in modern angular (>16)
// The idea behined this defferable views is that if I have a page with consists of sections but there is a heavy coded section that I don't want to loaded it initialy
// So defferable views here comes to play by (making this section not loaded until I scroll to reach it)
// If I did not scroll to it, it will not be loaded (even if I am in the same page that contains it).

// @defer {
// <app-offer-preview />
// }

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// but also Ican add some (triggers)

// ### viewport
// @defer(on viewport) {
//    ...
// } @placeholder {
//   ...
// }

// The component is not loaded until user scrolls to it's viewport
// placeholder => The placeholder that renders untill the user reach this component

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// ### interact
// @defer(on interact; prefetch on hover) {
//    ...
// } @placeholder {
//   ...
// }

// This component will not be loaded (until I click on the placeholder)
// prefetch on hover => Makes it loaded on hovering

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// <p #greeting>Hello</p>

// @defer(on interact(greeting)) {
//    ...
// } @placeholder {
//   ...
// }

// It will be shown if I click on the (p) here. (#greeting => referance)
