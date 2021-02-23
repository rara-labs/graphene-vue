<template>
  <application>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </application>
</template>

<script>
import "@js/settings";
export default {};
</script>

<style lang="scss">
@import "@gn-styles/src/resets";
@import "@gn-styles/src/base";
@import "@gn-styles/src/layout";

application {
}
</style>
