import { Component } from '@angular/core';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { WhoAreTheyComponent } from '../components/WhoAreTheyComponent/WhoAreTheyComponent';
import { AlbumsComponent } from '../components/AlbumsComponent/AlbumsComponent';
import { StoriesComponent } from '../components/StoriesComponent/StoriesComponent';
import { FooterComponent } from '../components/FooterComponent/FooterComponent';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    HeaderComponent,
    WhoAreTheyComponent,
    AlbumsComponent,
    StoriesComponent,
    FooterComponent,
  ],
})
export class HomeComponent {}
