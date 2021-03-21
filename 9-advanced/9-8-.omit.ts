{
	// Omit: 기존의 타입에서 원하는 것을 제외한, 빼고 싶은 속성을 명시할 때 이용.
	type Video = {
		id: string
		title: string;
		url: string;
		data: string;
	};
	
	// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
	// 'K extends keyof any'이기때문에 해당 타입의 key가 아니여도 다른 어떤 종류의 key도 전달 가능.

	// 'url', 'data' 속성을 제외한 타입을 사용하는 타입
	type VideoMetadata = Omit<Video, 'url' | 'data' | 'h'>;

	function getVideo(id: string): Video {
		return {
			id,
			title: 'video',
			url: 'https://..',
			data: 'byte-data...',
		}
	}
	function getVideoMetadata(id: string): VideoMetadata {
		return {
			id,
			title: 'video',
		}
	}

	// 뺴고자 하는 속성이 정확하다면 Omit을,
	// 선택하고자 하는 것이 더 간단하다면 Pick을 이용.
}