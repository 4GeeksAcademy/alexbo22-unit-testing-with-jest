test ("Test Euro To Dollar", function (){
    //importo la función desde app.js
    const {fromEuroToDollar} = require('./app.js');
    
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3,5 euros debe ser (3.5 * 1.07)
    const expectedEuro = 3.5 * 1.07;
    
    // Validación del importe
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("Test Yen to Pound", function (){
    //importo la función desde app.js
    const {fromYenToPound} = require('./app.js');
    
    //Prueba de la función para convertir de Yen a GBP 
    const yenes = fromYenToPound (250);
    
    // Calculo del valor, si 1 yes es 0.87 pounds, entonces 250 yens debe ser ((250/156.5)*0.87)
    const expectedYen = (250 / 156.5) * 0.87;
    
    expect(fromYenToPound(250)).toBe(1.3897763578274762); // Calculo de Yen a libras
})

test ("Test Dollar to Yen", function (){
    //importo la función desde app.js
    const {fromDollarToYen} = require('./app.js');
    
    //Prueba de la función para convertir de dólares a Yen
    const euros = fromDollarToYen(35);
    
    //Calculo del valor, 1 euro = 156,5 yes y 1 dollar = 1.07 euros, entonces 35 dolares de be ser = ((35 / 1.07) * 156.5)
    const expectedDollars = (35 / 1.07) * 156.5;
    
    expect(fromDollarToYen(35)).toBe(5119.158878504672);// Calculo de dolares a yenes
})