import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component'
import {HomeComponent} from './component/home/home.component'
import {AboutComponent} from './component/about/about.component'

@NgModule({

	imports: [BrowserModule,FormsModule],
	declarations: [AppComponent,HomeComponent,AboutComponent],
	bootstrap: [AppComponent]
})

export class AppModule{

}