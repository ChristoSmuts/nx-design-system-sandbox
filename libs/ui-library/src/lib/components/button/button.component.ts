import { Component, Input } from "@angular/core";
import { ButtonModule, ButtonSeverity } from "primeng/button";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lib-button",
  standalone: true,
  imports: [ButtonModule, CommonModule],
  template: `
    <p-button
      [type]="type"
      [icon]="icon"
      [iconPos]="iconPos"
      [badge]="badge"
      [label]="label"
      [disabled]="disabled"
      [loading]="loading"
      [loadingIcon]="loadingIcon"
      [raised]="raised"
      [rounded]="rounded"
      [text]="text"
      [severity]="severity"
      [outlined]="outlined"
      [link]="link"
      [tabindex]="tabindex"
      [size]="size"
      [style]="style"
      [styleClass]="styleClass"
      [badgeSeverity]="badgeSeverity"
      [ariaLabel]="ariaLabel"
      [autofocus]="autofocus"
    >
      <ng-content></ng-content>
    </p-button>
  `,
})
export class ButtonComponent {
  @Input() type = "button";
  @Input() iconPos: "left" | "right" | "top" | "bottom" = "left";
  @Input() icon?: string;
  @Input() badge?: string;
  @Input() label?: string;
  @Input() disabled?: boolean;
  @Input() loading?: boolean;
  @Input() loadingIcon?: string;
  @Input() raised?: boolean;
  @Input() rounded?: boolean;
  @Input() text?: boolean;
  @Input() severity?: ButtonSeverity;
  @Input() outlined?: boolean;
  @Input() link?: boolean;
  @Input() tabindex?: number;
  @Input() size?: "small" | "large";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() style?: { [klass: string]: any } | null; // (PrimeNG Component expects 'any')
  @Input() styleClass?: string;
  @Input() badgeSeverity:
    | "success"
    | "info"
    | "warn"
    | "danger"
    | "help"
    | "primary"
    | "secondary"
    | "contrast"
    | null
    | undefined;
  @Input() ariaLabel?: string;
  @Input() autofocus?: boolean;
}