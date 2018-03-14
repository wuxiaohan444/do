$(function () {
    let url = window.location.href;
    let a = url.split("=");
    let id = a[1];
    console.log(id);

    $.ajax({
        url:"http://m.51laiding.xyz?r=photo/photo_detail",
        type:'POST',
        data:{
            id:id
        },
        dataType:'JSONP',
        jsonp: "callback",
        jsonpCallback: "success_jsonpCallback",
        success:function (msg) {
            let data = msg.data;
            console.log(data);
            $(".info").html(template("tpl",data));
        }
    })
});