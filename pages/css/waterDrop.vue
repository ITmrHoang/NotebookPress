<template>
  <div>
    <div class="drop"> </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .drop{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: inset 15px 15px 20px rgba(0,0,0,0.05),
    10px 15px 20px rgba(0,0,0,0.1),
    inset -15px -15px 20px rgba(255,255,255,1)
  }
  .drop::before {
    content: "";
    position: absolute;
    inset: 15px;
    box-shadow:  inset 10px 10px 10px #fff;
    border-radius: 50%;
    filter: blur(5px)
  }
</style>