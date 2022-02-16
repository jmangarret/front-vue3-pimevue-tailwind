<template>
    <TabGroup as="div" class="mt-2">
        <div class="border-b border-gray-200">
            <TabList class="-mb-px flex px-4 space-x-8">
                <Tab>
                    <button>Ingresos</button>
                </Tab>
                <Tab>
                    <button>Egresos</button>
                </Tab>
            </TabList>
        </div>

        <TabPanels as="template">
            <TabPanel class="pt-10 pb-8 px-4 space-y-10">
                <IncomeSearch @test-event="test" @get-data-event="getData" />
                <IncomeTable :incomes="incomes" />
            </TabPanel>

            <TabPanel class="pt-10 pb-8 px-4 space-y-10">
                <div class="grid grid-cols-2 gap-x-4">Contenido Egresos</div>
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>
<script>
import { defineComponent } from 'vue'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import IncomeSearch from "../../components/incomeSearch.vue";
import IncomeTable from "../../components/incomeTable.vue";
import incomeServices from '../../services/incomeServices';
import dayjs from 'dayjs'

export default defineComponent({
    components: {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        IncomeSearch,
        IncomeTable
    },
    data() {
        return {
            incomes: []
        }
    },
    incomeServices: null,
    created() {
        this.incomeServices = new incomeServices();
    },
    mounted(){
        this.getData();
    },
        // setup() {
    //     const state = reactive({
    //         incomes: [],
    //     });
    //     const getData = async () => {
    //         try {
    //             let date = new Date().toISOString().split('T')[0];
    //             const dataIncomes = await this.incomeServices.getIncomeByDate(date)
    //             dataIncomes.map(income => {
    //                 income.date = dayjs(income.date).format('DD-MM-YYYY')
    //                 income.amount = "$" + income.amount
    //             })
    //             state.incomes = dataIncomes
    //         } catch (error) {
    //             state.incomes = []
    //             return error;
    //         }
    //     }
    //     provide("state", state);

    //     provide("getData", getData);

    //     onMounted(() => {
    //         getData()
    //     })
    //     return { state };

    // },
    methods: {
        test() {
            console.log('test');
        },
        async getData() {
            try {
                let date = new Date().toISOString().split('T')[0];
                const dataIncomes = await this.incomeServices.getIncomeByDate(date)
                dataIncomes.map(income => {
                    income.date = dayjs(income.date).format('DD-MM-YYYY')
                    income.amount = "$" + income.amount
                })
                console.log('dataIncomes',dataIncomes)
                this.incomes = dataIncomes
            } catch (error) {
                this.incomes = []
                return error;
            }
        }
    }
})
</script>