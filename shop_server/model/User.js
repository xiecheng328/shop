const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userName: { unique: true, type: String },
    password: String,
    createDate: { type: Date, default: Date.now() }
});

userSchema.pre('save', function (next) {
    // 随机生成salt   10迭代次数
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash;
            next();
        })
    });
});

userSchema.methods = {
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            // console.log(_password, password);
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
};


// 发布模型
mongoose.model('User', userSchema);