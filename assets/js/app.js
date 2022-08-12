
let deck = [];
const tipo = ['C','D','H','S'];

const crearDeck = ()=>{
    for( let i = 2; i <= 10; i++){
        for (let t of tipo){

            deck.push(i+tipo);

        }        
    }
    console.log(deck);
}

crearDeck();