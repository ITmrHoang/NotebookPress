<template>
  <div
    class="container"
    :style="{ 'background-color': bgcolor }"
    @click="onClick"
  >
    <div class="select_sound">
      <select v-model="selectedSound">
        <option
          v-for="item in sounds"
          :value="item"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup > 
import sound from '~/assets/public/sound/games/sounds/bip.mp3?url';
const playSound2 = (e) => {
    e.preventDefault()
        if (sound) {
          const audio = new Audio(sound);
          audio.play();
          audio.addEventListener("ended", () => {
            audio.src = ""; // Giải phóng tài nguyên âm thanh
            audio.load(); // Đảm bảo không còn dữ liệu âm thanh
            audio.remove(); // Giải phóng bộ nhớ
          });
        }
      }
</script>

<script>
  export default {
    data() {
      const baseURL = getBaseUrl();
      return {
        layouts: "empty",
        bgcolor: "#0000",
        sounds: [
          { name: "coin drop", value: "coin-drop.mp3", path: `${baseURL}sound/games/sounds/coin-drop.mp3` },
          { name: "bip", value: "bip.mp3", path: `${baseURL}sound/games/sounds/bip.mp3` },
          {
            name: "sound bip when click",
            value: "bip-when-click.mp3",
            path: `${baseURL}sound/games/sounds/bip-when-click.mp3`,
          },
          { name: "short bip", value: "short-bip.mp3", path: `${baseURL}sound/games/sounds/short-bip.mp3` },
          { name: "elevator-bip", value: "elevator-bip.mp3", path: `${baseURL}sound/games/sounds/elevator-bip.mp3` },
          { name: "ting ting", value: "ting-ting.mp3", path: `${baseURL}sound/games/sounds/ting-ting.mp3` },
        ],
        selectedSound: {
          name: "coin drop",
          value: "coin-drop.mp3",
          path: `${baseURL}sound/games/sounds/coin-drop.mp3`,
        },
        audioFiles: {},
      };
    },
    mounted() {
      this.toggleFullScreen()
    },
    methods: {
      onClick() {
        this.bgcolor = this.randomColor();
        this.playSound();
      },

      toggleFullScreen() {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            // Firefox
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) {
            // Chrome, Safari and Opera
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) {
            // IE/Edge
            elem.msRequestFullscreen();
          }
        }
        //  else {
        //   if (document.exitFullscreen) {
        //     document.exitFullscreen();
        //   } else if (document.mozCancelFullScreen) {
        //     // Firefox
        //     document.mozCancelFullScreen();
        //   } else if (document.webkitExitFullscreen) {
        //     // Chrome, Safari and Opera
        //     document.webkitExitFullscreen();
        //     //edge
        //     document.msExitFullscreen();
        //   }
        // }
      },

      playSound() {
        if (this.selectedSound) {
          const audio = new Audio(this.selectedSound.path);
          audio.play();
          audio.addEventListener("ended", () => {
            audio.src = ""; // Giải phóng tài nguyên âm thanh
            audio.load(); // Đảm bảo không còn dữ liệu âm thanh
            audio.remove(); // Giải phóng bộ nhớ
          });
        }
      },
      randomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
    },
  };
</script>

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
