<template>
  <link v-for="item in sounds" rel="preload" :href="`/NotebookPress/sound/games/sounds/${item.value}`" as="fetch">
  <div class="container" :style="{'background-color': bgcolor}" @click="onClick">
    <div class="select_sound">
      <select v-model="selectedSound">
        <option v-for="item in sounds" :value="item.value">{{item.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layouts: 'empty',
      selectedSound: 'bip.mp3',
      bgcolor: '',
      sounds: [
        {name: 'coin drop', value: 'coin-drop.mp3'},
        {name: 'bip', value: 'bip.mp3'},
        {name: 'sound bip when click', value: 'bip-when-click.mp3'},
        {name: 'short bip', value: 'short-bip.mp3'},
        {name: 'elevator-bip', value: 'elevator-bip.mp3'},
        {name: 'ting ting', value: 'ting-ting.mp3'}
      ]
    };
  },
  methods: {
    onClick() {
      this.bgcolor = this.randomColor()
      this.playSound()
    },
    playSound() {
      if (this.selectedSound) {
        const audio = new Audio(`/sound/games/sounds/${this.selectedSound}`);
        audio.play();
      }
    },
    randomColor() {
      const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  }
}

</script>

<!-- <script setup>
  definePageMeta({
            layout: false
        })
        </script> -->

<style>
.select_sound {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 13px;
}

.container {
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
}
</style>