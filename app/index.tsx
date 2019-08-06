import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from 'react-router-dom';

/* STATICS */
import Sidebar from './statics/Sidebar/Sidebar';
import Header from './statics/Header/Header';
import SearchBox from './statics/SearchBox';

/* PAGES */
import AnaEkran from './pages/AnaEkran/AnaEkran';

import Randevu from './pages/Randevu/Randevu';
import Randevular from './pages/Randevular/Randevular';

import OnGorusmeOlustur from './pages/OnGorusmeOlustur/OnGorusmeOlustur';
import OnGorusmeler from './pages/OnGorusmeler/OnGorusmeler';

import BosSayfa from './pages/BosSayfa/BosSayfa';

/* STYLES */
import "./styles/main.scss";

/* REDUX */
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	hideSidebar: false,
	sidebarHamburger: null,
	searchBox: false,
	searchInput: null
}

const reducer = (state = initialState, action) => {

	if ( action.type === 'setHideSidebar' ){
		return Object.assign({}, state, { hideSidebar: action.payload });
	}else if ( action.type === 'setSidebarHamburger' ){
		return Object.assign({}, state, { sidebarHamburger: action.payload });
	}else if ( action.type === 'setSearchBox' ){
		return Object.assign({}, state, { searchBox: action.payload });
	}else if ( action.type === 'setSearchInput' ){
		return Object.assign({}, state, { searchInput: action.payload });
	}

	return state;

}

const store = createStore(reducer);

ReactDOM.render((

	<Provider store={store}>

		<Router>
			<div className="app">
				<div className="wrapper">
					<SearchBox />
					<Sidebar />
					<div className="content">
						<Header />
						<div className="contentArea">
							
							<Route exact path="/" component={AnaEkran} />
							<Route path="/randevular" component={Randevular} />
							<Route path="/yeni-randevu-olustur" component={Randevu} />
							<Route path="/yeni-on-gorusme-olustur" component={OnGorusmeOlustur} />
							<Route path="/on-gorusmeler" component={OnGorusmeler} />
							<Route path="/bos-sayfa" component={BosSayfa} />

						</div>
					</div>
				</div>
			</div>
		</Router>
		
	</Provider>

), document.getElementById("main"));