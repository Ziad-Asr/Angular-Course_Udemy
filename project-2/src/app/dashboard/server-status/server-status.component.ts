import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  private destroyRef = inject(DestroyRef);

  // I used (effect()) because when I Use signal it does not give a subscription to the (.ts file), so if the signal changes the (.ts file) can not listen to that
  // The (effect()) gives a subsccription to the .ts file to listen the changes of the signal
  // **** Signal outmatically gives a subscription to the template
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('ON INIT');

    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 2000);

    this.destroyRef.onDestroy(() => clearTimeout(interval));
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

  // private interval?: ReturnType<typeof setInterval>;
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
