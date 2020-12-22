> 출처 <br /> 스티븐 푸트, 다시 시작하는 프로그래밍-자바스크립트로 배우는 웹프로그래밍 A to Z (Foote(2014))

# **정규 표현식**

```jsx
var yearPattern = /[0-9]{4}/; // 연도 검색

var myName = 'Steven Foote';
var myNickname = 'Steve Foote';
var namePattern = /Steven/; // 정규 표현식으로 표현한 이름
```

### **정규 표현식 검사**

```jsx
namePattern.test(myName); // true
namePattern.exec(myName); // ["Steven"]
myName.match(namePattern); // ["Steven"]
namePattern.test(myNickname); // false;
```

- `Pattern.test(String)` : return boolean
- `Pattern.exec(String)` : return array(start part)
- `String.match(pattern)` : return array or null

### **반복**

- `?` : 앞의 문자가 하나 나오거나 아예 나오지 않음 {0,1}

    ```jsx
    namePattern = /Steven?/;
    namePattern.test(myNickname); // true
    namepattern.test(myName); // true
    ```

- `+` : 앞의 문자가 하나 이상 나옴 {1,}

    ```jsx
    var excitementPattern = /Wo+w/;
    var notYetExcited = 'Wow... Regular Expressions are weird :/';
    excitementPattern.exec(notYetExcited);
    // ["Wow"]
    var startingToGetExcited = 'Wooow. Regular Expressions are... pretty cool.';
    excitementPattern.exec(startingToGetExcited);
    // ["Wooow"]
    var totallyLovingRegEx = 'Wooooooooww! Regular Expressions are awesome!!!';
    excitementPattern.exec(totallyLovingRegEx);
    // ["Woooooooow"]
    var excitedButBadAtSpelling = 'Www! Regular Expressions, I <3 u!';
    excitementPattern.exec(excitedButBadAtSpelling);
    // null
    ```

- `*` : 앞에 나오는 문자가 나오지 않거나 하나 이상 나오는 경우 {0,}

    ```jsx
    excitementPattern = /Wo*w/;
    excitementPattern.test(excitedButBadAtSpelling);
    // true
    ```

- `.` : 임의의 문자

    ```jsx
    excitementPattern = /Wo*w.*!/;
    excitementPattern.test(notYetExcited); // false
    excitementPattern.test(excitedButBadAtSpelling); // true
    excitementPattern.exec(excitedButBadAtSpelling);
    // ["Www! Regular Expressions, I <3 u!", index: 0, input: "Www! Regular Expressions, I <3 u!", groups: undefined]
    ```

### **길이 지정**

- `{n}` : 앞에 오는 문자가 정확히 n번 연속해서 나오는 경우
- `{n,}` : 앞에 나오는 문자가 최소 n번 연속해서 나오는 경우
- `{m,n}` : 앞에 나오는 문자가 최소 m번, 그리고 최대 n번 연속해서 나오는 경우

### **대괄호 이해하기**

```jsx
lowerCaseName = 'steven foote';
// namePattern == /Steven?/
namePattern.test(lowerCaseName); // false
namePattern = /[Ss]teven?/;
namePattern.test(lowerCaseName); // true
```

- `^` : 반대

    ```jsx
    namePattern = /Steve[^n]/;
    namePattern.test('Steve Foote'); // true
    namePattern.test('Steveq Foote'); // true
    namePattern.test('Steven Foote'); // false
    ```

### **축약형들**

- `\b` : 단어 문자의 경계. 단어 문자 다음(\w)에 단어 문자가 아닌 문자(\W)가 나올 경우를 찾는다.
- `\B` : 단어 문자가 아닌 문자의 경계. 단어 문자 두 개가 연속으로 나오거나, 단어 문자가 아닌 문자 두 개가 연속으로 나오는 경우를 찾는다.
- `\d` : 숫자. [0-9]의 축약형
- `\D` : 숫자를 제외한 문자. [^0-9]의 축약형이다.
- `\n` : 줄바꿈 문자
- `\r` : 캐리지 리턴(Carriage return) 문자. 윈도우에서 줄바꿈 문자로 사용된다.
- `\s` : 공백문자. 공백문자는 스페이스(스페이스바를 누를 때 입력되는 문자), 탭, 줄바꿈(\n), 캐리지 리턴(\r) 등을 말한다.
- `\t` : 탭 문자.
- `\w` : 단어 문자. 알파벳과 숫자, _ 문자. \w는 [0-9a-zA-Z_]의 축약형.
- `\W` : 단어 문자(알파벳과 숫자, _)를 제외한 문자. [^0-9a-zA-Z]와 같다.

### **그 외**

- `(?:그룹)`

    ```jsx
    var fifiPattern = /(?:fi){1,2}/;
    var fifi = 'I have a dog named fifi';
    var fi = 'Sometimes I call my dog fi';
    fifiPattern.test(fifi); // true
    ```

- `|`

    ```jsx
    var namePattern = /Ste(?:v|ph)en?/;
    var myName = 'Stephen';
    namePattern.test(myName); // true
    myName = 'Steven';
    namePattern.test(myName); // true
    ```

- `(capture)` : 대치된 문자열에서 데이터를 추출할 수 있게 해준다

    ```jsx
    var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
    ```

### **전화번호에 따른 지역명 알아내기**

```jsx

var states = {
    'AL':'Alabama',
    'AK':'Alaska',
    'AZ':'Arizona',
    'AK':'Arkansas'
};
states.AL; // 'Alabama'
var stateName = 'AL';
states.stateName; // 동작X
states[stateName]; // 'Alabama'
states['AL']; // 'Alabama'
```

```jsx
var kbValues = {
	projectName: 'kittenbook',
	versionNumber: '0.0.1';
	areaCodes : {
		'408': 'Silicon Valley',
		'702': 'Las Vegas',
		'801': 'Nothern Utah',
		'765': 'West Lafayette',
		'901': 'Memphis',
		'507': 'Rochester, MN'
	}
};

var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
// 전화번호가 901-555-5309라면,
// phoneMatches = ['901-555-5309','901']
var areaCode = phoneMatches[1];
```

### **고급 찾기 및 변경**

```jsx
var author = 'firstName=Steven&lastName=Foote&age=27&favoriteFoods=waffles,Thaicurry';
suthor.replace(/(age=)(\d+)/, function(fullMatch, group1, group2) {
/**
 * fullMatch는 "age=27"을, group1은 'age='을
 * group2는 "27"dmf ekarh dlTek.
 */
// 기본 문자열에서 정규 표현식에 매치되는 부분이 모두 우리가 리턴한 값으로 바뀐다.
// group2에 1을 더한 후 두 gr
```

### **한 줄의 시작과 끝**

- `^` : 줄의 시작. 대괄호 안의 ^와 의미가 다름을 주의.
- `$` : 줄의 끝

    ```jsx
    var agePattern = /((?:^|&)age=)(\d+)/;
    ```

### **플래그**

- `\g` : 매치되는 모든 문자열을 찾는다
- `\i` : 대소문자 무시
- `\m` : 여러 줄 문자열