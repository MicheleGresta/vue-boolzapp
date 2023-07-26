
const app = Vue.createApp({


  data() {
    return {
      contatti: [
        {
          name: "Michele",
          avatar: "avatar_1",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "avatar_2",
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "avatar_3",
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "avatar_4",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],

      contattoCliccato: null,

      myMessage: "",

        filtro: "",
        
    }
  },

  methods: {
    getAvatarImg(singoloContatto) {
      return `./img/${singoloContatto.avatar}.jpg`
    },
    getAvatarOnClick(contattoCliccato) {
      return `./img/${contattoCliccato.avatar}.jpg`
    },
    onUserClick(singoloContatto) {
      this.contattoCliccato = singoloContatto

    },
    onEnterClick(myMessage) {
      if (myMessage == "") return;

      this.contattoCliccato.messages.push({
        date: "",
        message: this.myMessage,
        status: "sent",
      })
      setTimeout(() => {
        this.$refs.focusMessage.scrollTop =
          this.$refs.focusMessage.scrollHeight
      }, 0),

        this.getIndexOf(this.contattoCliccato)
      this.myMessage = "";
      setTimeout(() => {
        this.rispostaMessaggio(this.contattoCliccato)
      }, 1000)
    
    },
    getLastObjectIndex(numeroMessaggi) {
      const indiceOggetto = this.contattoCliccato.length - 1;
      return indiceOggetto
    },
    getIndexOf(messaggiTotali) {
      const lastIndexArray = messaggiTotali.messages.length - 1;
      console.log(lastIndexArray);
      return lastIndexArray
    },
    rispostaMessaggio(contattoEl) {
      if (contattoEl.messages[this.getIndexOf(this.contattoCliccato)].status === "sent") {
        this.contattoCliccato.messages.push({
          date: "",
          message: "Ok",
          status: "received"
        });
      };
    }, 
    filterList(){
// problemi a capire sto filtro 
      if (this.contatti.name.toLowerCase().includes(this.filtro.toLowerCase())) {
        console.log("cè");
      } else {
        console.log("non cè");
      }
    }
  },
  beforeMount() {
    this.contattoCliccato = this.contatti[0]
  },
}).mount("#app")