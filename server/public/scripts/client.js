console.log('client.js is loaded');

// $(document).ready(function(){
//     console.log('jQuery is loaded');
// })

$(document).ready(onReady);

function onReady(){
    console.log('jQuery is loaded');
    $('#submitButton').on('click', addNewQuote);
    // $.ajax({ // ajax is a method - trigger that fires off a request
    //     type: 'GET', //needs a type like on the server.js
    //     url: 'quotes' //needs a location, must match server.js
    // })
    // .then(function(response){
    //     $('#randomQuote').text(response.quote);
    // })
    allQuotes();
    getRandomQuote();
    onClick();
}

function getRandomQuote(){
    $.ajax({ 
        type: 'GET', 
        url: 'quotes' 
    })
    .then(function(response){
        $('#randomQuote').text(response.quote);
    })
}

function allQuotes(){
    console.log('allquotes');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            for (let i=0; i<response.length; i++){
                $('#allQuotes').append(`<li> ${response[i].quote} | ${response[i].author} </li>`);
            }
        });
}

function addNewQuote(){
    const newQuote = {
        text: $('#textInput').val(),
        author: $('#authorInput').val()
    };
    console.log('New quote object', newQuote);
    $.ajax({
        type: 'POST',
        url: '/all-quotes',
        data: newQuote
    })
    .then(function(response) {
        console.log(response);
    // getAllQuotes();
    })
}

function onClick(){
$('#randomButton').on('click', getRandomQuote);
}

// function clickHandler(){
//     console.log('the button works!');
//     $.ajax({
//         type: 'GET',
//         url: '/quotes'
//     })
//     .then(function(response){
//         $('#randomQuote').text(response.quote);
//     })
// }