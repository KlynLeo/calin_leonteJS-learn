function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    const sum = document.getElementById("sum");

    let suma = 0;
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        suma = suma + value;
        images.push(`<img src="images/inverted-dice-${value}.png" alt="Dice ${value}" />`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;

    diceImages.innerHTML = images.join(' ');

    sum.textContent = `Suma este ${suma}`;
}
