
let deck = [];
const tipo = ['C','D','H','S'];
const especial = ['A','J','Q','k'];
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

crearDeck();

// Pedir carta
const pedirCarta = ()=>{
    if(deck.length>0){
        let carta = deck.pop();
        console.log(carta);
        console.log(deck);
        return carta;        
    }else{
        throw('No quedan cartas en el deck');
    }
}



//Valor Carta

const valorCarta = (carta)=>{
    let valor = carta.substring(0,carta.length-1);
    console.log(valor);
    if(isNaN(valor)){
        console.log('No es un numero');
        valor = (valor==='A') ?11:10;
    }else{
        console.log('Es un numero');
        valor = valor * 1;
    }
    
    return valor;
}

const valor = valorCarta(pedirCarta());
console.log(valor);