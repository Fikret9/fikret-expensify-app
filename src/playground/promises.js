const promise = new Promise((resolve,reject)=>{
    //long running task
    setTimeout(()=>{
        resolve('This is my resolved data');
    },2500)
  
})
console.log('before')
// registering a a callback
promise.then((data)=>{
    console.log(data);
})
console.log('after')