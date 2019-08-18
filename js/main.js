

//切换li标签选中状态(未完成)
$(function(){
    // li CSS选中状态切换
    $("#active li a").click(function() {
        $(this).siblings('li a').removeClass('active');  // 删除其他兄弟元素的样式
        $(this).addClass('active');                            // 添加当前元素的样式
    })

    // $("li").click(function(){
    //     var type=parseInt($(this).val());
    //     //alert(type);                       // 这里能获取到当前点击的li标签当前的value值
    //     $.ajax({
    //         url:'/h5/k/ajax_get_chart',
    //         type:'post',
    //         data:{type:type},
    //         dataType:'json',
    //         success:function(resp){
    //             alert(resp.data);
    //         }
    //     });
    // });
})
