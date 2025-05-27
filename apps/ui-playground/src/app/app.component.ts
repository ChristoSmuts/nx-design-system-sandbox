import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@nx-design-system-sandbox/ui-library';
import { InputComponent } from '@nx-design-system-sandbox/ui-library';

@Component({
  imports: [RouterModule, ButtonComponent, InputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
