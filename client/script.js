//edit your code 
fetch('http://localhost:3000/user?name="Reham"',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
      body:{
        name: 'Hello Reham',
        }

}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


fetch('http://localhost:3000/user',{
    method:'post',
    headers: {
        'Content-Type' : 'application/json' ,
          },
      body:{
        message: 'Hello ',
        name: 'Reham ',
        }
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
