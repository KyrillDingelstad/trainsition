<template>
  <div class=scrolldiv v-bar>
    <div class="page">
      <slot></slot>
    </div>
      
    </div>
</template>

<script>
export default {
  name: 'page',
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Chakra+Petch|Dancing+Script|Indie+Flower|Quicksand&display=swap,' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
    position: absolute;
    width: 100%;
    height: calc(100% - 64px);
    top: 5;
    font-family: 'Quicksand', sans-serif;
    }

    .scrolldiv {
    position: absolute!important;
    width: 100%;
    height: calc(100% - 64px);
    top: 64px;
    background-color: white;
    }



</style>