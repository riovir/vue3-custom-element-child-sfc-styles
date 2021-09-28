<template>
  <section class="layout">
    <h1>Child styles are not applied</h1>
    <em>They were supposed to get colored backgrounds.</em>
    <HelloWorld msg="Preferred: non-CE child styles get added to shadow root" />
    <HelloWorldCe msg="Also fine: if the child has to a CE too" />
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorldCe from "./components/HelloWorld.ce.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
