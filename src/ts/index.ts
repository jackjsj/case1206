$(function() {
  layui.use(['layer'], function() {
    const layer = layui.layer;

    // 报名按钮点击事件
    $('.bg').on('click', '.sign-btn', () => {
      // TODO:判断是否为普通用户
      let isCommonUser = true;
      if (isCommonUser) {
        layer.open({
          type: 1,
          closeBtn: 1, //不显示关闭按钮
          shadeClose: true, //开启遮罩关闭
          title: '',
          content: $('#popup'),
        });
      }
    });

    // 抽奖次数
    let drawTime: any = 10;

    $('#lastDrawTimes').html(drawTime);
    // 抽一次
    $('#drawBtn').one('click', () => {
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
        setTimeout(() => {
          $('.bingo').removeClass('fadeInRight');
        }, 500);
        $('#records').show();
      } else {
        $('.runout')
          .show()
          .addClass('fadeInRight');
      }
    });
    // 换一换
    let changeBtnAvailable = true;
    $('.change-btn').on('click', () => {
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
          setTimeout(() => {
            $('.bingo').removeClass('fadeInRight');
            changeBtnAvailable = true;
          }, 500);
          $('#records').show();
        } else {
          $('.bingo').addClass('fadeOutLeft');
          $('.runout')
            .show()
            .addClass('fadeInRight');
        }
      }
    });
  });
});
