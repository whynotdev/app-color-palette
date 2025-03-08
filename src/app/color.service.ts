import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  // Function to generate a random hex color
  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to generate a palette of random colors
  generateColorPalette(num: number): string[] {
    const palette: string[] = [];
    for (let i = 0; i < num; i++) {
      palette.push(this.generateRandomColor());
    }
    return palette;
  }
}
