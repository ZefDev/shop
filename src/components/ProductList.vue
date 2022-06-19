<template>
    <b-container>
      <b-row align-v="start">
        <b-col><h1 style="text-align: left">Product list</h1></b-col>
        <b-col cols="12" md="auto"><button @click="$router.push('/add-product')" class="btn btn-success">ADD</button></b-col>
        <b-col col lg="2"><button class="btn btn-danger" @click="deleteProducts()">MASS DELETE</button></b-col>
      </b-row>
      <b-row>
        <b-container>
          <b-row style="margin-left: 0">
          <div v-for="product in products" :key="product.sku" class="card" style="width: 18rem; margin: 10px">
            <div class="card-body">
              <input type="checkbox" :value="product.sku" v-model="selectedProducts" class="delete-checkbox">
              <p class="card-text text-center">{{product.sku}}</p>
              <p class="card-text text-center">{{product.name}}</p>
              <p class="card-text text-center">{{product.price}} $</p>
              <p class="card-text text-center" v-if="product.productType == 'Book'">Weight: {{product.weight}} KG</p>
              <p class="card-text text-center" v-else-if="product.productType == 'DVD'">Size: {{product.size}} MB</p>
              <p class="card-text text-center" v-else-if="product.productType == 'Furniture'">Dimensions: {{product.height}}х{{product.width}}х{{product.length}}</p>
            </div>
          </div>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data(){
        return{
            products: [],
            selectedProducts: [],
        }
    },
    mounted() {
        this.getListProducts();
    },

    methods:{
        getListProducts(){
            axios.get('https://api-shop-scandi.000webhostapp.com/product/list')
            .then(response => {
                console.log(response.data);
                this.products = response.data;
            });
        },
        deleteProducts(){
            this.selectedProducts.join()
            const data = { productsIds: this.selectedProducts };

            axios.post('https://api-shop-scandi.000webhostapp.com/product/delete', data)
            .then(response => {
                console.log(response.data);
                this.getListProducts();
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkbox{
    margin-left: 0;
}
</style>
