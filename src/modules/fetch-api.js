// import fetch from 'isomorphic-fetch'
// require('es6-promise').pollyfill()

 export default function fetchApi(method, url){
     return fetch(url,{
         method,
        
        mode:'cors',
         
         headers:{
             'Accept':'application/json',
             'Content-Type':'application/json',
             'X-Requested-With':'XMLHttpRequest',
         }
         ,credentials:'same-origin'

     }).then((response => 
        {
        console.log(response)
        return response.json()
     }
     ))

 }