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
  name: 'anticonceptie',
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