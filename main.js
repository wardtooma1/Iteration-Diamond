
/* Christmas tree  */

let iteration = 10;

let counter = iteration;
let stars = '*';
let spaces = ' ';


while (counter > 0){
    let subCounter = 1;
    let spaces = '';

    while(subCounter < counter){
        spaces += ' ';
        subCounter += 1;
    }

    console.log(spaces + stars);
    stars += '**';
    counter -= 1;
}



counter = 1;

while (counter < iteration){
    let subCounter = 1;
    let spaces = '';
    stars = '*';


while (subCounter < iteration - counter){
    stars += '**';
    subCounter += 1;
}

subCounter = 1;
while(subCounter <= counter){
    spaces += ' ';
    subCounter += 1;
}

console.log(spaces + stars);
counter += 1;




}




