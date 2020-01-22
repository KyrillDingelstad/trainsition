<template>
  <page class="zwanger">
     
     <img src="~/assets/images/fotos/babyschoenen3.jpg" class=pagestarter>
    
    <div class=pagetitle>
    <h1>ZWANGER</h1>
     </div>

    <p class=standaardp>
      Of het nu je eerste keer is of je bent al een aantal keer zwanger geweest, het blijft een bijzondere ervaring om zwanger te zijn. In deze periode zal je merken dat je lichaam verandert, zowel fysiek als emotioneel. Wij als verloskundigen begeleiden we je tijdens de zwangerschap, de bevalling en als de baby geboren is komen we regelmatig bij je thuis langs. In de zwangerschap houden we de gezondheid van jou en je kind in de gaten en geven advies en informatie over jouw zwangerschap. </p>
    <p class=standaardp>
      Als je weet dat je zwanger bent kun je je rechtstreeks bij ons aanmelden, dat kan via de telefoon of via de mail. Hiervoor heb je geen verwijzing van de huisarts nodig. </p>
    <p class=standaardp>
        </p>


    <v-container fluid class="tileset">
      <v-row justify="center">
        <v-col  v-for="(modal, key) in modals" :key="modal.id" cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class=tegeltje @click="openModal(key)">
            <img :src="modal.img" />
            <v-card-title primary h1> <vue-markdown> {{modal.title}} </vue-markdown> </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <modal v-show="modal" @close="closeModal" v-if="this.modal">
        <div slot="body">
            <img class=modalimg :src="this.modal.img">
            <v-card-title primary class="modaltitle">{{this.modal.title}}</v-card-title>
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

            <p v-for="(p, i) in this.modal.thirdParagraphs" :key="i" class="fucking-p">
              <span class="fucking-p-title">{{p.title}}</span>
              <vue-markdown> {{p.content}} </vue-markdown>
            </p>
        </div>
    </modal>
    <page-footer />
</page>
</template>

<script>
// @ is an alias to /src
import Page from '~/components/Page.vue'
import Modal from '~/components/Modal.vue'
import modals from '~/modals/zwanger.js'
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
      modals: modals
    };
    
  },
  methods: {
    openModal(modal) {
      this.$router.push({ path: `/zwanger`, query: { modal } })
      this.modal = this.modals[modal]
    },
    closeModal() {
      this.modal = null;
      this.$router.push('/zwanger');
    }
  }
};

</script>

<style lang="scss" scoped>
  .zwanger {
    background: white;
  }
  
  .tileset {
    width: 60%;
  }
  img {
    width: 100%;
  }
  .tegeltje {
    transition: 0.2s all ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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

  .modalsubkopje {
    text-align: left;
    padding: 0 5%;
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