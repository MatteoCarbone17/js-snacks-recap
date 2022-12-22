/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/






const { createApp } = Vue ; 

createApp({
    data (){
        return{
          
          listName : [

          ],
          nameUser : ' ', 

          userAccess: false,

        }
    },

    methods :{

      checkGuestAccess(nameGuest){
        this.userAccess = this.listName.includes(nameGuest)
        console.log(nameGuest)
      },

      
    },
      created(){
        
        for (let i = 1; i <= 10; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/name')
          
            .then ( (name) => {
                this.listName.push(name.data.response)
                console.log(name.data.response)
            })
        }
      
    
    },


}).mount('#app')
