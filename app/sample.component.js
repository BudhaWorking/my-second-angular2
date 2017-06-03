"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    function SampleComponent() {
        this.name = "Hi Abhishek you are looking like hero";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.realname = "Abhi";
        //this.showHeader = false;
        this.showHeader = true;
        this.items = ["TV", "Fridge", "AC", "CAR"];
        this.price = 1500;
    }
    SampleComponent.prototype.runMe = function () {
        console.log("hey wait did you click me");
    };
    SampleComponent.prototype.getValues = function (uma) {
        console.log(uma.target.value);
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        selector: 'sample',
        template: "<div class=\"Container\" *ngIf=\"showHeader\">\n\t\t\t\t<h1> This is my sample component</h1>\n\t\t\t\t<br>\n\t\t\t\t  He is {{name | uppercase}} <br>\n\t\t\t\t<img bind-src= \"imageUrl\"/><br>\n\t\t\t\t<button class = \"btn btn-primary\" (click)='runMe()'>\n\t\t\t\tClickMe</button><br><br>\n\t\t\t\tkeyUp:<input  type=\"text\" style=\"width:200px\" class = \"form-control\"\n\t\t\t\t(keyup)='getValues($event)'/>\n\n\t\t\t\tkeyUpenter:<input  type=\"text\" style=\"width:200px\" class = \"form-control\" \n\t\t\t\t(keyup.enter)='getValues($event)'/>\n\n\t\t\t\tngModel:<input  type=\"text\" style=\"width:200px\" class = \"form-control\" \n\t\t\t\t[(ngModel)]=\"realname\"/>\n\n\t\t\t\t{{realname}}<br>\n\n\t\t\t\t<ul *ngFor = \"let item of items\">\n\t\t\t\t\t<li>{{item}}</li>\n\t\t\t\t</ul><br>\n\t\t\t\tDisplay Price : {{price | currency : 'INR' : 'true'}}\n\n\t\t\t\t"
        //<img [src]= "imageUrl"/>
    }),
    __metadata("design:paramtypes", [])
], SampleComponent);
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map