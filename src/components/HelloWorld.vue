<template>
  <div class="box is-green">{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.is-green {
  background: hsl(130, 60%, 70%);
  border-color: hsl(130, 60%, 30%);
}
</style>
