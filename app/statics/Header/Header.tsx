import * as React from 'react';
import { Notify, FaIcon } from 'karcin-ui';
import { HeaderItem, HeaderItemLanguage, HeaderUser, HeaderListItem } from './HeaderItems';
import { connect } from 'react-redux';
import './style.scss';
const config = window['config'];

class Header extends React.Component<any, any>{

	constructor(props){ super(props);

		this.logOut = this.logOut.bind(this);

		this.sidebarChange = this.sidebarChange.bind(this);
		this.setSearchBox = this.setSearchBox.bind(this);

	}

	componentDidMount(){
		const token = localStorage.getItem('token');
		if ( token === null ) window.location.href = config.authUrl + '?code=HUZUREVI';
	}

	logOut(){
		localStorage.clear();
		window.location.href = config.authUrl + '?code=HUZUREVI';
	}

	sidebarChange(){ this.props.reduxFunc('setHideSidebar', !this.props.hideSidebar); }
	setSearchBox(){
		this.props.reduxFunc('setSearchBox', true);
		this.props.searchInput.current.value = '';
		this.props.searchInput.current.focus();
	}

	render(){
		return(
			<header>
				<div ref={node => { this.props.reduxFunc('setSidebarHamburger', node); }} className="sidebarHamburger" onClick={this.sidebarChange}>
					<i></i>
					<i></i>
					<i></i>
				</div>
				<div className="headerTitle">MİA Yönetim Paneli</div>
				<div className="headerRight">

					<div className="headerItem">
						<div onClick={this.setSearchBox} className="headerIconWrap">
							<FaIcon code="fa-search" />
						</div>
					</div>
					<HeaderItem
						icon="fa-bell"
						notification={4}
						dropDown={(
							<div className="bildirimlerPaneli">
								<div className="bildirimlerTitle">Kullanıcı Bildirimleri</div>
								<HeaderListItem
									data={
										[
											{
												icon: 'fa-futbol-o',
												title: 'Yeni bir ön görüşme planlandı',
												subTitle: '2 saat önce',
												link: 'bildirim/1'
											},
											{
												icon: 'fa-bank',
												title: 'Garanti Bankası ile ilgili bildirim',
												subTitle: '3 saat önce',
												link: 'bildirim/garanti'
											},
											{
												icon: 'fa-chrome',
												title: 'Chrome için yeni sürüm çıktı',
												subTitle: '4 saat önce',
												link: 'bildirim/chrome'
											},
											{
												icon: 'fa-lock',
												title: 'Uzun başlıklı bir bildirim gelmiş olabilirde olmayabilirde',
												subTitle: '8 saat önce',
												link: 'bildirim/4'
											}
										]
									}
								/>
							</div>
						)}
					/>
					<HeaderItem
						icon="fa-cog"
						dropDown={(
							<div className="ayarlarPaneli">
								<div className="ayarlarPaneliTitle">Hızlı Ayarlar</div>
								<ul>
									<li>
										<a href="ayarlar/1">
											<span className="ayarIcon"><FaIcon code="fa-keyboard-o" /></span>
											<b>Ön<br />Görüşmeler</b>
										</a>
									</li>
									<li>
										<a href="ayarlar/1">
											<span className="ayarIcon"><FaIcon code="fa-medkit" /></span>
											<b>Sağlık Durumları</b>
										</a>
									</li>
									<li>
										<a href="ayarlar/1">
											<span className="ayarIcon"><FaIcon code="fa-send" /></span>
											<b>Postalar</b>
										</a>
									</li>
									<li>
										<a href="ayarlar/1">
											<span className="ayarIcon"><FaIcon code="fa-warning" /></span>
											<b>Uyarılar</b>
										</a>
									</li>
								</ul>
							</div>
						)}
					/>
					<HeaderItemLanguage />
					<HeaderUser logout={this.logOut} />
					
				</div>
			</header>
		);

	}

}

const mapStateToProps = (state) => {
	return {
		hideSidebar: state.hideSidebar,
		searchInput: state.searchInput
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		reduxFunc: (type, payload) => dispatch({ type: type, payload: payload })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);