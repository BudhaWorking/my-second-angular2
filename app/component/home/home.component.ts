import {Component} from '@angular/core'

@Component({

	moduleId : module.id,   //when i use templateUrl  that time must be include this is pass your html pages
	selector: 'my-home',
	/*template: `<h1>This is my 
				home component</h1>`*/
	templateUrl: './home.component.html'
})

export class HomeComponent{
	 private message : string;
	 constructor(){

	 	this.message = "I am from Home Constructor";
	 }
}