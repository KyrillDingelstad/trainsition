<template>
  <page class="contact">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-text>
          <h2 style="padding-top:24px">Bedankt voor je bericht!</h2>
          <p class=standaardp>Je krijgt een mail ter bevestiging van ontvangst. </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <img src="~/assets/images/fotos/contacttop.jpg" class="pagestarter contacttop">   
    <div class=pagetitle>
    <h1>CONTACT</h1>

    </div>

    <p class=standaardp>Heb je vragen over zwangerschap en geboorte of wil je je aanmelden bij onze praktijk, dan kan je ons bellen of een mail sturen.</p>
    <p class=standaardp>Voor hulp bij de bevalling, dringende vragen of spoedsituaties zijn we altijd bereikbaar.</p>
    <p class=standaardp>Je kunt ons dag en nacht bereiken door te bellen op ons gebruikelijke mobiele nummer. Mocht er iets bijzonders met de telefoonlijn zijn waardoor wij jouw oproep niet ontvangen, dan kan je ons bereiken via het storingsnummer.</p>

    <div class=formulier>
      <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Naam"
            color="#0059a6"
            required
          ></v-text-field>
    
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color="#0059a6"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            :counter="10"
            :rules="phoneRules"
            label="Telefoon nummer"
            color="#0059a6"
            required
          ></v-text-field>
    
          <v-select
            v-model="subject"
            :items="items"
            :rules="[v => !!v || 'Kies een onderwerp']"
            label="Onderwerp"
            color="#0059a6"
            required
          ></v-select>

          <v-textarea
                v-model="message"
                color="#0059a6" 
                auto-grow
                :rules="[v => !!v || 'Leeg bericht']"
                required              
              >
                <template v-slot:label>
                  <div>
                    Bericht
                  </div>
                </template>
          </v-textarea>
    
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Vink hier aan voor het versturen.']"
            label="Klaar om te versturen?"
            color="#0059a6"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
          >
            Verstuur
          </v-btn>
          <span v-if="captchaError" style="color: red">
            <br>Er is iets mis gegaan. Probeer het alstublieft nogmaals.
          </span>
        </v-form>
      </div>

    <div class=adresbalk>
      <div class=adrestext>
        <div class="column">
          <p class=standardp><strong>Telefoon</strong><br> <a href="tel: 0615143416">06 151 434 16</a></p>
          <p class=standardp><strong>Bij storing</strong><br> 085-773 3326</p>
          <p class=standardp><strong>E-mail</strong><br> info@veiligzwangerambacht.nl</p>
        </div>
           
    
        <div class="column">
          <p class=standardp><strong>Spreekuur</strong><br>
          <p class=standardp>DE ZEESTER<br>
          Tromplaan 49<br>
          3342TR H.I. Ambacht</p>
        </div>

      </div>
    </div>

    <iframe class=ifreem src="https://snazzymaps.com/embed/178232" style="border:none;"></iframe>

    <page-footer />
  </page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import Modal from '@/components/Modal.vue'
import VueMarkdown from 'vue-markdown'
import PageFooter from '@/components/Footer.vue'


export default {
  name: 'contact',
  data () {
    return { 
      isModalPrivacyVisible: false,
      isModalKlachtenVisible: false,
      email: null,
      emailRules: [
        (v) => !!v || 'Email is nodig', 
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail is ongeldig',
      ],
      valid: false,
      phone: null,
      phoneRules: [
        (v) => v && v.length == 10 || 'Gebruik een 10 cijferig nummer',
      ],
      message: null,
      name: '',
      nameRules: [
        v => !!v || 'Voer een volledige naam in',
        v => v && v.length >= 4 || 'Naam te kort',
      ],
      checkbox: false,
      subject: null,
      area: null,
      nameError: null,
      emailError: null,
      checkboxError: null,
      selectError: null,
      phoneError: null,
      captchaError: false,
      items: [
        "Aanmelding", "Vraag", "Zakelijk", "Overig"
      ],
      dialog: false
    }
  },
  components: {
    Page,
    Modal,
    VueMarkdown,
    PageFooter
  },     
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    showModalPrivacy() {this.isModalPrivacyVisible = true;},
    showModalKlachten() {this.isModalKlachtenVisible = true;},
        
    closeModalPrivacy() {this.isModalPrivacyVisible = false;},
    closeModalKlachten() {this.isModalKlachtenVisible = false;},

    async validate () {
     if (this.$refs.form.validate()) {
        try {
          const token = await this.$recaptcha.execute()

          let data   = {
            email: this.email,
            phone: this.phone,
            message: this.message,
            name: this.name,
            subject: this.subject,
            token: token
          }

          this.$axios.post('api/contact', {data}).then((res) => {
            this.dialog = true
            this.captchaError = false
            this.$refs.form.reset()
          }).catch((err) => {
            console.log(`something went wrong`)
            this.captchaError = true
          })
          
        } catch (error) {
          this.captchaError = true
        }
      }
    }
  },
};

</script>

<style lang="scss" scoped>
  .formulier {
    width: 40%;
    min-width: 300px;
    max-width: 800px;
  }

  .adresbalk {
    width: 100%;
    background-color: rgb(235, 242, 248);
    display: inline-block;
    margin-top: 60px;
  }

  .adrestext{
    width: 80%;
    min-width: 300px;
    max-width: 800px;
    margin: auto;
    align-items: center;
    padding: 40px 0;
    }
  

 .contacttop {
    object-position: 0px 50%;
  }

  .contact {
    background: white;
  }

  .ifreem {
    align-items: center;
    min-width: 300px;
    width: 50%;
    height: 50%;
    margin: 100px 0;
  }

  .adres {
  align-items: center;
  float: left;
  width: 50%;
  padding: 10px;
  }

  .adressen {
    left: 30%;
    width: 40%;
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: center;

    p {
      margin: 20px;
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  .adressen:after {
    content: "";
    display: table;
    clear: both;
  }

.formulier {
  width: 40%;
  min-width: 300px;
  max-width: 800px;
  margin: auto;
  }

  .fucking-p {
    padding: 0 5%;
    height: auto;
    text-align: left;
    align-items: center;
    }

</style>