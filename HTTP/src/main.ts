import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const req = request.clone({
    headers: request.headers.set('X-DEBUG', 'TESTING'),
  }); // I clone the request and send the modified one in this way, because I can't mutate the origonal request

  console.log('[Outgoing request]');
  console.log(request);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log('[Incoming response]');
          console.log(event.status);
          console.log(event.body);
        }
      },
    })
  );
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));

// { providers: [provideHttpClient()] } => I must add this to the (bootstrapApplication) to avoid (NullInjectorError)

// [[ this.httpClient.get('http://localhost:3000/places', {...}) ]]
// 1) {observe: 'response'} => This retruns the whole response (in next(response) => console.log(response.body?. .....)) => EX:- [ this.httpClient.get('http://localhost:3000/places', {observe: 'response'}) ]]
// 2) {observe: 'events'} => This makes the (next()) runs 2 time 1)when request is sent (return {type: 0}) - 2) when response is come => EX:- [ this.httpClient.get('http://localhost:3000/places', {observe: 'events'}) ]]

// this.httpClient.get(...).pip(catchError((error, obs) => {...}))
// [[ catchError((error, obs) => {...} ]] => this a function offered by RXJS, that 1)gives the occured error 2)the observable return by (get) 3)return a new observable
// Usally I use this with observables to return a (transformed error) which could be catched be (error()). [used only to keeo the logic inside the error() lean]

// There are 3 functions I can apply on observable (inside the [subscribe] method)
// 1) next() {} => run after response not always has status 200, could be anyhting else.
// 2) completed() {}
// 3) error() {}

// ((( Tap() ))) operator
// Tap() is a RXJS oprator that can accept an object of the same function can be used inside (subscribe({})) => [next(), error(), completed(), ...]
// tap({
//   next: (userPlaces) => this.userPlaces.set(userPlaces),
// })

//***** RXJS operators (up till now) => [map() - catchError() - tap()]

// Interceptor => Is a function excuted with every request (get - post - put - delete - patch - ...)
// With interceptor you can manipulate 1-request 2-response
