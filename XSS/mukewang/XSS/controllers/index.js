//设置一个缓存，放置评论，正常应该将评论放置于数据库
var comments ={};

//构造一个编码函数
function html_encode (str) {
    var s = '';
    if(str.length === 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
};

module.exports = {
    'GET /': async (ctx,next) => {
        //ctx.set('X-XSS-Protection',0);
        ctx.render('index.html',{
            title: 'XSS'
            //xss: ctx.query.xss
        });
    },

    'GET /comment': async (ctx,next) =>{
        comments.v = html_encode(ctx.request.query.comment);
    },

    'GET /getComment': async (ctx,next) =>{
        ctx.response.json({
            comment: comments.v
        });
    }
};