<template>
  <page class="nieuws">
    
    <div id="fb-root"></div>
    <img src="~/assets/images/fotos/krant2.jpg" class="pagestarter">   

    <div class=pagetitle>
    <h1>NIEUWS</h1>
    </div>
        <div class="nieuwsflex">
            
              <v-card class="mx-auto" width="50%" min-width="300px" max-width="600px">
                <img src="~/assets/images/fotos/modalvoeding.jpg" width="100%">
                <v-card-title>Test titel</v-card-title>
                <v-card-subtitle style="text-align: left">1,000 miles of wonder</v-card-subtitle>
                <v-spacer></v-spacer><v-btn icon @click="show = !show">lees meer <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>

            
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text style="text-align: left" margin-right="30px">
                      <p> Bij ons kan je ook terecht voor voorlichting over anticonceptie en het voorschrijven ervan. We merken dat veel vrouwen het prettig vinden om hiervoor naar ons te komen, voornamelijk vrouwen die ons al kennen vanuit een zwangerschap. Tijdens ons anticonceptiespreekuur geven we je meer informatie over de verschillende anticonceptiemethodes. We bespreken de voor- en nadelen, de werking van het anticonceptiemiddel en we leggen je uit hoe je het middel moet gebruiken. Niet elk anticonceptiemiddel is even geschikt voor iedereen. We bespreken welk anticonceptiemethode het best past bij jouw persoonlijke situatie en schrijven indien gewenst anticonceptie voor.
                      </p>
                      <p> Daarbij kan je bij ons ook terecht voor het plaatsen en het verwijderen van een spiraal. We hebben veel ervaring met zowel de hormoonspiraal (Mirena en Kyleena) als de koperspiraal (T-Safe en Ballerine). Op ons spreekuur laten we de verschillende spiralen zien en leggen we uit hoe de werking van elkaar verschilt. Wanneer je hebt besloten welke spiraal je wilt gebruiken, kan je de spiraal afhalen bij de apotheek en maken we een afspraak voor de plaatsing. Meestal is de spiraal eenvoudig en gemakkelijk te plaatsen.
                      </p>

                    </v-card-text>

                
                  </div>
                </v-expand-transition>
              </v-card>
            
            
          <div class="fb-page fbdiv" data-href="https://www.facebook.com/veiligzwangerambacht" data-tabs="timeline" data-width="300" data-height="800" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/veiligzwangerambacht" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/veiligzwangerambacht">Verloskundige Praktijk Veilig Zwanger Ambacht</a></blockquote>
          </div>
        </div>
    
    <page-footer />
  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import nieuwstegel from '@/modals/nieuws.js'
import PageFooter from '@/components/Footer.vue'
import VueMarkdown from 'vue-markdown'

export default {
  head () {
    return {
      title: "Nieuws",
      script: [
        { hid: 'stripe', src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0', defer: true }
      ]
    }
  },
  name: 'nieuws',
  components: {
    Page,
    Modal,
    PageFooter,
    VueMarkdown,
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

  data: () => ({
    show: false,
  }),
};

</script>

<style lang="scss" scoped>
  .nieuws {
    background: white;
  }

  .nieuwstegels {
    margin-right: 40px;
  }

  .nieuwsflex {
    display:inline-flex;
    flex-wrap:wrap;
    flex-direction:row;    
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    background: red;
    margin-bottom: 100px;
  }

  .fbdiv {
    padding: 30px;
  }

  .faceframe {
    
    width: 340px;
    height: 500px;
    min-height: 40%;
  }

  .soon {
    margin: 30vh 0;
  }

  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
    }


</style>