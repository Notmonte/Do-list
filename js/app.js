// const doList = document.getElementById('doList')
// const listItem = document.getElementsByClassName('listItem')


// listArr = [
//     {
//         id: 1,
//         task: 'Sweeping house',
//         qty: 0,
//         item: 'broom',
//     },
//     {
//         id: 2,
//         task: 'Cooking',
//         qty: 0,
//         item: 'stove'
//     },
//     {
//         id: 3,
//         task: 'Washing car',
//         qty: 0,
//         item: 'towel'
//     },
//     {
//         id: 4,
//         task: 'Cleaning clothes',
//         qty: 0,
//         item: 'washing machine'
//     }
// ]

// (function () {
//     document.querySelector('addBtn').addEventListener('click', function () {
//     let input = document.querySelector('textBar');
//     let list = document.querySelector('doList'); 
    
//       let item = document.createElement('li'); // create li node
//       let itemText = document.createTextNode(input.value); // create text node
    
//       item.appendChild(itemText); // append text node to li node
//       list.appendChild(item); // append li node to list
    
//       input.value = ""; // clear input
//     });
// });


// (Source for function)  https://stackoverflow.com/questions/57194215/button-that-creates-a-li-and-adds-user-input-on-it

(function () {
    document.getElementById('add').addEventListener('click', function () {
    let input = document.getElementById('text');
    let list = document.getElementById('list'); 
    
      let item = document.createElement('li'); // create li node
      let itemText = document.createTextNode(input.value); // create text node
    
      item.appendChild(itemText); // append text node to li node
      list.appendChild(item); // append li node to list
    
      input.value = ""; // clear input
      item.addEventListener('click', function () {
        item.style.textDecoration = "line-through"
      })
    });
})();

