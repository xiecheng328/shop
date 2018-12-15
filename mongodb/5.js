function getTel() {
    var prefixArr = ['130', '131', '132', '133', '135', '186', '187', '188', '199', '155'];
    var tel = prefixArr[parseInt(Math.random() * 10)];
    for (var i = 0; i < 8; i++) {
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}
// console.log(getTel());
var startTime = (new Date()).getTime();
var db = connect('weichuang');
var tempInfo = [];
for (var i = 0; i < 1000000; i++) {
    tempInfo.push({
        logintime: new Date(),
        tel: getTel()
    });
}
db.tel.insert(tempInfo);
var runTime = new Date().getTime() - startTime;
print('run time is ' + runTime + 'ms');




