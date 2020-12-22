var kbValues = {
	projectName: 'kittenbook',
	versionNumber: '0.0.1',
	areaCodes : {
		'408': 'Silicon Valley',
		'702': 'Las Vegas',
		'801': 'Nothern Utah',
		'765': 'West Lafayette',
		'901': 'Memphis',
		'507': 'Rochester, MN'
	}
};

function getAreaCodes(){
    return kbValues.areaCodes;
}
// 사용자 이름 얻기
function getUserName() {
    var userName = prompt('Hello, what\'s your name?');

    if (!userName) {
        userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
    }
    return userName;
}

/*
 * Check the validaity of a phone number
 * @method
 * @param {string} phoneNumber The phone number to be validated
 * @return {boolean}
 */
function validatePhoneNumber(phoneNumber) {
    return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

// 사용자 전화번호 얻기
function getPhoneNumber(userName) {
    var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
    if (!validatePhoneNumber(phoneNumber)) {
        phoneNumber = prompt('Please enter a valid phone number.');
    }
    return phoneNumber;
}

// 전화번호로 지역 확인하기
function getLocation(phoneNumber) {
    // 전화번호 패턴 만들기
    var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
    // 전화번호에서 찾아낸 값 구하기
    var phoneMatches = phoneNumberPattern.exec(phoneNumber);
    var areaCodes, areaCode, locationName;
    if (phoneMatches) {
        areaCode = phoneMatches[1];
        areaCodes = getAreaCodes();
        locationName = areaCodes[areaCode];
    }

    // 삼항연산자가 사용되었다.
    // locationName이 있으면 리턴하고 아니면 'somewhere'를 리턴
    return locationName ? locationName : 'somewhere';
}
function getImages() {
    var images = document.querySelectorAll('div.userContentWrapper img, div.pinHolder img');
    return images;
}
function getImageHeight(image) {
    return image.height;
}

function getImageWidth(image) {
    return image.width;
}

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
function main() {
    var userName = getUserName();
    var phoneNumber = getPhoneNumber(userName);
    var location = getLocation(phoneNumber);
    var images = getImages();

    // setInterval은 setTimeout과 비슷한데,
    // 한 번만 실행되지 않게 계속 반복되어서 실행된다는 점이 다르다.
    // 페이지를 스크롤하면 추가로 로드되는 이미지를 위해서 setInterval를 이용했다.
    setInterval(function () {
        images = getImages();
        replaceImages(images, location);
    }, 3000);
}

main();