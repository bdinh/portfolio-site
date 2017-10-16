'use strict';

$(function(){

    const imageGallery = $('.item-container');
    console.log(imageGallery);


    $('.filter-button').on('click', function() {
        const filterWord = $(this).attr('data-filter');
        resetGallery();
        filterGallery(filterWord)
    });


    function filterGallery(type) {
        if (type !== 'all') {
            const imageGallery = $('.item-container');
            for (const image of imageGallery) {
                if(!$(image).hasClass(type)) {
                    $(image).css('display', 'none');
                }
            }
        }
    }

    function resetGallery() {
        const imageGallery = $('.item-container');
        for (const image of imageGallery) {
            $(image).css('display', 'block');
        }
    }






});