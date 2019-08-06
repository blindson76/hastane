import * as React from 'react';
import { FaIcon, DateInput } from 'karcin-ui';
import { checkTCKimlik } from '../../functions/Functions';
const InputMask = require('react-input-mask');

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

class BasicInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.change = this.change.bind(this);

	}

	change(e){

		this.props.change(this.props.name, e.target.value, this.props.index);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className="formItemInput">
					<span><FaIcon code={this.props.icon} /></span>
					{ this.props.mask === undefined ? (
						<input type="text" value={this.props.value} onChange={this.change} />
					) : (
						<InputMask mask={this.props.mask} value={this.props.value} onChange={this.change} maskChar={null} />
					) }
					<u></u>
				</div>
			</div>
		);
	}

}

class DefaultInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen boş bırakmayınız.'
		};

		this.change = this.change.bind(this);

	}

	change(e){

		this.props.change(this.props.name, e.target.value);
		this.props.change(this.props.errorName, e.target.value.trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<span><FaIcon code={this.props.icon} /></span>
					<input type="text" value={this.props.value} onChange={this.change} />
					<u></u>
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class RadioInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen bir seçim yapınız.'
		};

		this.change = this.change.bind(this);

	}

	change(e, value){

		this.props.change(this.props.name, value);
		this.props.change(this.props.errorName, value.trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formInputRadio' + (this.props.error ? ' formInputRadioCheckError' : '') }>
					{ this.props.radioData.map((item, index) => (
					<label key={index} className={ this.props.value === item ? 'active' : null } onClick={(e) => {this.change(e, item)}}>
						<div className="radioBox">
							<div className="radioBoxRadio">
								<FaIcon code="fa-check" />
							</div>
						</div>
						<span>{item}</span>
					</label>
					)) }
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class CheckListInput extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = { errorValue: '* Lütfen en az bir seçim yapınız.' };
		this.change = this.change.bind(this);
	}

	change(e, value){

		let checkList = this.props.value;

		if ( checkList.length === 0 ){
			checkList.push(value);
		}else{
			let index = checkList.indexOf(value);
			if ( index === -1 ){

				if ( value === 'Yok' ){
					checkList = ['Yok'];
				}else{
					let yokIndex = checkList.indexOf('Yok');
					if ( yokIndex !== -1 ) checkList.splice(yokIndex, 1);
					checkList.push(value);
				}

			}else{
				checkList.splice(index, 1);
			}
		}

		this.props.change(this.props.name, checkList);
		this.props.change(this.props.errorName, checkList.toString().trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formInputCheck' + (this.props.error ? ' formInputRadioCheckError' : '') }>
					{ this.props.checkData.map((item, index) => (
					<label key={index} className={ this.props.value.indexOf(item) !== -1 ? 'active' : null } onClick={(e) => {this.change(e, item)}}>
						<div className="radioBox">
							<div className="radioBoxRadio">
								<FaIcon code="fa-check" />
							</div>
						</div>
						<span>{item}</span>
					</label>
					)) }
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class PhoneNumberInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen doğru bir telefon numarası giriniz.'
		};

		this.change = this.change.bind(this);

	}

	change(e){

		this.props.change(this.props.name, e.target.value);
		this.props.change(this.props.errorName, e.target.value.trim().length !== 14);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<span><FaIcon code={this.props.icon} /></span>
					<InputMask mask="0999 999 99 99" value={this.props.value} onChange={this.change} maskChar={null} />
					<u></u>
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class TCKimlikInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen doğru bir T.C. kimlik numarası giriniz.'
		};

		this.change = this.change.bind(this);

	}

	change(e){

		this.props.change(this.props.name, e.target.value);
		this.props.change(this.props.errorName, !checkTCKimlik(e.target.value));

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<span><FaIcon code={this.props.icon} /></span>
					<InputMask mask="99999999999" value={this.props.value} onChange={this.change} maskChar={null} />
					<u></u>
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class NumberInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen boş bırakmayınız.'
		};

		this.change = this.change.bind(this);

	}

	change(e){

		this.props.change(this.props.name, e.target.value);
		this.props.change(this.props.errorName, e.target.value.trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<span><FaIcon code={this.props.icon} /></span>
					<InputMask mask="99999" value={this.props.value} onChange={this.change} maskChar={null} />
					<u></u>
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class DefaultTextArea extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen boş bırakmayınız.'
		};

		this.change = this.change.bind(this);

	}

	change(e){

		this.props.change(this.props.name, e.target.value);
		this.props.change(this.props.errorName, e.target.value.trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<textarea value={this.props.value} onChange={this.change}></textarea>
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class DefaultDateInput extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			errorValue: '* Lütfen geçerli bir tarih seçiniz.',
			minDate: ''
		};
		this.change = this.change.bind(this);
	}

	componentDidMount(){
		let date = new Date();
		let ay = (date.getMonth() + 1).toString();
		ay = ay.length === 1 ? '0' + ay : ay;
		let gun = date.getDate().toString();
		gun = gun.length === 1 ? '0' + gun : gun;
		let minDate = date.getFullYear() + '-' + ay + '-' + gun;
		this.setState({ minDate });
	}

	change(jsDate, dateString){
		this.props.change(this.props.name, dateString);
		this.props.change(this.props.errorName, dateString === 'Invalid date');
	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formDateItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<DatePickerInput
						onChange={(jsDate, dateString) => { this.change(jsDate, dateString) }}
						showOnInputClick
						returnFormat='YYYY-MM-DD'
						displayFormat='DD.MM.YYYY'
						value={this.props.value}
						minDate={ this.props.minDate ? this.state.minDate : '' }
					/>
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class OtherRadioInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen bir seçim yapınız.'
		};

		this.radioChange = this.radioChange.bind(this);
		this.inputChange = this.inputChange.bind(this);

	}

	radioChange(e, item){

		this.props.change(this.props.name, item.other ? '' : item.value);
		this.props.change(this.props.errorName, item.value.trim().length === 0);
		this.props.change(this.props.otherInputName, item.other);

	}

	inputChange(e){

		this.props.change(this.props.name, e.target.value);
		this.props.change(this.props.errorName, e.target.value.trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>

				<div className={ 'formInputRadio' + (this.props.error ? ' formInputRadioCheckError' : '') }>
					{ this.props.radioData.map((item, index) => (
					<label key={index} className={ item.other ? ( this.props.otherInputShow ? ' active' : null ) : ( ( this.props.value === item.value && !this.props.otherInputShow ) ? 'active' : null ) } onClick={(e) => {this.radioChange(e, item)}}>
						<div className="radioBox">
							<div className="radioBoxRadio">
								<FaIcon code="fa-check" />
							</div>
						</div>
						<span>{item.value}</span>
					</label>
					)) }
				</div>

				{ this.props.otherInputShow && (
				<div className="formItemInput mt2">
					<span><FaIcon code="fa-paperclip" /></span>
					<input type="text" value={this.props.value} onChange={this.inputChange} />
					<u></u>
				</div>
				) }

				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

class InputDisable extends React.Component<any, any>{

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className="formItemInput">
					<span><FaIcon code={this.props.icon} /></span>
					<input type="text" value={this.props.value} disabled />
					<u></u>
				</div>
			</div>
		);
	}

}

class SaatRadioInput extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen bir seçim yapınız.'
		};

		this.change = this.change.bind(this);

	}

	change(e, value){

		this.props.change(this.props.name, value);
		this.props.change(this.props.errorName, value.trim().length === 0);

	}

	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formInputRadio' + (this.props.error ? ' formInputRadioCheckError' : '') }>
					{ this.props.radioData.map((item, index) => (
					<label key={index} className={ (this.props.value === item.title ? 'active' : '') + ( item.disabled ? ' disabled' : '') } onClick={(e) => {this.change(e, item.title)}}>
						<div className="radioBox">
							<div className="radioBoxRadio">
								<FaIcon code="fa-check" />
							</div>
						</div>
						<span>{item.title}</span>
					</label>
					)) }
				</div>
				{ this.props.error && ( <i className="formItemError">{ this.state.errorValue }</i> ) }
			</div>
		);
	}

}

export { BasicInput, DefaultInput, RadioInput, CheckListInput, PhoneNumberInput, TCKimlikInput, NumberInput, DefaultTextArea, DefaultDateInput, OtherRadioInput, InputDisable, SaatRadioInput };