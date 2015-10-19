// CLIENT-SIDE JAVASCRIPT

console.log("JS is working"); 
// Calls function, on submit
$(document).ready(function(){
  Submitter();
});

// function definitions

function Submitter() {
  // set event listeners
  $("#new-list-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post serialized form to server
    $.post("/api/list", $(this).serialize(), function(response){
      // append lsit to the ejs
      var newList = response;
      var listString = makeString(newlist);
      $("#list-ul").prepend(listString);
      // reset the form 
      $("#submitButton")[0].reset();
    });
  });

}



function makeString(list){
  return '<li class="list-group-item"><h4 class="list-group-item-heading">' + list.name +
  '</h4><button data-id='+ list.id + ' type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
  '</li>';
}



