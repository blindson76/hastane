import * as React from 'react';
import { FaIcon } from 'karcin-ui';

class HeaderItem extends React.Component<any, any>{

	private node: React.RefObject<any>;

	constructor(props){ super(props);

		this.state = {
			show: false
		};

		this.node = React.createRef();

		this.change = this.change.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);

	}

	change(){

		if ( !this.state.show ){
			window.addEventListener('click', this.handleOutsideClick, false);
		}else{
			window.removeEventListener('click', this.handleOutsideClick, false);
		}

		this.setState({ show: !this.state.show }, () => {

			if ( this.props.focus !== undefined && this.state.show ) this.props.focus();

		});

	}

	handleOutsideClick(e){
		if ( this.node.current.contains(e.target) ) return;
		this.change();
	}

	render(){
		return(
			<div className="headerItem" ref={this.node}>
				<div onClick={this.change} className="headerIconWrap">
					<FaIcon code={this.props.icon} />
					{ this.props.notification !== undefined && (
						<div className="notification">{this.props.notification}</div>
					) }
				</div>

				{ this.props.dropDown !== undefined && (
					<div className={ 'headerItemDropDown' + ( this.state.show ? ' active' : '' ) }>
						{this.props.dropDown}
					</div>
				) }
				
			</div>
		);
	}

}

class HeaderItemLanguage extends React.Component<any, any>{

	private node: React.RefObject<any>;

	constructor(props){ super(props);

		this.state = {
			show: false
		};

		this.node = React.createRef();

		this.change = this.change.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);

	}

	change(){

		if ( !this.state.show ){
			window.addEventListener('click', this.handleOutsideClick, false);
		}else{
			window.removeEventListener('click', this.handleOutsideClick, false);
		}

		this.setState({ show: !this.state.show });

	}

	handleOutsideClick(e){
		if ( this.node.current.contains(e.target) ) return;
		this.change();
	}

	render(){
		return(
			<div className="headerItem" ref={this.node}>
				<div onClick={this.change} className="headerIconWrap">
					<div className="langFlag tr"></div>
				</div>
				<div className={ 'headerFlagDropDown' + ( this.state.show ? ' active' : '' ) }>
					<ul>
						<li>
							<a href="dil/tr">
								<div className="headerFlagDropDownFlag">
									<div className="langFlag tr"></div>
								</div>
								<div className="headerFlagDropDownYazi">Türkçe</div>
							</a>
						</li>
						<li>
							<a href="dil/tr">
								<div className="headerFlagDropDownFlag">
									<div className="langFlag en"></div>
								</div>
								<div className="headerFlagDropDownYazi">English</div>
							</a>
						</li>
						<li>
							<a href="dil/tr">
								<div className="headerFlagDropDownFlag">
									<div className="langFlag de"></div>
								</div>
								<div className="headerFlagDropDownYazi">German</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}

}

class HeaderUser extends React.Component<any, any>{

	private node: React.RefObject<any>;

	constructor(props){ super(props);

		this.state = {
			show: false
		};

		this.node = React.createRef();

		this.change = this.change.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);

	}

	change(){

		if ( !this.state.show ){
			window.addEventListener('click', this.handleOutsideClick, false);
		}else{
			window.removeEventListener('click', this.handleOutsideClick, false);
		}

		this.setState({ show: !this.state.show });

	}

	handleOutsideClick(e){
		if ( this.node.current.contains(e.target) ) return;
		this.change();
	}

	render(){
		return(
			<div className="headerUser" ref={this.node}>
				<div onClick={this.change} className="headerUserWrap">
					<img src="https://www.ctai.fr/wp-content/uploads/2014/02/05.jpg" alt="User" />
					<div className="userInfo">
						<em>Uğur</em>
						<em>Dalkıran</em>
					</div>
				</div>
				<div className={ 'headerUserDropDown' + ( this.state.show ? ' active' : '' ) }>
					<div className="userDropDownTitle">
						<img src="https://www.ctai.fr/wp-content/uploads/2014/02/05.jpg" alt="User" />
						<div className="userDropDownInfo">
							<em>Uğur</em>
							<em>Dalkıran</em>
						</div>
					</div>
					<HeaderListItem
						data={
							[
								{
									icon: 'fa-id-card',
									title: 'Profilim',
									subTitle: 'Hesap ayarları ve daha fazlası',
									link: 'link1'
								},
								{
									icon: 'fa-envelope',
									title: 'Mesajlarım',
									subTitle: 'Gelen kutusu ve görevler',
									link: 'link1'
								},
								{
									icon: 'fa-black-tie',
									title: 'Görevlerim',
									subTitle: 'Son yapılacak görevler',
									link: 'link1'
								}
							]
						}
					/>
					<div className="headerLogout">
						<div onClick={this.props.logout} className="logout">Çıkış Yap</div>
					</div>
				</div>
			</div>
		);
	}

}

class HeaderListItem extends React.Component<any, any>{

	render(){
		return(
			<ul className="headerListItem">
				{ this.props.data.map((item, index) => (
				<li key={index}>
					<a href={item.link}>
						<span className="listItemIcon"><FaIcon code={item.icon} /></span>
						<div className="listItemText">
							<b>{item.title}</b>
							<em>{item.subTitle}</em>
						</div>
						<span className="listItemArrow"><FaIcon code="fa-angle-right" /></span>
					</a>
				</li>
				)) }
			</ul>
		);
	}

}

export { HeaderItem, HeaderItemLanguage, HeaderUser, HeaderListItem };