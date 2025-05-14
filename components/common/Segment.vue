<template>
  <div v-bind="$attrs">
    <section v-if="slots.title">
      <slot name="title">
      </slot>
    </section>
    <section v-else-if="props.title" class="title">
      {{ props.title }}
    </section>

    <Transition :name="props.animation">
      <slot>
        content Segment
        {{ JSON.stringify(props)}}
        attr: {{JSON.stringify($attrs)}} \ {{JSON.stringify(attrs)}}
      </slot>
    </Transition>
  </div>
</template>
<script setup>
import {useSlots} from 'vue';
import { useAttrs, defineOptions } from 'vue'
const attrs = useAttrs()
console.log(attrs)
const props = defineProps({
      title: String,
      animation: {
        type: String,
        default: 'v'
      }
    }
)
const slots = useSlots();
</script>
<style scoped>
.title {
  font-size: 1.17em;
  font-weight: bold;
  font-family: Verdana, "sans-serif";
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.content_lv {
  --lv: v-bind(props.lv);
  padding-top: clamp(6px,calc(21px - calc(var(--lv)*3px)), 21px);
  padding-left: calc(v-bind('props.lv')*10px); /* can dont using '' in v-bind but error in ide */
}
</style>