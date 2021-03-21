import { BaseComponent } from "../../component.js";
import { MediaData } from "../dialog.js";

// dialog 안에 들어가는 HTML 요소를 생성하는 클래스
// 이미지, 비디오를 위한 미디어 인풋 클래스.
export class MediaSectionInput extends BaseComponent<HTMLElement> implements MediaData {
	constructor() {
		super(`<div>
						<div class="form__container">
							<label for="title">Title</label>
							<input type="text" id="title" />
						</div>
						<div class="form__container">
							<label for="url">URL</label>
							<input type="text" id="url" />
						</div>
					</div>`);
	}

	// 클래스안의 getter를 이용해 
	// getter를 호출하는 그 시점의 DOM 요소를 읽어온다! 
	get title(): string {
		const element = this.element.querySelector('#title')! as HTMLInputElement;
		return element.value;
	}

	get url(): string {
		const element = this.element.querySelector('#url')! as HTMLInputElement;
		return element.value;
	}
}