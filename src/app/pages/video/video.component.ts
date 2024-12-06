import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-video',
  standalone: true,
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  imports: [HeaderComponent, FooterComponent,NgFor]
})
export class VideoComponent {
  videos = [
    {
      src: 'assets/Rare Americans - Brittle Bones Nicky 2 (Official Video) - Rare Americans (1080p, h264, youtube).mp4',
      title: 'Rare Americans - Brittle Bones Nicky 2 (Official Video)',
    },
    {
      src: 'assets/Rare Americans - Brittle Bones Nicky 3 (Official Music Video) - Rare Americans (1080p, h264, youtube).mp4',
      title: 'Rare Americans - Brittle Bones Nicky 3 (Official Music Video)',
    },
  ];
}
