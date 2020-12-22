/**
 * Execute the kittenbook program.
 * @method main
 */
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