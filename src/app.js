import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: null,
      selectedCountry: null
    },
    computed: {
      totalPopulation: function(){
        if(this.countries){
          return this.countries.reduce((runningTotal, country)=>runningTotal + country.population, 0);
        }
      }
    },
    mounted(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      }
    }
  })
});
