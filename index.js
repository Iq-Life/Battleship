console.log("hello world!")

// const mainElem = document.getElementById('main')
const displayElement = document.querySelector('.display')
const blockTableElement = document.querySelector('.blockTable')

const tableElem = document.createElement('table')
const theadElem = document.createElement('thead')
const tbodyElem = document.createElement('tbody')
tableElem.appendChild(theadElem)
tableElem.appendChild(tbodyElem)
const resultValidElem = document.createElement('span')
resultValidElem.setAttribute('id', 'result')

const arr =[
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

for( let i = 0; i < arr.length; i++){
    const row = document.createElement('tr')
    row.setAttribute('id', `row${i+1}`)

    for(let q = 0; q < arr[i].length; q++){
        const td = document.createElement('td')
        td.setAttribute('id', `row${i+1}td${q+1}`)
        if(arr[i][q] === 0){
            td.textContent = '*'
        } else {
            td.textContent = arr[i][q]
        }
        row.appendChild(td)
    }

    tbodyElem.appendChild(row)
}

function validateBattlefield(field) {
    const singleDeck = 4
    const doubleDeck = 3
    const threeDeck = 2
    const fourDeck = 1

    const whileFunc = (array) => {
        let w = 0
        while(array.length > w){
            console.log(array[w])
            w++
        }
    }

    field.forEach((row, index)=> {
        if(row[index] === 1){
            
        }
        
        row.forEach((td, ind) => {
    
            if(td === 1) {
                whileFunc(row)
            } else if(td[ind] === 1) {

            }
        })    
    })

    const totalOccupiedCell = arr.reduce((acc, elem) => {
        return acc += elem.reduce((accum, element) => {
             return accum += element
         }, 0)
     }, 0)
    if(totalOccupiedCell !== 20 ){
        return false
    }
  return true
}
resultValidElem.textContent = (`${validateBattlefield(arr)}`)

console.log('1', 's');

blockTableElement.appendChild(tableElem)
displayElement.appendChild(resultValidElem)