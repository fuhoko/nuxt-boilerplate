<template>
  <div
    @click="$emit('click')"
    :class="[
      `common-button--${modifier}`,
      {
        'common-button--prevent': isSending || isPrevent
      }
    ]"
    class="common-button"
  >
    <span v-html="title" />
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    modifier: {
      type: Number,
      default: 1
    },
    isSending: {
      type: Boolean,
      default: false
    },
    isPrevent: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.common-button {
  position: relative;
  width: 56px;
  height: 40px;
  line-height: 40px;
  padding: 0 8px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  color: darkturquoise;
  background-color: white;
  border: 1px solid darkturquoise;
  cursor: pointer;

  &--2 {
    color: white;
    background-color: violet;
    border-color: violet;
  }

  &--3 {
    color: white;
    background-color: red;
    border-color: red;
  }

  &--prevent {
    pointer-events: none;
  }
}
</style>
