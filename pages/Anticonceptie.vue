<template>
  <page class="anticonceptie">

    <img src="~/assets/images/fotos/AC.jpg" class="pagestarter">

    <div class=pagetitle>
    <h1>ANTICONCEPTIE</h1>
    </div>
        
    <p class=standaardp>Bij ons kan je ook terecht voor voorlichting over anticonceptie en het voorschrijven ervan. We merken dat veel vrouwen het prettig vinden om hiervoor naar ons te komen, voornamelijk vrouwen die ons al kennen vanuit een zwangerschap. 
    Tijdens ons anticonceptiespreekuur geven we je meer informatie over de verschillende anticonceptiemethodes. We bespreken de voor- en nadelen, de werking van het anticonceptiemiddel en we leggen je uit hoe je het middel moet gebruiken. 
    Niet elk anticonceptiemiddel is even geschikt voor iedereen. We bespreken welk anticonceptiemethode het best past bij jouw persoonlijke situatie en schrijven indien gewenst anticonceptie voor.
    </p> 
    <br><br><br><br>
    <p class=standaardp><strong>Spiraal</strong><br>Daarbij kan je bij ons ook terecht voor het plaatsen en het verwijderen van een spiraal. We hebben veel ervaring met zowel de hormoonspiraal (Mirena en Kyleena) als de koperspiraal (T-Safe en Ballerine). 
    Op ons spreekuur laten we de verschillende spiralen zien en leggen we uit hoe de werking van elkaar verschilt. Wanneer je hebt besloten welke spiraal je wilt gebruiken, kan je de spiraal afhalen bij de apotheek en maken we een afspraak voor de plaatsing. 
    Meestal is de spiraal eenvoudig en gemakkelijk te plaatsen. 
    </p>

    <br><br><br><br>    

  
    <page-footer />
  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import PageFooter from '@/components/Footer.vue'

export default {
  name: 'anticonceptie',
  components: {
    Page,
    Modal,
    PageFooter
  },
  data () {
    return {
      isModalPrivacyVisible: false,
      isModalKlachtenVisible: false,
    };
    
  },
  
  methods: {
    showModalPrivacy() {this.isModalPrivacyVisible = true;},
    showModalKlachten() {this.isModalKlachtenVisible = true;},
        
    closeModalPrivacy() {this.isModalPrivacyVisible = false;},
    closeModalKlachten() {this.isModalKlachtenVisible = false;},
  },
};
 
</script>

<style lang="scss" scoped>
  .anticonceptie {
    background: white;
  }

  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
    }
</style>