import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// There are 3 options of (building) an angular app

// 1) Single Page Application (SPA):-
// ----------------------------------
// ((npm run build)) => build as a (SPA)
// (Single Page Application) => Has only (1 html file) that holds all the dom of my app
// (Client side only) application
// No need for any (dynamic host server). [no need for (nodjs) or (php) or ....]
// ((Static hosting)) is sufficient  here
// *********** There are problems with (SEO), since it is static.

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// 2) Server side Application (SSR):-
// ----------------------------------
// 1) ( ng add @angular/ssr ) - 2) (npm run build)
// 3) ( npm run server:ssr:routing ) => If I want to run the ssr project (lockly) now
// => [Not recommended] => [Has problem with browser side features like (localStorage) {user (afterNextRender()) to solve, but workfor all cases}]

// It's pages get rendered on the server ((( on demand )))
// (on demand) means that the project pages are not rendered until the user asks to access it.
// (then this page renders on the server and send the finish page to the use)

// Needs a dynamic server(Node.js)
// *********** Works swill (SEO), since it is static.

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// What make (SSR) better in (SEO) than (SPA)
// Is that in SSR when user goes to a page, this page renders and (go to the browser with all it's content)
// But in SPA in intial the html will be empty and then get filled with the content

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// 2) Static site Generation (SSG):- (Not recommended)
// ---------------------------------
// 1) ( ng add @angular/ssr ) - 2) (npm run build)
// 3) watch video number 320 on course

// It is (SSR) + (SPA)
// ***** There are ((some [not all like SSR])) pages that are (prerendered at built time). [not not on demand like SSR]
// Browser recieves the finished page also like SSR but (faster)
// Needs also a (Dynamic server)
// ************ The data is only fetched one time and not get updated till next build.
