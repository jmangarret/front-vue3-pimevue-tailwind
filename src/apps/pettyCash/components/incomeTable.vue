<template>
    <div class="grid grid-cols-1 gap-x-4" v-if="incomes.length > 0">
        <DataTable :value="incomes" responsiveLayout="scroll">
            <Column field="date" header="Fecha"></Column>
            <Column field="incomeType" header="Tipo de Ingreso"></Column>
            <Column field="numberDoc" header="Nº Documento"></Column>
            <Column field="client" header="Cliente"></Column>
            <Column field="concept" header="Concepto"></Column>
            <Column field="amount" header="Valor"></Column>
            <Column field="acciones" header="Acciones">
                <template #body>
                    <Button
                        v-on:click="editIncome"
                        type="button"
                        icon="pi pi-pencil"
                        class="p-button-warning"
                        style="margin-right: .5em"
                    ></Button>
                    <Button
                        v-on:click="deleteIncome"
                        type="button"
                        icon="pi pi-trash"
                        class="p-button-success"
                    ></Button>
                </template>
            </Column>
        </DataTable>
    </div>

    <div v-else>No existen registros</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        incomes: Object
    },
    data() {
        return {
            // dataIncomes: this.incomes
        }
    },
    // incomeServices: null,
    // created() {
    //     this.incomeServices = new incomeServices();
    // },
    mounted() {
        // console.log('dataIncomesincomes',this.dataIncomes);
    },
    //  setup(props) {
    //     console.log('SETUPO',props)
    // },
    methods: {
        editIncome() {
            console.log("Editar")
        },
        deleteIncome() {
            console.log("Delete")
        }
    }
})
</script>
