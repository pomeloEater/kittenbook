// 사용자 이름 얻기
/**
 * Ask for the user's name, twice if necessary.
 * @method getUserName
 * @return {string} The user's name
 */
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
/**
 * Ask for the user's phone number, twice if necessary.
 * @method getPhoneNumber
 * @param {string} userName The user's name (so we can pilitely address them 
 * when requesting the phone number)
 * @return {string}
 */
function getPhoneNumber(userName) {
    var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
    if (!validatePhoneNumber(phoneNumber)) {
        phoneNumber = prompt('Please enter a valid phone number.');
    }
    return phoneNumber;
}

// 전화번호로 지역 확인하기
/**
 * Determine location based on phone number
 * @method getLocation
 * @param {string} phoneNumber 
 * @return {string}
 */
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