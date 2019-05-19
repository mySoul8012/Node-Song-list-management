var express = require('express');
var router = express.Router();
var proxy = require('express-http-proxy');

/* GET home page. */
router.get('/', proxy(
    'http://139.199.225.229:32828/', {
        //过滤器（可选）
        filter: function(req, res) {
            return req.method == 'GET';
        },
        //请求路径解析（可选）
        proxyReqPathResolver: function(req) {

            console.log(`请求的路径：${req.url}`);     //请求的路径：/article/list
            var url = '/222/' + 'AddSongSongList.html' + req.url.substr(1)
            return url;      //转发请求路径： /article/list?token=123456
        },
        //返回数据处理,如果过程有异步操作应返回Promise（可选）
        userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
            //同步
            data = proxyResData.toString('utf8');
            return data;
        },
    }
));



module.exports = router;
