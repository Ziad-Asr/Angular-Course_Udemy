import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';

import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  private usersService = inject(UsersService);

  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name
  );

  // Older way to get dynamic route
  private activatedRoute = inject(ActivatedRoute);
  userName_oldWay = '';

  private distroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) =>
        (this.userName_oldWay =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || ''),
    });

    this.distroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
