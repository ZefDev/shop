<template>
  <div class="home">

    <ProductList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'ProductListView',
  components: {
      ProductList
  }
}
</script>
