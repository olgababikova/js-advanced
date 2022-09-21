const goods = [
    { title: 'Shirt', price: 150, img: ''},
    { title: 'Socks', price: 50, img:  ''},
    { title: 'Jacket', price: 350, img:  ''},
    { title: 'Shoes', price: 250, img:  ''},
];

const renderGoodsItem = (title, price, img = 'https://place-hold.it/200x150') => {
    return `<div class="goods-item"><img src="${img}" alt="картинка товара"><h3>${title}</h3><p>${price} руб.</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');

};

class GoodsItem {
    constructor(title, price) {
    this.title = title;
    this.price = price;
    }

    render() {
    return `<div
    class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}


class GoodsList {
    constructor() {
    this.goods = [];
    }
    fetchGoods() {
    this.goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getSum = this.goods.reduce(function(sum, currentPrice){
                return sum + currentPrice.price
            })
    
}
const list = new GoodsList();
list.fetchGoods();
list.render();



