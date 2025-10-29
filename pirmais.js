// const animals = ['zivs','kaķis','spāre']
// let text = 'Dzīvnieki, kas sākas uz burtu s ir: ' 

// for (let i = 0; i < animals.length; i = i + 1) {
//     const animalName = animals[i]
//     if (animalName[0] === 's'){
//         text = text + animalName + ' '
//     console.log(animalName);
//     }
// }




// animals.forEach((animalName) => {
//     if (animalName[0] === 's') {
//         text = text + animalName + ' '
//     }
// })
// console.log(text) 



// <button>
//     onClick={() => {
//         console.log("hello world")
//     }}
// </button>


const divideandminusNumbers = (num1, num2, num3) => {
    console.log(num1/num2/num3-num3)
}
divideandminusNumbers(10,2,2)

const returnZero = () => {
    return 0
}

const result = returnZero()

console.log(result)