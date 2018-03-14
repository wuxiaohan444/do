$(function () {
    let url = window.location.href;
    let a = url.split("=");
    let id = a[1];
    console.log(id);

    $.ajax({
        url:"http://m.51laiding.xyz?r=photo/photo_list",
        type:'POST',
        data:{
            rule_id:id
        },
        dataType:'JSONP',
        jsonp: "callback",
        jsonpCallback: "success_jsonpCallback",
        success:function (msg) {
            console.log(msg.data);
            $(".nav").html(template("tpl",{data:msg.data}));
        }
    })
});