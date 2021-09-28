<template>
  <div class="box is-blue">{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.is-blue {
  background: hsl(190, 60%, 70%);
  border-color: hsl(190, 60%, 30%);
}
</style>
