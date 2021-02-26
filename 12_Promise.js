/* console.log('Request Data...')
setTimeout(()=> 
{
    console.log("Prepating Data...")

const backenddata = {
 name:'data',
 port:2000,
 status:'working'
    }   

    setTimeout(() => {
        backenddata.modified = true,
        console.log('data recived', backenddata)
    }, 2000);
},2000)
 */

//  const p = new Promise(function( resolve,reject)
//  {
//      setTimeout(() => {
//         console.log("Prepating Data...")
//         const backenddata = 
//         {
//             name:'data',
//             port:2000,
//             status:'working' 
//         } 
//          resolve(backenddata)
//         },2000)
//  })
//  p.then(backenddata=>  {
//      return new Promise(( resolve,reject)=>
//      {
//         setTimeout(() => 
//         {
//             backenddata.modified = true
//             resolve(backenddata)
//         },2000)
//      })
//     }).then(clientdata => {
//             console.log('Data received', clientdata)
//         })
