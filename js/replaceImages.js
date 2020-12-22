/**
 * Get the height of an HTML image
 * @method getImageHeight
 * @param {Image} image 
 */
function getImageHeight(image) {
    return image.height;
}

/**
 * Get the width of an HTML image
 * @method getImageWidth
 * @param {Image} image 
 */
function getImageWidth(image) {
    return image.width;
}

/**
 * Replace the 'src' attribute of a list of images with images of the same width and height
 * from placekitten or placepuppy, depending on location.
 * @method replaceImages
 * @param {Images[]} images A list of HTML images to be replace. The list can be an Array or NodeList.
 * @param {string} location A location string used to determine what kind of image to show.
 */
function replaceImages(images, location) {
    var baseImageUrl, height, width, image;
    switch (location) {
        case 'Memphis':
            // 멤피스는 강아지
            baseImageUrl = 'http://placepuppy.it/';
            break;
        default:
            // 다른 곳은 고양이
            baseImageUrl = 'http://placekitten.com/g/';
            break;
    }
    for (var i = 0, len = images.length; i < len; i++) {
        image = images[i];
        height = getImageHeight(image);
        width = getImageWidth(image);
        image.src = baseImageUrl + width + '/' + height;
    }
}