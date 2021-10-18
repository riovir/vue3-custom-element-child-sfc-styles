<template>
  <section class="layout">
    <h1>Child styles are not applied</h1>
    <em>They were supposed to get colored backgrounds.</em>
    <HelloWorldCe msg="Background is only colored when the workaround is enabled" />
  </section>
</template>

<script>
import HelloWorldCe from "./components/HelloWorld.ce.vue";

export default {
  name: "App",
  components: {
    HelloWorldCe,
  },
};
</script>

<style>
section {
  font-family: sans-serif;
}
.box {
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 2px solid grey;
}
.layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
