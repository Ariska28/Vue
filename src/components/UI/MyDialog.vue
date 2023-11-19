<template>
  <div v-if="show" class="dialog" @click="hideDialog()">
    <div @click.stop class="dialog__content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin.js"
  export default {
    name: 'my-dialog',
    mixins: [toggleMixin]
  }
</script>

<style scoped>
  .dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }

  .dialog__content {
    margin: auto;
    padding: 50px;
    width: 40%;
    border-radius: 12px;
    background-color: rgb(240, 240, 240);
  }
</style>