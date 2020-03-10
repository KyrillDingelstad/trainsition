<template>
  <page class="nieuws">
    <img src="~/assets/images/fotos/krant2.jpg" class="pagestarter">   

    <div class=pagetitle>
    <h1>NIEUWS</h1>
    </div>
    <div class=nieuwswrapper>

    <div class=nieuwsvak>
            <v-card class=nieuwstegel outlined>
            <img src=~/assets/images/fotos/modalbevalling.jpg height="194" />
            <v-card-title primary class="title">De bevalling</v-card-title>
            <v-card-text>I'm card text</v-card-text>
            </v-card>

            <v-card class=nieuwstegel>
            <img src=~/assets/images/fotos/modalbevalling.jpg height="194" />
            <v-card-title primary class="title">De bevalling</v-card-title>
            <v-card-text>I'm card text</v-card-text>
            </v-card>

            <v-card class=nieuwstegel>
            <img src=~/assets/images/fotos/modalbevalling.jpg height="194" />
            <v-card-title primary class="title">De bevalling</v-card-title>
            <v-card-text>I'm card text</v-card-text>
            </v-card>

      </div> 

    <iframe class=facebook src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fverloskundigenpraktijkveiligzwangerambacht%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" style="border:none" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
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
  name: 'nieuws',
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
  .nieuws {
    background: white;
  }

  .nieuwswrapper {
    display: flex;
    flex-direction: row;
    height: 80%;
    padding-bottom: 100px;
  }

  .nieuwstegel {
    width: 600px;
  }

  .nieuwsvak {
    float: auto;
    width: 600px;
    background: red;
    margin: auto;
    overflow: scroll;
  }

  .facebook {
    float: left;
    width: 340px;
    height: 500px;
    margin: auto;
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

@media only screen and (max-width: 1000px) {
  .nieuwsrapper {
  flex-direction: column;
}
} 
 
</style>