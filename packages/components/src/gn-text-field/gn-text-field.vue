<template>
  <input
    :class="`${prefix}--text-field`"
    :value="value"
    :placeholder="placeholder"
  />
</template>

<script>
import prefix from "@js/settings";

export default {
  name: "TextField",
  props: {
    value: String,
    placeholder: String
  }
};
</script>

<style lang="scss">
@import "@gn-styles/src/base";

.#{$prefix}--text-field {
  font: inherit;
}
</style>
