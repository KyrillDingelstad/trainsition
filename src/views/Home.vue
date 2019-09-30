<template>
  <page class="zwanger">
        <div class=frontpicdiv>
        <img src="../../public/images/fotos/landing.jpg" class=frontpagepic>
        <img src="../../public/images/logo.png" class=logopng>
        <img src="../../public/images/icons/mouse2.png" class=mousepng>
        <div class="landingbuttons">  
            <router-link to="/contact"><img src="../../public/images/icons/wphoneicon.png" class=fronticon></router-link> 
            <router-link to="/contact"><img src="../../public/images/icons/wmailicon.png" class=fronticon></router-link> 
          </div>
          
        </div>
        
        <div class=clearfix>
          <img class=fotosamen src="../../public/images/inekesandrafront.jpg">
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
            <router-link to="/praktijk"><img float="left" src="../../public/images/portretsandra.png"></router-link>
            <span style="float:left" class=portrettekst>Sandra</span>
          </div>
          <div class=profile>
              <router-link to="/praktijk"><img float="right" src="../../public/images/portretineke.png"></router-link>
              <span style="float:left" class=portrettekst>Ineke</span>
          </div>
        </div>
        
         
        </div>
        


      <v-footer color="rgba(233, 233, 233, 1)" >
      <v-col>
      <div class=footer1>
  <div class="column">
    <strong>MENU</strong>
          <ul class="pa-0">
        <li class=footertekst><router-link class=footertekststyle to="/">Home</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/praktijk">Praktijk</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/zwanger">Zwanger</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/bevalling">Bevalling</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/kraamtijd">Kraamtijd</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/anticonceptie">Anticonceptie</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/nieuws">Nieuws</router-link></li>
        <li class=footertekst><router-link class=footertekststyle to="/contact">Contact</router-link></li>
      </ul>
  </div>
  <div class="column">
    <strong>CONTACT</strong><br>
    TELEFOON<br>
    06 151 434 16<br><br>
    E-MAIL<br>
    info@veiligzwangerambacht.nl<br><br>
    <strong>INFORMATIE</strong>
    <ul class="pa-0">
        <li class=footertekst @click="showModalPrivacy">Privacy</li> 
        <li class=footertekst @click="showModalKlachten">Klachtenregeling</li>
      </ul>
  </div>
  <div class="column">
    
    <strong>LOCATIES</strong><br>
    <span>DE ZEESTER</span><br>
    Tromplaan 49<br>
    3342TR H.I. Ambacht<br><br>
    <span>AVELINGEN</span><br>
    Avelingen 1<br>
    3343EA H.I. Ambacht
  </div>
</div>


      </v-col>
    </v-footer>

     <v-footer>
      <v-col
        class="text-center"
        cols="12"
      >
      <strong>© {{ new Date().getFullYear() }}</strong> - Verloskundigenpraktijk <strong>Veilig Zwanger Ambacht</strong>
      </v-col>
    </v-footer>

<modal v-show="isModalPrivacyVisible" @close="closeModalPrivacy">          
          <div slot="body">
                    <br><br>
                    <strong>Privacyverklaring</strong><br>
                    <p class="fucking-p">  In deze privacyverklaring wordt uitgelegd hoe de praktijk omgaat met de verwerking van persoonsgegevens van bezoekers van de website. In het privacyverklaring wordt onder meer beschreven welke categorieën persoonsgegevens worden verzameld, voor welk doel de persoonsgegevens worden gebruikt en aan welke categorieën van ontvangers de persoonsgegevens worden verstrekt.
                    </p>

                    <p class="fucking-p"><strong>Persoonsgegevens die worden verwerkt </strong><br>
                    Verloskundigenpraktijk Veilig Zwanger Ambacht kan persoonsgegevens over u verwerken, doordat u gebruik maakt van de diensten van Verloskundigenpraktijk Veilig Zwanger Ambacht, en/of omdat u deze zelf bij het invullen van een contactformulier op de website aan Verloskundigenpraktijk Veilig Zwanger Ambacht verstrekt. Verloskundigenpraktijk Veilig Zwanger Ambacht kan de volgende persoonsgegevens verwerken:<br>
                      -	Uw voor- en achternaam<br>
                      -	Uw telefoonnummer<br>
                      -	Uw geboortedatum<br>
                      -	Uw Burgerservicenummer<br>
                      -	Uw e-mailadres<br>
                      -	Uw adresgegevens<br>
                      -	De naam van uw huisarts<br>
                      -	Gegevens van uw partner<br>
                      o	voornaam<br>
                      o	achternaam<br>
                      o	geboortedatum<br>
                      o	telefoonnummer<br>
                      -	Uw IP-adres
                    </p>
                      
                      <p class="fucking-p"><strong>Waarom Verloskundigenpraktijk Veilig Zwanger Ambacht gegevens nodig heeft</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht verwerkt uw persoonsgegevens om telefonisch contact met u op te kunnen nemen als u daar om verzoekt, en/of om u schriftelijk (per e-mail en/of per post) te kunnen benaderen indien u telefonisch onverhoopt niet bereikt kunt worden. Daarnaast kan Verloskundigenpraktijk Veilig Zwanger Ambacht uw persoonsgegevens gebruiken in het kader van het uitvoeren van een met u gesloten overeenkomst van opdracht, doorgaans bestaande uit verloskundige zorgverlening.
                    </p>

                      <p class="fucking-p"><strong>Hoe lang Verloskundigenpraktijk Veilig Zwanger Ambacht gegevens bewaart</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren, waarvoor uw gegevens worden verzameld. Uw gegevens worden niet langer dan een jaar bewaard indien er geen overeenkomst met u tot stand komt. Bij een behandelingsovereenkomst bewaart Verloskundigenpraktijk Veilig Zwanger Ambacht de persoonsgegevens volgens de wettelijke bewaartermijn. 
                    </p>

                      <p class="fucking-p"><strong>Delen met anderen</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht verstrekt uw persoonsgegevens alléén aan derden indien dit nodig is voor de uitvoering van een overeenkomst met u, of om te voldoen aan een wettelijke verplichting.
                      Verwerkers en andere derden
                      Persoonsgegevens kunnen in opdracht van de Verloskundigenpraktijk Veilig Zwanger Ambacht worden verwerkt door zogenoemde verwerkers en sub-verwerkers. De verwerkers en sub-verwerkers handelen onder verantwoordelijkheid van de Verloskundigenpraktijk en mogen geen eigen verwerkingen uitvoeren op de persoonsgegevens. Uw persoonsgegevens worden niet verstrekt aan andere partijen, met uitzondering van de partijen zoals beschreven in deze privacyverklaring. Uw persoonsgegevens worden ook aan andere partijen verstrekt als wij daartoe verplicht zijn op basis van de wet of een rechterlijke uitspraak. 
                     </p>

                      <p class="fucking-p"><strong>In kaart brengen websitebezoek</strong><br>
                      Op de website van Verloskundigenpraktijk Veilig Zwanger Ambacht worden algemene bezoekgegevens bijgehouden, waaronder het IP-adres van uw computer en het tijdstip van opvraging en gegevens die uw browser meestuurt. Deze gegevens worden gebruikt voor analyses van bezoek- en klikgedrag op de website. Verloskundigenpraktijk Veilig Zwanger Ambacht gebruikt deze informatie om de werking van de website te verbeteren. Deze gegevens worden zo veel mogelijk geanonimiseerd en worden niet aan derden verstrekt. 
                      </p>

                      <p class="fucking-p"><strong>Google Analytics</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht maakt gebruik van Google Analytics om bij te houden hoe gebruikers de website gebruiken en hoe effectief Adwords-advertenties van Verloskundigenpraktijk Veilig Zwanger Ambacht bij Google zoekresultaatpagina’s zijn.
                      De aldus verkregen informatie wordt, met inbegrip van het adres van uw computer (IP-adres), overgebracht naar en door Google opgeslagen op servers in de Verenigde Staten. Lees het privacybeleid van Google voor meer informatie. U treft ook het privacybeleid van Google Analytics hier aan. Google gebruikt deze informatie om bij te houden hoe onze website gebruikt wordt, om rapporten over de website aan Verloskundigenpraktijk Veilig Zwanger Ambacht te kunnen verstrekken en om haar adverteerders informatie over de effectiviteit van hun campagnes te kunnen bieden. Google kan deze informatie aan derden verschaffen indien Google hiertoe wettelijk wordt verplicht, of voor zover deze derden de informatie namens Google verwerken. Verloskundigenpraktijk Veilig Zwanger Ambacht heeft hier geen invloed op. Verloskundigenpraktijk Veilig Zwanger Ambacht heeft Google geen toestemming gegeven om via verkregen Analytics-informatie te gebruiken voor andere Google-diensten.
                      </p>

                      <p class="fucking-p"><strong>Gegevens inzien, aanpassen of verwijderen</strong> <br>
                      Op basis van de Algemene Verordening Gegevensbescherming (hierna: “AVG“) heeft u een aantal rechten. U heeft het recht om de Verloskundigenpraktijk te verzoeken om inzage (art 15 AVG) van en rectificatie (art. 16 AVG) of het verwijderen van uw persoonsgegevens (art. 17 AVG). Ook heeft u het recht om de Verloskundigenpraktijk te verzoeken om beperking van de verwerking van persoonsgegevens (art. 18 AVG). Onder bepaalde omstandigheden heeft u ook recht op overdraagbaarheid van gegevens (art. 20 AVG) en het recht van bezwaar (art. 21 AVG). Op de website van de Autoriteit Persoonsgegevens is meer informatie te vinden over wanneer het mogelijk is een of meer van deze rechten uit te oefenen.
                      Als u van een of meer van deze rechten gebruik wilt maken, dan kunt u contact opnemen met ons via de genoemde contactmogelijkheden. Los van bovenstaande rechten, heeft u altijd het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
                      </p>

                     <p class="fucking-p"> U kunt een verzoek tot inzage, correctie of verwijdering sturen naar info@veiligzwangerambacht.nl. Verloskundigenpraktijk Veilig Zwanger Ambacht zal zo snel mogelijk op uw verzoek reageren.
                      </p>

                      <p class="fucking-p"><strong>Beveiligen</strong> <br>
                      Verloskundigenpraktijk Veilig Zwanger Ambacht neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. De website van Verloskundigenpraktijk Veilig Zwanger Ambacht maakt gebruik van een betrouwbaar SSL Certificaat om te borgen dat uw persoonsgegevens niet in verkeerde handen vallen. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, of indien u meer informatie wenst over de beveiliging van door Verloskundigenpraktijk Veilig Zwanger Ambacht verzamelde persoonsgegevens, neem dan contact met op via info@veiligzwangerambacht.nl.  
                      www.veiligzwangerambacht.nl is een website van Verloskundigenpraktijk Veilig Zwanger Ambacht.
                      </p>

                      <p class="fucking-p"><strong>Wijzigingen</strong><br>
                      Dit privacy statement kan worden gewijzigd. Het is daarom raadzaam om regelmatig dit privacy statement te raadplegen.
                      </p>
                      
                      <p class="fucking-p">Verloskundigenpraktijk Veilig Zwanger Ambacht is als volgt te bereiken:<br>
                      Vestigingsadres: Avelingen 1, 3343 EA Hendrik Ido Ambacht<br>
                      Telefoon: 06 151 434 16<br>
                      E-mailadres: info@veiligzwangerambacht.nl<br>
                      KvK: 72847999

                  </p>
              <br><br>  
          </div>
</modal>
<modal v-show="isModalKlachtenVisible" @close="closeModalKlachten">          
          <div slot="body">
                    <br><br>
                    <strong>Klachtenregeling</strong>
                    <p class="fucking-p">Het is belangrijk dat jij je goed voelt met onze begeleiding. Vertrouwen in ons en je zwangerschap zijn belangrijke elementen voor het goed verlopen van je bevalling ,de start van jullie kindje en het ouderschap.</p>
                    <p class="fucking-p">Daarom doen we er alles aan om jou, jouw zwangerschap, je partner en je kindje zo goed mogelijk te begeleiden.</p>
                    <p class="fucking-p">Heb je toch een klacht of ben je niet tevreden over onze zorg?</p>
                    <p class="fucking-p">Bespreek het met ons, als er sprake is van een misverstand dan kunnen we dit bespreken met elkaar en samen tot een oplossing komen of, als het nodig is, de zorg voor jouw zwangerschap nog beter aanpassen aan jouw wensen. Wij geven niet voor niets namelijk zorg op maat! Twijfel niet om het bespreekbaar te maken, wij staan ervoor open om onze zorg aan te passen/ te verbeteren.</p>
                    
                    
                    <p class="fucking-p"><strong>Klachtencommissie</strong><br>
                    Als je een onafhankelijk oordeel wilt over je klacht, en/ of een gesprek met ons niet voldoende was, kun je je klacht ook indienen bij de klachtencommissie van de Koninklijke Nederlandse Organisatie voor Verloskundigen (KNOV). Onze praktijk is lid van de KNOV. De klachtencommissie onderzoekt en beoordeelt dan de klacht. De commissie kan dan advies geven. </p>
                    <p class="fucking-p">KNOV Klachtencommissie<br>
                    Postbus 2001, 3500 GA Utrecht<br>
                    E-mail: evanmackelenbergh@knov.nl

                  </p>
                  <br><br>  
          </div>
</modal>



  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'


export default {
  name: 'home',
  components: {
    Page,
    Modal,
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

<style lang="less">

.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  text-align: center;
}



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

.landingbuttons {
 bottom: 5%;
 right: 5%;
 position: absolute;
 z-index: 99;
 display: flex;
 flex-direction: row;
 align-content: center;
}

.landingbuttons .fronticon {
 width: 45px;
 margin: 15px;
 transition: ease 0.2s;
 }

.landingbuttons .fronticon:hover {
 transform: scale(1.1);
}

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

@media only screen and (max-width: 750px) {
  .portrettekst {
  font-size: 2em;
}
}


</style>