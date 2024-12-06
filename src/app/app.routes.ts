import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { VideoComponent } from './pages/video/video.component';

export const routes: Routes = [

        { path:"", component: HomeComponent},
        { path:"historia", component:HistoriaComponent},
        { path:"video", component:VideoComponent}
];
