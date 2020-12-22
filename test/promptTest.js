descirbe('prompt.js', function(){
	describe('validatePhoneNumber', function(){

		it('should return a boolean', function(){
			var result = validatePhoneNumber('23456');
			expect(typeof result).toBe('boolean');
		});
		
		if('should return true when given a 1-800 number', function(){
			var result = validatePhoneNumber('1-800-867-5309');
			// 테스트가 예상대로 실패하면 아래 코드로 수정하자.
			// expect(result).toBe(true);
			expect(result).toBe(false);
		});

	});
});