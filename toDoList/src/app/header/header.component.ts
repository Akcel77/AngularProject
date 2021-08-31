import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  nbPairsSub: Subscription = new Subscription;
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

    const nbPairs = new Observable(observer => {
      let value = 0;
      const interval = setInterval(() => {
        // if(value % 2 === 0) {
          observer.next(value);
          this.secondes = value;
        // }
        value++;
      },1000)
      return () => clearInterval(interval);
    });


    // this.salutationSub = salutation.subscribe(
    //   (value) => { console.log("Value :" + value); },
    //   (error) => { console.log("Error :" + error); },
    //   () => { console.log("Completed"); }
    // );

    this.nbPairsSub = nbPairs.subscribe(
      (val : any) => {
        this.secondes = val;
        console.log("Value :" + val);
      });
  }
  ngOnDestroy() {
    this.nbPairsSub.unsubscribe();
    this.salutationSub.unsubscribe();
  }
}
