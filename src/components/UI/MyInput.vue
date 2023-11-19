<template>
  <input class="post-form__input" 
         type="text"
         :value = "modelValue"
         @input = "updateInput"
  />
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [Number, String]
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value)
      }
    }
  }
</script>


<style scoped>

.post-form__input {
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #2c3e50;
    padding: 10px;
    width: 65%;
  }
</style>