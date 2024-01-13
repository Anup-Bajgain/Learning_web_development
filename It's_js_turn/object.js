// let something = 7
// let anything = 8    
// let everything = "everything"

// const nothing = {
//     something: 7,
//     anything : 8,
//     everything: "everything",
//     about: {
//         introduction: "hello there",
//     },
//     doSomething(){
//         console.log("Don't waste your time");
//     }
// }
// nothing.doSomething()
// console.log(nothing.about.introduction)
// nothing.thosething= "empty"
// console.log(nothing)

//Factory function
// function working(smt,ant,evt){
//     return{
//         something: smt,
//         anything : ant,
//         everything: evt,
//         about: {
//             introduction: "hello there",
//         },
//         doSomething(){
//             console.log("Don't waste your time");
//         }
//         }
//     }

//constructor function

function Working(smt, ant,evt){
    this.something=smt,
    this.anything = ant,
    this.everything= evt,
    about= {
        introduction: "hello there",
    },
    this.doSomething=function(){
        console.log("Don't waste your time");
    }
}
const work = new Working(2,3,"anup")
// work.doSomething()

// delete work.doSomething;

// console.log(work.constructor)

//making the constructor function differently   