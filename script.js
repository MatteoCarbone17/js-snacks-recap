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
        for (let i = 1; i <= 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/int')

            .then ( (num) => {
                for (let i = 0; i < 10; i++){
                    if (num % 2 == 0) {
                      this.numbersEven.push(num)
                    } else {
                      this.numbersOdd.push(num)
                    }
                  }
                
            })
        }  
        }
        
    },
    
    created(){

      this.generatorNumber()
    
    },


}).mount('#app')
