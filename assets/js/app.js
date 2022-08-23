
let deck = [];
const tipo = ['C','D','H','S'];
const especial = ['A','J','Q','k'];
let puntajes = [0,0];
const divCartas = [document.querySelector('#jugador-cartas'),document.querySelector('#casa-cartas')];    
const puntajeHTML = document.querySelectorAll('small');    
const btnDeal = document.querySelector('#btnDeal');
const btnHold = document.querySelector('#btnHold');
const btnNuevo = document.querySelector('#btnNuevo');

const crearDeck = ()=>{
    for(let t of tipo){
        for (let i = 2; i <= 10; i++){

            deck.push(i+t);

        }        
    }

    for(let t of tipo){
        for(let e of especial){
            
            deck.push(e+t);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}



// Pedir carta
const pedirCarta = ()=>{
    if(deck.length>0){
        let carta = deck.pop();
        console.log(carta);
       
        return carta;        
    }else{
        throw('No quedan cartas en el deck');
    }
}



//Valor Carta

const valorCarta = (carta)=>{
    let valor = carta.substring(0,carta.length-1);
    //console.log(valor);
    if(isNaN(valor)){
       // console.log('No es un numero');
        valor = (valor==='A') ?11:10;
    }else{
       // console.log('Es un numero');
        valor = valor * 1;
    }
    
    return valor;
}

// Añadir una carta
const crearCarta = (carta,position)=>{
   
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cards/${carta}.png`;
    imgCarta.classList.add('carta');
    puntajes[position] += valorCarta(carta);
    puntajeHTML[position].innerText = puntajes[position]; 
    divCartas[position].append(imgCarta);
}


//Eventos

btnDeal.addEventListener('click',()=>{

    crearCarta(pedirCarta(),0);
    if(puntajes[0]>21){
        btnDeal.disabled = true;
        btnHold.disabled = true;
        setTimeout(()=>{
            alert('Perdiste');            
        },50);
    }else if(puntajes[0]===21){
        btnDeal.disabled = true;
        
        console.warn('Ganaste'); 
    }
});

btnHold.addEventListener('click',()=>{
    btnDeal.disabled = true;
    btnHold.disabled = true;
    do{
        crearCarta(pedirCarta(),1);

    }while((puntajes[1]<puntajes[0])&&(puntajes[1]<=21)&&(puntajes[0]<22)); 
    
    setTimeout(()=>{
        
        alert((puntajes[0]==puntajes[1])?'Empate':(puntajes[1]>puntajes[0]&&puntajes[1]<22)?'Perdiste':'Ganaste');
        
    },50);
    
});

btnNuevo.addEventListener('click',()=>{
    // const imgCarta = document.querySelectorAll('img');
    // for(let img of imgCarta){
    //     img.remove();
    // }
    divCartas[0].innerHTML ='';
    divCartas[1].innerHTML ='';
    puntajes = [0,0];
    puntajeHTML[0].innerText = 0;
    puntajeHTML[1].innerText = 0;

    deck = [];
    deck = crearDeck();
    crearCarta(pedirCarta(),0);
    crearCarta(pedirCarta(),0);
    crearCarta(pedirCarta(),1);
    btnDeal.disabled = false;
    btnHold.disabled = false;
});

// Inicio
deck = crearDeck();
crearCarta(pedirCarta(),0);
crearCarta(pedirCarta(),0);
crearCarta(pedirCarta(),1);