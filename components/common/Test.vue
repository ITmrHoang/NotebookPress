<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
 import('~/assets/js/test.js?url').then((url) => console.log(url))
 const props = defineProps(['path'])
// const file : any= import.meta.glob('~/assets/js/*.js',
  // { 
    // query: '?raw', // lấy dữ liệu dạng raw - string data
  //   query: {"?raw": ''}, // nhúng prams vào url link import tính năng tương tự ?raw nếu dùng ?raw: còn không sẽ raw=data
  // import: 'default', // nếu là module reacjs sẽ mặc định sẽ dùng import target vào export nó không
// as: 'url' // import dưới dạng url
//  eager: false, // false các tệp tin sẽ được nhập động (lazy-loaded). Điều này có nghĩa là các tệp tin sẽ chỉ được nhập khi bạn thực sự gọi đến chúng. Khi bạn sử dụng eager: true, các tệp tin sẽ được nhập ngay lập tức khi mã của bạn được chạy, không cần phải gọi đến chúng trước

  // },)
  // console.log(file['/assets/js/test.js']())
// console.log(file)

import { onMounted } from 'vue'
onMounted(() => {

})
</script>

<style>

</style>