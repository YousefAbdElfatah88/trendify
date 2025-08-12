import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aboutus } from "../components/aboutus/aboutus";
import { Contact } from "../components/contact/contact";
import { Home } from "../components/home/home";
import { Navbar } from "../components/navbar/navbar";
import { Products } from "../components/products/products";
import { Services } from "../components/services/services";
import { Footer } from "../components/footer/footer";
import { Recommend } from "../components/recommend/recommend";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Aboutus, Contact, Home, Navbar, Products, Services, Footer, Recommend],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'web';
}
