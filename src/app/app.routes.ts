
import { Routes } from '@angular/router';
import { Services } from '../components/services/services';
import { Products } from '../components/products/products';
import { Aboutus } from '../components/aboutus/aboutus';
import { Contact } from '../components/contact/contact';
import { Home } from '../components/home/home';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
 {path:'home' , component:Home , title:'trendify'},
 {path:'services' , component:Services , title:'services'},
 {path:'products' , component:Products , title:'products'},
 {path:'aboutus' , component:Aboutus , title:'aboutus'},
 {path:'contact' , component:Contact , title:'contact'},
 {path:'**' , redirectTo:'home'  }

];
