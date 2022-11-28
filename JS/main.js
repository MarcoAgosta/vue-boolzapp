const {createApp} = Vue;
createApp({
    data(){
        return{
            listaAmici:[{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
                },
                {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
                },
                {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
                },
                {
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
                },
                {
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
                }
                ],
              },
              {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                }
                ],
              },
              ],
            utenteAttivo: 0,

            nuovaStringa: "",

            utenteStringa: ""
        }
    },
    
    methods:{

        indiceUltimoMessaggio: function(utente){
            const lunghezzaMessaggi = utente.messages.length
            const indiceUltimo = lunghezzaMessaggi - 1

            return indiceUltimo
        },

        ultimoMessaggio: function(persona){
            const indiceFinale = this.indiceUltimoMessaggio(persona);

            return persona.messages[indiceFinale].message
        },

        ultimaData: function(persona){
            const indiceFinale = this.indiceUltimoMessaggio(persona);

            return persona.messages[indiceFinale].date
        },

        autoRisposta: function(){
          const today = new Date()
          const nuovaRisposta={
            date: today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            message: "ok",
            status: "received"
          }

          this.listaAmici[this.utenteAttivo].messages.push(nuovaRisposta)
        },

        rendiAttivo: function(indice){
          this.utenteAttivo = indice
        },

        inviaMessaggio: function(){
          const today = new Date();
          const nuovoMessaggio={
            date: today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            message: this.nuovaStringa,
            status: 'sent',
          }

          this.listaAmici[this.utenteAttivo].messages.push(nuovoMessaggio)
          this.nuovaStringa=""

          setTimeout(this.autoRisposta, 1000)
        },

        selezionaUtenti(){
          const stringa = this.utenteStringa
           this.listaAmici.forEach(function(amico){
             if (amico.name.toLowerCase().includes(stringa.toLowerCase())){
               amico.visible=true
             } else {
               amico.visible=false
             }
           });
        }
    }
}).mount('#app')
