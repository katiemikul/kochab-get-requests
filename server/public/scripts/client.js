console.log('client.js is loaded');

// $(document).ready(function(){
//     console.log('jQuery is loaded');
// })

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded');
    $.ajax({ // ajax is a method - trigger that fires off a request
        type: 'GET', //needs a type like on the server.js
        url: '/all-quotes' //needs a location, must match server.js
    })
    .then(function(response){
        console.log(response);
    });
    onClick();
}

function onClick(){
$('#randomButton').on('click', clickHandler);
}

function clickHandler(){
    console.log('the button works!');
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
    .then(function(response){
        $('#randomQuote').text(response.quote);
    })
}