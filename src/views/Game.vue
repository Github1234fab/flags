<template>
  <div class="container_game">
    <div class="table_board">
      <h1>Tableau de bord</h1>
      <div class="themes">
        <span class="continent">Europe <input type="radio" /></span>
        <span class="continent">Asie <input type="radio" /></span>
        <span class="continent">Amérique<input type="radio" /></span>
        <span class="continent">Afrique <input type="radio" /></span>
        <span class="continent">Océanie <input type="radio" /></span>
      </div>
    </div>
<div class="container_Gaming">
    <div class="container_gamer">
      <h3 class="question">À quel pays appartient ce drapeau?</h3>
      <img :src="countryFlag" alt="Image des drapeaux" class="countryFlag" />
      <div class="container_countries_names" ref="containerQuestionRandom">
        <div @click="reponse" class="countries_names" ref="divRedOne">{{ dataNameRandomOne }}</div>
        <div @click="reponse" class="countries_names" ref="divRedTwo">{{ dataNameRandomTwo }}</div>
        <div @click="reponse" class="countries_names" ref="divGreen">{{ countryName }}</div>
      </div>
      <div @click="restartGame" class="countries_names">Suivant</div>
    </div>
    <div class="container_counter">
        <h3 class="counter">{{ counter }}</h3>
      </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      flag: [],
      countryName: '',
      countryFlag: '',
      dataReponse: '',
      dataNameRandomOne: '',
      dataNameRandomTwo: '',
      isCorrect: false,
      userClicked: false,
      counter: 0
    }
  },

  methods: {
    //  récupération des datas.nam et data.flag
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

    //  comportement des classes (chgmt couleur) suite à la réponse du User
    reponse(event) {
      this.$refs.divGreen.classList.add('correct')
      this.$refs.divRedOne.classList.add('incorrect')
      this.$refs.divRedTwo.classList.add('incorrect')
      if (event.target.textContent == this.countryName) this.counter++
    },

    restartGame() {
      // réinitialisation du jeu ici
      this.$refs.divGreen.classList.remove('correct')
      this.$refs.divRedOne.classList.remove('incorrect')
      this.$refs.divRedTwo.classList.remove('incorrect')
      this.oneflag()
      this.randomNameOne()
      this.randomNameTwo()
      this.shuffle()
    },

  shuffle() {
  const parent = this.$refs.containerQuestionRandom
  const elements = parent.children
  for (let i = 0; i < elements.length; i++) {
    parent.appendChild(elements[Math.floor(Math.random() * i)])
  }

  // Trouver le div contenant la bonne réponse et le déplacer à une position aléatoire
  const correctDiv = this.$refs.divGreen
  const randomIndex = Math.floor(Math.random() * elements.length)
  const randomElement = elements[randomIndex]
  parent.insertBefore(correctDiv, randomElement.nextSibling)
}
  },

  mounted() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        this.flag = response.data
        console.log(this.flag)
        this.oneflag()
        this.randomNameOne()
        this.randomNameTwo()
        this.quizz()
        this.shuffle()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
.table_board {
  background: linear-gradient(rgb(178, 180, 29), rgb(172, 175, 14));
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 240px;
  margin-top: 20px;
}
.table_board h1 {
  color: white;
  font-size: 18px;
  margin-top: 20px;
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
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.counter_container {
  height: 50px;
  width: 100%;
  background-color: white;
  border: none;
}
.counter {
  font-size: 18px;
  color: rgb(236, 230, 230);
  text-align: center;
  border: solid 1px grey;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: grey;
  width: 50px;
  height: 60px;
}
.container_gamer {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: auto;
  margin-bottom: 50px;
}
.question {
  margin-top: 70px;
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
  margin-bottom: 45px;
  margin-top: 35px;
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
.countries_names:hover {
  width: 348px;
  background: linear-gradient(rgb(221, 219, 219), rgb(171, 170, 170));
  border-radius: 7px;
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
.container_Gaming{
  display: flex;
align-items: center;
align-content: center;
justify-content: space-evenly;
}
</style>
