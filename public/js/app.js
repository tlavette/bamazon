// document on ready, looking for html prior to running.
// does not load javascript until all html is loaded.
// $(function(){
// // all app code enter here.

// });

function displayProducts(Products) {
    $("tbody").empty();

    Products.forEach(function(Product){

        var tr = $("<tr>").append(
            $("<td>").text("testing products"),
            $("<td>").text("second test products"),
            $("<td>").text("third test products")
        );


        $("tbody").append(tr);
    });
}




// calling GET request for /api/products to dislay JSON data
        $.getJSON("/api/products", function(data){
            displayProducts(data);

    });


