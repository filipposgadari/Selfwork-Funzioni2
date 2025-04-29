function stampaNumeri(N) {
    
    for (let i = 1; i <= N; i++){
        let conteggio;
        
        if (i % 15 === 0) {
            console.log('fizzBuzz');
        } else if(i % 3 === 0){
            console.log('Fizz');
        } else if(i % 5 === 0){
            console.log('Buzz');
        } else {
            conteggio = i;
        }
        console.log(conteggio);
    } 
}
stampaNumeri(20);
        
        
        
    