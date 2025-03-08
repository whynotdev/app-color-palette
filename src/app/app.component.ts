import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPaletteComponent } from './color-palette/color-palette.component';

@Component({
  selector: 'app-root',
  imports: [ColorPaletteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-palette-generator';
}
