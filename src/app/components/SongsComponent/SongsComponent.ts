import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-songs',
  standalone: true,
  templateUrl: './SongsComponent.html',
  styleUrls: ['./SongsComponent.css'],
  imports: [NgFor,NgIf],
})
export class SongsComponent {
  songs = [
    {
      title: 'Brittle Bones Nicky',
      image: 'assets/brittle-bones-nicky.jpeg',
      lyrics: `Brittle Bones Nicky...`,
    },
    {
      title: 'Brittle Bones Nicky 2',
      image: 'assets/brittle-bones-nicky-2.jpeg',
      lyrics: `Brittle Bones Nicky 2...`,
    },
    {
      title: 'Cats, Dogs & Rats',
      image: 'assets/cats-dogs-rats.jpeg',
      lyrics: `Cats, Dogs & Rats...`,
    },
    {
      title: 'Baggage',
      image: 'assets/baggage.jpeg',
      lyrics: `Baggage...`,
    },
    {
      title: 'Hullabaloo',
      image: 'assets/hullabaloo.jpeg',
      lyrics: `Hullabaloo...`,
    },
  ];

  selectedSong: any = null;

  selectSong(song: any): void {
    this.selectedSong = song || { title: '', lyrics: '' };
  }
  
}
