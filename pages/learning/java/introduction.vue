<template>
<Segment>
  <div>
    <Fragment title="Skeleton">
      <code>file: First.java
        {{`
        import java.lang.*
        class First {
          public static void main(String args[])
          {
            System.out.println("Hello World")
          }
        }
        `}}
      </code>
      <p><strong>import</strong>: dùng  nhúng các gói vào file (lang: là gói cơ bản) ngay cả khi không nhập cũng sẽ tự động được nhập vào chương trình</p>
      <p><strong>class</strong>: Khai báo tên lớp và hàm chính tên lớp chính cần giống tên file</p>
      <p><strong>public static void main</strong> là hàm chính main điểm bắt đầu của một chương trình</p>
    </Fragment>
  </div>
</Segment>
</template>

<script lang="ts" setup>


</script>

<style>

</style>