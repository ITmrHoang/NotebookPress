<template>
  <div>
    <h1>Import Examples</h1>
    <ul>
      <li>import defaultExport from "module-name"; // Default export: tải default export với tên đặt < defaultExport ></li>
      <li>import * as name from "module-name"; // Namespace import: sử dụng name để truy cập các export cả default cũng là một attribute</li>
      <li>import { export1 } from "module-name"; // Named import: tải export1 từ module-name</li>
      <li>import { export1 as alias1 } from "module-name"; // Named import with alias: tải export1 từ module-name và đặt tên là alias1</li>
      <li>import { default as alias } from "module-name"; // Default import with alias: tải default export từ module-name và đặt tên là alias</li>
      <li>import { export1, export2 } from "module-name"; // Multiple named imports: tải export1 và export2 từ module-name</li>
      <li>import { export1, export2 as alias2, /* … */ } from "module-name"; // export1, export2 với tên alias2 và các export khác</li>
      <li>import { "string name" as alias } from "module-name"; // import  một đối tượng key là chuỗi với một alias</li>
      <li>import defaultExport, { export1, /* … */ } from "module-name"; // import defaultExport từ default và một số export khác</li>
      <li>import defaultExport, * as name from "module-name"; // import defaultExport và tất cả các export khác gồm cả default từ module-name</li>
      <li>import "module-name"; // import toàn bộ module mà không cần sử dụng các  hàm thực thi trong module sẽ được chạy các biến trong module đó vẫn thuộc scope của module</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>