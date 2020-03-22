<template>
  <page class="nieuws">
    <img src="~/assets/images/fotos/krant2.jpg" class="pagestarter">   

    <div class=pagetitle>
    <h1>NIEUWS</h1>
    </div>
    <div class="nieuwsflex">
      <v-card v-for="(newsitem, key) in newsfeed" :key="key" class="mx-auto" width="50%" min-width="300px" max-width="600px">
        <v-img :src="newsitem.img" />
        <v-card-title>{{newsitem.title}}</v-card-title>
        <v-card-subtitle style="text-align: left">{{newsitem.subtitle}}</v-card-subtitle>
{{show}}
        <v-expand-transition>

          <div v-show="show == key">
            <v-divider></v-divider>
            <v-card-text v-for="(paragraph, key) in newsitem.paragraphs" :key="key" class="card-text">
              <h3>{{paragraph.title}}</h3>
              
              <p>{{paragraph.content}}</p>
            </v-card-text>
          </div>
        </v-expand-transition>

        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showMore(key)">Lees meer</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>

      <div class="fb-page fbdiv" data-href="https://www.facebook.com/veiligzwangerambacht" data-tabs="timeline" data-width="300" data-height="800" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/veiligzwangerambacht" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/veiligzwangerambacht">
            Verloskundige Praktijk Veilig Zwanger Ambacht
          </a>
        </blockquote>
      </div>
    </div>

    <page-footer />
  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import newsfeed from '@/modals/nieuws.js'
import PageFooter from '@/components/Footer.vue'
import VueMarkdown from 'vue-markdown'

export default {
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
      newsfeed: newsfeed,
      show: null,   
    }
  },
  methods: {
    showModalPrivacy() {this.isModalPrivacyVisible = true;},
    showModalKlachten() {this.isModalKlachtenVisible = true;},
        
    closeModalPrivacy() {this.isModalPrivacyVisible = false;},
    closeModalKlachten() {this.isModalKlachtenVisible = false;},
    showMore(key) {
      console.log(key)
      this.show = key
    }
  }
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

  .card-text{
    box-sizing: border-box;
  }


</style>