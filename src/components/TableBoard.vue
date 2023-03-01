<template>
  <div>
    <div class="table_board">
      <h1>Tableau de bord</h1>
      <div class="themes">
        <span class="continent">Europe <input @click="europeLink" type="radio" /></span>
        <span class="continent">Asie <input @click="asiaLink" type="radio" /></span>
        <span class="continent">Amérique<input @click="americasLink" type="radio" /></span>
        <span  class="continent">Afrique <input @click="africaLink" type="radio" /></span>
        <span class="continent">Océanie <input  @click="oceanieLink" type="radio" /></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  methods: {
    europeLink() {
      this.$router.push({ name: 'Europe' })
      },
      africaLink() {
      this.$router.push({ name: 'Afrique' })
      },
     americasLink() {
      this.$router.push({ name: 'Amerique' })
      },
     asiaLink() {
      this.$router.push({ name: 'Asie' })
      },
     oceanieLink() {
      this.$router.push({ name: 'Oceanie'})
    }
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
