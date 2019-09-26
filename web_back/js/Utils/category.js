var category = {
    // 显示内容
    show : function(callBack) {
        $.get(urlIst.category_show,function(res) {
            callBack(res);
        })
    },
     /**
      * 
      * @param {*} name  名称
      * @param {*} slug  别名
      * @param {*} callBack  回调函数
      */
    add :function(name,slug,callBack) {
        $.post(urlIst.category_add,{name:name,slug,slug},function(res) {
            callBack(res);
        });
    },
    del : function(id,callBack) {
        $.post(urlIst.category_del,{id: id},function(res) {
            callBack(res);
        })
    },
    change : function(id,name,slug,callBack) {
        $.post(urlIst.category_change,{id: id,name:name,slug:slug},function(res) {
            callBack(res);
        })
    }
}
