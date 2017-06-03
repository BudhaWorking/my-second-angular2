import {Component} from '@angular/core'
import {HomeComponent} from './component/home/home.component'
import {AboutComponent} from './component/about/about.component'
import {SampleComponent} from './sample.component'

@Component({

	selector : 'my-app',
	template: `<div *ngIf="showHeader">
					<h1>This is my second package</h1><br>
					<my-home></my-home>
					<my-about></my-about>
					<sample></sample>
				</div>`	
})

export class AppComponent{
	private showHeader :boolean;
 
 constructor(){
 	//this.showHeader = false;
 	this.showHeader = true;
 }
}