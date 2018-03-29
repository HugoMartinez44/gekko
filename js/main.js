
$('.carousel').carousel({
    interval: 4000
});

$("#pop_achat").hide();
$("#pop_location").hide();
$("#pop_vente").hide();
$("#pop_syndic").hide();
$("#pop_gestion").hide();
$("#pop_renseignements").hide();


$( "#logo_achat" ).hover(
    function() {
        $("#pop_achat").slideDown(300);},
    function() {
        $("#pop_achat").slideUp(200);}
        );

$( "#logo_location" ).hover(
    function() {
        $("#pop_location").slideDown(300);},
    function() {
        $("#pop_location").slideUp(200);}
);

$( "#logo_vente" ).hover(
    function() {
        $("#pop_vente").slideDown(300);},
    function() {
        $("#pop_vente").slideUp(200);}
);

$( "#logo_syndic" ).hover(
    function() {
        $("#pop_syndic").slideDown(300);},
    function() {
        $("#pop_syndic").slideUp(200);}
);

$( "#logo_gestion" ).hover(
    function() {
        $("#pop_gestion").slideDown(300);},
    function() {
        $("#pop_gestion").slideUp(200);}
);

$( "#logo_renseignements" ).hover(
    function() {
        $("#pop_renseignements").slideDown(300);},
    function() {
        $("#pop_renseignements").slideUp(200);}
);
