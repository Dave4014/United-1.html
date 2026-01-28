
        $(document).ready(function () {

            $("#btn").click(function () {
                let userInput = $("#search").val();

                if (!userInput) return;

                $.ajax({
                    url: "https://api.giphy.com/v1/gifs/search",
                    method: "GET",
                    data: {
                        api_key: "mUqUya5YVJCeCCj6j3ICnAfErYo2RXoC",
                        q: userInput,
                        limit: 10
                    }
                })
                .done(function (res) {
                    $(".results").empty();

                    $.each(res.data, function (i, gif) {
                        let poster = gif.images.fixed_height.url;
                    $(".results").append(`
                <div class="col">
                <img src="${poster}" alt="gif">
                </div>
        `       );   
                    });
           

                })
                .fail(function () {
                    alert("Error loading GIFs");
                });
            });

        });
