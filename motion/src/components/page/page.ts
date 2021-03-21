{ 
	/* ---- decorators 적용 전 코드 ---- */
	// import { BaseComponent, Component } from "../component.js";

	// // 동적인 카드를 담을 수 있는 Page
	// // export class PageComponent {
	// // 	// 카드들의 목록을 담고 있는 HTML 요소(ul)
	// // 	private element: HTMLUListElement;
	// // 	constructor() {
	// // 		// ul 요소 생성
	// // 		this.element = document.createElement('ul');
	// // 		// class 이름 세팅
	// // 		this.element.setAttribute('class', 'page');
	// // 		// textContent 생성
	// // 		this.element.textContent = 'This is PageComponent';
	// // 	}

	// // 	// 외부에서 PageComponent를 만들어
	// // 	// 필요한 곳에 페이지를 추가할 수 있는 메소드
	// // 	// 추가할 부모 HTML요소, 어디에 추가할시 위치를 받아옴.  
	// // 	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {

	// // 		// insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null;
	// // 		// type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
	// // 		parent.insertAdjacentElement(position, this.element);
	// // 	}
	// // }

	// // Composable: 여러가지를 모아서 조립하고 묶을 수 있는 의미.
	// // Composable 인터페이스를 규격을 하는건 다른 요소를 함께 조립할 수 있다는 걸 의미.
	// export interface Composable {
	// 	addChild(child: Component): void;
	// }

	// // OnCloseListener 타입 설정
	// type OnCloseListener = () => void;

	// // DragState은 유니온 타입을 이용해 
	// // start '드래그하기 시작했을 때', 
	// // stop '드래그를 끝냈을 때'
	// // enter '드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을 때'
	// // leave '드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 '
	// // 4가지 지정.
	// type DragState = 'start' | 'stop' | 'enter' | 'leave';
	// // 필요한 정보를 인자로 전달해주고, 아무것도 리턴하지 않는 타입.

	// // target은 드래깅 되고 있는 나(T) 자신.
	// // target의 타입을 pageItemComponet로 하면 그외 다른 타입을 사용할 수 없고,
	// // target의 타입을 Componet로 하면 Componet의 서브타입을 전달하면 타입의 정보가 사라짐.
	// // 그래서 제네릭을 이용해 Componet를 상속하는 타입이라고 명시. 다른 컴포넌트에서 재사용 가능.

	// // state 드래그가 시작됐는지, 끝났는지 알려주는 상태. (DragState 타입)
	// type OnDragStateListener<T extends Component> = (target: T, state: DragState) => void;

	// interface SectionContainer extends Component, Composable {
	// 	setOnCloseListener(listener: OnCloseListener): void;
	// 	setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
	// 	muteChildren(state: 'mute' | 'unmute'): void;
	// 	getBoundingRect(): DOMRect;
	// 	onDropped(): void;
	// }

	// type SectionContainerConstructor = {
	// 	// 생성자를 정의하는 타입.
	// 	// "아무것도 받지 않는 생성자인데 호출시, 인터페이스 SectionContainer의 규격을 따라가는 그 어떤 클래스라도 가능!한 타입!"
	// 	new(): SectionContainer;
	// }

	// export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
	// 	// 외부로부터 전달받은 콜백함수 변수
	// 	private closeListener?: OnCloseListener;
	// 	// 드래그 발생시 실행할 콜백함수 변수
	// 	private dragStateListener?: OnDragStateListener<PageItemComponent>;
	// 	constructor() {
	// 		super(`<li draggable="true" class="page-item">
	// 						<section class="page-item__body"></section>
	// 						<div class="page-item__controls">
	// 							<button class="close">&times;</button>
	// 						</div>
	// 					</li>`);

	// 		// 해당하는 PageItemElement를 PageComponent에서 제거할 수 있는 close 버튼
	// 		const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;

	// 		// closeBtn 클릭시, 외부에서 전달받은 콜백 함수 호출 
	// 		closeBtn.onclick = () => {
	// 			this.closeListener && this.closeListener();
	// 		}

	// 		this.element.addEventListener('dragstart', (event: DragEvent) => {
	// 			this.onDragStart(event);
	// 		});

	// 		this.element.addEventListener('dragend', (event: DragEvent) => {
	// 			this.onDragEnd(event);
	// 		});

	// 		this.element.addEventListener('dragenter', (event: DragEvent) => {
	// 			this.onDragEnter(event);
	// 		});

	// 		this.element.addEventListener('dragleave', (event: DragEvent) => {
	// 			this.onDragLeave(event);
	// 		});
	// 	}

	// 	// 외부에서 어떤 아이템을 전달하냐에 따라서 추가해주는 메소드 
	// 	// child는 Component를 구현하는 어떤 클래스도 받을 수 있고,
	// 	addChild(child: Component) {
	// 		const container = this.element.querySelector('.page-item__body')! as HTMLElement;
	// 		// child가 어떤 Component인지 알 수 없지만, 
	// 		// 인터페이스 Component 규격을 따르고 있어
	// 		// attachTo 메소드 사용 가능.
	// 		child.attachTo(container);
	// 	}

	// 	// 외부에서 콜백함수를 설정하는 함수
	// 	setOnCloseListener(listener: OnCloseListener): void {
	// 		this.closeListener = listener;
	// 	}

	// 	onDragStart(_: DragEvent) {
	// 		this.notifyDragObservers('start');
	// 		this.element.classList.add('lifted');
	// 	}
		
	// 	onDragEnd(_: DragEvent) {
	// 		this.notifyDragObservers('stop');
	// 		this.element.classList.remove('lifted');
	// 	}
		
	// 	onDragEnter(_: DragEvent) {
	// 		this.notifyDragObservers('enter');
	// 		this.element.classList.add('drop-area');
	// 	}
		
	// 	onDragLeave(_: DragEvent) {
	// 		this.notifyDragObservers('leave');
	// 		this.element.classList.remove('drop-area');
	// 	}
		
	// 	onDropped() {
	// 		this.element.classList.remove('drop-area');
	// 	}

	// 	// PageItemComponent가 드래깅 될 떄, 실행할 콜백함수를 외부에서 등록하는 함수
	// 	setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>) {
	// 		this.dragStateListener = listener;
	// 	}

	// 	// 드래깅 발생시, 등록된 콜백함수가 있다면 실행하는 함수. 
	// 	// onDrag~~ 안에서 각각 작성할 수 있으나, 코드 중복으로 함수로 작성.
	// 	notifyDragObservers(state: DragState) {
	// 		this.dragStateListener && this.dragStateListener(this, state);
	// 	}

	// 	// state에 따라 모든 섹션에 pointer-events: none 요소를 추가/제거하는 메소드
	// 	muteChildren(state: 'mute' | 'unmute') {
	// 		if(state === 'mute') {
	// 			this.element.classList.add('mute-children');
	// 		} else {	
	// 			this.element.classList.remove('mute-children');
	// 		}
	// 	}

	// 	getBoundingRect(): DOMRect {
	// 		// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
	// 		return this.element.getBoundingClientRect();
	// 	}
	// }
	// export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
	// 	// Map은 중복데이터를 가질 수 있지만, Set은 중복된 자료를 가질 수 없는 자료구조
	// 	private children = new Set<SectionContainer>();
	// 	// 드롭타겟, 드래그타겟 
	// 	private dropTarget?: SectionContainer;
	// 	private dragTarget?: SectionContainer;

	// 	// 내부에서 한 가지 클래스를 만드는 것이 아니라
	// 	// 외부로부터 SectionContainerConstructor를 이용해 다양한 클래스 이용 가능.  
	// 	constructor(private pageItemConstructor: SectionContainerConstructor) {
	// 		// 부모클래스 생성자 호출
	// 		super(`<ul drop class="page"></ul>`);

	// 		this.element.addEventListener('dragover', (event: DragEvent) => {
	// 			this.onDragOver(event);
	// 		});
	// 		this.element.addEventListener('drop', (event: DragEvent) => {
	// 			this.onDrop(event);
	// 		});
	// 	}

	// 	onDragOver(event: DragEvent) {
	// 		event.preventDefault();
	// 		console.log('dragover', /* event */);
	// 	}

	// 	// 발생시 위치 변경하는 메소드
	// 	onDrop(event: DragEvent) {
	// 		event.preventDefault();
	// 		// console.log('dragTarget', this.dragTarget);
	// 		// console.log('dropTarget', this.dropTarget);
	// 		// console.log('drop', event);
	// 		// 여기에서 위치를 바꿔주면 된다!
	// 		if (!this.dropTarget) {
	// 			console.log('Undefined dropTarget!')
	// 			return;
	// 		}
	// 		if (this.dragTarget && this.dragTarget !== this.dropTarget) {
	// 			// 드롭하고자하는 요쇼의 y좌표
	// 			const dropY = event.clientY;
	// 			// DOM 엘리먼트의 위치 구하는 메소드를 이용(인터페이스로 규격 정의, 클래스에서 메소드구현.)
	// 			const srcElement = this.dragTarget.getBoundingRect();
	// 			this.dragTarget.removeFrom(this.element);
	// 			// 요소를 추가하는 attach api 새로 생성
	// 			// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
	// 			// 요소 안이 아닌, 요소 이전 형제 요소에 붙이기 
	// 			// this.dropTarget.attach(this.dragTarget, 'beforebegin');

	// 			// dropY에 따라 이전 형제요소, 이후 형제요소에 붙이도록 변경
	// 			this.dropTarget.attach(this.dragTarget, dropY < srcElement.y ? 'beforebegin' : 'afterend');
	// 		}

	// 		// onDrop 함수 종료시 실행!
	// 		this.dropTarget.onDropped();
	// 	}

	// 	// 어떤 section이 들어오는지는 모르지만, 
	// 	// PageItem에 전달받은 section을 추가한 다음,
	// 	// PageItem을 Page에 붙임.
	// 	addChild(section: Component) {
	// 		// 어떤 특정 클래스를 만드는 것이 아니라
	// 		// const item = new PageItemComponent(); 
	// 		// constructor에서 전달된 SectionContainerConstructor 타입을 생성
	// 		const item = new this.pageItemConstructor();
	// 		item.addChild(section);
	// 		item.attachTo(this.element, 'beforeend');
	// 		item.setOnCloseListener(() => {
	// 			item.removeFrom(this.element);
	// 			// children에 item 제거
	// 			this.children.delete(item);
	// 		});
	// 		// children에 item 추가
	// 		this.children.add(item);
	// 		// PageComponent는 재사용성을 위해 외부로부터 생성자를 받아오고 있고, 
	// 		// 그로인해 만들어지는 컴포넌트는 인터페이스 규격을 따르므로 재정의 필요.
	// 		// 인터페이스 SectionContainer에 setOnDragStateListener을 추가해 재정의!
	// 		item.setOnDragStateListener((target: SectionContainer, state: DragState) => {
	// 			// switch를 이용해 state에 맞게 기능 구현
	// 			switch (state) {
	// 				// 'start', 'stop' 일때는 dragTarget을 업데이트
	// 				case 'start':
	// 					this.dragTarget = target;
	// 					this.updateSections('mute');
	// 					break;
	// 				case 'stop':
	// 					this.dragTarget = undefined;
	// 					this.updateSections('unmute');
	// 					break;
	// 				// 'enter', 'leave' 일때는 dropTarget을 업데이트
	// 				case 'enter':
	// 					console.log('enter', target)
	// 					this.dropTarget = target;
	// 					break;
	// 				case 'leave':
	// 					console.log('leave', target)
	// 					this.dropTarget = undefined;
	// 					break;
	// 				default:
	// 					throw new Error(`unsupported state: ${state}`);
	// 			}
	// 		})
	// 	}

	// 	/* 
	// 		오류 발생!!!

	// 		pageItem 요소 안에 다른 자식 요소들이 있어서
	// 		모든 자식요소들에게도 들어갔다가 나오는 이벤트가 발생하면서 업데이트가 발생!!

	// 		- 솔루션
	// 		드롭 하자마자 다른 요소들은 pointer-event를 제거해줌으로써
	// 		더이상 포인트 이벤트가 발생하지 않도록 하는 방법을 사용

	// 		=> 드래그를 시작하자 마자 다른 모든 섹션 아이템들의 포인터 제거
	// 		=> page 컴포넌트가 가지고 있는 모든 섹션 자식들을 알고있어야 함.
	// 	 */

	// 	// children 안의 모든 section에 muteChildren를 실행시켜주는 메소드
	// 	private updateSections(state: 'mute' | 'unmute') {
	// 		this.children.forEach((section: SectionContainer) => {
	// 			section.muteChildren(state);
	// 		})
	// 	}
	// }
}

import { EnableDragging, EnableDrop, EnableHover } from "../../decorators/draggable.js";
import { Draggable, Droppable, Hoverable } from "../common/type.js";
import { BaseComponent, Component } from "../component.js";

// 동적인 카드를 담을 수 있는 Page
// export class PageComponent {
// 	// 카드들의 목록을 담고 있는 HTML 요소(ul)
// 	private element: HTMLUListElement;

 // 	constructor() {
// 		// ul 요소 생성
// 		this.element = document.createElement('ul');
// 		// class 이름 세팅
// 		this.element.setAttribute('class', 'page');
// 		// textContent 생성
// 		this.element.textContent = 'This is PageComponent';
// 	}

// 	// 외부에서 PageComponent를 만들어
// 	// 필요한 곳에 페이지를 추가할 수 있는 메소드
// 	// 추가할 부모 HTML요소, 어디에 추가할시 위치를 받아옴.  
// 	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {

// 		// insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null;
// 		// type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
// 		parent.insertAdjacentElement(position, this.element);
// 	}
// }

// Composable: 여러가지를 모아서 조립하고 묶을 수 있는 의미.
// Composable 인터페이스를 규격을 하는건 다른 요소를 함께 조립할 수 있다는 걸 의미.
export interface Composable {
	addChild(child: Component): void;
}

// OnCloseListener 타입 설정
type OnCloseListener = () => void;

// DragState은 유니온 타입을 이용해 
// start '드래그하기 시작했을 때', 
// stop '드래그를 끝냈을 때'
// enter '드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을 때'
// leave '드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 '
// 4가지 지정.
type DragState = 'start' | 'stop' | 'enter' | 'leave';
// 필요한 정보를 인자로 전달해주고, 아무것도 리턴하지 않는 타입.

// target은 드래깅 되고 있는 나(T) 자신.
// target의 타입을 pageItemComponet로 하면 그외 다른 타입을 사용할 수 없고,
// target의 타입을 Componet로 하면 Componet의 서브타입을 전달하면 타입의 정보가 사라짐.
// 그래서 제네릭을 이용해 Componet를 상속하는 타입이라고 명시. 다른 컴포넌트에서 재사용 가능.

// state 드래그가 시작됐는지, 끝났는지 알려주는 상태. (DragState 타입)
type OnDragStateListener<T extends Component> = (target: T, state: DragState) => void;

interface SectionContainer extends Component, Composable, Draggable, Hoverable {
	setOnCloseListener(listener: OnCloseListener): void;
	setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
	muteChildren(state: 'mute' | 'unmute'): void;
	getBoundingRect(): DOMRect;
	onDropped(): void;
}

type SectionContainerConstructor = {
	// 생성자를 정의하는 타입.
	// "아무것도 받지 않는 생성자인데 호출시, 인터페이스 SectionContainer의 규격을 따라가는 그 어떤 클래스라도 가능!한 타입!"
	new(): SectionContainer;
}

@EnableDragging
@EnableHover
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
	// 외부로부터 전달받은 콜백함수 변수
	private closeListener?: OnCloseListener;
	// 드래그 발생시 실행할 콜백함수 변수
	private dragStateListener?: OnDragStateListener<PageItemComponent>;
	constructor() {
		super(`<li draggable="true" class="page-item">
						<section class="page-item__body"></section>
						<div class="page-item__controls">
							<button class="close">&times;</button>
						</div>
					</li>`);

		// 해당하는 PageItemElement를 PageComponent에서 제거할 수 있는 close 버튼
		const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;

		// closeBtn 클릭시, 외부에서 전달받은 콜백 함수 호출 
		closeBtn.onclick = () => {
			this.closeListener && this.closeListener();
		}
	}

	// 외부에서 어떤 아이템을 전달하냐에 따라서 추가해주는 메소드 
	// child는 Component를 구현하는 어떤 클래스도 받을 수 있고,
	addChild(child: Component) {
		const container = this.element.querySelector('.page-item__body')! as HTMLElement;
		// child가 어떤 Component인지 알 수 없지만, 
		// 인터페이스 Component 규격을 따르고 있어
		// attachTo 메소드 사용 가능.
		child.attachTo(container);
	}

	// 외부에서 콜백함수를 설정하는 함수
	setOnCloseListener(listener: OnCloseListener): void {
		this.closeListener = listener;
	}

	onDragStart(_: DragEvent) {
		this.notifyDragObservers('start');
		this.element.classList.add('lifted');
	}
	
	onDragEnd(_: DragEvent) {
		this.notifyDragObservers('stop');
		this.element.classList.remove('lifted');
	}
	
	onDragEnter(_: DragEvent) {
		this.notifyDragObservers('enter');
		this.element.classList.add('drop-area');
	}
	
	onDragLeave(_: DragEvent) {
		this.notifyDragObservers('leave');
		this.element.classList.remove('drop-area');
	}
	
	onDropped() {
		this.element.classList.remove('drop-area');
	}

	// PageItemComponent가 드래깅 될 떄, 실행할 콜백함수를 외부에서 등록하는 함수
	setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>) {
		this.dragStateListener = listener;
	}

	// 드래깅 발생시, 등록된 콜백함수가 있다면 실행하는 함수. 
	// onDrag~~ 안에서 각각 작성할 수 있으나, 코드 중복으로 함수로 작성.
	notifyDragObservers(state: DragState) {
		this.dragStateListener && this.dragStateListener(this, state);
	}

	// state에 따라 모든 섹션에 pointer-events: none 요소를 추가/제거하는 메소드
	muteChildren(state: 'mute' | 'unmute') {
		if(state === 'mute') {
			this.element.classList.add('mute-children');
		} else {	
			this.element.classList.remove('mute-children');
		}
	}

	getBoundingRect(): DOMRect {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
		return this.element.getBoundingClientRect();
	}
}

@EnableDrop
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable, Droppable {
	// Map은 중복데이터를 가질 수 있지만, Set은 중복된 자료를 가질 수 없는 자료구조
	private children = new Set<SectionContainer>();
	// 드롭타겟, 드래그타겟 
	private dropTarget?: SectionContainer;
	private dragTarget?: SectionContainer;

	// 내부에서 한 가지 클래스를 만드는 것이 아니라
	// 외부로부터 SectionContainerConstructor를 이용해 다양한 클래스 이용 가능.  
	constructor(private pageItemConstructor: SectionContainerConstructor) {
		// 부모클래스 생성자 호출
		super(`<ul drop class="page"></ul>`);
	}

	onDragOver(_: DragEvent) { }
	// 발생시 위치 변경하는 메소드
	onDrop(event: DragEvent) {
		// console.log('dragTarget', this.dragTarget);
		// console.log('dropTarget', this.dropTarget);
		// console.log('drop', event);
		// 여기에서 위치를 바꿔주면 된다!
		if (!this.dropTarget) {
			console.log('Undefined dropTarget!')
			return;
		}
		if (this.dragTarget && this.dragTarget !== this.dropTarget) {
			// 드롭하고자하는 요쇼의 y좌표
			const dropY = event.clientY;
			// DOM 엘리먼트의 위치 구하는 메소드를 이용(인터페이스로 규격 정의, 클래스에서 메소드구현.)
			const srcElement = this.dragTarget.getBoundingRect();
			this.dragTarget.removeFrom(this.element);
			// 요소를 추가하는 attach api 새로 생성
			// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
			// 요소 안이 아닌, 요소 이전 형제 요소에 붙이기 
			// this.dropTarget.attach(this.dragTarget, 'beforebegin');

			// dropY에 따라 이전 형제요소, 이후 형제요소에 붙이도록 변경
			this.dropTarget.attach(this.dragTarget, dropY < srcElement.y ? 'beforebegin' : 'afterend');
		}

		// onDrop 함수 종료시 실행!
		this.dropTarget.onDropped();
	}

	// 어떤 section이 들어오는지는 모르지만, 
	// PageItem에 전달받은 section을 추가한 다음,
	// PageItem을 Page에 붙임.
	addChild(section: Component) {
		// 어떤 특정 클래스를 만드는 것이 아니라
		// const item = new PageItemComponent(); 
		// constructor에서 전달된 SectionContainerConstructor 타입을 생성
		const item = new this.pageItemConstructor();
		item.addChild(section);
		item.attachTo(this.element, 'beforeend');
		item.setOnCloseListener(() => {
			item.removeFrom(this.element);
			// children에 item 제거
			this.children.delete(item);
		});
		// children에 item 추가
		this.children.add(item);
		// PageComponent는 재사용성을 위해 외부로부터 생성자를 받아오고 있고, 
		// 그로인해 만들어지는 컴포넌트는 인터페이스 규격을 따르므로 재정의 필요.
		// 인터페이스 SectionContainer에 setOnDragStateListener을 추가해 재정의!
		item.setOnDragStateListener((target: SectionContainer, state: DragState) => {
			// switch를 이용해 state에 맞게 기능 구현
			switch (state) {
				// 'start', 'stop' 일때는 dragTarget을 업데이트
				case 'start':
					this.dragTarget = target;
					this.updateSections('mute');
					break;
				case 'stop':
					this.dragTarget = undefined;
					this.updateSections('unmute');
					break;
				// 'enter', 'leave' 일때는 dropTarget을 업데이트
				case 'enter':
					console.log('enter', target)
					this.dropTarget = target;
					break;
				case 'leave':
					console.log('leave', target)
					this.dropTarget = undefined;
					break;
				default:
					throw new Error(`unsupported state: ${state}`);
			}
		})
	}

	/* 
		오류 발생!!!

		pageItem 요소 안에 다른 자식 요소들이 있어서
		모든 자식요소들에게도 들어갔다가 나오는 이벤트가 발생하면서 업데이트가 발생!!

		- 솔루션
		드롭 하자마자 다른 요소들은 pointer-event를 제거해줌으로써
		더이상 포인트 이벤트가 발생하지 않도록 하는 방법을 사용

		=> 드래그를 시작하자 마자 다른 모든 섹션 아이템들의 포인터 제거
		=> page 컴포넌트가 가지고 있는 모든 섹션 자식들을 알고있어야 함.
	 */

	// children 안의 모든 section에 muteChildren를 실행시켜주는 메소드
	private updateSections(state: 'mute' | 'unmute') {
		this.children.forEach((section: SectionContainer) => {
			section.muteChildren(state);
		})
	}
}