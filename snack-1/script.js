/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/






const { createApp } = Vue ; 

createApp({
    data (){
        return{
            numbersEven : [

            ],

            numbersOdd :[

             ],

        }
    },

    methods :{

      generatorNumber(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then((result) => {
          const num = result.data.response;
          if(num % 2 === 0){
            this.numbersEven.push(num);
          } else {
            this.numbersOdd.push(num);
          }
        })
        
   

            
    },
    
    created(){

      
    
    },


}}).mount('#app')
