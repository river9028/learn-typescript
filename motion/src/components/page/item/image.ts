// export class ImageComponent {
// 	private element: HTMLElement;
// 	// 이미지의 데이터 title, url를 가져옴.
// 	// title, url은 사용자에게 입력받은 데이터를 설정.
// 	constructor(title: string, url: string) {
// 		// template 태그를 이용해 내부의 string 타입으로 코드 작성 
// 		const template = document.createElement('template');

import { BaseComponent } from "../../component.js";

// 		// 사용자에게 전달받은 데이터를 바로 innerHTML에 입력하면 위험!
// 		//  HTML코드나 JS코드로 작성한 데이터를 넘길 수도 있으므로.
// 		template.innerHTML = `
// 			<section class="image">
// 				<div class="image__holder">
// 					<img class="image__thumbnail">
// 					<p class="image__title"></p>
// 				</div>
// 			</section>
// 		`;

// 		// 코드를 작성하는 시점에 null 아닌걸 알고 있음으로서 type assertion 사용
// 		this.element = template.content.firstElementChild! as HTMLElement;

// 		const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
// 		imageElement.src = url;
// 		imageElement.alt = title;

// 		const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
// 		titleElement.textContent = title;
// 	}

// 	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
// 		parent.insertAdjacentElement(position, this.element);
// 	}
// }

export class ImageComponent extends BaseComponent<HTMLElement> {
	constructor(title: string, url: string) {
		super(`
			<section class="image">
				<div class="image__holder">
					<img class="image__thumbnail">
				</div>
				<h2 class="page-item__title image__title"></h2>
			</section>
		`);

		const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
		imageElement.src = url;
		imageElement.alt = title;

		const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
		titleElement.textContent = title;
	}

}