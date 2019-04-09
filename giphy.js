//Array of topics

var topics = ["hawaii","island","volcano"]

// Need to add logic to dynamically update buttons to click with above topics


//Button click calls Giphy API
$("#done").on("click", function() {

var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=CGhOWJEeKEf4TLyMFomZTuIDYpCdWGKV&tag=hawaii";
    console.log(queryURL);
    $("display-gif").empty();
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
      .then(function(response) {


// Need to add logic to dynamically search by topics, ratings, etc
// Saving the image_original_url property
      var imageUrl = response.data.image_original_url;
  
// Creating and storing image
      var display = $("<img>");

  
      display.attr("src", imageUrl);
      display.attr("alt", "display");
  
//Displaying addtional images when button is clicked 
        $(".display-gif").prepend(display);
      });
  
    });
    


