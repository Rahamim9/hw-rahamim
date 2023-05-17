const Wagon = [
    "pencil",
    "pen",
    "Eraser",
    "Sharpner",
    "Cello Tape",
    'Ruller',
    "Calculator",
];

const Pouch = [];
/*
for (let i = 0; i < Wagon.length; i++) {
    const element = Wagon[i];
    // check to see if i have enough money
    buyElement(element);   
    addToPouch(element);
};
*/
/*
for (let i = 0; i < Wagon.length; i++) {
    const element = Wagon[i];
    // check to see if i have enough money
    buyElement(element);   
};for (let i = 0; i < Wagon.length; i++) {
    const element = Wagon[i];
    // check to see if i have enough money   
    addToPouch(element);
};
*/
Wagon.forEach(buyElement);
Wagon.forEach(addToPouch);

console.log(Pouch);


function buyElement(x) {
    console.log(`You just purchased this item: ${x}`);
}

function addToPouch(x) {
    console.log(`Adding ${x} to the pouch`);
}