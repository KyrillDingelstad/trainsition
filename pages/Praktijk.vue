<template>
  <page class="praktijk">
    <img src="~/assets/images/praktijktop.jpg" class="pagestarter praktijktop">

    
    <div class=pagetitle>
    <h1>PRAKTIJK</h1>
    </div>

    <p class=standaardp>Veilig Zwanger Ambacht is een betrokken en kleinschalige verloskundigenpraktijk. Wij werken in de praktijk met twee verloskundigen, Sandra en Ineke. Zo krijg je tijdens de zwangerschap en bij de bevalling altijd een bekende en vertrouwde verloskundige.</p>

    <p class=standaardp>Sandra werkt het merendeel, Ineke doet regelmatig spreekuren en werkt op de momenten dat Sandra vrij is, zich moet bijscholen of anderszins.</p>

    <p class=standaardp>Ons sterke punt is de kleinschaligheid van de praktijk en onze nauwe samenwerking. Je leert ons tijdens de zwangerschap goed kennen en zo ontstaat er een vertrouwensband. In de loop der jaren hebben we gemerkt hoe belangrijk een vertrouwensband is.
    Deze band helpt je veilig te voelen, te kunnen ontspannen en is een voorwaarde om vertrouwen in je lichaam te krijgen. Dit vertrouwen is essentieel voor een goed verloop van je zwangerschap, bevalling en het nieuwe ouderschap.</p>

    <p class=standaardp>Ook al zijn we kleinschalig, bij ons in de verloskundigenpraktijk bieden we zorg rondom de zwangerschap zo breed mogelijk aan. Dit betekent dat je bij ons naast verloskundige zorg ook terecht kunt voor vragen over zwanger worden, echo’s en anticonceptie.</p>
    
    <p class=standaardp>Sandra is naast verloskundige ook echoscopiste.  </p>

    <p class=standaardp>Sandra en Ineke staan allebei ingeschreven in het kwaliteitsregister van de KNOV. </p>
        
    <div class=persoonwrapper>
          <v-card class="tilesetp">
            <img src=~/assets/images/fotosandra.jpg />
            <v-card-title primary class="title">Sandra Suylen</v-card-title>
            <v-card-text> 
              <p class="fucking-p">Een zwangerschap, een bevalling, het begin van een nieuw leven. Elke keer geniet ik van deze bijzondere momenten en dat ik daar bij mag zijn vind ik heel bijzonder.</p>

              <p class="fucking-p">Wat mij het meest aanspreekt aan mijn werk is het persoonlijk contact met de ouders. Iedereen is anders en geen enkele ervaring is hetzelfde. Dat vraagt om een persoonlijke benadering van elke zwangerschap, want een zwangerschap verloopt nu eenmaal beter wanneer de ouders zich op hun gemak voelen en de bevalling met vertrouwen tegemoetzien.</p>

              <p class="fucking-p">Door mijn passie voor verloskunde heb ik ervoor gekozen om een tijdje naar Engeland te gaan. Een land dat vooroploopt als het gaat om onderzoek en nieuwe ontwikkelingen. Het is daar gebruikelijk om een vrouw tijdens de zwangerschap en bevalling zoveel mogelijk vrijheid te geven om te doen wat voor haar goed voelt. Het kiezen en uitproberen van verschillende baringshoudingen is daar bijvoorbeeld heel normaal en helpt bij het voorspoedig verloop van een bevalling. Ik heb daar met veel plezier bevallingen in de meest bijzondere houdingen begeleid, waaronder heel veel badbevallingen. Een leerzame ervaring waar ik nog altijd veel aan heb.</p>

              <p class="fucking-p">Naast verloskundige ben ik ook echoscopist. Dat betekent dat ik echo’s kan maken en meer inzicht heb in de interpretatie ervan. Ik ervaar dit als een mooie aanvulling.</p>

              <p class="fucking-p">De mooiste bevalling is voor mij een bevalling waarin moeder en kind centraal staan. In de zwangerschap probeer ik ouders écht te leren kennen en een band op te bouwen. Ik vind het daarom zo heerlijk om te werken in een kleinschalige praktijk waar persoonlijk contact voorop staat. Zo kan ik iedere moeder en baby de tijd en aandacht geven die ze verdienen.</p>

              <p class="fucking-p">Een geboorte is iets bijzonders en daar moet je tijd voor nemen.</p>

              <p class="fucking-p">BIG nummer 59917629103</p></v-card-text>
            </v-card>
    </div>

    <div class=persoonwrapper>
          <v-card class="tilesetp">
            <img src=~/assets/images/fotoineke.jpg />
            <v-card-title primary class="title">Ineke Bijloo</v-card-title>
            <v-card-text> 
              <p class="fucking-p">Meer dan 25 jaar geleden is een grote wens van mij vervuld: verloskundige worden. Het ondersteunen van mensen in zo’n speciale periode van hun leven en het mogen begeleiden van de geboorte van een nieuw mensenkind is het meest bijzondere wat ik ken.</p>

              <p class="fucking-p">Door de geboortes van mijn drie zonen heb ik zelf ervaren hoe essentieel het is een band op te bouwen met je verloskundige. Een goede band versterkt het vertrouwen in het verloop van de zwangerschap en de bevalling.</p>

              <p class="fucking-p">Deze ervaringen hebben mij doen besluiten niet meer in een grote praktijk te werken, maar kleinschalig verder te gaan.</p>

              <p class="fucking-p">Hoewel de wereld de afgelopen decennia behoorlijk is veranderd, vind ik het vak van verloskundige nog net zo geweldig als toen ik begon. Want ondanks alle ontwikkelingen in de medische wereld, is een zwangerschap nog altijd een wonder van moeder natuur.</p>

              <p class="fucking-p">Om bij de tijd te blijven school ik me voortdurend bij. Dat is voor mij net zo wezenlijk als mijn inschrijving in het kwaliteitsregister van de KNOV, de beroepsorganisatie voor verloskundigen. Want als je een baby verwacht, moet je erop kunnen vertrouwen dat je in goede handen bent.</p>

              <p class="fucking-p">BIG nummer 99020423803</p> </v-card-text>
            </v-card>
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
  name: 'praktijk',
  components: {
    Page,
    Modal,
    PageFooter,
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

  .praktijktop {
    object-position: 0px 60%;
  }

  .fucking-p {
    padding: 0 37px 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
    color: black;
    }

  .persoontext {
    text-align: left;
    width: 92%;
    align-items: center;
  }

  .persoonwrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }  

  .praktijk {
    background: white;
  }

  .tilesetp {
    width: 40%;
    min-width: 300px;
    max-width: 800px;
    align-items: center;
    background-color: white;
    background: white;
    margin-top: 30px;
    margin-bottom: 30px;

    img {
      width: 100%;
    }
  }

  .title {
    padding: 2% 46px;
  }
</style>
