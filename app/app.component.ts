import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
 
@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html"
})
 
export class AppComponent{
	public titulo:string = "Restaurantes";
}
