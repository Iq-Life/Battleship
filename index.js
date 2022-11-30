console.log("hello world!")

const mainElem = document.getElementById('main')
const resultElement = document.getElementById('result')
const tableElem = document.createElement('table')
const theadElem = document.createElement('thead')
const tbodyElem = document.createElement('tbody')

const doTest =[
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

for( let i = 0; i < doTest.length; i++){
    const row = document.createElement('tr')
    row.setAttribute('id', `row${i+1}`)

    for(let q = 0; q < doTest[i].length; q++){
        const td = document.createElement('td')
        td.setAttribute('id', `row${i+1}td${q+1}`)
        td.textContent = doTest[i][q]
        row.appendChild(td)
    }

    tbodyElem.appendChild(row)
}

function validateBattlefield(field) {
  return true
}

tableElem.appendChild(theadElem)
tableElem.appendChild(tbodyElem)
mainElem.appendChild(tableElem)

resultElement.textContent = (`${validateBattlefield(doTest)}`)
console.log(mainElem);