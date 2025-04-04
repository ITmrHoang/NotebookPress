<template>
  <div>
    <input type="text" @input="handleInput" />
    <input
      type="file"
      name="uk"
      @change="(e) => audioToBase64(e.target.files[0], 'suk')"
    />
    <button @click="() => sound('suk')">play uk</button>
    {{ inputValue }}
    {{ suk ?? "" }}

    <button @click="callapi">call</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      suk: "",
    };
  },
  name: "add Vocabulary",
  mounted() {
    console.log("mounting");
  },
  methods: {
    callapi() {
      console.log("call api");
      // call your API here
      getSound(
        "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/a__/a__gb/a__gb_2.mp3"
      ).then((data) => {
        this.suk = data;
        const sound = new Audio(data);
        sound.play();
      });
    },
    handleInput(e) {
      this.inputValue = e.target.value;
    },

    audioToBase64(file, field) {
      const _this = this;
      readingFileToBase64(file).then((res) => {
        _this[field] = res;
        base64ToBlob(res).then((data) => {
          console.log(data);
        });
      });
    },

    sound(field) {
      const _blob = this[field];

      const sound = new Audio(_blob);
      sound.play();
    },
  },
};
</script>

<style></style>
