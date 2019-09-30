// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify, {
  VCard,
  VRating,
  VDrawer,
  VAppBar,
  VAppBarNavIcon,
  VNavigationDrawer,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelContent,
  VExpansionPanelHeader,
  VCarousel,
  VSheet,
  VCarouselItem,
  VApp,
  VCardTitle,
  VCardText,
  VFlex,
  VLayout,
  VContainer,
  VImg,
  VFooter,
  VCol,
  VIcon,
  VBtn,
  VTextField,
  VForm,
  VTextarea,
  VSelect,
  VCheckbox,
    
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VCard,
    VDrawer,
    VRating,
    VAppBar,
    VAppBarNavIcon,
    VNavigationDrawer,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelContent,
    VExpansionPanelHeader,
    VCarousel,
    VSheet,
    VIcon,
    VCarouselItem,
    VApp,
    VCardTitle,
    VCardText,
    VFlex,
    VLayout,
    VContainer,
    VImg,
    VFooter,
    VCol,
    VBtn,
    VTextField,
    VForm,
    VTextarea,
    VSelect,
    VCheckbox,

  },
  directives: {
    Ripple,
  },
  theme: {
    themes: {
      light: {
        primary: "#ff34ff"
      }
    }
  }

})

export default new Vuetify()