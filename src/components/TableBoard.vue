<template>
  <div>
   
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            africaData: null,
            asiaData: null,
            oceaniaData: null,
            europeData: null,
            americasData: null,
            worldData: null,
        }
    },

    methods: {
        getAfricaData() {
            axios
                .get('https://restcountries.com/v3.1/region/Africa')
                .then((response) => {
                    this.africaData = response.data
                    console.log(this.africaData)
                    // this.oneflag()
                    // this.randomNameOne()
                    // this.randomNameTwo()
                    // this.quizz()
                    // this.shuffle()
                    // this.gamePart()

                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getAsiaData() {
            axios
                .get('https://restcountries.com/v3.1/region/Asia')
                .then((response) => {
                    this.asiaData = response.data
                    console.log(this.asiaData)
                    // this.oneflag()
                    // this.randomNameOne()
                    // this.randomNameTwo()
                    // this.quizz()
                    // this.shuffle()
                    // this.gamePart()

                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getOceaniaData() {
            axios
                .get('https://restcountries.com/v3.1/region/Oceania')
                .then((response) => {
                    this.oceaniaData = response.data
                    console.log(this.oceaniaData)
                    // this.oneflag()
                    // this.randomNameOne()
                    // this.randomNameTwo()
                    // this.quizz()
                    // this.shuffle()
                    // this.gamePart()

                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getAmericasData() {
            axios
                .get('https://restcountries.com/v3.1/region/Americas')
                .then((response) => {
                    this.americasData = response.data
                    console.log(this.americasData)
                    // this.oneflag()
                    // this.randomNameOne()
                    // this.randomNameTwo()
                    // this.quizz()
                    // this.shuffle()
                    // this.gamePart()

                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getEuropeData() {
            axios
                .get('https://restcountries.com/v3.1/region/Europe')
                .then((response) => {
                    this.europeData = response.data
                    console.log(this.europeData)
                    // this.oneflag()
                    // this.randomNameOne()
                    // this.randomNameTwo()
                    // this.quizz()
                    // this.shuffle()
                    // this.gamePart()

                })
                .catch((error) => {
                    console.log(error)
                })
        },


        getWorldData() {
            axios
                .get('https://restcountries.com/v3.1/all')
                .then((response) => {
                    this.worldData = response.data
                    console.log(this.worldData)
                    // this.oneflag()
                    // this.randomNameOne()
                    // this.randomNameTwo()
                    // this.quizz()
                    // this.shuffle()
                    // this.gamePart()

                })
                .catch((error) => {
                    console.log(error)
                })
        },
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
  height: 140px;
  margin-top: 10px;
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
</style>
