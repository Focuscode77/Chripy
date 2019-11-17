// golbal moment


$("#chirp-submit"),on("click", function(event){
event.perventDefault();

// Make newChrip object
var newChrip = {
  
    author: $("#author").val().trim(),
    body: $("#chirp-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
};

console.log(newChrip);

// Send an AJAX
$.post("/api/new", newChrip)

.then(function(){

var row = $("<div>");
row.addClass("chrip");

row.append("<p>" + newChrip.author + " chirped: </p>");
row.append("<p>" + newChrip.body + "</p>");
row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

$("#chirp-area").prepend(row);

});

$("author").val("");
$("#chirp-box").val("");


});

// Grabs all your chirps

$.get("/api/all", function(data){

if(data.length !== 0){

    for(var i =0; i < data.length; i++){

     var row = $("<div>");
     row.addClass("chrip");


     row.append("<p>" + data[i].author + " chirped.. </p>");
     row.append("<p>" + data[i].body + "</p>");
     row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

     $("#chirp-area").prepend(row);


    }


}


});