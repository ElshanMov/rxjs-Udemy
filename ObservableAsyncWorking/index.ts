import './style.css';

import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  subscriber.next(1);
  setTimeout(() => subscriber.next(2), 2000);
  setTimeout(() => subscriber.next(3), 4000);
});

const observer = {
  next: (value) => console.log(value),
};

const subscription = observable$.subscribe((value) => console.log(value));

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);

// Open the console in the bottom right to see results.
