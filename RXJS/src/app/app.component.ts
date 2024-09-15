import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  // ##################
  // ### Observable ###
  // ##################
  // private destroyRef = inject(DestroyRef);
  // ngOnInit(): void {
  //   const subscription = interval(1000)
  //     .pipe(map((val) => val * 2))
  //     .subscribe({
  //       next: (val) => console.log(val),
  //       complete: () => console.log('Completed'),
  //       error: () => console.log('Error'),
  //     });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // ##############
  // ### Signal ###
  // ##############
  // clickCount = signal(0);
  // constructor() {
  //   effect(() => {
  //     console.log(`Clicked button ${this.clickCount()} times.`);
  //   }); // This effect will always reexcute when ever a signal inside it changes
  // }
  // onClick() {
  //   this.clickCount.update((prevValue) => prevValue + 1);
  // }
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // ############################
  // ### Signal => Observable ###
  // ############################
  // clickCount = signal(0);
  // // 1st way
  // clickCount$ = toObservable(this.clickCount);
  // // 2nd way
  // constructor() {
  //   toObservable(this.clickCount);
  // }
  // private destroyRef = inject(DestroyRef);
  // ngOnInit(): void {
  //   const subscription = this.clickCount$.subscribe({
  //     next: (val) => console.log(`Clicked button ${this.clickCount()} times.`),
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // ############################
  // ### Observable => Signal ###
  // ############################
  interval$ = interval(1000);

  intervalSignal = toSignal(this.interval$, {
    initialValue: 0,
    manualCleanup: true,
  });
}
