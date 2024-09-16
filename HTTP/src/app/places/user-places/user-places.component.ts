import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  error = signal('');

  private placesService = inject(PlacesService);
  private distroyRef = inject(DestroyRef);
  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFetching.set(true);

    const subscription = this.placesService.loadUserPlaces().subscribe({
      // next() is handled in the tap() operator
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.distroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
