import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  secondesSub: Subscription = new Subscription;
  salutationSub : Subscription = new Subscription;
  secondes!: number;
  value!: number;
  val;


  constructor() { }

  ngOnInit(): void {
    const salutation = new Observable(observer => {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    });

    const secondesObs = interval(1000);


    // this.salutationSub = salutation.subscribe(
    //   (value) => { console.log("Value :" + value); },
    //   (error) => { console.log("Error :" + error); },
    //   () => { console.log("Completed"); }
    // );

    this.secondesSub = secondesObs.subscribe(
      (val : any) => {
        this.secondes = val;
      });
  }
  ngOnDestroy() {
    this.secondesSub.unsubscribe();
    this.salutationSub.unsubscribe();
  }
}
