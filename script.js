let elements = $('.modal-overlay-city, .modal-city');

$('#city-change').click(function(){
    elements.addClass('active');
});

$('.close-modal-city').click(function(){
    elements.removeClass('active');
});

$('.modal-city-button').click(function(){
    elements.removeClass('active');
    let cityName = $(this).data('city');
    console.log('setcookie ' + cityName);
    setCookie("city", cityName, { 'max-age': 432000 });
    $('#city-change').text(city[cityName]);
    document.location.reload(true);
    //console.log(cityName);
});
