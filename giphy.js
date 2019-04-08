//  api for giphy 
$("#done").on("click", function() {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=CGhOWJEeKEf4TLyMFomZTuIDYpCdWGKV&tag=hawaii";
    console.log(queryURL);
    $("display-gif").empty();
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    // After the data from the AJAX request comes back
      .then(function(response) {
  
      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
  
      // Creating and storing an image tag
        var display = $("<img>");
  
      // Setting the congratulation src attribute to imageUrl
        display.attr("src", imageUrl);
        display.attr("alt", "display");
  
      // Prepending the congratulation to the images div
        $(".display-gif").prepend(display);
      });
  
    });
    


