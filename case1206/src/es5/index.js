"use strict";
$(function () {
    layui.use(['layer'], function () {
        var layer = layui.layer;
        // 报名按钮点击事件
        $('.bg').on('click', '.sign-btn', function () {
            // TODO:判断是否为普通用户
            var isCommonUser = true;
            if (isCommonUser) {
                layer.open({
                    type: 1,
                    closeBtn: 1,
                    shadeClose: true,
                    title: '',
                    content: $('#popup'),
                });
            }
        });
        // 抽奖次数
        var drawTime = 10;
        $('#lastDrawTimes').html(drawTime);
        // 抽一次
        $('#drawBtn').one('click', function () {
            $('.try').addClass('fadeOutLeft');
            if (drawTime > 0) {
                drawTime--;
                // 修改次数
                $('#lastDrawTimes').html(drawTime);
                // TODO:请求接口重新渲染历史记录
                //
                //
                $('.bingo')
                    .show()
                    .addClass('fadeInRight');
                setTimeout(function () {
                    $('.bingo').removeClass('fadeInRight');
                }, 500);
                $('#records').show();
            }
            else {
                $('.runout')
                    .show()
                    .addClass('fadeInRight');
            }
        });
        // 换一换
        var changeBtnAvailable = true;
        $('.change-btn').on('click', function () {
            if (changeBtnAvailable) {
                changeBtnAvailable = false;
                if (drawTime > 0) {
                    drawTime--;
                    // 修改次数
                    $('#lastDrawTimes').html(drawTime);
                    // TODO:请求接口重新渲染历史记录
                    //
                    //
                    $('.bingo')
                        .show()
                        .addClass('fadeInRight');
                    setTimeout(function () {
                        $('.bingo').removeClass('fadeInRight');
                        changeBtnAvailable = true;
                    }, 500);
                    $('#records').show();
                }
                else {
                    $('.bingo').addClass('fadeOutLeft');
                    $('.runout')
                        .show()
                        .addClass('fadeInRight');
                }
            }
        });
    });
});
