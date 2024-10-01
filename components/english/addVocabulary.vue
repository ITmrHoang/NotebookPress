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
    handleInput(e) {
      this.inputValue = e.target.value;
    },

    audioToBase64(file, field) {
      const _this = this;
      readingFileToBase64(file).then((res) => {
        _this[field] = res;
        console.log(res);
      });
    },

    sound(field) {
      const _blob = readBase64(this[field]);
      const sound = new Audio(_blob);
      sound.play();
    },
  },
};
</script>

<style></style>
