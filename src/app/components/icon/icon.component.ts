import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData, icons } from 'lucide-angular';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  private readonly iconMap = icons as Record<string, LucideIconData>;

  @Input() name = '';
  @Input() size = 24;
  @Input() color = 'currentColor';
  @Input() strokeWidth = 1.5;

  get iconData(): LucideIconData | null {
    const normalizedName = this.toPascalCase(this.name);
    return this.iconMap[normalizedName] ?? null;
  }

  private toPascalCase(value: string): string {
    return value
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
      .join('');
  }
}
