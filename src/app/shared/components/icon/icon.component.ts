import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      [attr.width]="size"
      [attr.height]="size"
    >
      <path [attr.d]="iconPath" />
    </svg>
  `,
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconPath: string = ''
  @Input() size: number = 16
}
