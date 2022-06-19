import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import AddProductView from '../views/AddProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product List',
    component: ProductListView
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: AddProductView
  }
]

const router = new VueRouter({
  routes
})

export default router
