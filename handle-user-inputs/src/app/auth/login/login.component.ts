import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

// Buliding a custom validator function
function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMart: true };
}

// Buliding an (asyncValidators)
function emailIsUnique(control: AbstractControl) {
  //*** only for example (not real case)
  if (control.value !== 'test@example.com') {
    return of(null); // Returns an (observable) that emits value of (null)
  }

  return of({ notUnique: true });
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  private distroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [
        Validators.minLength(6),
        Validators.required,
        mustContainQuestionMark,
      ],
    }),
  });

  get emailIsInValid() {
    return (
      this.form.controls.email.dirty &&
      this.form.controls.email.touched &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInValid() {
    return (
      this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.password.invalid
    );
  }

  ngOnInit(): void {
    const savedForm = window.localStorage.getItem('saved-login-form');
    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);

      // this.form.controls.email.setValue(loadedForm.emaail);
      this.form.patchValue({
        email: loadedForm.email,
      });
    }

    const sunscription = this.form.valueChanges
      ?.pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify({ email: value.email })
          );
        },
      });

    this.distroyRef.onDestroy(() => sunscription.unsubscribe());
  } // with each key strock

  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;

    console.log(enteredEmail);
    console.log(enteredPassword);
  }
}
