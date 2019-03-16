<template>
  <li>
    <input type="checkbox" name="check" id="hi">
    <div class="wrapper">
      <span class="title">i'm a todo</span>
      <div class="tags">
        <small class="tag">Personal</small>
        <small class="tag">ASAP</small>
      </div>
    </div>
    <button>...</button>
  </li>
</template>

<style lang="stylus" scoped>
li {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  list-style: none;
  margin-bottom: 0.5rem;

  input[type=checkbox] {
    width: 3rem;
  }

  .wrapper {
    width: calc(100% - 6rem);
    text-align: left;
    padding-bottom: 0.5rem;

    .title {
    }

    .tags {
      display: flex;

      .tag {
        padding-right: 0.5rem;
      }
    }
  }

  button {
    width: 3rem;
  }
}
</style>
