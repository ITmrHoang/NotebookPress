<template>
  <div class="main">
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>
<!-- 
<script>
// Use a static import for server-side compatibility
import '~/assets/css/first.css'

// Caution: Dynamic imports are not server-side compatible
import('~/assets/css/first.css')
</script> -->

<style>
@import url("~/assets/css/layout.css");
</style>
