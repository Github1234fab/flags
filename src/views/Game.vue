<template>
  <div class="container_game">
    <div class="table_board">
      <!-- <h1>Tableau de bord</h1> -->
      <!-- span avec @click pour appeler fonction findUrl pour trouver l'url correspondant au continent. -->
      <div class="themes">
        <span name="continents" class="continent">Europe <input @click="findUrl(0)" type="check" class="continent_button" /></span>
        <span name="continents" class="continent">Amérique <input @click="findUrl(1)" type="check" class="continent_button" /></span>
        <span name="continents" class="continent">Afrique<input @click="findUrl(2)" type="check" class="continent_button"/></span>
        <span name="continents" class="continent">Asie<input @click="findUrl(3)" type="check" class="continent_button"/></span>
        <span name="continents" class="continent">Océanie <input @click="findUrl(4)" type="check" class="continent_button"/></span>
        <span name="continents" class="continent">Monde<input @click="findUrl(5)" type="check" class="continent_button" checked /></span>
      </div>
    </div>
    <div class="container_Gaming_hidden" ref="containerGaming">
      <div class="container_gamer">
        <h3 class="question">À quel pays appartient ce drapeau?</h3>
        <div class="container_div">
          <img :src="countryFlag" alt="Image des drapeaux" class="countryFlag" />
          <div class="container_countries_names" ref="containerQuestionRandom">
            <div @click="reponse" class="countries_names" ref="divRedOne">
              {{ dataNameRandomOne }}
            </div>
            <div @click="reponse" class="countries_names" ref="divRedTwo">
              {{ dataNameRandomTwo }}
            </div>
            <div @click="reponse" class="countries_names" ref="divGreen">
              {{ countryName }}
            </div>
          </div>
          <div ref="suivant" @click="restartGame" class="next">Suivant</div>
        </div>
      </div>
      <div class="container_counter" ref="containerCounter">
        <h3 class="counter_title">Compteur</h3>
        <h3 class="counter">{{ counter }}/10</h3>
         <h3 class="numberOfclick">Réponse n° {{ gamePart }}</h3>
        <p class="resultat" ref="resultat">{{ counter }} points sur 10.</p>
        <button ref="newGame" @click="reload" class="new_game">Rejouer</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      urlA: 'https://restcountries.com/v3.1/subregion/europe',
      urlB: 'https://restcountries.com/v3.1/region/americas',
      urlC: 'https://restcountries.com/v3.1/subregion/africa',
      urlD: 'https://restcountries.com/v3.1/subregion/asia',
      urlE: 'https://restcountries.com/v3.1/region/oceania',
      urlF: 'https://restcountries.com/v3.1/all',
      flag: [],
      countryName: '',
      countryFlag: '',
      dataReponse: '',
      dataNameRandomOne: '',
      dataNameRandomTwo: '',
      isCorrect: false,
      userClicked: false,
      counter: 0,
      gamePart: 0,
      disabledDivs: false,
      urlSelected: ''
    }
  },
  methods: {
    //  récupération des datas.name et data.flag
    oneflag() {
      this.flag.map((el) => {
        const randomIndex = Math.floor(Math.random() * this.flag.length)
        const randomElement = this.flag[randomIndex]
        this.countryName = randomElement.translations.fra.common
        this.countryFlag = randomElement.flags.png
        console.log(this.countryName)
        console.log(this.countryFlag)
      })
    },
    //fonction pour obtenir deux noms aléatoires qui seront associés au vrai nom de drapeau.
    randomNameOne() {
      this.flag.map((el) => {
        const randomIndex = Math.floor(Math.random() * this.flag.length)
        const randomElement = this.flag[randomIndex]
        // const randomElements = this.flag.sort(() => 0.5 - Math.random()).slice(0, 1)
        this.dataNameRandomOne = randomElement.translations.fra.common
        console.log(this.dataNameRandomOne)
      })
    },
    randomNameTwo() {
      this.flag.map((el) => {
        const randomIndex = Math.floor(Math.random() * this.flag.length)
        const randomElement = this.flag[randomIndex]
        // const randomElements = this.flag.sort(() => 0.5 - Math.random()).slice(0, 1)
        this.dataNameRandomTwo = randomElement.translations.fra.common
        console.log(this.dataNameRandomTwo)
      })
    },
    //  comportement des classes suite à la réponse du gamer.
    reponse(event) {
      this.$refs.divGreen.classList.add('correct')
      this.$refs.divRedOne.classList.add('incorrect')
      this.$refs.divRedTwo.classList.add('incorrect')
      if (event.target.textContent == this.countryName) this.counter++
      //incrémenter à chaque clique des trois divs questions pour déterminer le nombre de coups par partie.
      console.log('ok')
      this.gamePart++
      console.log(this.gamePart)
      if (this.gamePart == 10) {
        console.log('Tu as fait une partie en 10')
        this.$refs.divGreen.classList.add('disabled')
        this.$refs.divRedOne.classList.add('disabled')
        this.$refs.divRedTwo.classList.add('disabled')
        this.$refs.resultat.classList.add('resultat_visible')
        this.$refs.newGame.classList.add('new_game_visible')
        this.$refs.containerCounter.classList.add('container_counter_resultat')
        this.$refs.suivant.classList.add('disabled')
      }
    },
    // fonction qui permet d'accéder au coup suivant
    restartGame() {
      this.$refs.divGreen.classList.remove('correct')
      this.$refs.divRedOne.classList.remove('incorrect')
      this.$refs.divRedTwo.classList.remove('incorrect')
      this.oneflag()
      this.randomNameOne()
      this.randomNameTwo()
      this.shuffle()
    },
    //fonction qui recharge une nouvelle partie, en évitant de recharger la page. En, gros, tous les composants sont remis à zéro.
    reload() {
      // this.oneflag()
      // this.randomNameOne()
      // this.randomNameTwo()
      // this.shuffle()
      // this.counter = 0
      // this.$refs.divGreen.classList.remove('correct')
      // this.$refs.divRedOne.classList.remove('incorrect')
      // this.$refs.divRedTwo.classList.remove('incorrect')
      // this.$refs.divGreen.classList.remove('disabled')
      // this.$refs.divRedOne.classList.remove('disabled')
      // this.$refs.divRedTwo.classList.remove('disabled')
      // this.$refs.suivant.classList.remove('disabled')
      // this.$refs.resultat.classList.remove('resultat_visible')
      // this.$refs.newGame.classList.remove('new_game_visible')
      // this.$refs.containerCounter.classList.remove('container_counter_resultat')
      // this.reponse()
      window.location.reload()
    },

//fonction qui permet de mélanger l'ordre des questions de haut en bas.
    shuffle() {
      const parent = this.$refs.containerQuestionRandom
      const elements = parent.children
      for (let i = 0; i < elements.length; i++) {
        parent.appendChild(elements[Math.floor(Math.random() * i)])
      }
    },

//fonction qui permet de choisir l'url en fonction du continent
    findUrl(index) {
      let dataUrl = [this.urlA, this.urlB, this.urlC, this.urlD, this.urlE, this.urlF]
      this.urlSelected = dataUrl[index]
      console.log(this.urlSelected)
      this.fetchData()
      this.$refs.containerGaming.classList.remove('container_Gaming_hidden');
      this.$refs.containerGaming.classList.add('container_Gaming');
    },

// requête avec url en fonction du continent. Comme on appelle la requête grâce à findUrl est ses écouteurs d'évènements sur les spans, on a pas besoin de mounted l'appel à l'API.
    fetchData() {
      axios
        .get(this.urlSelected)
        .then((response) => {
          this.flag = response.data
          console.log(this.flag)
          this.oneflag()
          this.randomNameOne()
          this.randomNameTwo()
          this.quizz()
          this.shuffle()
          this.gamePart()
          this.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  // mounted() {
  //   axios
  //     .get(this.url)
  //     .then((response) => {
  //       this.flag = response.data
  //       console.log(this.flag)
  //       this.oneflag()
  //       this.randomNameOne()
  //       this.randomNameTwo()
  //       this.quizz()
  //       this.shuffle()
  //       this.gamePart()
  //       this.reload()
  //       this.findUrl()
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
}
</script>

<style>
.container_counter {
  height: 200px;
  width: 350px;
  background: linear-gradient(rgb(184, 209, 190), rgb(39, 142, 63));
  box-shadow: 1px 1px 6px 0px rgb(69, 64, 64);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
.container_counter_resultat {
  height: 350px;
  transition: height 0.7s ease-in;
}
.counter {
  font-size: 18px;
  color: rgb(236, 230, 230);
  display: flex;
  justify-content: center;
  border: solid 1px grey;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  width: 60px;
  height: 50px;

}
.counter_title {
  color: rgb(243, 244, 239);
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
}
.container_gamer {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: auto;
  margin-top: 20px;
}
.question {
  font-size: 18px;
}
.game_starter {
  height: 70px;
  width: 70px;
  background-color: rgb(24, 237, 24);
  color: white;
  border: none;
  box-shadow: 1px 1px 6px 0px rgb(69, 64, 64) inset;
}
.countryFlag {
  height: auto;
  width: 350px;
  box-shadow: 1px 1px 6px 0px rgb(69, 64, 64);
  border-radius: 5px;
  margin-bottom: 25px;
  margin-top: 15px;
}
.input {
  border: none;
  box-shadow: 1px 1px 4px 0px rgb(69, 64, 64) inset;
  width: auto;
}
.countries_names {
  color: rgb(1, 1, 72);
  box-shadow: 1px 1px 4px 0px rgb(69, 64, 64) inset;
  background: linear-gradient(rgb(249, 249, 249), rgb(217, 214, 214));
  width: 350px;
  text-align: center;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
}
.correct {
  background: linear-gradient(rgb(152, 253, 0), rgb(18, 200, 5));
  color: rgb(255, 255, 255);
}
.incorrect {
  background: linear-gradient(rgb(236, 43, 43), rgb(231, 36, 36));
  color: white;
}
.clicked-wrong {
  background: linear-gradient(rgb(242, 43, 43), rgb(229, 115, 115));
  color: rgb(255, 255, 255);
}
.container_Gaming {
  height: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  opacity: 1;
  transition: opacity 1.6s ease-in;
}
.container_Gaming_hidden{
  visibility: hidden;
   opacity: 0;
}
.next {
  background-color: rgb(217, 217, 40);
  color: rgb(1, 1, 72);
  box-shadow: 1px 1px 4px 0px rgb(69, 64, 64) inset;
  width: 350px;
  text-align: center;
  padding: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
}
.disabled {
  pointer-events: none;
}
.abled {
  pointer-events: all;
}
.resultat {
  visibility: hidden;
}
.new_game {
  visibility: hidden;
}
.resultat_visible {
  visibility: visible;
  color: rgb(246, 246, 246);
  margin-top: 10px;
  transition: visibility2s ease-in;
  font-size: 28px;
}
.new_game_visible {
  visibility: visible;
  background: linear-gradient( rgb(238, 229, 230), rgb(229, 225, 225));
  color: rgb(3, 3, 3);
  border-radius: 10px;
  box-shadow: 1px 3px 10px 1px rgb(4, 4, 4);
  height: 60px;
  border: none;
  transition: visibility 2s ease-in;
}
.table_board {
  background: linear-gradient(rgb(178, 180, 29), rgb(172, 175, 14));
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 100px;
  margin-top: 10px;
}
.table_board h1 {
  color: white;
  font-size: 18px;
}
.themes {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 220px;
  margin-right: 220px;
}
.continent {
  color: white;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.continent_button{
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
}
.continent_button:hover{
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  background-color: blue;
}
.numberOfclick{
  height: 25px;
  width: 100px;
  color: rgb(0, 0, 0);
  font-size: 14px;
}
</style>
