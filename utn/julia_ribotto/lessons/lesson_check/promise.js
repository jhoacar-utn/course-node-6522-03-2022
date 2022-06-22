//Promises

//Basic
let p = new Promise ((resolve,reject)=>{
    let a = 1 + 2;

    if (a === 2) {
        resolve("Bien");
    } else {
        reject("Mal");
    }
});

p.then((message)=>{
    console.log("Promise resolved: " + message);
}).catch((message)=>{
    console.log("Promise rejected: " + message)
})


//Advance
let tarea1 = new Promise((resolve,reject)=>{
    resolve("Tarea 1 hecha");
});

let tarea2 = new Promise((resolve,reject)=>{
    resolve("Tarea 2 hecha");
})

let tarea3 = new Promise((resolve,reject)=>{
    resolve("Tarea 3 hecha");
})

Promise.all([
    tarea1,
    tarea2,
    tarea3
]).then((message)=>{
    console.log(message + " // No quedan tareas por hacer");
}).catch(()=>{
    console.log("Aun quedan tareas por hacer");
})

Promise.race([
    tarea1,
    tarea2,
    tarea3
]).then((message)=>{
    console.log(message);
})