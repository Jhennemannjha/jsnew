//executada quando um ação e executada
//executa na ordem determinada
//nesse exemplo criamos uma time aleatorio
//para que simulemos a instabilidade da internet
//queremos q f1 execute antes de f2 e assim indiante

//callback executa apos uma ação acontecer
function rand(min = 1000 , max = 3000){
    const num = Math.random()* max - min + min;
    return Math.floor(num);
}


function f1(callback){
    //settimeout determina quanto tempo de espera
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
        //o rand esta criando um numero aleatorio 
        //dizendo quanto tempo vai demorar para o settimeout
    },rand());
}
   
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    },rand());
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    },rand());
}

//pode chamar o callback assim
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Ola Mundo');
        });
    });  
});


//ouuu
f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('Ola Mundo');
}



