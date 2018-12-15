var userName = "xiecheng";
var time = Date.parse(new Date());
var data = {
    "username": userName,
    "registTime": time
};
var db = connect('weichuang');
db.user.insert(data);
print('insert success');