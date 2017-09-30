$(document).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 50) {
        var a = top / 10
        var b = Math.ceil(a)
        switch (b) {
            case 1:
                $(".head-input").css("background", "rgba(255, 255, 255, 0)")
                break;
            case 2:
                $(".head-input").css("background", "rgba(255, 255, 255, .3)")
                break;
            case 3:
                $(".head-input").css("background", "rgba(255, 255, 255, .6)")
                break;
            case 4:
                $(".head-input").css("background", "rgba(255, 255, 255, .8)")
                break;
            case 5:
                $(".head-input").css("background", "rgba(255, 255, 255, .95)")
                $(".head input").css({
                    width: "90%",
                    background: "rgb(230,230,230)",
                    textIndent: "10%",
                    color: "rgb(81, 81, 81)"
                })
                $(".head-input i").css({
                    right: "88%",
                    color: "rgb(81, 81, 81)"
                })
                break;
            default:
                $(".head-input").css("background", "rgba(255, 255, 255, 0)")
                $(".head input").css({
                    width: "20%",
                    background: "#fff",
                    textIndent: "44%"
                })
                $(".head-input i").css({
                    right: "18%"

                })

        }
    }
    if (top > 50) {
        $(".head-input").css("background", "rgba(255, 255, 255, .95)")
        $(".head input").css({
            width: "90%",
            background: "rgb(230,230,230)",
            textIndent: "10%",
            color: "rgb(81, 81, 81)"
        })
        $(".head-input i").css({
            right: "88%",
            color: "rgb(81, 81, 81)"
        })
    }

})