<template>
  <page class="bevalling">

    <img src="~/assets/images/fotos/babyenmoeder2.jpg" class="pagestarter bevallingtop">
   
    <div class=pagetitle>
    <h1>BEVALLING</h1>
    </div>
        
    <p class=standaardp>In negen maanden tijd groeien twee cellen uit tot een volwaardige baby. Wanneer de baby er klaar voor is zal het bevalproces in gang worden gezet en dient de baby zich aan. 
      Dit is misschien wel het moment waar je al maanden naar uit hebt gekeken, of misschien een beetje tegenop hebt gezien. Wanneer de bevalling begint en hoe de bevalling voor jou zal verlopen kan je van tevoren niet weten. 
      Iedere vrouw beleeft haar bevalling op haar eigen manier. </p>
    <p class=standaardp>Als verloskundige zullen we je tijdens de bevalling ondersteunen en aanmoedigen om op je eigen kracht je kind op de wereld te zetten. Want bevallen kan je zelf! 
      Daarbij geven we je zoveel mogelijk vrijheid om te doen wat goed voor je voelt. We vinden het namelijk belangrijk dat je tevreden terugkijkt op je bevalling, aangezien bevallen een intense en persoonlijke gebeurtenis is die je altijd bij zal blijven. </p>
        
    
    <v-container fluid grid-list-xl class="tileset">
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md6 lg4 xl4 d-flex v-for="(modal, key) in modals" :key="modal.id">
          <v-card class=tegeltje @click="openModal(key)">
            <img :src="modal.img" />
            <v-card-title primary class="title"> <vue-markdown> {{modal.title}} </vue-markdown> </v-card-title>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <modal v-show="modal" @close="closeModal" v-if="this.modal">
        <div slot="body">
            <img class=modalimg :src="this.modal.img">
            <v-card-title primary class="title">{{this.modal.title}}</v-card-title>
            <p v-for="(p, i) in this.modal.firstParagraphs" :key="i" class="fucking-p">
              <span class="fucking-p-title">{{p.title}}</span>
              <vue-markdown> {{p.content}} </vue-markdown>
            </p>

            <span class="fucking-p-title" v-if="this.modal.firstExpansionPanels && this.modal.firstExpansionPanels.title">{{this.modal.firstExpansionPanels.title}}</span>

            <v-expansion-panels class=expand v-if="this.modal.firstExpansionPanels">
              <v-expansion-panel v-for="(p, i) in this.modal.firstExpansionPanels.panels" :key="i">
                  <v-expansion-panel-header>{{p.header}}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                      <p class="expandp" v-for="(paragraph, i) in p.paragraphs" :key="i"> 
                        <span class="fucking-p-title">{{paragraph.title}}</span>
                        <vue-markdown> {{paragraph.content}} </vue-markdown>
                      </p>
                  </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

             <p v-for="(p, i) in this.modal.secondParagraphs" :key="i" class="fucking-p">
              <span class="fucking-p-title">{{p.title}}</span>
              <vue-markdown> {{p.content}} </vue-markdown>
            </p>

            <span class="fucking-p-title" v-if="this.modal.secondExpansionPanels && this.modal.secondExpansionPanels.title">{{this.modal.secondExpansionPanels.title}}</span>

             <v-expansion-panels class=expand v-if="this.modal.secondExpansionPanels">
                <v-expansion-panel v-for="(p, i) in this.modal.secondExpansionPanels.panels" :key="i">
                    <v-expansion-panel-header>{{p.header}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p class="expandp" v-for="(paragraph, i) in p.paragraphs" :key="i"> 
                        <span class="fucking-p-title">{{paragraph.title}}</span>
                        <vue-markdown> {{paragraph.content}} </vue-markdown>
                      </p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
             </v-expansion-panels>
        </div>
    </modal>
    <page-footer />
  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import modals from '@/modals/bevalling.js'
import VueMarkdown from 'vue-markdown'
import PageFooter from '@/components/Footer.vue'

export default {
  name: 'zwanger',
  components: {
    Page,
    Modal,
    VueMarkdown,
    PageFooter
  },
  data () {
    return {
        modal: null,
        modals: modals,
    };
  },
  mounted() {
      if(this.$route.query.modal) {
          this.openModal(this.$route.query.modal)
      }
  },
  methods: {
    openModal(modal) {
      this.$router.push({ path: `/bevalling`, query: { modal } })
      this.modal = this.modals[modal]
    },
    closeModal() {
      this.modal = null;
      this.$router.push('/bevalling');
    }
  }
};

</script>

<style lang="scss" scoped>
  .bevalling {
    background: white;
  }

  .bevallingtop {
    object-position: 0px 35%;
  }

  .tileset {
    width: 60%;
    min-width: 300px;
    align-items: center;
    background-color: white;
    background: white;
    transition: 0.2s all ease;
    margin-bottom: 60px;
    margin-top: 60px;

    img {
      width: 100%;
    }
  }

  .tegeltje {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transition: 0.2s all ease;
  }

  .tegeltje:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.05)
  }

  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
  }

  .expand {
    padding: 0 5%;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .fucking-p-title {
      display: block;
      font-size: 16px;
      font-weight: 600;
      margin: 8px 0;
  }
  
  .modaltitle {
    font-family: 'Dancing Script', cursive;
    font-size: 3em;
    text-align: left;
    padding: 0 5% ;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 750px) {
  .expand {
    padding: 0;
  }
}


</style>