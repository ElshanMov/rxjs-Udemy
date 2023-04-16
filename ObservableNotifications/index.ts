import { Observable } from 'rxjs';

//Next() => Next ilə Observable'ın tutduğu data-stream'ə data əlavə edə bilirik/value emit etmək.

//Complete() => Data-stream'ə value emit etməyi dayandırmaq isdəyiriksə complete istifadə edə bilərik. Yəni 5 value əlavə etdik və complete etdiksə, complete'dən sonra əlavə olunma baş verməyəcək.

//Error() => Comlete'də olduğu kimi Error'dan sonrada data əlavə olunması baş verməyəcək. Error notificationun çıxması bizim əlimizdə olmaya bilər məsələn HTTP requestlə data çəkmək istəyəndə error olarsa Error() içərisində payload saxlayır və payload içərisində data tutur. Error içərisindəki payload'ın saxladığı data backend'dən gələn errorMessage'lardır.

//Teardown:
// "Teardown" terimi, RxJS gibi Observable tabanlı bir programlama kütüphanesinde, bir aboneliğin veya subscription'ın sona erdirilmesini veya iptal edilmesini ifade eder. Teardown işlemi, bir observer'in Observable'a abone olması sonucu oluşan ilişkinin sonlandırılması ve artık gerekli olmadığı durumlarda kaynakların serbest bırakılması için kullanılır.

// Bir Observable, değerler üretmeye devam edebilir ve hatta sürekli olarak çalışabilir. Bir observer, Observable tarafından üretilen değerleri işledikten sonra abonelikten çıkması gerekebilir. Teardown işlemi, abonelik iptal edildiğinde veya Observable tamamlandığında otomatik olarak gerçekleşir.

// Teardown işlemi, kaynakların serbest bırakılmasını, gereksiz veri trafiğini önlemeyi, hafıza sızıntılarını önlemeyi ve performansı artırmayı sağlar. Örneğin, bir Observable, bir API isteğine abone olmuşsa ve kullanıcı ilgili sayfayı terk ettiğinde, isteğin iptal edilmesi ve kaynakların serbest bırakılması gerekebilir. Bu durumda teardown işlemi, abonelik iptal edilerek veya Observable tamamlandığında gerçekleşir.

// RxJS'te, unsubscribe fonksiyonunu kullanarak bir aboneliği veya subscription'ı iptal edebiliriz. Aynı zamanda, complete veya error fonksiyonları da çağrılarak da bir abonelik tamamlanabilir veya hatalı bir durumda sona erdirilebilir. Teardown işlemi, aboneliklerin düzenli olarak yönetilmesini ve gereksiz kaynak kullanımının önlenmesini sağlar.

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
