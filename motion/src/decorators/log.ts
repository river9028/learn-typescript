function Log(_: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const newDescriptor = {
    ...descriptor,
    value: function (...args: any[]): any {
      console.log(`Calling ${name} with arguments:`);
      console.dir(args);
      const result = descriptor.value.apply(this, args);
      console.log(`Result:`);
      console.dir(result);
      return result;
    },
  };

  return newDescriptor;
}

class Calculator {
	// @log라는 어노테이션을 추가함으로써 해당 함수는 Log라고 정의된 데코레이터가 한단계 감싸고 있다. 위의 코드처럼, 함수 이름, 인자, 결과값을 출력.
	
	// Calling add with arguments:
	// [ 1, 2 ]
	// Result:
	// 3

	// 데코레이션 사용하려면 tscconfig에서 
	// 		"experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
	// true로 바꿔줘야함.
  @Log
  add(x: number, y: number): number {
    return x + y;
  }
	
	@Log
  subtract(x: number, y: number): number {
    return x - y;
  }
	
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
