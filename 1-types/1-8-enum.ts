{
	/**
	 * Enum 
	 * 
	 * 여러가지 관련된 상수 값을 한곳에 모아서 정의할 수 있도록 도와주는 타입
	 */

	// JavaScript 
	const MAX_NUM = 6; // 상수는 const를 이용해 대문자로 변수 선언.
	const MAX_STUDENT_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2; // 서로 연관되어 있지만 묶을 수 있는 타입이 존재하지 않음.
	const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 })
	// Object.freeze(객체를 동결. 동결된 객체는 더 이상 변경될 수 없음)를 이용한 대체 방법
	const dayOfToday = DAYS_ENUM.MONDAY;

	// 여러가지 상수 값을 한곳에 모아서 타입이 보장되고, 
	// 타입의 값이 변화되지 않기때문에 안전하게 사용 가능하게 하는 타입이 ENUM

	// TypeScript 
		
	// 정의하는 문자만 대문자로 작성, 나머지는 소문자
	// enum에 따로 값을 지정하지 않으면 첫 요소가 0부터 시작해 1씩 증가해서 지정된다.
	// 문자 지정도 가능
	enum Days {
		Monday, // 0
		Tuesday, // 1
		Wednesday, // 2
		Thursday, // 3
		Friday, // 4
		Saturday,
		Sunday,
	}
	
	console.log(Days.Tuesday);
	let day: Days = Days.Saturday;
	day = Days.Tuesday; // Days에 있는 어떤 것이든 할당 가능.  
	day = 10; // enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당이 가능. 타입 보장 X.
	console.log(day);
	
	/**
	 * TypeScript에서는 가능한 한 enum은 사용하지 않는다 
	 * enum 대신에 union 타입을 활용해 상수를 선언.
	 */
	type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
	
	let dayOfWeek: DaysOfWeek = "Monday"; // 지정한 값만 사용 가능.
	// dayOfWeek = 'ellie'; 위의 enum처럼 엉뚱한 값을 할당할 수 없음.

	/**
	 * Enum을 사용하는 경우
	 * 
	 * 다른 모바일 클라이언트(Android/IOS)는 코틀린이나 스위프트 언어를 사용하기 때문에 
	 * 사용자의 데이터를 JSON으로 묶어서 다시 다른 클라이언트에 보내야 할 때 
	 * 모바일 클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 
	 * 유니온 차입을 표현할 수 있는 방법이 없기 때문에 
	 * 서로 이해할 수 있는 enum 타입을 사용하지만, 
	 * 웹 클라이언트나 다른 모바일 클라이언트와 의사소통을 할 필요가 없다면 
	 * enum 대신에 type을 사용하는게 안전하다.   
	 */
}