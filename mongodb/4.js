var db = connect('weichuang');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
});