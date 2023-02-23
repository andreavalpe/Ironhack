<template>
  <div class="container my-4">
    <h1 class="text-center">Countries List</h1>
    <div class="row" v-if="countries">
      <div class="col-sm-4">
        <ul class="list-group">
          <RouterLink
            v-for="(country, index) in countries"
            :key="index"
            v-bind:to="`/country/${country.alpha3Code}`"
          >
            <li
              class="list-group-item d-flex flex-column justify-content-center align-items-center"
            >
              <img
                v-bind:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                alt=""
                class="country-flag mb-2"
              />
              <p class="text-center fw-bold">
                {{ country.name.common }}
              </p>
            </li>
          </RouterLink>
        </ul>
      </div>
      <div class="col-sm-8"><RouterView /></div>
    </div>
    <div v-else class="col-12"><Spinner text="Loading Countries..." /></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CountryDetails from "./CountryDetails.vue";
import Spinner from "./Spinner.vue";


const countries = ref(null);


const fetchCountries = async () => {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  const finalResponse = await response.json();
  const sortedCountries = finalResponse.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });
  countries.value = sortedCountries;
};

onMounted(() => {
  fetchCountries;
  console.log(fetchCountries());
  console.log("Hello");
});

</script>

<style scoped>
.country-flag {
  width: 120px;
}
</style>
