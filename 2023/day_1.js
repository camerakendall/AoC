const cleanedData = require('./day_1_data_clean.js');
const dataArray = cleanedData.data

// ************* PART 1 ******************

const arr = []

for (let i = 0; i < dataArray.length; i+=1){
    let currEl = dataArray[i]
    for (let j = 0; j < currEl.length; j+=1){
        let currChar = currEl[j]
        if (Number(currChar)){
            arr.push(Number(currChar))
            index = j
            break
        }
    }
    for (let j = currEl.length; j => 0; j-=1){
        let currChar = currEl[j]
        if (Number(currChar)){
            arr[arr.length-1] = arr[arr.length-1] * 10
            arr[arr.length-1] += Number(currChar)
            break
        }
    }
 return arr.reduce((acc, cv) => acc + cv)
}