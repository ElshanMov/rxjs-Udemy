import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//Cold Observable
const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

ajax$.subscribe((data) => console.log('Sub 1: ' + data.response.name));
ajax$.subscribe((data) => console.log('Sub 2: ' + data.response.name));
ajax$.subscribe((data) => console.log('Sub 3: ' + data.response.name));

//Hot Observable
const btnO = document.querySelector('button#btnO');

const observable$ = new Observable<MouseEvent>((subscriber) => {
  btnO.addEventListener('click', (event) => {
    subscriber.next(event as MouseEvent);
  });
});

observable$.subscribe((event) => {
  console.log('Sub:1 ' + event.type, event.x, event.y);
});

observable$.subscribe((event) => {
  console.log('Sub:2 ' + event.type, event.x, event.y);
});
