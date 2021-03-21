import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
	readonly title: string;
	readonly url: string;
}

export interface TextData {
	readonly title: string;
	readonly body: string;
}

// 사용자에게 input을 받아오는 다이얼로그
// BaseComponent 상속하고,
// Dialog는 타입에 따라 다양한 컨텐츠를 추가할 수 있음.
// Video라면 url, Note라면 Body, ...
// 서로 다른 컨텐츠를 가져와야 하니깐, Composable 인터페이스 구현.
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
	closeListener?: OnCloseListener;
	submitListener?: OnSubmitListener;
	constructor() {
		super(`<dialog class="dialog">
						<div class="dialog__container">
							<button class="close">&times;</button>
							<div id="dialog__body"></div>
							<button class="dialog__submit">ADD</button>
						</div>
					</dialog>`);

		const close = this.element.querySelector('.close')! as HTMLButtonElement;
		// onclick으로 이벤트를 할당하기보다 보통은 addEventListener를 사용하는 것이 좋다!
		// addEventListener는 다수의 리스너가 등록되어 있으면, 순서대로 실행.
		// onclick으로 할당시, 기존 다른 리스너가 등록되어 있으면, 그것을 덮어씌움.
		// 해당 이벤트외 다수의 이벤트가 없다면 사용해도 무방하나, 그것이 아니라면 안전한 addEventListener를 사용해 처리하는 것이 좋다.
		close.onclick = () => {
			// 외부에서 주입받은(디펜전시 인젝션), 전달된 listener가 있다면, 호출!
			this.closeListener && this.closeListener();
		}
		const submit = this.element.querySelector('.dialog__submit')! as HTMLButtonElement;
		submit.onclick = () => {
			this.submitListener && this.submitListener();
		}
	}

	// 외부에서 주입할 수 있는 메소드
	setOnCloseListner(listener: OnCloseListener) {
		this.closeListener = listener;
	}
	setOnSubmitListner(listner: OnSubmitListener) {
		this.submitListener = listner;
	}
	// Composable 인터페이스(addChild()) 구현
	addChild(child: Component) {
		const body = this.element.querySelector(`#dialog__body`)! as HTMLElement;
		child.attachTo(body);
	}
}