<template>
  <article>
    <section v-if="slots.title">
      <slot name="title">
      </slot>
    </section>
    <section v-else-if="props.title" class="title">
      {{ props.title }}
    </section>

    <Transition>
    <slot>
      {{ JSON.stringify(props)}}
    </slot>
    </Transition>
  </article>
</template>
<script setup>
import {useSlots} from 'vue';

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
  font-size: 1.2rem;
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
</style>