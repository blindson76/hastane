import * as React from 'react';
import { Link } from 'react-router-dom';
import MetisMenu from 'react-metismenu';
import { connect } from 'react-redux';
import './style.scss';
const linkStart = window['config'].linkStart;

const content = [
	{
		icon: 'home',
		label: 'Ana Ekran',
		to: linkStart,
	},
	{ to: '' },
	{
		icon: 'arrow-right',
		label: 'İlk Kayıt',
		content: [
			{
				label: 'Yeni Randevu Oluştur',
				to: linkStart + 'yeni-randevu-olustur',
			},
			{
				label: 'Randevular',
				to: linkStart + 'randevular',
			},
			{
				label: 'Yeni Ön Görüşme Oluştur',
				to: linkStart + 'yeni-on-gorusme-olustur',
			},
			{
				label: 'Ön Görüşmeler',
				to: linkStart + 'on-gorusmeler',
			}
		]
	},
	{ to: '' },
	{
		icon: 'bed',
		label: 'Yatan Yaşlılar',
		content: [
			{
				label: 'Yaşlı Yakını Güncelle',
				to: linkStart + 'yeni',
			}
		]
	},
	{ to: '' },
	{
		icon: 'copy',
		label: 'Tanımlar',
		content: [
			{
				label: 'Oda Tanımla',
				to: linkStart + 'yeni',
			},
			{
				label: 'Personel Tanımla',
				to: linkStart + 'yeni',
			}
		]
	},
	{ to: '' },
	{
		icon: 'cube',
		label: 'Raporlar',
		content: [
			{
				label: 'Rapor 1',
				to: linkStart + 'yeni',
			}
		]
	},
	{
		icon: 'times',
		label: 'Boş Sayfa',
		to: linkStart + 'bos-sayfa',
	}
];

class Sidebar extends React.Component<any, any>{

	private node: React.RefObject<any>;
	private metis: React.RefObject<any>;

	constructor(props){ super(props);
		this.state = {
			tabletSidebar: false
		};
		this.node = React.createRef();
		this.metis = React.createRef();
		this.updateDimensions = this.updateDimensions.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.handleHomePage = this.handleHomePage.bind(this);
	}

	componentDidMount(){
		window.addEventListener('resize', this.updateDimensions);
		window.addEventListener('click', this.handleOutsideClick, false);
		this.updateDimensions();
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateDimensions);
		window.removeEventListener('click', this.handleOutsideClick, false);
	}

	updateDimensions(){
		if ( window.innerWidth <= 960 && !this.props.hideSidebar ){
			this.props.reduxFunc('setHideSidebar', true);
		}
		this.setState({ tabletSidebar: window.innerWidth <= 960 });
	}

	handleOutsideClick(e){
		if ( window.innerWidth <= 960 && !this.props.hideSidebar ){
			if ( this.node.current.contains(e.target) || this.props.sidebarHamburger.contains(e.target) ) return;
			this.props.reduxFunc('setHideSidebar', true);
		}
	}

	handleHomePage(e){
		if ( window.location.href.substr(-2) === linkStart ){
			e.preventDefault();
		}else{
			this.metis.current.changeActiveLinkLabel('Ana Ekran');
		}
	}

	render(){
		return(
			<div ref={this.node} className={ 'sidebar' + ( this.props.hideSidebar ? ' hideSidebar' : '' ) + ( this.state.tabletSidebar ? ' tabletSidebar' : '' ) }>
				<div className="sidebarLogo">
					<Link to="/" onClick={this.handleHomePage}>
						<div className="sidLogo">
							<span></span>
						</div>
					</Link>
				</div>
				<MetisMenu content={content} activeLinkFromLocation ref={this.metis} />
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		hideSidebar: state.hideSidebar,
		sidebarHamburger: state.sidebarHamburger
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		reduxFunc: (type, payload) => dispatch({ type: type, payload: payload })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);