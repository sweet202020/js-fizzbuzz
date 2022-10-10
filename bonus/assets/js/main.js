
/* Consegna: */
//Scrivi un programma che stampi in console i numeri da 1 a 100

const ul = document.querySelector("ul.fizzbuzz")
for (let i=1; i<=100; i++ ){
    
    if (i % 3==0 && i % 5==0){
        console.log("fizzbuzz");
        const li = document.createElement('li')
        li.append ("fizzbuzz")
        ul.append (li)
        li.style.backgroundColor= "yellow"
        
        
    } else if (i % 5 ==0 ){
        console.log("buzz")
        const li = document.createElement('li')
        li.append ("buzz")
        ul.append (li)
        li.style.backgroundColor= "green"
    } else if (i % 3==0 ){
        console.log("fizz")
        const li = document.createElement('li')
        li.append ("fizz")
        ul.append (li)
        li.style.backgroundColor= "blue"
    } else{
        console.log(i);
        const li = document.createElement('li')
        li.append (i)
        ul.append (li)
        li.style.backgroundColor= "red"
    }
}





// per i multipli di 3 stampi “Fizz” al posto del numero

//per i multipli di 5 stampi “Buzz” al posto del numero.

//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//BONUS 1:
/* Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare. */




/* BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */
