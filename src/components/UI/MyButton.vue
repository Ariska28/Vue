<template>
  <button class="btn"> 
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>


<style scoped>
  .btn {
    border-radius: 4px;
    padding: 10px 24px;
    background-color: #2c3e50;
    color: white;
    font-weight: 600;
    border: none;
    max-width: 140px;
  }
</style>