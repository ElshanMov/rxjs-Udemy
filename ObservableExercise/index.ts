import { Observable } from 'rxjs';
const observable$ = new Observable<number>((subscriber) => {
  console.log('Observable işlədi:');
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
  }, 2000);
});

console.log('Subscriber olmadan əvvəl:');
observable$.subscribe((value) => console.log(value));
console.log('Subscriber olduqdan sonra:');
