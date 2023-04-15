// function seCal1(aa){
//     let data = aa + 5;
//     console.log(data);
// setInterval(function(){
//        console.log ("hi");
// },5000)
// }
// seCal1()



// --------------
// function sec(val1){
//     setTimeout(function(){
//         console.log("done");
// val1();
//     },3000);
// }
// function foo(){
//     console.log("yes its done");

// }
// sec(foo);

// console.log("hello world");

// ------------------------cal back function------------------
// function runAfter2sec(a){
//     setTimeout(function(){
//         let data = 5 +4;
    
//         a(data);

//     },3000);
// }
// function foo(dataToGet){
//     console.log("yes its done", dataToGet);

// }
// runAfter2sec(foo );

// console.log("hello world");


//     -------------------call back hell


// function runAfter2sec(a,b){
//     setTimeout(function(){
//         let data = 2 +a;
    
//         b(data);

//     },1000);
// }

// runAfter2sec(2, function(abc){
//     runAfter2sec(abc, function(abc1){
//         runAfter2sec(abc1,function(abc2,){
//             runAfter2sec(abc2,function(abc3){
//                 console.log(abc3)
//             });
//         });

//     });

// } );

// console.log("hello world");

// ------------------------------------------------------------
// function runAfter3sec(ab,cd){
//     setTimeout(function(){
//         let a = 10+cd;
//         console.log(a);
// ab(a);
//     },3000)
// };

// function calback(){

//     console.log("hi ")
// };

// runAfter3sec(calback,25);



// -----------------PROMISE-----------------


// function runAfter4sec(val){
//     return new Promise(function(resolve){

//         setTimeout(function(){
//             let data = 5 + val ;
//             resolve(data);
    
//         },1000);
//     });
// };

// runAfter4sec(5)
// .then(function(data){
//     return runAfter4sec(data);
    
// })
// .then(function(data){
//     return runAfter4sec(data)
    
// })
// .then(function(data){
//     return runAfter4sec(data)
// })
// .then(function(data){
//     document.write(data);
// });

//---------------------------------------------async--await------------resolve

// function runAfter1sec(val){
//     return new Promise(function(resolve){

//         setTimeout(function(){
//             let data = 5 + val ;
//             resolve(data);
    
//         },1000);
//     });
// };

// async function foo(){
//     const data= await runAfter1sec(6);
//     const data1= await runAfter1sec(data);
//     const data2= await runAfter1sec(data1);
//     const data3= await runAfter1sec(data2);
//     const data4= await runAfter1sec(data3);
//     return data4;   


// };

// foo().then(function(data4){
//     console.log(data4);

// });


// ----------------------resolve ------reject--------------

// function runAfter1sec(val){
// return new Promise (function(resolve,reject){
//     setTimeout(function(){
//         let data = 4 + val;
//         if (data % 2 === 0){
//         resolve(data)
//         }else {
//             reject("odd number detected");

//         }

//     },1000)
    
// });
// };

// ---------------using .then  method______________
// runAfter1sec(11)
// .then(function(data){
//     return runAfter1sec(data);
// }).catch(function(eror){
//     console.error(eror);

// })


// ---------------using async method______________
// (async function(){
//     try{
//         const data= await runAfter1sec(3);
//     } catch(err){
//         console.error(err);
//     }
// })();






