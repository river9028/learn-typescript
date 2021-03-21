{
	type Video = {
		id: string
		title: string;
		url: string;
		data: string;
	};
	type VideoMetadata = Pick<Video, 'id' | 'title'>;

	function getVideo(id: string): Video {
		return {
			id,
			title: 'video',
			url: 'https://..',
			data: 'byte-data...',
		}
	}
	// Pick: 기존의 타입에서 원하는 속성과 밸류만 뽑아서 타입으로 사용할 때 이용. 타입을 선언해서 사용하는 것이 좋음.
	// 비디오에 관련된 간략한 데이터만 리턴하는 함수
	// function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'> {
	function getVideoMetadata(id: string): VideoMetadata {
		return {
			id,
			title: 'video',
		}
	}
}