export default class incomeService{
    async getIncomeAll(){
       const getData = await fetch('http://localhost:3001/income/').then(res => res.json());
       return getData;
    }

    async getIncomeByDate(date){
        const getData = await fetch('http://localhost:3001/income/date/' + date).then(res => res.json());
        return getData;
    }

    async getIncomeByType(type){
        const getData = await fetch('http://localhost:3001/income/type/' + type).then(res => res.json());
        return getData;
    }

    async getIncomeByNumDoc(num){
        const getData = await fetch('http://localhost:3001/income/numdoc/' + num).then(res => res.json());
        return getData;
    }
}