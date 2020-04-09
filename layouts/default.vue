<template>

  <v-app id="app" class="white">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
   
    <img src="~/assets/images/icons/navigate.svg" class=navleft @click="next" />
    <img src="~/assets/images/icons/navigate.svg" class=navright @click="previous"/>

    <div class=botrightpane>
      <div class=botrightpanechild>
        <v-btn color="#ffffff" rounded class="landingbtn btnphone">
          <span id="btnphonehov"><a href="tel: 0615143416">06 151 434 16</a></span>
          <v-icon color="#0059a6">call</v-icon>
        </v-btn>
      </div>
      <div class=botrightpanechild>
        <v-btn color="#ffffff" rounded class="landingbtn btnmail">
          <span id="btnmailhov"><router-link to="/contact">info@veiligzwangerambacht.nl</router-link></span>
          <v-icon color="#0059a6">mail</v-icon>
        </v-btn>
      </div>
      <div class=botrightpanechild>      
        <v-btn color="#ffffff" rounded class="landingbtn btninsta">
          <span id="btninstahov"><a href="https://www.instagram.com/verloskundigen_h.i.ambacht" target="_blank">@verloskundigen-h.i.ambacht</a></span>
          <img class=paneicon src="~/assets/images/icons/instab.png">
        </v-btn>
      </div>
      <div class=botrightpanechild>      
        <v-btn color="#ffffff" rounded class="landingbtn btnfb">
          <span id="btnfbhov"><a href="https://www.facebook.com/veiligzwangerambacht" target="_blank">fb.com/veiligzwangerambacht</a></span>
          <img class=paneicon src="~/assets/images/icons/fbb.png">
        </v-btn>
      </div>
    </div>
    
    <v-app-bar app height="64px" flat color="white" light class="appbar" elevate-on-scroll appbar>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="navknopklein"></v-app-bar-nav-icon>
        <router-link to="/"><img class=appbarlogo src="~/assets/images/icons/logo.png"></router-link>
      <div id="nav" align-items="left">
         
        <router-link v-for="route in routes" class="navbuttons" :class="{active: $route.path == route.path}" tag="a" :to="route.path" :key="route.name">{{route.name}}</router-link>
      </div>
    </v-app-bar>

    

     <v-navigation-drawer v-model="drawer" fixed temporary>
      <ul class="pa-0">
        <li v-for="route in routes"  class="navlistbuttons" :class="{active: $route.path == route.path}" :key="route.name"><router-link tag="a" :to="route.path">{{route.name}}</router-link></li>
      </ul>
     
    </v-navigation-drawer>

    <transition :name="transitionName"> 
      <router-view/>
    </transition>
  
  </v-app>
  
  </template>

<script>
export default {
  data () {
    return {
      transitionName: "slide-left",
      routes: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Praktijk',
          path: '/praktijk'
        },
        {
          name: 'Zwanger',
          path: '/zwanger'
        },
        {
          name: 'Bevalling',
          path: '/bevalling'
        },
        {
          name: 'Kraamtijd',
          path: '/kraamtijd'
        },
        {
          name: 'Anticonceptie',
          path: '/anticonceptie'
        },
        {
          name: 'Nieuws',
          path: '/nieuws'
        },
        {
          name: 'Contact',
          path: '/contact'
        },
        
      ],
      currentRouteId: 0,
      drawer: false,
    }
  },
  watch: {
    $route(to, from) {
      let toIndex;
      let fromIndex;

      for (let i = 0; i <  this.routes.length; i++) {
        let route =  this.routes[i];
        if (route.path === from.path) {
          fromIndex = i;
        }

        if (route.path === to.path) {
          toIndex = i
        }
      }

      if (toIndex > fromIndex) {
        this.transitionName = "slide-left"
      } else {
        this.transitionName = "slide-right"
      }
    }
  },
  mounted () {
    // Init currentRouteId from URL
    this.refreshCurrentRouteId()

    // Handle manual page change
    this.$router.afterEach((to, from) => { this.refreshCurrentRouteId(to.name) })
  },
  methods: {
    refreshCurrentRouteId () {
      this.currentRouteId = this.routes.findIndex(route => route.path === this.$route.path)
    },
    previous () {
      this.currentRouteId++
      if (this.routes.length === this.currentRouteId) {
        // Go back to first route
        this.currentRouteId = 0
      }

      this.$router.push(this.routes[this.currentRouteId].path)
    },
    next () {
      this.currentRouteId--
      if (this.currentRouteId === -1) {
        // Go to last route
        this.currentRouteId += this.routes.length
      }

      this.$router.push(this.routes[this.currentRouteId].path)
    }
  }
}

</script>

<style lang="scss">
.pagetitle {
  margin-top: 70px;
  margin-bottom: 60px;
}

.standaardp {
  margin: auto;
  width: 40%;
  min-width: 300px;
  max-width: 800px;
  text-align: left;
}

.pagestarter {
  width: 100%;
  height: 25%;
  object-fit: cover;
  }

.navbuttons { 
  height:50px;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin:0px auto;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 12pt;
  z-index: 99;
  }

.navbuttons a {
  float: right;
  color: black;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 17px;
  z-index: 99;
}

.navbuttons:hover {
  border-bottom: 2px solid #0059a6;
  color: #0059a6;
	padding-bottom:8px;
}

.navbuttons.active {
  border-bottom: 2px solid #0059a6;
  color: #0059a6;
  padding-bottom:8px;
}

.navlistbuttons { 
  list-style: none;
  height:54px;
  position: relative;
  z-index: 99;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 11pt;
  color: black;
  }

.navlistbuttons a {
  float: right;
  color: black;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-size: 17px;
  z-index: 99;
}

.navlistbuttons.active {
  border-right: 4px solid #0059a6;
  color: #0059a6;
  padding-right:8px;
}

.botrightpane {
  position: fixed;
  z-index: 99;
  bottom: 2%;
  right: 3%;
  color: grey;
}

.botrightpanechild {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
}

.paneicon {
  width: 20px;
}

.landingbtn {
  margin: 2px;
}

#btnphonehov {
  margin-right: 15px;
  display: none;
}

#btnmailhov {
  margin-right: 15px;
  display: none;
}

#btninstahov {
  margin-right: 15px;
  display: none;
}

#btnfbhov{
  margin-right: 15px;
  display: none;
}

.btnphone:hover #btnphonehov {
  display: block;
}

.btnmail:hover #btnmailhov {
  display: block;
}

.btninsta:hover #btninstahov {
  display: block;
}

.btnfb:hover #btnfbhov {
  display: block;
}

.navleft {
  transform: scaleX(-1);
  height: 50px;
  width:  35px;
  left: 5%;
  margin-left: -12px;
  top: 50%;
  position: fixed;
  z-index: 99;
}

.navright {
  height: 50px;
  width: 35px;
  right: 5%;
  margin-right: -12px;
  top: 50%;
  position: fixed;
  z-index: 99;
}

body, html {
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

.appbarlogo {
  width: 50px;
  }

#nav {
  padding: 30px;
  display: block;
  
  a {
    text-decoration: none;
    color: #333333;
    &.router-link-exact-active {
      color: #0059a6;
    }
  }
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: 1.1s ease-in-out;
  }
.slide-left-enter {
  transform: translate(100%, 0);
  }
.slide-left-leave-to {
  transform: translate(-100%, 0);
  }

.slide-right-leave-active,
.slide-right-enter-active {
  transition: 1.1s ease-in-out;
  }
.slide-right-enter {
  transform: translate(-100%, 0);
  }
.slide-right-leave-to {
  transform: translate(100%, 0);
  }

/* Vuebar */

.vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(63, 63, 63,.4);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(44, 44, 44, 0.8);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(44, 44, 44, 0.8);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(44, 44, 44, 0.8);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(44, 44, 44, 0.8);
}

.appbar {
  justify-content: center!important;
  display: flex!important;
}
.appbar .navknopklein {
  display: none;
}

.footer1 {
  width: 60%;
  min-width: 350px;
  max-width: 800px;
  margin: auto;
  }

  .footertekst {  
  list-style-type: none;
  }

.footertekststyle {
    text-decoration: none;

  a:link, a:visited {
    text-decoration: none;
    color: white;
}
}

@media only screen and (max-width: 780px) {
  .appbar .navknopklein {
    display: block;
  }
  .appbar {
    display: block;
  }
  #nav {
    display: none;
  } 
  
  .appbar .v-toolbar__content {
    width: 100%!important
  }

}

</style>
