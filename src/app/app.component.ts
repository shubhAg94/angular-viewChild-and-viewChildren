import { Component, ViewChild, AfterViewInit,ViewChildren, QueryList, ElementRef  } from '@angular/core';
import { HelloComponent } from './hello.component';

import { BaconDirective } from './bacon.directive';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

  extraIngredient: string;

  @ViewChild(BaconDirective)
  set appBacon(directive: BaconDirective) {
    this.extraIngredient = directive.ingredient;
    console.log("Inside property : "+this.extraIngredient);
  };

  @ViewChild('inputText') inputText :ElementRef;

  @ViewChild(HelloComponent) helloChild: HelloComponent;

  @ViewChildren(HelloComponent) helloChildren: QueryList<any>;

  ngAfterViewInit() {
    console.log('Hello ', this.helloChild.name);  

    console.log("Inside ngAfterViewInit : "+this.extraIngredient); // mayo

    this.helloChildren.forEach(helloChild => console.log(helloChild));
  }

  submit(){
    console.log("Template reference : "+this.inputText.nativeElement.value); 
  }
}
