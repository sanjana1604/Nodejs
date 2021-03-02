const fetchData=()=>{
  const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Done');
    },1500);
  }) 
  return promise;
};

setTimeout(()=>{
  console.log('Timer is done');
  fetchData().then(done=>{
    console.log(done);
  });
},2000);

console.log('Hello');