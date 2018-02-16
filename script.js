$(document).ready(function() {
  $("#bookSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#bookInput").val();
    var type = $("#bookType").find(":selected").val();
    if (value){
      var myurl= "https://www.googleapis.com/books/v1/volumes" ;
      var data = {"q":type+value}
      $.ajax({
          url : myurl,
          type: 'GET',
          data: data,
          dataType : "json",
          success : function(json) {
            console.log(json);
            var results ="<h1> Book Results </h1>";
            if(json.totalItems == 0){
              results +="<p>Sorry we couldn't find anything</p>"
            } else {
              for(var i = 0; i < json.items.length; i++){
                results += "<div class=\"eachBook\">";
                results += "<a href=" + json.items[i].volumeInfo.infoLink + ">";
                results += "<img src=" +json.items[i].volumeInfo.imageLinks.thumbnail + "/>";
                results += "<h2>" + json.items[i].volumeInfo.title + "</h2>";
                if(json.items[i].volumeInfo.authors != undefined){
                  results += "<h3>Author: " + json.items[i].volumeInfo.authors[0];
                  for(var j = 1; j < json.items[i].volumeInfo.authors.length; j++){
                    results += " & " + json.items[i].volumeInfo.authors[j];
                  }
                  results += "</h3>";
                }
                if(json.items[i].volumeInfo.publisher != undefined && json.items[i].volumeInfo.publishedDate != undefined){
                  results +="<h5>Publisher: " + json.items[i].volumeInfo.publisher + "</h5>";
                  results +="<h5>Published Date: " + json.items[i].volumeInfo.publishedDate + "</h5>";
                }
                if(json.items[i].volumeInfo.description != undefined){
                  results += "<p>" + json.items[i].volumeInfo.description + "</p>";
                }
                results += "</a></div>";
              }
            }
            $("#bookResults").html(results);
          }
      });
    }
  });

})
