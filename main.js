var app = new Vue({
    el: '#app',
    data: {
        //3
        arrayEmailRandom: [],
        stampoEmail: false,
        testo: ''
    },
    mounted() {

    },
    created() {

    },
    beforeUpdate() {

    },
    methods: {
        stampa() {
            for (let i = 0; i < 10; i++) {    //metto il ciclo for dentro la funzione e scrivo che voglio fino a 10 email
            this.stampoEmail = true  
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail#`) //vai a questo HTTP 
            .then((response) => {  //tiro fuori i dati dall'API
            console.log(response.data.response, this)
            let emailGenerate = response.data.response
            this.arrayEmailRandom.push(emailGenerate);
            })
            }
        }
    }
})


