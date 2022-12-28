/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */





const { createApp } = Vue ; 

createApp({
    data (){
        return{
          resultSumNumber : ' ',
          numberUser: ' ',
          apiUrl: "https://flynn.boolean.careers/exercises/api/array/integers",
        }
    },

    methods :{

     generatorNumberList(numberItem){
      axios.get(this.apiUrl,{  
        params : {
          min : 1 ,
          max : 100, 
          items : numberItem
        }
      })
            .then ( (result) => {
              const numbers = result.data.response; 
              let sum = 1 ; 
              numbers.forEach(element => {
                sum += element ;
              });
              this.resultSumNumber = sum ; 
            })

     }

     
      
    },
      created(){
        
        
      
    
    },


}).mount('#app')
