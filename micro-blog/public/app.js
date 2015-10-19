// CLIENT-SIDE JAVASCRIPT

console.log("JS is working"); 
// On page load
$(document).ready(function(){
  pageLoad();
});

// function definitions

function pageLoad() {
  // set event listeners
  $("#new-list-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post serialized form to server
    $.post("/api/list", $(this).serialize(), function(response){
      // append new food to the page
      var newList = response;
      // clear new food form
      var foodString = makeHTMLString(newlist);
      $("#list-ul").prepend(foodString);
      // reset the form 
      $("#submitButton")[0].reset();
    });
  });

}


function makeHTMLString(list){
  return '<li class="list-group-item"><h4 class="list-group-item-heading">' + list.name +
  '</h4><button data-id='+ list.id + ' type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
  '</li>';
}



