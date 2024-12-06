import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";

@Component({
  selector: 'app-historia',
  standalone: true,
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent
],
})
export class HistoriaComponent {}
