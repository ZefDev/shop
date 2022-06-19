<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8">
          <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-if="show" id="product_form" novalidate>
          <b-form-group
            id="input-group-1"
            label="SKU "
            label-for="sku">
            <b-form-input
              id="sku"
              v-model="$v.form.sku.$model"
              :state="validateState('sku')"
              type="text"
              placeholder="Enter sku"
              required
            ></b-form-input>
            <b-form-invalid-feedback
              id="sku-live-feedback"
            >Please, submit required data.</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-2" label="Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="$v.form.name.$model"
              :state="validateState('name')"
              placeholder="Enter name"
              required
            ></b-form-input>
            <b-form-invalid-feedback
              id="name-live-feedback"
            >Please, submit required data.</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-2" label="Price ($)" label-for="price">
            <b-form-input
              id="price"
              v-model="$v.form.price.$model"
              :state="validateState('price')"
              placeholder="Enter price"
              required
            ></b-form-input>
            <b-form-invalid-feedback
            >
              <span v-if="!$v.form.price.required">Please, submit required data.</span>
              <span v-if="!$v.form.price.between">Please, provide the data of indicated type.</span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-3" label="Type switcher" label-for="input-3">
            <b-form-select
              id="productType"
              v-model="$v.form.productType.$model"
              :state="validateState('productType')"
              :options="options"
            ></b-form-select>
            <b-form-invalid-feedback
              id="productType-live-feedback"
            >Please, submit required data.</b-form-invalid-feedback>
          </b-form-group>

            <b-form-group v-if="form.productType == 'DVD'" id="input-group-dvd" label="Size (MB)" label-for="size">
              <b-form-input
                id="size"
                v-model="$v.form.size.$model"
                :state="validateState('size')"
                placeholder="Enter size"
                required
              ></b-form-input>
              <b-form-invalid-feedback
                id="size-live-feedback"
              >
                <span v-if="!$v.form.size.required">Please, submit required data.</span>
                <span v-if="!$v.form.size.between">Please, provide the data of indicated type.</span>
              </b-form-invalid-feedback>
            </b-form-group>

          <b-form-group v-if="form.productType == 'Book'" id="input-group-book" label="Weight (KG)" label-for="weight">
            <b-form-input
              id="weight"
              v-model="$v.form.weight.$model"
              :state="validateState('weight')"
              placeholder="Enter weight"
              required
            ></b-form-input>
            <b-form-invalid-feedback
              id="weight-live-feedback"
            >
              <span v-if="!$v.form.weight.required">Please, submit required data.</span>
              <span v-if="!$v.form.weight.between">Please, provide the data of indicated type.</span>
            </b-form-invalid-feedback>
          </b-form-group>


          <b-form-group v-if="form.productType == 'Furniture'" id="input-group-furniture">
            <b-form-group id="input-group-furniture-height" label="Height (CM)" label-for="height">
              <b-form-input
                id="height"
                v-model="$v.form.height.$model"
                :state="validateState('height')"
                placeholder="Enter height"
                required
              ></b-form-input>
              <b-form-invalid-feedback
                id="height-live-feedback"
              >
                <span v-if="!$v.form.height.required">Please, submit required data.</span>
                <span v-if="!$v.form.height.between">Please, provide the data of indicated type.</span>
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-furniture-width" label="Width (CM)" label-for="width">
              <b-form-input
                id="width"
                v-model="$v.form.width.$model"
                :state="validateState('width')"
                placeholder="Enter width"
                required
              ></b-form-input>
              <b-form-invalid-feedback
                id="width-live-feedback"
              >
                <span v-if="!$v.form.width.required">Please, submit required data.</span>
                <span v-if="!$v.form.width.between">Please, provide the data of indicated type.</span>
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-furniture-length" label="Length (CM)" label-for="length">
              <b-form-input
                id="length"
                v-model="$v.form.length.$model"
                :state="validateState('length')"
                placeholder="Enter length"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-invalid-feedback
              id="length-live-feedback"
            >
              <span v-if="!$v.form.length.required">Please, submit required data.</span>
              <span v-if="!$v.form.length.between">Please, provide the data of indicated type.</span>
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button type="submit" variant="primary">Save</b-button>
          <b-button type="reset" variant="danger">Cancel</b-button>
        </b-form></b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { validationMixin } from "vuelidate";
import { required, between} from 'vuelidate/lib/validators'


export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                sku: '',
                name: '',
                price: null,
                productType : 'DVD',
                size: null,
                weight: null,
                length: null,
                width: null,
                height: null,
            },
            options: ['DVD', 'Book', 'Furniture'],
            show: true,
        }
    },
    validations() {
         if (this.form.productType == 'DVD') {
            return {
                form:{
                    sku: {
                        required,
                    },
                    name: {
                        required,
                    },
                    price: {
                        required,
                        between: between(0, 99999999)
                    },
                    productType: {
                        required,
                    },
                    size: {
                        required,
                        between: between(0, 99999999)
                    },
                },
            }
        } else if(this.form.productType == 'Book') {
            return {
                form:{
                    sku: {
                        required,
                    },
                    name: {
                        required,
                    },
                    price: {
                        required,
                        between: between(0, 99999999)
                    },
                    productType: {
                        required,
                    },
                    weight: {
                        required,
                        between: between(0, 99999999)
                    },
                },
            }
        }else {
            return {
                form:{
                    sku: {
                        required,
                    },
                    name: {
                        required,
                    },
                    price: {
                        required,
                        between: between(0, 99999999)
                    },
                    productType: {
                        required,
                    },
                    length: {
                        required,
                        between: between(0, 99999999)
                    },
                    width: {
                        required,
                        between: between(0, 99999999)
                    },
                    height: {
                        required,
                        between: between(0, 99999999)
                    },
                },
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();

            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            const options = {
                url: 'https://api-shop-scandi.000webhostapp.com/product/create',
                method: 'POST',
                data: {
                    product: this.form,
                }
            }
            this.$axios(options)
            .then(response => {
                console.log(response.data);
                this.$router.push('/');
            });
            
        },
        onReset(event) {
            event.preventDefault()

            this.form.sku = ''
            this.form.name = ''
            this.form.productType = null

            this.$router.push('/');
        },
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
    }
}
</script>