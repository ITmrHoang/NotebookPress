<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
 const props = defineProps(['path'])
const file : any= import.meta.glob('~/assets/js/*.js',
  { 
    // query: '?raw', // lấy dữ liệu dạng raw - string data
  //   query: {"?raw": ''}, // nhúng prams vào url link import tính năng tương tự ?raw nếu dùng ?raw: còn không sẽ raw=data
  // import: 'default', // nếu là module reacjs sẽ mặc định sẽ dùng import target vào export nó không
// as: 'url' // import dưới dạng url
  },)
  // console.log(file['/assets/js/test.js']())
console.log(file['/assets/js/test.js']().then((r: any) => console.log(r)))

import { onMounted } from 'vue'
onMounted(() => {

})
</script>

<style>

</style>