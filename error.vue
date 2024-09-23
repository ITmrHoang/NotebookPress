<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div>
    <h1>Status: {{ error?.statusCode }}</h1>
    <DevOnly>
      <h2>Message {{ error?.statusMessage ?? "" }}</h2>
      <hr>
      </hr>
      <br />
      <h2>data: {{ error?.data ?? "" }}</h2>
      <h2> {{ error?.cause ? `cause: ${error?.cause}` : "" }}</h2>
    </DevOnly>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
