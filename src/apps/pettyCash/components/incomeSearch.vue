<template>
  <div class="grid grid-cols-1 gap-x-4">
    <form action="" @submit.prevent="onSubmit">
      <div class="flex">
        <div class="flex-auto">
          <p>Tipo de Ingreso: {{ TypeIncome }}</p>
          <select v-model="selected">
            <option disabled value="">--Seleccionar--</option>
            <option>Efectivo</option>
            <option>Cuota</option>
          </select>
        </div>

        <div class="flex-auto">
          <p>Nº de Documento: {{ message }}</p>
          <input v-model="message" placeholder="Buscar" />
        </div>

        <div class="flex-auto">
          <Button
            v-on:click="$emit('getDataEvent')"
            type="button"
            icon="pi pi-search"
            style="margin-right: 0.5em"
          ></Button>
          <Button v-on:click="cleanIncome" type="button">Limpiar filtro</Button>
        </div>

        <div class="flex-auto">
          <p>Totales Ingresos:$ 143.814,00</p>
        </div>

        <div class="flex-auto">
          <p>Totales Registros: 4</p>
        </div>

        <div class="flex-auto">
          <Button
            v-on:click="addIncome"
            type="button"
            icon="pi pi-plus"
            style="margin-right: 0.5em"
            >Agregar Ingreso
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    data() {
        return {
            message: "",
            TypeIncome: "",
            selected: ""
        }
    },
  setup() {
    
  },
  methods:{
      cleanIncome(){

      },
      addIncome(){

      }
  }
}) 
</script>