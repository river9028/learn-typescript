import { Component } from "./components/component.js";
import { InputDialog, MediaData, TextData } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

// T라는 타입은 MediaSectionInput이거나 TextSectionInput이 될 수 있고,
// type inputComponentConstructor<T = MediaSectionInput | TextSectionInput> = {
	
// 정확하게 사용할 타입을 지정하는게 아니라 어떤 Component를 만드는건 상관없지만, 해당 데이터(MediaData | TextData)는 반드시 가지고 있어야한다고 명시!!
// MediaSectionInput, TextSectionInput에 커플링 되어있지 않고, 인터페이스만으로 정의를 해둠으로서 다른 형태의 타입을 만들 수 있다.
type inputComponentConstructor<T = (MediaData | TextData) & Component> = {
	// new가 만드는 것은 T타입이 된다!!!
	new(): T;
}


class App {
	// Component이면서, addChild 사용이 가능한 요소.
	private readonly page: Component & Composable;
	// app을 추가할 최상위 루트요소, dialog를 추가할 요소
	// dialogRoute는 클래스 안에서 접근해야하므로 멤버 변수로 만든다. 
	constructor(appRoute: HTMLElement, private dialogRoute: HTMLElement) {
		this.page = new PageComponent(PageItemComponent);
		this.page.attachTo(appRoute);

		{
			// const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
			// // // image.attachTo(appRoute, 'beforeend');
			// this.page.addChild(image);

			// const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=6uddGul0oAc');
			// // video.attachTo(appRoute, 'beforeend');
			// this.page.addChild(video);

			// const note = new NoteComponent('Note Title', 'Note Body');
			// // note.attachTo(appRoute, 'beforeend');
			// this.page.addChild(note);

			// const todo = new TodoComponent('Todo Title', 'Todo Item');
			// // todo.attachTo(appRoute, 'beforeend');
			// this.page.addChild(todo);

			// const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
			// imageBtn.addEventListener('click', () => {
			// 	const dialog = new InputDialog();
			// 	const inputSection = new MediaSectionInput();
			// 	// addChild를 이용해 dialog에 필요한 inputSection을 추가
			// 	dialog.addChild(inputSection);
			// 	dialog.attachTo(dialogRoute);

			// 	dialog.setOnCloseListner(() => { dialog.removeFrom(dialogRoute) });
			// 	dialog.setOnSubmitListner(() => {
			// 		// 사용자에게 전달받은 요소를 getter title, url를 사용!
			// 		const image = new ImageComponent(inputSection.title, inputSection.url);
			// 		this.page.addChild(image);
			// 		dialog.removeFrom(dialogRoute);
			// 	});
			// });

			// const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
			// videoBtn.addEventListener('click', () => {
			// 	const dialog = new InputDialog();
			// 	const inputSection = new MediaSectionInput();
			// 	dialog.addChild(inputSection);
			// 	dialog.attachTo(dialogRoute);

			// 	dialog.setOnCloseListner(() => { dialog.removeFrom(dialogRoute) });
			// 	dialog.setOnSubmitListner(() => {
			// 		// 섹션을 만들어서 페이지를 추가 해준다.
			// 		const video = new VideoComponent(inputSection.title, inputSection.url);
			// 		this.page.addChild(video);
			// 		dialog.removeFrom(dialogRoute);
			// 	});
			// });

			// const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
			// noteBtn.addEventListener('click', () => {
			// 	const dialog = new InputDialog();
			// 	const inputSection = new TextSectionInput();
			// 	dialog.addChild(inputSection);
			// 	dialog.attachTo(dialogRoute);

			// 	dialog.setOnCloseListner(() => { dialog.removeFrom(dialogRoute) });
			// 	dialog.setOnSubmitListner(() => {
			// 		// 섹션을 만들어서 페이지를 추가 해준다.
			// 		const note = new NoteComponent(inputSection.title, inputSection.body);
			// 		this.page.addChild(note);
			// 		dialog.removeFrom(dialogRoute);
			// 	});
			// });

			// const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
			// todoBtn.addEventListener('click', () => {
			// 	const dialog = new InputDialog();
			// 	const inputSection = new TextSectionInput();
			// 	dialog.addChild(inputSection);
			// 	dialog.attachTo(dialogRoute);

			// 	dialog.setOnCloseListner(() => { dialog.removeFrom(dialogRoute) });
			// 	dialog.setOnSubmitListner(() => {
			// 		// 섹션을 만들어서 페이지를 추가 해준다.
			// 		const todo = new TodoComponent(inputSection.title, inputSection.body);
			// 		this.page.addChild(todo);
			// 		dialog.removeFrom(dialogRoute);
			// 	});
			// });
		}

		this.bindElementToDialog<MediaSectionInput>(
			'#new-image',
			MediaSectionInput,
			(input: MediaSectionInput) => new ImageComponent(input.title, input.url),
		);

		this.bindElementToDialog<MediaSectionInput>(
			'#new-video',
			MediaSectionInput,
			(input: MediaSectionInput) => new VideoComponent(input.title, input.url),
		);

		this.bindElementToDialog<TextSectionInput>(
			'#new-note',
			TextSectionInput,
			(input: TextSectionInput) => new NoteComponent(input.title, input.body),
		);

		this.bindElementToDialog<TextSectionInput>(
			'#new-todo',
			TextSectionInput,
			(input: TextSectionInput) => new TodoComponent(input.title, input.body),
		);

		// For deomo
		this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/600/300'));
		this.page.addChild(new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=6uddGul0oAc'));
		this.page.addChild(new NoteComponent('Note Title', "Don't forget"));
		this.page.addChild(new TodoComponent('Todo Title', 'JS CSS HTML'));
		this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/600/300'));
		this.page.addChild(new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=6uddGul0oAc'));
		this.page.addChild(new NoteComponent('Note Title', 'to code your ...'));
		this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));
	}


	// 특정한 버튼이라는 요소에 다이얼로그를 연결해주고, 
	// Add 버튼이 눌러지면, 동적으로 요소를 페이지에 추가해주는 메소드. 

	// 제네릭 함수.
	
	// 커플링이 되어 았음. (ex: 미디어 데이터를 가지고 있는 다른 Input을 만들고 싶다면, ...? 수정 필요! 확장성이 떨어짐.)
	// private bindElementToDialog<T extends MediaSectionInput | TextSectionInput>(

	// 어떤 Component를 만드는건 상관없지만, 해당 데이터(MediaData | TextData)는 반드시 가지고 있어야한다고 규격!!
	private bindElementToDialog<T extends (MediaData | TextData) & Component>(
		selector: string,
		// 코드 작성 시점에는 inputComponentConstructor는 어떤 타입인지 알 수 없다.
		inputComponent: inputComponentConstructor<T>,
		// 전달한 T타입의  input으로 어떤 Component를 만드는 콜백함수.
		makeSection: (input: T) => Component,
	) {
		const element = document.querySelector(selector)! as HTMLButtonElement;
		element.addEventListener('click', () => {
			const dialog = new InputDialog();
			// 내부적으로 결정해 만드는 것이 아니라 외부에서 생성자를 인자로 전달받아
			// 사용되는 시점에 결정되는 inputComponent 사용해 실행
			const input = new inputComponent();
			// addChild를 이용해 dialog에 필요한 inputSection을 추가
			dialog.addChild(input);
			// dialogRoute는 클래스 안에서 접근해야하므로 멤버 변수로 만든다. 
			dialog.attachTo(this.dialogRoute);

			dialog.setOnCloseListner(() => { dialog.removeFrom(this.dialogRoute) });
			dialog.setOnSubmitListner(() => {
				// 사용자에게 전달받은 요소를 getter title, url를 사용!
				// const section = new ####Component(inputSection.title, inputSection.url);
				const section = makeSection(input);
				this.page.addChild(section);
				dialog.removeFrom(this.dialogRoute);
			});
		});
	}
}

// class '.document' 요소는 index.html에 무조건 있기때문에 '!'를 사용해 type assertion을 사용.
new App(document.querySelector('.document')! as HTMLElement, document.body);

/**
 * 현재까지 작성된 코드의 흐름
 *
 * 1. 어플리케이션 실행
 * 2. app.ts 실행
 * 3. App 클래스의 인스턴스 생성. (생성자 안에 document안에 "document"라는 클래스명을 가진 요소를 가져와 전달. .document: header와 footer 사이의 동적으로 추가할 컨테이너 요소.)
 * 4. App: page라는 컨포넌트를 만들어서, 그 page를 attachTo 메소드를 이용해 전달받은 요소에 추가.
 * 5. PageComponent: 생성자 안에서 우리가 원하는 DOM 요소를 만들어 줌. attachTo를 사용하는 쪽에 api 전달.
 */