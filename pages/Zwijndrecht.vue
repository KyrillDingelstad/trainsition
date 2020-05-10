<template>
  <page class="index">
    <div class="centreer">
      <div id="landingimgdiv">
        <img src="~/assets/images/fotos/landing.jpg" class="landingimg" alt="praktijk voorpagina achtergrond" />
        <v-icon color="#ffffff" x-large class="scrollicon">mdi-chevron-down-circle</v-icon>
        <img src="~/assets/images/logo.svg" class="landinglogo" alt="verloskundige praktijk logo" />
      </div>      

      <div id="introwrap">
        <div class="introdiv">
          <div class="introtekst">
            <h1>Verloskundige<br>ook in Zwijndrecht</h1><br>
            <p>Ben je zwanger of wil je graag zwanger worden? Een zwangerschap is een bijzondere periode en de geboorte van je kind een intense gebeurtenis. Je hebt ernaar uitgekeken, lang of kort, of misschien kwam je zwangerschap juist heel onverwacht. Is het je eerste, je tweede of je derde…?</p>
            <p>Samen hebben we de afgelopen jaren meer dan 3000 kinderen geboren helpen worden. Toch is elke zwangerschap uniek en heeft elke moeder haar eigen verhaal. Maar altijd heb je in deze periode deskundige begeleiding nodig. Die begeleiding willen wij je graag geven.</p>
            <h3>Woon je in Hendrik Ido Ambacht, Zwijndrecht of omgeving en ben je op zoek naar een verloskundige? Bel of mail ons dan.</h3><br>
            <h3>Sandra Suylen en Ineke Bijloo</h3><br>

            <v-icon small color="#0059a6">call</v-icon> <a href="tel: 0615143416">06 151 434 16</a><br>
            <v-icon small color="#0059a6">mail</v-icon> <router-link to="/contact">info@veiligzwangerambacht.nl</router-link>
          </div>  
          <img class="introfoto" src="~/assets/images/inekesandraintro.jpg" alt="verloskundigen Sandra en Ineke" v-lazy-load/>
        </div>
      </div>

      <div clas="aspectcent">
        <div class="aspectwrapper">
          <v-container class="tileset">
            <v-row justify="center">
              <v-card color="#f5f8fd" flat class=aspecttegel>
                <v-card-actions>
                  <v-col>
                    <div>
                      <v-card-title class=aspecttitle>Echo</v-card-title>
                      <v-card-subtitle>Bij ons in de praktijk maken we zelf de reguliere echo 's.</v-card-subtitle>
                    </div>
                  </v-col>
                  <img class=aspectimg src="~/assets/images/icons/echo.svg" alt="Echo icoon" />
                </v-card-actions>
              </v-card>

              <v-card color="#e6f1fc" flat class=aspecttegel>
                <v-card-actions>
                  <img class=aspectimg src="~/assets/images/icons/dubbelhart.svg" alt="Persoonlijke zorg icoon" />
                  <v-col>
                    <div>
                      <v-card-title class=aspecttitle>Persoonlijk</v-card-title>
                      <v-card-subtitle>Wij werken met twee verloskundigen. Zo zie je tijdens de zwangerschap, bevalling en in het kraambed steeds een bekende en vertrouwde verloskundige.</v-card-subtitle>
                    </div>
                  </v-col>
                </v-card-actions>
              </v-card>

              <v-card color="#EBF2F8" flat class=aspecttegel>
                <v-card-actions>
                  <v-col>
                    <div>
                      <v-card-title class=aspecttitle>Badbevallingen</v-card-title>
                      <v-card-subtitle>In onze praktijk hebben we veel ervaring met bevallen in bad. Wij hebben ook een bevalbad te leen.</v-card-subtitle>
                    </div>
                  </v-col>
                  <img class=aspectimg src="~/assets/images/icons/badbevalling.svg" alt="Badbevalling icoon" />
                </v-card-actions>
              </v-card>

              <v-card color="#e4e9ee" flat class=aspecttegel>
                <v-card-actions>
                  <img class=aspectimg src="~/assets/images/icons/anticonceptie.svg" alt="Spiraal anticonceptie icoon" />
                  <v-col>
                    <div>
                      <v-card-title class=aspecttitle>Anticonceptie</v-card-title>
                      <v-card-subtitle>Je kunt bij ons ook terecht voor het plaatsen van een spiraal en het voorschrijven van andere anticonceptie.</v-card-subtitle>
                    </div>
                  </v-col>
                </v-card-actions>
              </v-card>  

              <v-card color="#F2F6F9" flat class=aspecttegel>
                <v-card-actions>
                  <v-col>
                    <div>
                      <v-card-title class=aspecttitle>Altijd bereikbaar</v-card-title>
                      <v-card-subtitle>Wij zijn 24/7 bereikbaar, je krijgt direct de verloskundige aan de lijn. Ook houden wij ochtend, middag en avondspreekuren, je kunt dus altijd bij ons terecht.</v-card-subtitle>
                    </div>
                  </v-col>
                  <img class=aspectimg src="~/assets/images/icons/bereikbaar.svg" alt="Altijd bereikbaar icoon" />
                </v-card-actions>
              </v-card>

              <v-card color="#e9eff4" flat class=aspecttegel>
                <v-card-actions>
                  <img class=aspectimg src="~/assets/images/icons/infoavond.svg" alt="Informatieavond icoon" />
                  <v-col>
                    <div>
                      <v-card-title class=aspecttitle>Informatieavond</v-card-title>
                      <v-card-subtitle>Wij organiseren gratis informatieavonden over bevallen. Waar we het over hebben wordt afgestemd op zwangeren en hun partners bij ons in de praktijk.</v-card-subtitle>
                    </div>
                  </v-col>
                </v-card-actions>
              </v-card>               
            </v-row>
          </v-container>
        </div>
      </div>

      <v-carousel :continuous="false" cycle interval=10000 :show-arrows="false" hide-delimiter-background height="300" class=carousel>
        <v-carousel-item v-for="(slide, i) in carousellist" :key="i">
          <v-sheet color="#EBF2F8" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div><p class=carouselp>{{ slide }}</p></div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <div class="profieldiv">
        <div class="profielding">
          <router-link to="/verloskundige"><img class="profieldingfoto" aria-label="Link naar verloskundige profielen pagina" src="~/assets/images/portretsandra2.png" alt="verloskundige Sandra profielfoto" v-lazy-load/></router-link>
          <p class="profieltekst">Sandra</p>
        </div>
        <div class="profielding">
          <router-link to="/verloskundige"><img class="profieldingfoto" aria-label="Link naar verloskundige profielen pagina" src="~/assets/images/portretineke2.png" alt="verloskundige Ineke profielfoto" v-lazy-load/></router-link>
          <p class="profieltekst">Ineke</p>
        </div>
      </div>
    </div>

    <page-footer />

  </page>
</template>


<script>
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import PageFooter from '@/components/Footer.vue'

export default {
  name: 'home',  
  head: {
    title: 'Verloskundige Praktijk - Veilig Zwanger Ambacht - Hendrik Ido Ambacht',
      meta: [
        { hid: 'description', name: 'description', content: 'Veilig Zwanger Ambacht is een Verloskundige Praktijk in Hendrik Ido Ambacht, je kunt bij ons ook terecht voor een echo of het plaatsen van een spiraal.' }
      ],
    },
  components: {
    Page,
    Modal,
    PageFooter
  },
  data () {
    return {
      isModalPrivacyVisible: false,
      isModalKlachtenVisible: false,
      carousellist: [
        '"Bedankt voor de goede adviezen en ondersteuning. Deze zwangerschap heb ik veel fijner ervaren doordat jullie maar met 2 verloskundigen werken. Steeds een vertrouwd gezicht is heel prettig! Ook waren jullie heel laagdrempelig te bereiken. Geen vraag was te veel. Ik kom zeker bij jullie terug als nummer drie zich aandient."',
        '"Een klein bedankje om je te laten weten hoe blij we met jou zijn geweest tijdens mijn zwangerschap en daarna. Het voelde ontzettend goed en vertrouwd. Heel erg bedankt voor al je goede zorgen in de meeste mooie, maar ook spannende en belangrijkste momenten van ons leven."',
        '"Op de voorkant een persoonlijk bedankje voor de fijne begeleiding tijdens de bevalling! We hebben het als prettig ervaren en kijken er dan ook fijn naar terug! Door jouw persoonlijke begeleiding hebben we ons nooit een nummer gevoeld! Bedankt dat je me ook deze kant van bevallen hebt mogen laten zien."',
        '"We willen je bedanken voor alle goede zorgen tijdens de zwangerschap, bevalling en in het kraambed. We zijn erg blij met jouw begeleiding en je goede adviezen. We kijken zeer tevreden terug op je begeleiding tijdens de thuisbevalling. Het voelde vertrouwd en heel persoonlijk. We hadden van tevoren nooit gedacht dat we thuis zouden bevallen, maar het is het mooiste wat er is."',
        '"Bedankt voor alle goede zorgen en je begeleiding tijdens de zwangerschap, maar vooral tijdens de bevalling! Je was een rots in de branding. Je hebt ons er echt doorheen gesleept."',
      ]
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

<style>

html {
  scroll-behavior: smooth;
}

.centreer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.carousel {
  margin-bottom: 60px;
}

.carouselp {
  padding: 30px;
  width: 40%;
  min-width: 300px;
  font-family: 'Indie Flower', cursive;
  font-size: 1.2em;
  color: black;
  margin: auto;
}

/* intro stukje */

#introwrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.introdiv {
  width: 60%;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.introtekst {
  text-align: left;
  width: 40%;
  min-width: 250px;
  margin: 5px;
}

.introfoto {
  width: 40%;
  min-width: 250px;
  max-height: 600px;
  object-fit: cover;
  object-position: 43% 50%;
  margin: 5px;
}

/* Landing opmaak */
#landingimgdiv{
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
}

.landingimg{
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.scrollicon {
  z-index: 4;
  bottom: 5%;
  position: absolute;
}

.landinglogo {
  width: 60%;
  max-width: 500px;
  z-index: 5;
  position: absolute;
  display: flex;
  align-self: center;
}

/* Aspect tegel opmaak */
.aspectcent {
  width: 100%;
  display: flex;
  justify-content: center;  
}

.aspectwrapper {
  width: 100%;
  margin-right: 24px;
}

.aspecttegel {
  min-width: 350px;
  max-width: 600px;
  width: 50%;
  text-align: left;
  display: flex;
  align-items: center;
}

.aspectimg {
  max-width: 150px;
  width: 30%;
}

.aspecttitle {
  min-width: 180px;
}

.tileset {
  align-items: center;
  background-color: white;
  background: white;
  margin-bottom: 60px;
  margin-top: 60px;
}

/* profielfotos */

.profieldiv {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.profielding {
  width: 40%;
  min-width: 120px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profieldingfoto {
  width: 90%;
  filter: drop-shadow(1px 3px 5px #8a8a8a);
}

.profieldingfoto:hover {
  transition: all .2s ease-in-out;
  transform: scale(1.05);
  filter: drop-shadow(3px 5px 7px #8a8a8a);
}



.profieltekst {  
  font-family: 'Dancing Script', cursive;
  font-size: 3em;
}

@media only screen and (max-width: 780px) {
.carouselp {
  font-size: 1em;
}

.profieltekst {
  font-size: 2.5em;
}
}

</style>