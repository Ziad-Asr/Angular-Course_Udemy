import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// ### Change detection in (( Zone.js )) ### => Zone.js is a wrapper that wraps the whole app.
// By default anugular uses ( zone.js ) library, which handle the change detection in the whole angular project. ( when 1-event 2-change  happens )
// this zone.js library ( looks in {{ all }} components, when a ( 1-change 2-event ) made {{ in any }} component in the app and check { 1-string interpullations 2-Template bindings }. )
// المكتبة دي بتبص علي كل المشروع تاني جزء جزء لو حصل تغيير بس في اي مكان
// And off course that will leed to (performance issues) in complex apps.
// note: the change made ((( twice ))) in dev and ((( once ))) in production.
// (if there is a console.log() will print twice in dev mode and only one in production)

// ######################
// ### Optimization 1 ###
// ######################
// Avoid using complext functions in (Template bindings), because that will lead to be reexcuted where any change happens in any where in the app.
// not good (avoid doing this) ex:-  in (ts file):[[ get debugOutput(){... complex logic} ]], in (html file): [[ <p>{{ debugOutput }}</p> ]]
// If you avoided the latest code is a kind of (optimisation)
// That is why (pips) are cashed by default, because pips are functions and using complix logic functions in the template will lead performance issues due to reexcution with every change in events or variable.

// ######################
// ### Optimization 2 ###
// ######################
// By using in (ts file): [ private zone = inject(NgZone); this.zone.runOutsideAngular(() => {})] =====> here change detection is not trigered for this (event)
// if I wrapped any function with this code, this will make this fuction does not reexcuted with every change in the app. (will only reecuted if 1)one of it's variables changed 2)function called )

// ######################
// ### Optimization 3 ###
// ######################
// By using in (ts file): [ changeDetection: ChangeDetectionStrategy.OnPush ]
// Will only (check for changes) if a change or event happens in it's ((( sub tree )))
// ex;- (parent componet) contains ( 2 child components ) if I put [ changeDetection: ChangeDetectionStrategy.OnPus ] in the parent => It will never check for changes unless 1)App init 2)event or change happens in ((( 1-inside this compoent 2-inside one of it's children ))) so then the changes check work for all this subtree (parent + 2 children)
// But if a change made here inside any of these 3 components, the (change detection) will work for (all the app) again.
// Because the role of this solution is to (avoid checking these {{subtree}} unessiserly) but if an action happens inside it (change detection will work normally for all the other components)
// ************** This is not without working properly (normal variables + services), it works will with (signals + services).
// => because if the change detection is disabled because I used that code [ changeDetection: ChangeDetectionStrategy.OnPush ], so if the value changes in the (service) {it does not reflect in the component}, so I should (handel that manually) using {{ RXJS }}
// =>{but signals handels that from its own}.
// when using [ changeDetection: ChangeDetectionStrategy.OnPush ] ====>>>>> 1-(RXJS + normal variables + services) 2- (signals + services)
// (RXJS + normal variables + services) => in RXJs we create an observable in  the service and use .next(new value) on it, and use (async) pipe in the template

//*************** (Not recommended) (V18) I can use sinals in all the app + removing the (zone.js)

// Check whatsapp voices and photos
