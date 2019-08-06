import { func } from "prop-types";

export function getNowDate(){

	const date = new Date();

	let month = (date.getMonth() + 1).toString();
	month = month.length === 1 ? '0' + month : month;

	let day = date.getDate().toString();
	day = day.length === 1 ? '0' + day : day;

	return day + '-' + month + '-' + date.getFullYear();

}

export function checkTCKimlik(TCNO){

	return true;

	let tek = 0, cift = 0, sonuc = 0, TCToplam = 0, hatali = [11111111110, 22222222220, 33333333330, 44444444440, 55555555550, 66666666660, 7777777770, 88888888880, 99999999990];

	if ( TCNO.trim().length !== 11 ) return false;
	if ( TCNO[0] === 0 ) return false;

	tek = parseInt(TCNO[0]) + parseInt(TCNO[2]) + parseInt(TCNO[4]) + parseInt(TCNO[6]) + parseInt(TCNO[8]);
	cift = parseInt(TCNO[1]) + parseInt(TCNO[3]) + parseInt(TCNO[5]) + parseInt(TCNO[7]);

	tek = tek * 7;
	sonuc = Math.abs(tek - cift);
	if ( sonuc % 10 !== parseInt(TCNO[9]) ) return false;

	for ( let i = 0; i < 10; i++ ){
		TCToplam += parseInt(TCNO[i]);
	}

	if ( TCToplam % 10 !== parseInt(TCNO[10]) ) return false;
	if ( hatali.toString().indexOf(TCNO) !== -1 ) return false;

	return true;

}

export function getDateTR(date, hour = false){
	if ( date === undefined ) return '';
	const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
	const newDate = new Date(date);
	let string = newDate.getDate() + ' ' + aylar[ newDate.getMonth() ] + ' ' + newDate.getFullYear();
	if ( hour ){
		let hourVal = newDate.getHours().toString().length === 1 ? '0' + newDate.getHours() : newDate.getHours();
		let minutesVal = newDate.getMinutes().toString().length === 1 ? '0' + newDate.getMinutes() : newDate.getMinutes();
		string = string + ' - ' + hourVal + ':' + minutesVal;
	}
	return string;
}

export function getAge(d1){
	if ( d1 === undefined ) return '';
	const d2 = new Date();
	let diff = d2.getTime() - d1;
	let result = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	return result;
}