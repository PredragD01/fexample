import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonGlobals} from './commons/globals';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'feexample';
  menus = []
  constructor(private http: HttpClient, private router: Router, private titleService: Title) {
  }

  ngOnInit(): void{
    this.getJSON();
  }

  getJSON(){
    return this.http.get('./assets/data.json').subscribe(data => {
      this.menus = data['menu'];
      CommonGlobals.products = data['products'];
    });
  }

  goToPage(url){
    this.router.navigateByUrl(url.url);
    this.titleService.setTitle(url.name);
  }
}
