import {Component} from '@angular/core'
import {HomeComponent} from './component/home/home.component'
import {AboutComponent} from './component/about/about.component'

@Component({

	selector : 'my-app',
	template: `<div>
					<h1>This is my second package</h1>
					<my-home></my-home>
					<my-about></my-about>
				</div>`	
})

export class AppComponent{

}