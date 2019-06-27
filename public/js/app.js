


// document on ready, looking for html prior to running.
// does not load javascript until all html is loaded.
// $(function(){
// // all app code enter here.

// });

const displayProducts = function (products) {
    console.log("products", products)

    $("#results").empty();

    products.forEach(function (product) {

        var tr = $("<tr>").append(
            $("<td>").text(product.product_name),
            $("<td>").text(product.department_name),
            $("<td>").text(product.price),
            $("<td>").text(product.stock_quantity),
            
        );
        $("#results").append(tr);
    });
}




// calling GET request for /api/products to dislay JSON data
$.getJSON("/api/products", function (data) {
    displayProducts(data);
}
);


