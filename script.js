$(document).ready(function() {
  $("#bookSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#bookInput").val();
    var type = $("#bookType").find(":selected").val();
    if (value){
      var myurl= "https://www.goodreads.com/search/index.xml" ;
      var data = {"key":"uh83VhO5fzpRZFu1suZkGQ", "q":value}
      $.ajax({
          url : myurl,
          type: "get",
          data: data,
          dataType : "json",
          success : function(json) {
            Console.log(json);
          }
      });
    }
  });

})
