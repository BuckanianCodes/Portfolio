import { Routes } from '@angular/router';
import { MeanStackComponent } from './pages/mean-stack/mean-stack.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'mean',component:MeanStackComponent}
];
