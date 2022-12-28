/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. 
 */





const { createApp } = Vue ; 

createApp({
    data (){
        return{
          messageUser : ' ',
          activeIndex: 0,
          messages: [
            {
              text: 'ciao buongiorno',
              recevied :  true ,
            },
            {
              text: 'buongiorno a te',
              recevied : false ,
            },
            {
              text: 'auguri di buon natale',
              recevied : true ,
            },
            {
              text: 'auguroni anche a te',
              rrecevied : false ,
            },
            {
              text: 'dai che si vai in ferie',
              recevied : true ,
            },
          ]
        }
    },

    methods :{

     sendMessage(content){
      const messageObj = {
        text: content,
        recevied : false,
      }
      this.messages.push(messageObj);
      this.messageUser = ' ';

      axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then ( (message) => {
              const messageObj = {
                text: message.data.response,
                recevied : true,
              }
                this.messages.push(messageObj)
                
            })

     }

     
      
    },
      created(){
        
        
      
    
    },


}).mount('#app')
