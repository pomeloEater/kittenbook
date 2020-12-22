var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();

// currentTime은 '2014-01-25 at 14:45:12'와 같은 형식을 갖는다.
var currentTime = currentDate.getFullYear() + '-' + // 년도
(currentDate.getMonth() + 1) + '-' + // 월
currentDate.getDate() + ' at ' + // 일
currentDate.getHours() + ':' + // 시
currentDate.getMinutes() + ':' + // 분
currentDate.getSeconds(); // 초