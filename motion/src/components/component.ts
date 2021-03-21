// interface를 규격해둠으로써 사용하는 곳에서는 Component interface 타입만 사용.
export interface Component {
	attachTo(parent: HTMLElement, position?: InsertPosition): void;
	removeFrom(parent: HTMLElement): void;
	// 받아온 component를 positon에 붙여주는 메소드
	attach(component: Component, position?: InsertPosition): void;
	registerEventListener<K extends keyof HTMLElementEventMap>(
		type: K,
		listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
	): void;
}

/**
 * Encapsulate the HTML element creation 
 * HTML 요소를 만드는걸 캡슐화
 */

// BaseComponent를 사용하는 사람이
// HTMLElement의 조금 더 다양한 서브클래스를 이용할 수 있도록
// 제네릭 사용. 허나 반드시 BaseComponent이거나 BaseComponent 상속하는 클래스만 가능하도록.
// 외부에서 볼 수 없고, 상속하는 자식만 접근 가능.
// 한번 만들어지면 읽기만 가능.

// 인터페이스 적용.
export class BaseComponent<T extends HTMLElement> implements Component {
	// 요소안의 상태는 변경 가능하지만, 요소 자체를 바꿀수는 없음.
	protected readonly element: T;
	// 어떤 컨텐츠를 이용할건지 htmlString 전달. 
	constructor(htmlString: string) {
		const template = document.createElement('template');
		template.innerHTML = htmlString;
		this.element = template.content.firstElementChild! as T;
	}
	// api가 있다면 BaseComponent를 여기저기 전달하며 의사소통을 하기보단 인터페이스를 이용
	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		parent.insertAdjacentElement(position, this.element);
	}
	removeFrom(parent: HTMLElement) {
		// 전달된 parent가 정확한 부모가 맞는지 확인.
		if(parent !== this.element.parentElement){
			throw new Error(" Parent mismatch!");
		}
		// Node.removeChild()
		// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
		parent.removeChild(this.element);
	}
	attach(component: Component, position?: InsertPosition) {
		// 전달받은 component를 attachTo를 이용해 나 자신에게 붙여넣기
		component.attachTo(this.element, position);
	}

	// The same signature as the HTMLElement.addEventListener method
	registerEventListener<K extends keyof HTMLElementEventMap>(
		type: K,
		listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
	): void {
		this.element.addEventListener(type, listener);
	}

}