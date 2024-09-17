import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private distroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const svedForm = window.localStorage.getItem('saved-login-form');
      if (svedForm) {
        const loadedFormData = JSON.parse(svedForm);
        const savedEmail = loadedFormData.email;

        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1); // We use dthis here as again this #form is not render in the intialization
      }

      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({ email: value.email })
            ),
        });

      this.distroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  //I used here (afterNextRender) because this (NgForm) is not available from intialization,
  //so if I want to access it should be after the whole render of  the page

  // this.form().valueChanges; => Returns an (observable), that emits a new value each time form changes.

  // .pipe(debounceTime(500)) => Make sure that the (subscription is only triggred after 500ms when user stop typing)
  // If the value changes before 500ms afetr user stops writting so this function start counting again and after 500ms the subscription is triggered

  // Teplate-driven
  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log(enteredEmail);
    console.log(enteredPassword);

    formData.form.reset();
  }
}
