<template>
  <v-app id="app" class="white">
   
    <img src="../public/images/icons/buttonleft2.png" v-if="$route.name != 'home'" class=navleft @click="next">  {{$router.routes}}
    <img src="../public/images/icons/buttonright2.png" v-if="$route.name != 'contact'" class=navright @click="previous"> 
    
    <v-app-bar app height="64px" flat color="white" light class="appbar" elevate-on-scroll appbar>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="navknopklein"></v-app-bar-nav-icon>
        <router-link to="/"><img class=appbarlogo src="../public/images/icons/logo.png"></router-link>
      <div id="nav" align-items="left">
        
        <router-link tag="a" :class="{active: $route.name == 'home'}" class="navbuttons" to="/">Home</router-link>
        <router-link tag="a" :class="{active: $route.name == 'praktijk'}" class="navbuttons" to="/praktijk">Praktijk</router-link>
        <router-link tag="a" :class="{active: $route.name == 'zwanger'}" class="navbuttons" to="/zwanger">Zwanger</router-link>
        <router-link tag="a" :class="{active: $route.name == 'bevalling'}" class="navbuttons" to="/bevalling">Bevalling</router-link>
        <router-link tag="a" :class="{active: $route.name == 'kraamtijd'}" class="navbuttons" to="/kraamtijd">Kraamtijd</router-link>
        <router-link tag="a" :class="{active: $route.name == 'anticonceptie'}" class="navbuttons" to="/anticonceptie">Anticonceptie</router-link>
        <router-link tag="a" :class="{active: $route.name == 'nieuws'}" class="navbuttons" to="/nieuws">Nieuws</router-link>
        <router-link tag="a" :class="{active: $route.name == 'contact'}" class="navbuttons" to="/contact">Contact</router-link> 
      </div>
    </v-app-bar>

    

     <v-navigation-drawer v-model="drawer" fixed temporary>
      <ul class="pa-0">
        <li class="navlistbuttons" :class="{active: $route.name == 'home'}"><router-link tag="a" to="/">Home</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'praktijk'}"><router-link tag="a" to="/praktijk">Praktijk</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'zwanger'}"><router-link tag="a" to="/zwanger">Zwanger</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'bevalling'}"><router-link tag="a" to="/bevalling">Bevalling</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'kraamtijd'}"><router-link tag="a" to="/kraamtijd">Kraamtijd</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'anticonceptie'}"><router-link tag="a" to="/anticonceptie">Anticonceptie</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'nieuws'}"><router-link tag="a" to="/nieuws">Nieuws</router-link></li>
        <li class="navlistbuttons" :class="{active: $route.name == 'contact'}"><router-link tag="a" to="/contact">Contact</router-link></li>
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
      routes: [],
      currentRouteId: 0,
      drawer: false,
    }
  },
  watch: {
    $route(to, from) {
        let toIndex;
        let fromIndex;

        for (let i = 0; i <  this.$router.options.routes.length; i++) {
          let route =  this.$router.options.routes[i];
          if (route.name === from.name) {
            fromIndex = i;
          }

          if (route.name === to.name) {
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
    this.routes = this.$router.options.routes

    // Init currentRouteId from URL
    this.refreshCurrentRouteId(this.$router.currentRoute.fullPath)

    // Handle manual page change
    this.$router.afterEach((to, from) => { this.refreshCurrentRouteId(to.path) })
  },
  methods: {
    refreshCurrentRouteId (currentPath) {
      this.currentRouteId = this.routes.findIndex(route => route.path === currentPath)
    },
    previous () {
      console.log('Going to previous page')

      this.currentRouteId++
      if (this.routes.length === this.currentRouteId) {
        // Go back to first route
        this.currentRouteId = 0
      }

      this.$router.push(this.routes[this.currentRouteId])
    },
    next () {
      console.log('Going to next page')
        console.log(this.$route.name)

      this.currentRouteId--
      if (this.currentRouteId === -1) {
        // Go to last route
        this.currentRouteId += this.routes.length
      }

      this.$router.push(this.routes[this.currentRouteId])
    }
  }
}



</script>

<style lang="less">
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

.navleft {
  height: 35px;
  width: 25px;
  left: 5%;
  margin-left: -12px;
  top: 50%;
  position: fixed;
  z-index: 99;
}

.navright {
  height: 35px;
  width: 25px;
  right: 5%;
  margin-right: -12px;
  top: 50%;
  position: fixed;
  z-index: 99;
}

body, html {
  margin: 0;
  overflow-x: hidden;
  overflow-y:hidden!important;
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

@media only screen and (max-width: 750px) {
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
