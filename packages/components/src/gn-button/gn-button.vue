<template>
  <button :class="`${prefix}--btn`">
    <slot />
  </button>
</template>

<script>
import prefix from "@js/settings";
console.log(prefix);

export default {
  name: "Button"
};
</script>

<style lang="scss">
@import "@gn-styles/src/base";

.#{$prefix}--btn {
  background-color: $gn-color-blue-400;
  font: inherit;
}
</style>
