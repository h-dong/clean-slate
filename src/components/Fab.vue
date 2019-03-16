<template>
  <div class="wrapper">
    <div class="text">
      <Plus :size="32" decorative />
    </div>
    <div class="base" />
  </div>
</template>

<script>
import Plus from "vue-material-design-icons/Plus";

export default {
  components: {
    Plus
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  width: 56px;
  height: 56px;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow:
    0px 3px 5px -1px rgba(0,0,0,0.2),
    0px 6px 10px 0px rgba(0,0,0,0.14),
    0px 1px 18px 0px rgba(0,0,0,0.12);
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  &:hover {
    background-color: #E0E0E0;
    box-shadow:
      0 5px 5px -3px rgba(0,0,0,.2),
      0 8px 10px 1px rgba(0,0,0,.14),
      0 3px 14px 2px rgba(0,0,0,.12);
  }

  &:active {
    background-color: #EEEEEE;
    background-size: 100%;
    transition: background 0.5s;
  }

  .text {
    color: #848484;
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }

  .base {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
    position: absolute;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
    border-radius: 50%;
  }
}
</style>
