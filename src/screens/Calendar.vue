<template>
  <div class="calendar">
    <h3>Calendar page</h3>
    <div class="fab-wrapper"><Fab /></div>
  </div>
</template>

<script>
import Fab from "@/components/Fab";

export default {
  components: {
    Fab
  }
};
</script>

<style lang="stylus" scoped>
.fab-wrapper {
  position: absolute;
  bottom: 3rem;
  width: 100%;
}
</style>
