<template>
 <select class="select"
         :value="modelValue" 
         @change="changeOption"
  >
    <option disabled value="">
      Choose the right option
    </option>

    <option v-for="option in options" 
            :key="option.value" 
            :value="option.value"
    >
      {{ option.name }}
    </option>
 </select>
</template>

<script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }

  }
</script>

<style scoped>
  .select {
    display: block;
    margin: 20px auto;
    height: 30px;
    border: 1px solid black;
    padding: 5px 15px;
    color: gray;
    border-radius: 10px;
    width: 20%;
  }
</style>