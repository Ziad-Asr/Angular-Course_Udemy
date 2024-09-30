import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ counter: counterReducer })],
});

// selector => Get data from the store [this.store.select(...)]
// reducer => Change data in the store [this.store.dispatch(...)]

// (count$: Observable<number>), (num: number), ... => This make an error, there 2 solutions for it 1)add ( | undefined ) 2)give it a value in the contructor
// This makes this variable has a value from the beggining (in constructor) - (or) - Make angular know that it might be (undefined)

// --------------------------------------------------------------------

// EX:-
//------

// count$: Observable<number>;
// constructor(private store: Store<{ counter: number }>) {
//   this.count$ = store.select('counter');
// }

// Here we inject the store (give it the shape of our store in the app => { counter: number })
// Select the value of a reducer be it's key name => store.select('counter')
// That returns an observable

// There are 2 ways of deiling with that observable
// 1) .subsribe()
// 2) ( | async ) => Async pipe

// --------------------------------------------------------------------

// EX:-
//------

// // Action :-
// -------------
// export const increment = createAction(
//     '[Counter] Increment',
//     props<{ value: number }>()
// );

// here we make an action that has 1)unique identifier => '[Counter] Increment' 2)The shape of incoming data => props<{ value: number }>()
// this action (this.increment) has 2 properties 1)( .type ) =>  '[Counter] Increment' 2)( .value [or any name] ) => props<{ value: number }>()

// // Reducer :-
// --------------
// const intitialState = 0;
// export const counterReducer = createReducer(
//     intitialState,
//     on(increment, (state, action) => state + action.value)
// );

// here me make a reducer that acceps 1)intial value 2)function that changes this intial state
// here (action.value) we types (.value) because we named the incoming input (value) there in the action [ props<{ value: number }>()]

// // Component:-
// ---------------
// action: this.store.dispatch(increment({ value: 2 }))
// selection => this.count$ = store.select('counter') - (( + )) - ( | async)

// --------------------------------------------------------------------
