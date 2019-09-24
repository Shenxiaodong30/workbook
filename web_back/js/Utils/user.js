var user = {
    /**
     * 管理员登录
     * @param {*} userName  用户名
     * @param {*} password  密码
     * @param {*} callBack  回调函数
     */
    login: function (userName, password, callBack) {
        $.post('http://localhost:8000/admin/login', {
            user_name: userName,
            password: password
        }, function (res) {
            // res 本次请求服务区返回的内容
            callBack(res);
        });
    },

    logout: function (callBack) {
        $.post('http://localhost:8000/admin/logout', function (res) {
            callBack(res); 
        });
    },
    getInfo : function(callBack) {
        $.get('http://localhost:8000/admin/getuser',function(res) {
            callBack(res);
        });
    }
};