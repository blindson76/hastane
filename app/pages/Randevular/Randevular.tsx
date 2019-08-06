import * as React from 'react';
import DataGrid from '../../components/DataGrid/DataGrid';

export default class Randevular extends React.Component<any, any>{

	func(){}

	render(){
		return(
			<div>
				<h1 className="title">Randevular</h1>
				<div className="contentWhite">

					<DataGrid
						columns = {
							[
								{ key: 'id', name: 'No', width: 120, sortDescendingFirst: true },
								{ key: 'adi', name: 'Adı', width: 300 },
								{ key: 'soyadi', name: 'Soyisim', width: 300 },
								{ key: 'fiyat', name: 'Fiyat Nedir?', width: 300 },
								{ key: 'cinsiyet', name: 'Cinsiyet', width: 300 }
							]
						}
						rows = {
							[
								{ id: 1, adi: 'Uğur', soyadi: 'Dalkıran', fiyat: '5.000 TL', cinsiyet: 'Erkek' },
								{ id: 2, adi: 'Kadir', soyadi: 'Gülsoy', fiyat: '9.000 TL', cinsiyet: 'Erkek' }
							]
						}
						buttons = {[
							{ name: 'Ön Görüşmeye Taşı', icon: 'fa-car', press: this.func },
							{ name: 'Randevuyu İptal Et', icon: 'fa-times', press: this.func },
						]}
						height={600}
					/>

				</div>
			</div>
		);
	}

}