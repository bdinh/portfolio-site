'use strict';

$(function(){

    // Watches for what filter option button get click in order to apply a filter on
    // the images in the gallery
    $('.filter-button').on('click', function() {
        const filterWord = $(this).attr('data-filter');
        resetGallery();
        filterGallery(filterWord)
    });

    // Creates an overlay and inserts an image in the overlay to give an effect of
    // focusing on the image by means of enlarging it and blocking out the background
    $('.gallery-image').on('click', function () {
        $('#myModal').css('display', 'block');
        const imageSrc = $(this).attr('src');
        $('#insertImage').attr('src', imageSrc);
    });

    // Watches for the close button to be click to remove the overlay
    $('.close').on('click', function () {
        $('#myModal').css('display', 'none');
    });


    // The actual filtering of the image based on the elements class name and that
    // of the filter option
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

    // Resets the gallery after the filter option by making all of the images block element
    function resetGallery() {
        const imageGallery = $('.item-container');
        for (const image of imageGallery) {
            $(image).css('display', 'block');
        }
    }
});