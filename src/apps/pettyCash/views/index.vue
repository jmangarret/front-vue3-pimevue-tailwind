<template>
    <Home />
    <Incomes />
</template>

<script>
import { defineComponent } from 'vue'
import Home from './home/index.vue'
import Incomes from './incomes/index.vue'
export default defineComponent({
  components: {
      Home,
      Incomes
  }  
})
</script>