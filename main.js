const app = {
    data() {
        return{
        title : 'Inventory App',
        newProduct: '',
        product: [{
            id: 0,
            name:'Apple', 
            qty: 3,

        },
        {
            id: 1,
            name:'Orange', 
            qty: 5,
            
        },
     
    ],
        };
    },
    computed: {
        total() {
            let sum = 0;
            this.product.forEach(product=>{
                sum += product.qty;
            });
            return sum;

        },

    },
    methods: {
        addProduct() {
            if(this.newProduct.length > 0)
            {
                this.product.push({
                    id:new Date().toISOString,
                    name: this.newProduct,
                    qty: 0,
                });
                this.newProduct="";
            }
        },
        
    },
};

Vue.createApp(app).mount('#app');