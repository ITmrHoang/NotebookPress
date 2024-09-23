<template>
  <div>Learning English</div>
  <div><input type="text" /></div>
  <div>2222</div>
  <EnglishAddVocabulary></EnglishAddVocabulary>
  <div v-for="item in list" :key="item.en">
    <strong> {{ item.en }}</strong> &nbsp;
    <span>{{ `uk:/${item.uk}/  \&nbsp; us:/${item.us}/` }}</span> &nbsp; : {{ item.vn }}
  </div>
</template>

<script>
export default {
  name: "LearningEnglish",
  data() {
    return {
      text: "Welcome to Learning English!",
    };
  },
  created() {
    this.list = [{ en: "English", vn: "Tieng anh", uk: "ˈɪŋ.ɡlɪʃ", us: "ˈɪŋ.ɡlɪʃ" }];
  },
};
</script>
