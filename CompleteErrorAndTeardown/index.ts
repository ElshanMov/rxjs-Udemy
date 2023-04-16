import { Observable } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  console.log('Observable işlədi:');
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete(); //error olduqda  complete işləmir, complete olduqda error işləmir
  }, 5000);
  setTimeout(() => {
    subscriber.error(new Error('Xəta baş verdi'));
  }, 4000);
  //Teradown return ilə ən sonda işləyir
  return () => {
    console.log('Teardown');
  };
});

console.log('Subscriber olmadan əvvəl:');
observable$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err.message),
  complete: () => console.log('Completed'),
});
console.log('Subscriber olduqdan sonra:');
