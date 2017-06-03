import {Component} from '@angular/core'

@Component({
	selector : 'sample',
	template : `<div class="Container" *ngIf="showHeader">
				<h1> This is my sample component</h1>
				<br>
				  He is {{name | uppercase}} <br>
				<img bind-src= "imageUrl"/><br>
				<button class = "btn btn-primary" (click)='runMe()'>
				ClickMe</button><br><br>
				keyUp:<input  type="text" style="width:200px" class = "form-control"
				(keyup)='getValues($event)'/>

				keyUpenter:<input  type="text" style="width:200px" class = "form-control" 
				(keyup.enter)='getValues($event)'/>

				ngModel:<input  type="text" style="width:200px" class = "form-control" 
				[(ngModel)]="realname"/>

				{{realname}}<br>

				<ul *ngFor = "let item of items">
					<li>{{item}}</li>
				</ul><br>
				Display Price : {{price | currency : 'INR' : 'true'}}

				`
				//<img [src]= "imageUrl"/>
})

export class SampleComponent{

	private name : string ;
	private imageUrl : string;
	private realname : string;
	private showHeader : boolean;
	private items : string[];
	private price : number;

	constructor(){
		this.name ="Hi Abhishek you are looking like hero"
		this.imageUrl = "http://lorempixel.com/400/200"
		this.realname = "Abhi";
		//this.showHeader = false;
		this.showHeader = true;
		this.items = ["TV","Fridge","AC", "CAR"]
		this.price = 1500;
	} 

	runMe(){
		console.log("hey wait did you click me")
	}
	getValues(uma :any){
		console.log(uma.target.value)
	}

}