// import { func } from "prop-types";
function shuffle(array) {
    //copy of our original arrays 
    const _array = array.slice(0);

    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = _array[i];
        _array[i] = _array[randomIndex];
        _array[randomIndex] = temp;
    }
    console.log(_array);
    return _array; 
}
export default function initializeDeck() {
    console.log("initializeDeck")
    let id = 0;
    const cards = [
         'orange', 'orange', 'toys', 'toys', 'trees', 'trees', 
        'three', 'three', 'yellow', 'yellow', 'grape', 'grape', 'floor', 'floor',
        'fox', 'fox'].reduce((acc, type) => {
            acc.push({
                id: id++,
                type
            })
            return acc
        }, []);

    // console.log(cards);

    //Random order cards 
    return shuffle(cards);
}

// const cards = ['dog', 'dog', 'hand', 'hand', 'old ', 'old', 'eat', 'eat',
// 'one', 'one', 'red', 'red', 'books', 'books', 'sky', 'sky', 'apple', 'apple',
// 'door', 'door', 'cat', 'cat', 'foot', 'foot', 'new', 'new', 'sleep', 'sleep',
// 'two', 'two', 'orange', 'orange', 'toys', 'toys', 'trees', 'trees', 'banana',
// 'banana', 'wall', 'wall', 'bird', 'bird', 'face', 'face', 'happy', 'happy',
// 'sit', 'sit', 'three', 'three', 'yellow', 'yellow', 'bed', 'bed', 'roads',
// 'roads', 'grape', 'grape', 'floor', 'floor',
// 'fox', 'fox'];