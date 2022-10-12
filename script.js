const API_URL ='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        products: [],
        filteredProducts: [],
        searchLine: '',
        isVisibleCart: false,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        basket:[],
    },

    methods: {
        makeGETRequest(url, callback){
            
            var xhr;
            if (window.XMLHttpRequest) {
                // Chrome, Mozilla, Opera, Safari
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                // Internet Explorer
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4) {      
                    callback(xhr.responseText); 
                }
            }
            
            xhr.open('GET', url, true);
            xhr.send();
        },
        
        search(searchLine){
            const regex = new RegExp(searchLine, 'i');
            console.log(regexp);
            this.filteredProducts =  this.products.filter(p => regex.test(p.product_name));
            //console.log(p.product_name)
            //this.render();
        },

        put(product) {
            //добавление в корзину
        }

    },

    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) =>{
            this.products = JSON.parse(goods);
            this.filteredProducts = JSON.parse(goods);
            //cb();
        })
    },
    
    computed: {

    }
});


    
