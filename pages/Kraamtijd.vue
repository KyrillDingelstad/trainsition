<template>
  <page class="kraamtijd">
         <img src="~/assets/images/fotos/baby1.jpg" class="pagestarter kraamtijdtop" alt="kraamtijd pagina header" />

    <div class=pagetitle>
    <h1>KRAAMTIJD</h1>
    </div>

    <p class=standaardp>En dan is het eindelijk zo ver, jullie kind is geboren en de kraamperiode gaat van start. Zo’n kleine baby zet je hele wereld op z’n kop. 
      In de periode na de bevalling zullen wij jullie bijstaan en komen we regelmatig bij je thuis langs. Samen met de kraamverzorgende houden we in de gaten of alles goed verloopt en geven we jullie tips en adviezen over de verzorging van je baby. 
      Mocht je om een medische reden bij de gynaecoloog onder controle zijn geweest en zijn bevallen, dan is het ook gebruikelijk dat we na de bevalling bij je thuis komen kijken. </p>           
     
    <v-container fluid class="tileset">
      <v-row justify="center">
        <v-col  v-for="(modal, key) in modals" :key="modal.id" cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class=tegeltje @click="openModal(key)">
            <img :src="modal.img" :alt="modal.alt" />
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
        </div>
    </modal>
    <page-footer />


  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import modals from '@/modals/kraamtijd.js'
import VueMarkdown from 'vue-markdown'
import PageFooter from '@/components/Footer.vue'


export default {
  name: 'kraamtijd',
  head: {
    title: 'Veilig Zwanger Ambacht - Kraamtijd',
      meta: [
        { hid: 'description', name: 'description', content: 'Vind hier de basisinformatie over eerste weken van de zorg van je pasgeboren baby.' }
        ],
    },
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
      this.$router.push({ path: `/kraamtijd`, query: { modal } })
      this.modal = this.modals[modal]
    },
    closeModal() {
      this.modal = null;
      this.$router.push('/kraamtijd');
    }
  },
};

</script>


<style lang="scss" scoped>
  .kraamtijd {
    background: white;
  }

  .kraamtijdtop {
    object-position: 0px 60%;
  }

  .tileset {
    width: 60%;
    min-width: 300px;
    align-items: center;
    background-color: white;
    background: white;
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

  .expand {
    padding: 0 5%;
    text-align: left;
    box-sizing: border-box;
  }

  .expandp {
    padding: 10px 0;
  }

  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
    }
  
  .modaltitle {
    font-family: 'Dancing Script', cursive;
    font-size: 3em;
    text-align: left;
    padding: 0 5% ;
    margin-bottom: 15px;
    }

  @media only screen and (max-width: 780px) {
  .expand {
    padding: 0;
  }
}


</style>
