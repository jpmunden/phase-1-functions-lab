// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return block = Math.abs(42 - block);
}

function distanceFromHqInFeet(block){
    return Math.abs(42 - block)*264;
}

function distanceTravelledInFeet(start, end){
    return Math.abs(end - start)*264;
}

function calculatesFarePrice(start, end){
    const distance = Math.abs(end - start)*264;
    if (distance < 400) {
        return 0
    }    
    else if (distance > 400 && distance <= 2000)  {
        return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500)  {
        return 25;
    }
    else return "cannot travel that far"
}