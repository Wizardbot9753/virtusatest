document.getElementById('btn').addEventListener('click',makeRequest);

// function makeRequest(){
//     console.log('button clicked')
//     config = {
//         method:'get',
//         url:'data.txt'
//     }
//     axios(config).then((res)=>{
//         console.log(res)
//         console.log(res.data)
//     })
// }


// another way shorthand 


// function makeRequest(){
//     console.log('button clicked')
//     axios.get('data.txt').then((res)=>{
//         console.log(res)
//         console.log(res.data)
//     })
// }


//error handling with axios 
//whenever you write a 'then' method after the 'catch' method the error handler 
//it will always execute so remember not to write 'then' method after 'catch' method

// function makeRequest(){
//     console.log('button clicked')
//     config = {
//         method:'get',
//         url:'data.txt'
//     }
//     axios(config).then((res)=>{
//         console.log(res)
//         console.log(res.data)
//     }).catch((error)=>{
//         console.log(error)
//     }).then(()=>{
//         console.log('clean')
//     })
// }


// represent data on the webpage through axios | promise then

// function makeRequest(){
//     console.log('button clicked')
//     axios.get('data.txt').then((res)=>{
//         console.log(res)
//         console.log(res.data)
//         document.getElementById('divdata').innerText=res.data
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// represent data on the webpage through axios | async & await

// async function makeRequest(){
//     console.log('button clicked')
//     const res = await axios.get('data.txt')
//     console.log(res)
//     console.log(res.data)
//     document.getElementById('divdata').innerText=res.data
  
// }

// represent data from json file through axios | promise then

// function makeRequest(){
//     console.log('button clicked')
//     axios('data1.json').then((res)=>{
//         console.log(res)
//         console.log(res.data)
//         console.log(res.data.name)
//         console.log(res.data.roll)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

//represent data on the webpage through axios from json file

function makeRequest(){
    console.log('button clicked')
    axios('data1.json').then((res)=>{
        console.log(res)
        document.getElementById('divdata').innerText=res.data.name
        document.getElementById('divdata1').innerText=res.data.roll
    }).catch((error)=>{
        console.log(error)
    })
}