import { Component, inject, input, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})

// **********************************
// *** Look at the function below *** (resolveUserName) function
// **********************************
export class UserTasksComponent implements OnInit {
  // ***** First way (Using [resolve] function)
  message = input.required<string>();
  userName_From_ResolveFn = input.required<string>();

  // Another way to accept data from the routes folder
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.activatedRouteSnapshot.data => (this return an [observable] that has the static and resolve data comes from the routes)

    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  // -------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // **** Second way
  // userId = input.required<string>();
  // private usersService = inject(UsersService);

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  // -------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // **** Third way
  // Older way to get dynamic route
  // private activatedRoute = inject(ActivatedRoute);
  // userName_oldWay = '';

  // private distroyRef = inject(DestroyRef);

  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) =>
  //       (this.userName_oldWay =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //           ?.name || ''),
  //   });

  //   this.distroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';

  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};
