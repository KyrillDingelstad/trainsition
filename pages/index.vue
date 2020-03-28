<template>
  <page class="zwanger">
        <div class=frontpicdiv>
        <img src="~/assets/images/fotos/landing.jpg" class=frontpagepic>
        <img src="~/assets/images/logo.png" class=logopng>
        <img src="~/assets/images/icons/mouse2.png" class=mousepng>
        <!-- <div class="landingbuttons">  
            <router-link to="/contact"><img src="~/assets/images/icons/wphoneicon.png" class=fronticon></router-link> 
            <router-link to="/contact"><img src="~/assets/images/icons/wmailicon.png" class=fronticon></router-link> 
          </div> -->
          
        </div>
        
        <div class=clearfix>
          <img class=fotosamen src="~/assets/images/inekesandrafront.jpg">
          <h2 justify-content="start">Zwanger? Altijd bijzonder</h2><br>
          <p class=introtekst>
            “Ben je zwanger of wil je graag zwanger worden? Een zwangerschap is een bijzondere periode en de geboorte van je kind een intense gebeurtenis. 
            Je hebt ernaar uitgekeken – lang of kort – of misschien kwam je zwangerschap juist heel onverwacht. Is het je eerste, je tweede of je derde…?</p>
          <p class=introtekst>
            Samen hebben we de afgelopen jaren meer dan 3000 kinderen geboren helpen worden. Toch is elke zwangerschap uniek en heeft elke moeder haar eigen verhaal. Maar altijd heb je in deze periode deskundige begeleiding nodig. 
            Die begeleiding willen wij je graag geven.</p>
          <p class=introtekst>
            Woon je in Hendrik Ido Ambacht of omgeving en heb je vragen over zwangerschap, bevalling of kraambed? Bel of mail ons dan.”</p>
          <p class=introtekst>
            <strong>Sandra Suylen en Ineke Bijloo</strong></p>
          <p class=introtekst>
            <strong>Bel:</strong>  06 151 434 16 <br>
            <strong>Mail: </strong> <a href="mailto:info@veiligzwangerambacht.nl">info@veiligzwangerambacht.nl</a></p>
        </div>   

        <div class="p-wrapper">
          
          <div class=carouseldiv>
         
          <v-carousel height="300px" cycle show-arrows-on-hover interval=15000 hide-delimiter-background>
            
            <v-carousel-item z=1>
              <p class=carouselp>"Bedankt voor de goede adviezen en ondersteuning. Deze zwangerschap heb ik veel fijner ervaren doordat jullie maar met 2 verloskundigen werken. 
              Steeds een vertrouwd gezicht is heel prettig! Ook waren jullie heel laagdrempelig te bereiken. Geen vraag was te veel. Ik kom zeker bij jullie terug als nummer drie zich aandient. "</p>
            </v-carousel-item>

            <v-carousel-item>
              <p class=carouselp> "Een klein bedankje om je te laten weten hoe blij we met jou zijn geweest tijdens mijn zwangerschap en daarna. Het voelde ontzettend goed en vertrouwd. 
                Heel erg bedankt voor al je goede zorgen in de meeste mooie, maar ook spannende en belangrijkste momenten van ons leven." </p>
            </v-carousel-item>

            <v-carousel-item>
              <p class=carouselp> "Op de voorkant een persoonlijk bedankje voor de fijne begeleiding tijdens de bevalling! We hebben het als prettig ervaren en kijken er dan ook fijn naar terug! 
                Door jouw persoonlijke begeleiding hebben we ons nooit een nummer gevoeld! Bedankt dat je me ook deze kant van bevallen hebt mogen laten zien."  </p>
            </v-carousel-item>

            <v-carousel-item>
              <p class=carouselp> "We willen je bedanken voor alle goede zorgen tijdens de zwangerschap, bevalling en in het kraambed. We zijn erg blij met jouw begeleiding en je goede adviezen. 
                Je wist ons gerust te stellen en gaf ons al het vertrouwen dat we nodig hadden in deze bijzondere en toch ook spannende periode. We kijken zeer tevreden terug op je begeleiding tijdens de thuisbevalling. 
                Het voelde vertrouwd en heel persoonlijk. We hadden van tevoren nooit gedacht dat we thuis zouden bevallen, maar het is het mooiste wat er is. " </p>
            </v-carousel-item>

            <v-carousel-item>
              <p class=carouselp> "Bedankt voor alle goede zorgen en je begeleiding tijdens de zwangerschap, maar vooral tijdens de bevalling! Je was een rots in de branding. Je hebt ons er echt doorheen gesleept."   </p>
            </v-carousel-item>
          </v-carousel>
         
      </div>

        <div class="profilewrapper">
          <div class=profile>
            <router-link to="/praktijk"><img float="left" src="~/assets/images/portretsandra.png"></router-link>
            <span style="float:left" class=portrettekst>Sandra</span>
          </div>
          <div class=profile>
              <router-link to="/praktijk"><img float="right" src="~/assets/images/portretineke.png"></router-link>
              <span style="float:left" class=portrettekst>Ineke</span>
          </div>
        </div>
        
         
        </div>
    
    <page-footer />    


  

  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import PageFooter from '@/components/Footer.vue'


export default {
  name: 'home',
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

.fotosamen {
  float: right;
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  margin-left: 20px;
}

.clearfix {
  width: 40%;
  min-width: 300px;
  max-width: 800px;
  margin: auto;
  vertical-align: middle; 
  margin-bottom: 60px;
  }

.clearfix::after {
  content: "";
  clear: both;
  display: table;;
}

.profilewrapper {
  display: flex;
  width: 40%;
  margin: auto;
  justify-content: center;
  padding: 3%;

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  a {
    img {
      width: 75%;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16);
      transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
    }

    img:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.16);
    }
  }
  
}

// .landingbuttons {
//  bottom: 5%;
//  right: 5%;
//  position: absolute;
//  z-index: 99;
//  display: flex;
//  flex-direction: row;
//  align-content: center;
// }

// .landingbuttons .fronticon {
//  width: 45px;
//  margin: 15px;
//  transition: ease 0.2s;
//  }

// .landingbuttons .fronticon:hover {
//  transform: scale(1.1);
// }

.carouseldiv {
  width: 100%;
  height: 300px;
  background-color: rgb(235, 242, 248);
  }

.carouselp {
  padding: 30px;
  width: 40%;
  min-width: 300px;
  max-width: 800px;
  font-family: 'Indie Flower', cursive;
  font-size: 20px;
  margin: auto;
}

.logopng {
  align-items: center;
  top: 28%;
  width: 40%;
  align-items: center;
  position: absolute;
  z-index: 2;
}

.frontpicdiv {
  width: 100%;
  height: 100%;
  margin-bottom: 5%;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
  }

.mousepng {
  width: 40px;
  height: 35px;
  bottom: 5%;
  align-items: center;
  position: absolute;
  z-index: 2;
}

.frontpicdiv .frontpagepic {
  z-index: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

/* Teksten */

.portrettekst {
  font-family: 'Dancing Script', cursive;
  font-size: 3em;
}

.introtekst {
  text-align: left;
}

.fucking-p {
  padding: 0 5%;
  height: auto;
  text-align: left;
  align-items: center;
  }

@media only screen and (max-width: 780px) {
  .portrettekst {
  font-size: 2em;
}
}


</style>