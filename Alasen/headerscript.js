$( document ).ready(function() {
    $('#topMenu').click(function () {
        $(this).children('.ham').toggleClass('active');
        $('#topMenu_block').toggleClass('active');
    });
    $('.menu-search').click(function () {
        $('.menu-search-container').toggleClass('active');
    });
    $('.menu-search-close').click(function () {
        $('.menu-search-container').toggleClass('active');
    });
    $('#campagnaheader').click(function (){
        $(location).attr('href', 'Campagna.html');
    });
    $('#strumentiheader').click(function (){
        $(location).attr('href', 'Strumenti.html');
    });
    $('#solisinheader').click(function (){
        $(location).attr('href', 'Pg.html');
    });
    $('#npcheader').click(function (){
        $(location).attr('href', 'Npc.html');
    });
    $('#magiaheader').click(function (){
        $(location).attr('href', 'Magia.html');
    });
    $('#loreheader').click(function (){
        $(location).attr('href', 'Lore.html');
    });
    $('#timelineheader').click(function (){
        $(location).attr('href', 'Timeline.html');
    });
    $('#mondoheader').click(function (){
        $(location).attr('href', 'Mondo.html');
    });
    $('#potenzeheader').click(function (){
        $(location).attr('href', 'Potenze.html');
    });
});