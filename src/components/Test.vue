<template>
  <div>
    <hello></hello>
    <hello></hello>
  </div>


</template>
<script>
  import hello from './Hello.vue'
  export default {
    name:'test',
    data() {
      return {
        checked: true
      };
    },
    components: {
      hello
    }
  };
</script>
