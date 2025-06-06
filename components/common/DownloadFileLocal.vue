<template>
  <div class="cursor-pointer" @click="handleClick" v-bind="$attrs">
    <slot>{{ label }}</slot>
    <Icon :name="icon" :style="style" />
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import downloadByUrl from '~/shared/utils/downloadByUrl';
const vm = getCurrentInstance();
const {icon= "", label="", style= "", url, fileName="" } = defineProps<{fileName?: string, url?: string, icon?: string, label?: string, style?: string| object| Array<string>}>()
const emit = defineEmits(['click'])
const attr = useAttrs()
const handleClick = () => {
  if(vm?.vnode?.props?.onClick) {
    emit('click')
  } else if(url) {
    downloadByUrl(url, fileName)
  }
}
</script>

<style></style>