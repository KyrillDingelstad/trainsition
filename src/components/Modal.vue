<template>
  <transition name="modal-fade" @after-enter="modalbox = true">
    <div class="modal-backdrop" @click="close">
        <transition name="modal-scale">
                  <div class="modal" v-if="modalbox" v-bar @click.stop>
                  
                  <div class="modal-body">
                      <slot name="body">
                      I'm the default body!
                      </slot>
                  </div>
                  
                  </div>
        </transition>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'modal',
    data () {
      return {
        modalbox: false,
      }
    },
    methods: {
      close() {
        this.$emit('close');
        this.modalbox = false;
      },
    }
  };
</script>

<style>
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
    
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: all .2s ease;
    
  }

  .modal-scale-enter,
  .modal-scale-leave-active {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }

  .modal-scale-enter-active,
  .modal-scale-leave-active {
    transition: all .5s ease;
    
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    border-radius: 10px;
    overflow-x: auto;
    width: 60%;
    min-width: 300px;
    max-width: 800px;
    height: 60%;
    text-align: center;
    
  }

  .modal-header,
  .modal-footer {
    display: flex;
  }


  .modal-body {
    position: relative;
    background: white;
    
  }

  .modalimg {
    width: 100%;
    margin-bottom: 40px;
    
  }



</style>