// const book = {
//     title: 'Ego is enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Pengouin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

const address = ['1299 xyz street','Philadelphia','Pennsylvania','18147'];

const [street,city,state='New York',zip] = address;

console.log(`Yu are in ${city} ${state}`);


const items = ['coffee - hot','$2.00','$2.50','$2.75'];
const [item, ,mediumprice] = items;

console.log(`A medium ${item} costs ${mediumprice}`);

