import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
	constructor(title: string, url: string) {
		super(`<section class="video">
						<div class="video__player">
							<iframe src="" frameborder="0" class="video__iframe"></iframe>
						</div>
						<h3 class="page-item__title video__title"></h3>
					</section>
		`);

		const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
		console.log(url)
		iframe.src = this.convertToEmbeddedURL(url); // url => videoId => embed 추출 함수 필요

		const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
		titleElement.textContent = title;
	}

	// input
	// 1.https://www.youtube.com/watch?v=6uddGul0oAc
	// 2.https://youtu.be/6uddGul0oAc
	// output
	// https://www.youtube.com/embed/6uddGul0oAc
	// 정규표현식 Regex
	private convertToEmbeddedURL(url: string): string {
		const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
		const match = url.match(regExp);

		console.log(match);

		const videoId = match ? match[1] || match[2] : undefined;

		if (videoId) {
			return `https://www.youtube.com/embed/${videoId}`;
		}
		return url;
	}
}


// <iframe 
// 	width="838" 
// 	height="471" 
// 	src="https://www.youtube.com/embed/6uddGul0oAc" 
// 	frameborder="0"
// 	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 	allowfullscreen
// ></iframe>;
