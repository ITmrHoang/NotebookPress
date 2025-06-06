<template>
  <Segment title="Tạo liên kết bằng command line symlink">
    <h3> cú pháp </h3>
    <code> {{"mklink [options] <Link> <Target></Target>"}}</code>
    <pre>{{`/D  Tạo liên kết tượng trưng thư mục. Mặc định là liên kết tượng trưng tệp
      /H Tạo liên kết cứng thay vì liên kết tượng trưng.
       /J  Tạo junction point – liên kết tới thư mục, dùng cho backward compatibility (ổn định hơn symbolic link thư mục). thường dùng thư mục lớn giống mount cũ không cần admin nhưng cần cùng ổ đĩa ` }}</pre>
  </Segment>
</template>

<script lang="ts" setup>

</script>

<style>

</style>