var user1 = {
    name: "xiecheng",
    age: 32,
    hobby: ['敲代码', '篮球', '喝茶'],
    pc: {
        brand: 'apple',
        price: 10000
    }
};

var user2 = {
    name: 'xiaowu',
    age: 25,
    hobby: ['敲代码', '聊天', '篮球'],
    pc: {
        brand: 'IBM',
        price: 8000
    }
};

var user3 = {
    name: 'laofeng',
    age: 20,
    hobby: ['敲代码']
};

var db = connect('weichuang');
db.user.insert([user1, user2, user3]);
print('insert success 3 data');


db.user.update({name: 'xiecheng'}, {
    name: "xiecheng",
    age: 18,
    hobby: ['敲代码', '篮球', '喝茶'],
    pc: {
        brand: 'apple',
        price: 10000
    }
});

