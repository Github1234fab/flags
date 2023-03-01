<template>
  <div class="header">
  <div class="logo"><i class="fa-solid fa-flag fa-xl"></i></div>
    <h1 class="title_header">FlagsGame</h1>
    <nav>
    <a href="/">Home</a> 
    <a href="/game">Game</a>
    <a href="/europe">Europe</a>
      <a href="/oceanie">oceanie</a>
    
    </nav>
  </div>
</template>
<script></script>
<style>
.header {
  width: 100%;
  height: 90px;
  background-color: rgb(141, 141, 163);
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.title_header {
  color: white;
  font-size: 22px;
}
nav{
width: 200px;
display: flex;
justify-content: space-between;
margin-right: 70px;
}
nav a{
  color: white;
  text-decoration: none;
}
.logo{
  color: white;
  margin-left: 70px;
  animation: logo 4s ease-in-out alternate;
 
}
@keyframes logo {
0% {transform: rotate(0deg);}
20% {transform: rotate(20deg);}
40% {transform: rotate(0deg);}
60% {transform: rotate(30deg);}
80% {transform: rotate(0deg);}
100% {transform: rotate(40deg);}
}
</style>