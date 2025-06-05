import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@nx-design-system-sandbox/ui-library';
import { InputComponent } from '@nx-design-system-sandbox/ui-library';

@Component({
  imports: [RouterModule, ButtonComponent, InputComponent, ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  form = new FormGroup({
    inputText: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
