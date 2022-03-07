const textConfig = {
  text1: "Lùn ơi",
  text2: "Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.",
  text3: "Lùn hãy ở đấy không cần thay đổi gì cả. Để Long tự thích nghi. Cho Long được ở bên Lùn nhé ♥",
  text4: "Nếu Lùn hông trả lời mà thoát ra tức là muốn làm vợ tớ tui đó nha :v",
  text5: "Không",
  text6: "Có",
  text7: "Mong là Lùn sẽ đọc được lời này :)<br/>T biết trong mắt Lùn t vẫn là đứa lêu lổng không có hoài bão, không tạo được cho Lùn sự tin tưởng, không cho Lùn được cảm giác an toàn</br>Nhưng t vẫn đang cố gắng thay đổi. Lùn hãy ở bên cạnh và nhìn những thay đổi này nhé ♥<br/>Yêu Lùn Rất Nhiều. Chúc Lùn có một ngày 8/3 vui vẻ hạnh phúc",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 429,
      imageHeight: 610,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    // var audio = new Audio("sound/duck.mp3");
    // audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    // var audio = new Audio("sound/Swish1.mp3");
    // audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: "",
      width: 900,
      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      onClose: () => {
        
      },
    })
  });
});
