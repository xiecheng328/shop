var modify = {
    findAndModify: 'user',
    query: {name: 'xiecheng'},
    update: {$set: {age: 32}},
    new: true
};

var result = db.runCommand(modify);
printjson(result);




db.user.find(
    {age: {$gte: 20, $lte: 30}},
    {name: true, age: true, _id: false}
)

db.user.find(
    {age: { $in: [20, 25]}},
    {name: true, age: true, _id: false}
)


db.user.find({
    $and: [
        {age: { $gte: 20}},
        {'pc.brand': 'IBM'}
    ]},
    {name: true, age: true, _id: false}
)


db.user.find(
    {hobby: '篮球'},
    {name: true, age: true, _id: false}
);

db.user.find(
    {hobby: {$in: ['篮球', '敲代码']}},
    {name: true, age: true, _id: false}
);


db.user.find(
    {hobby: {$size: 3}},
    {name: true, age: true, _id: false}
);



db.user.find(
    {},
    {name: true, age: true, _id: false}
).limit(10).skip(20).sort({age: -1})



