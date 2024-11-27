import { Routes } from '@angular/router';
import { MeanStackComponent } from './pages/mean-stack/mean-stack.component';
import { HomeComponent } from './pages/home/home.component';
import { MernStackComponent } from './pages/mern-stack/mern-stack.component';
import { GraphqlStackComponent } from './pages/graphql-stack/graphql-stack.component';
import { FirebaseStackComponent } from './pages/firebase-stack/firebase-stack.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'mean',component:MeanStackComponent},
    {path:'mern',component:MernStackComponent},
    {path:'graphql',component:GraphqlStackComponent},
    {path:'firebase',component:FirebaseStackComponent},
    {path:'experience',component:ExperienceComponent}
];
