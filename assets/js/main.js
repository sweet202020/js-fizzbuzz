
/* Consegna: */
//Scrivi un programma che stampi in console i numeri da 1 a 100

for (let i=1; i<=100; i++ ){
   
    if (i % 3==0 && i % 5==0){
        console.log("fizzbuzz");
    } else if (i % 5 ==0 ){
        console.log("buzz")
    } else if (i % 3==0 ){
        console.log("fizz")
    } else{
        console.log(i);
    }
}




// per i multipli di 3 stampi “Fizz” al posto del numero

//per i multipli di 5 stampi “Buzz” al posto del numero.

//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

