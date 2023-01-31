<template>
        <header>
          <nav>
            <img class="ironHackLogo" src="./images/Ironhack_logo.svg" alt="ironhackLogo">
            <img class="burgerMenu" src="./images/Burger_menu.svg" alt="burgerMenu">
          </nav>
        </header>

        <div class="container">
          <section class="vueInfo"> 
            <img src="./images/Vue_logo.svg" alt="vueLogo">
            <h1> Welcome to Vue.js </h1>
            <h3> Become a coding ninja with the fatest-growing JavaScript framework </h3>
            <button> Awesome </button>
          </section>

          <section class="green containerGreen">
            <div>
              <img src="./images/USP-1.svg" alt="Performant">
              <h2> Performant </h2>
              <p> Truly reactive, compiler-optimized rendering system that rarely requires manual optimization. </p>
            </div>

            <div>
              <img src="./images/USP-2.svg" alt="Approachable">
              <h2> Approachable </h2>
              <p> Builds on tip of standard HTML, CSS and JavaScript with intuitive API and world-class documentation. </p>
            </div>
          
            <div>
              <img src="./images/USP-3.svg" alt="Versatile">
              <h2> Versatile </h2>
              <p> A rich, incrementally adoptable ecosystem that scales between a library and a full-features framework. </p>
            </div>
          </section>
        </div>
</template>

<script setup></script>

<style scoped>
.green {
  background-color: #61b687;
 }

nav {
  margin: 2%;
 }

.ironHackLogo {
  float:left;
  width: 5%;
 }

.burgerMenu {
  float:right;
  width:5%;
}

.vueInfo {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2%;
  padding-bottom: 6%;
  margin: 2%;
}

.vueInfo img {
  width: 30%;
  margin: auto;
}

.vueInfo h1, h3 {
  margin: auto;
}

.vueInfo h1 {
font-size: 6em;
}

.vueInfo h3 {
font-size: 3em;
padding: 3% 20%;
}

.vueInfo button {
  background-color: #38495c;
  border-radius: 20px;
  width: 100px;
  padding: 1%;
  margin: auto;
  color: #ffffff;
  font-size: 1em;
}

.containerGreen {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  text-align: center;
  padding: 10% 8%;
}

.containerGreen h2 {
  font-size: 2em;
}

.containerGreen p {
  font-size: 1.5em;
  padding: 0 20%;
}

.containerGreen img {
  width: 32%;
}
</style>
