console.log("hello world!")

// const mainElem = document.getElementById('main')
const blockResultElement = document.getElementById('blockValid')
const blockTableElement = document.getElementById('blockTable')

const tableElem = document.createElement('table')
const theadElem = document.createElement('thead')
const tbodyElem = document.createElement('tbody')
tableElem.appendChild(theadElem)
tableElem.appendChild(tbodyElem)
const resultValidElem = document.createElement('span')
resultValidElem.setAttribute('id', 'result')

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
resultValidElem.textContent = (`${validateBattlefield(doTest)}`)


blockTableElement.appendChild(tableElem)
blockResultElement.appendChild(resultValidElem)