import { Component } from '@angular/core';
import { AlbumsComponent } from "../AlbumsComponent/AlbumsComponent";
import { SongsComponent } from "../SongsComponent/SongsComponent";
import { RouterLink } from '@angular/router';
import { StoriesComponent } from "../StoriesComponent/StoriesComponent";

@Component({
  selector: 'app-who-are-they',
  standalone: true,
  templateUrl: './WhoAreTheyComponent.html',
  styleUrls: ['./WhoAreTheyComponent.css'],
  imports: [AlbumsComponent, SongsComponent, RouterLink, StoriesComponent],
})
export class WhoAreTheyComponent {}
