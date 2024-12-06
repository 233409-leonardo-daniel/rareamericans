import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './AlbumsComponent.html',
  styleUrls: ['./AlbumsComponent.css'],
  imports: [NgFor],
})
export class AlbumsComponent {

}
