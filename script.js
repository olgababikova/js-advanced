//const goods = [
//   { title: 'Shirt', price: 150, img: ''},
//    { title: 'Socks', price: 50, img:  ''},
//    { title: 'Jacket', price: 350, img:  ''},
//    { title: 'Shoes', price: 250, img:  ''},
//];

//const renderGoodsItem = (title, price, img = 'https://place-hold.it/200x150') => {
//    return `<div class="goods-item"><img src="${img}" alt="картинка товара"><h3>${title}</h3><p>${price} руб.</p></div>`;
//};

//const renderGoodsList = (list) => {
//    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
//    document.querySelector('.goods-list').innerHTML = goodsList.join('');
//
//};

class GoodsItem {
    constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
    }

    render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб.</p><button class="product__add-to-cart" data-product_id="${this.id}">В корзину</button></div>`;
    }
}


class GoodsList {
    constructor() {
    this.goods = [];
    }
    fetchGoods() {
    this.goods = [
    { id: '1', title: 'Shirt', price: 150, quantity: 1 },
    { id: '2', title: 'Socks', price: 50, quantity: 1 },
    { id: '3', title: 'Jacket', price: 350, quantity: 1 },
    { id: '4', title: 'Shoes', price: 250, quantity: 1 },
    ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        document.querySelector('.text-sum').innerHTML = this.printText();
    }

    calcSum() {
        let listSum = 0;
        this.goods.forEach(good => {
            listSum += good.price * good.quantity;
        });
        
        console.log(listSum);
        return listSum;
    }

    calcQuantity() {
        let listQuantity = 0;
        this.goods.forEach(good => {
            listQuantity += good.quantity;
        });
        
        console.log(listQuantity);
        return listQuantity;
        
    }

    printText() {
        return `<div><p>В корзине ${this.calcQuantity()} товаров на ${this.calcSum()} руб.</p></div>`;
    }
};

class Basket {
    constructor() {
        this.basket = [];
    }

    addGoodsToBasket(good) {

    }

    removeGoodFromBasket(good) {

    }

    renderGoodBasket() {
        
    }
};

const list = new GoodsList();
list.fetchGoods();
list.render();
list.calcSum();
list.calcQuantity();
list.printText();





