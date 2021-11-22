// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

//create helper function that splits strings into an array
//returns new array that joins array into a
 //string

// const splitString = array => {
//   let newArray = array.map(element => element.replace(element[0], element[0].toUpperCase()))
//   return newArray.join(" ")
// }

// //creates function that splits an array of strings into seperate arrays for each letter
// //invoks function above to return title cased Strings.

// const titleCased = () =>{
//   const splitWords = tutorials.map(element => {
//       let splitArray = element.split(" ")
//       return splitString(splitArray)
//     })
//     return splitWords
//   }
 

// console.log(titleCased())



// makes a function that replaces first letter with uppercase
// returns seperated arrays back to string form
// const makeCap = wordsArray => {
//   let titleCap = wordsArray.map(letter => letter.replace(letter[0], letter[0].toUpperCase())) 
//   return titleCap.join(" ")
// }

//creates function that splits an array of strings into seperate arrays for each letter
//invoks function above to return title cased Strings.
// const titleCased = () => {
//   const capString = tutorials.map(title => {
//     let splitWords = title.split(" ")
//     return makeCap(splitWords)
//   })
//   return capString
// }






 

// const titleCased = () => {

//   const result = tutorials.map(title => {
//     // first it's iterating through the array
//     let splitWords = title.split(" ")
//     // split each title in word array
//     return capitalized(splitWords);
//     // as it does that it sends it to the capitalized function
//   })


//   function capitalized(wordArray) {
//     // iterating through each word
//     // as it's doing that it's capilizing the first letter in each word and saves it into capital title
//     // let firstLetter = word[0]

//     let capitalTitle = wordArray.map(word => word.replace(word[0], word[0].toUpperCase()))
//     // joins the capital title array into sentences again
//     return capitalTitle.join(" ")
//   }

//   // the last step is to return the joined result array which has the solution
//   return result;
// }

// console.log(titleCased())


const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function helper (array) {
//   let newArr = array.map(element => element.replace(element[0], element[0].toUpperCase()))
//   return newArr.join(" ")
// }

// function titleCased () {
//   let newArr = tutorials.map(tutorial => {
//     let splitStr = tutorial.split(" ")
//     return helper(splitStr)
//   })
//   return newArr
// }

// console.log(titleCased())

function returnNoE (array) {
  return array.filter(element => element.includes("e"))
}

const noE = returnNoE(tutorials)

function returnNoW () {
  return noE.filter(element => element.includes("w")? false : true)
}



console.log(returnNoE(tutorials))
console.log(returnNoW())