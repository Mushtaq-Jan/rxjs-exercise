import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, delay, endWith, from, map, of, scan, startWith, Subject, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Muhammed Mushtaq F';
  title = 'Angular RxJS Exercise';

  ngOnInit() {
      console.log('Ex.1 Of Observable Creation');
      of(2,4,6,8).subscribe(item => console.log(item));
      console.log('---------------');

      console.log('Ex.1 From Observable Creation');
      from([12, 24, 36, 48]).subscribe({
        next: (item) => console.log(`Resulting Item.. ${item} `),
        error: (err) => console.log(`Error Occured ${err}`),
        complete: () => console.log(`Over Go Home`)
      });
      console.log('---------------');

      console.log('Ex.1 Of Observable Creation');
      of('Apple1','Apple2','Apple3').subscribe({
        next: (apple) => console.log(`${apple} has emitted `),
        error: (err) => console.log(`${err} has occured`),
        complete: () => console.log(`Khatam - No More Apples`)
      })
      console.log('---------------');

      console.log('Ex.2 Map,Tap and Take RxJSOperators');
      from([1, 2, 3, 4]).pipe(
        tap(item => console.log(`Emitted Items.. ${item}`)),
        map(item => item * 2),
        map(item => item - 8),
        map( item => {
          if(item === 0){
            throw new Error('Zero Detected')
          }
          return item;
        }),
        take(3)
      ).subscribe({
        next: (item) => console.log(`Resulting Item.. ${item} `),
        error: (err) => console.log(`Error Occured ${err}`),
        complete: () => console.log(`Over Go Home`)
      });
      console.log('---------------');

      console.log('Ex.3 catchError Operator');
      of(3,5,8).pipe(
        map(i => {
          if(i === 8) {
            throw 'Error!';
          }
          return i;
        }),
        catchError(err => of('Error Caught : Eight'))
      ).subscribe({
        next: x => console.log(x),
        error: err => console.log(`Error Caught ${err}`)
      });
      console.log('---------------');

      console.log('Ex.4 combineLatest Operator - I');
      const weight = of(70, 72, 76, 79, 75);
      const height = of(1.76, 1.77, 1.78);
      const bmi = combineLatest([weight, height]).pipe(
                   map(([w, h]) => w / (h * h)),
                    );
            bmi.subscribe(x => console.log('BMI is ' + x));
      console.log('---------------');

      console.log('Ex.5 Observable: unicast');
            const numberObserve = of(2,4,6);
            numberObserve.subscribe(x => console.log('A', x))
            numberObserve.subscribe(x => console.log('B', x))
      console.log('---------------');

      console.log('Ex.6 Subject: multicast'); 
      const numberSubject = new Subject<number>();
      numberSubject.subscribe(x => console.log('A', x))
      numberSubject.next(2);
      numberSubject.subscribe(x => console.log('B', x))
      numberSubject.next(4);
      numberSubject.next(6);
      numberSubject.complete();
      console.log('---------------');   
      console.log('Ex.7 Behaviour Subject '); 
      const numberBehaviourSubject = new BehaviorSubject<number>(0);
      numberBehaviourSubject.subscribe(x => console.log('A', x))
      numberBehaviourSubject.next(2);
      numberBehaviourSubject.subscribe(x => console.log('B', x))
      numberBehaviourSubject.next(4);
      numberBehaviourSubject.next(6);
      numberBehaviourSubject.complete();
      console.log('---------------');
      console.log('Ex.8 Scan operator ');
      of(2,5,9)
         .pipe(
           scan((acc,curr) => acc + curr)
         )
         .subscribe(x => console.log(x));
      console.log('---------------'); 
      console.log('Ex.9 Scan operator | Array Example ');
      of(2,5,9)
         .pipe(
           scan((acc,curr) => [...acc, curr] , [] as number[])
         )
         .subscribe(x => console.log(x));
      console.log('---------------');
      console.log('Ex.10 delay startWith - II');
            const observables = [1, 5, 10].map(
              n => of(n).pipe( delay(0), startWith(0)));
            const combined = combineLatest(observables);
            combined.subscribe(value => console.log(value));        
          }
    
}


