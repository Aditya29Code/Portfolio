 AOS.init({
            duration: 1200,
            })

            $("#about").click(function() {
                $(".full").css("display", "block");
            });

            function show()
            {
                $(".full").css("display", "none");
            }

            $("#emoji").click(function() {
                $(".detail").css("display", "block");
                alert("jiji")
            });

            function show1()
            {
                $(".detail").css("display", "none");
            }

            $("#emojy").click(function() {
                $("#details-emojy").css("display", "block");
            });

            $("#closeemojy").click(function() {
                $("#details-emojy").css("display", "none");
            });

            $("#music").click(function() {
                $("#details-music").css("display", "block");
            });

            $("#closemusic").click(function() {
                $("#details-music").css("display", "none");
            });
            
            $("#image").click(function() {
                $("#details-image").css("display", "block");
            });

            $("#closeimage").click(function() {
                $("#details-image").css("display", "none");
            });
            
            $("#cogni").click(function() {
                $("#details-cogni").css("display", "block");
            });

            $("#closecogni").click(function() {
                $("#details-cogni").css("display", "none");
            });