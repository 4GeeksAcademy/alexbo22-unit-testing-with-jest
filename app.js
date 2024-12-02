//Función para convertir monedas
//One euro is:

let oneEurols = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
}

//Función para convertir dolares a yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEurols.USD;
    const yenes = euros * oneEurols.JPY;
    return yenes;
}

//Función para convertir euros a dolares
const fromEuroToDollar = (euros) =>{
    return euros * oneEurols.USD;
}

//Función para convertir yenes a pound
const fromYenToPound = (yenes) =>{
    const euros = yenes / oneEurols.JPY;
    const pounds = euros * oneEurols.GBP;
    return pounds;
}

// retornar
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}