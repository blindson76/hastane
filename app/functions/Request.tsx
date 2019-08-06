import axios from 'axios';
const config = window['config'];

export default class Request{

	config = {};

	constructor(){
		this.config = {
			method: 'post',
			url: config.tempUrl
		};
	}
	
	setMethodGet(){
		this.config['method'] = 'get';
	}

	setUrl(url){
		this.config['url'] = url;
	}

	setData(data){
		this.config['data'] = data;
	}

	setHeaderToken(){
		this.config['headers'] = {
			'Content-Type': 'application/json',
			'Authorization': localStorage.getItem('token')
		};
	}

	run(){

		const result = axios(this.config).then((response) => {
			console.log(response);
			const returnData = {
				code: response.data.status === 'OK' ? 200 : 900,
				resultMap: response.data.resultMap.data,
				message: response.data.status === 'OK' ? 'Success' : 'Beklenmedik bir sorun oluştu, bilgiler kayıt edilemedi.',
			};
			return returnData;
		}).catch((error) => {
			const message = error.message.indexOf('401') ? 'Sunucu üzerinde yetkiniz bulunmamaktadır. Yeniden giriş yapmayı deneyiniz.' : error.message;
			const returnData = {
				code: 900,
				resultMap: [],
				message
			};
			return returnData;
		});

		return result;

	}

}

/*
	DEMO

	const request = new Request();
	request.setHeaderToken();
	request.setData({isim: 'John Doe'});
	console.log(request);

	const requestGet = new Request();
	requestGet.setMethodGet();
	requestGet.setUrl('https://jsonplaceholder.xsdstypicode.com/users');
	console.log(requestGet);

	requestGet.run().then(resultGet => {
		console.log(resultGet);
	});
	
*/