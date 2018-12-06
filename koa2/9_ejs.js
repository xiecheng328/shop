const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

// 加载模板
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(async ctx=>{
    let title = 'hello weichuang';

    await ctx.render('index', {
        title,
        list: [
            {name: 'html', age: 20},
            {name: 'css', age: 30},
            {name: 'javascript', age: 40},
            {name: 'koa2', age: 50}
        ]
    });
});


app.listen(3000, () => {
    console.log('服务开启成功在3000端口');
});