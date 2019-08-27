import * as React from "react";
import { MyBreadcrumb, MyBreadcrumbButtons } from '../../forms/items/MyBreadcrumb';
import { BasicInput, DefaultInput, RadioInput, CheckListInput, PhoneNumberInput, TCKimlikInput, NumberInput } from '../../forms/items/Inputs';
import { FaIcon,Notify, DateInput } from 'karcin-ui';
import { DatePickerInput } from 'rc-datepicker';
const InputMask = require('react-input-mask');
class BreadCrumb extends React.Component<any,any>{
  constructor(props){
    super(props);
    this.state={
      view:1,
      viewData:props.children.map(k=>k.props.description || "")
    }
    this.viewChange=this.viewChange.bind(this);
    this.checkErrors=this.checkErrors.bind(this)
    this.submit=this.submit.bind(this)
  }
  viewChange(e){
      this.props.validate(()=>{
          let res=this.checkErrors();
        if(res!==undefined){
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            Notify.error({ message: "Eksik bilgileri lütfen doldurun.", position: "top-right", time: 5 });
            return;
        }
        this.setState({
            view:this.state.view+(e?1:-1)
        })
      })
  }
  submit(e){
      this.props.onSubmit(e)
  }
  checkErrors(elem=this.props.children[this.state.view-1]){
    return Object.keys(elem.props.children).find((k,i)=>{
        let n=elem.props.children[k];
        if(n===undefined)
            return false
        if(n.props && n.props.error){
            return true
        }
        if(n.props && n.props.children){
            return this.checkErrors(n)
        }
        return false

    })
  }
  render(){
    return(
      <>
        <MyBreadcrumb view={this.state.view} viewData={this.state.viewData} />
        <div className="formItemSubTitle mt0">
            <span>{ this.state.view + '. ' + this.state.viewData[ this.state.view - 1 ] }</span>
        </div>
        {this.props.children[this.state.view-1]}
        <MyBreadcrumbButtons view={this.state.view} maxView={this.state.viewData.length} viewChange={this.viewChange} submit={this.submit} />
      </>
    )
  }
}
class DefaultDateInput extends React.Component<any, any>{

	constructor(props){ super(props);
		this.state = {
			errorValue: '* Lütfen geçerli bir tarih seçiniz.',
			minDate: ''
		};
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


	render(){
		return(
			<div className="formItemSingle">
				<em>{this.props.title}</em>
				<div className={ 'formDateItemInput' + (this.props.error ? ' formItemInputError' : '') }>
					<DatePickerInput
						onChange={(jsDate, dateString) => { this.props.change(dateString,this.props.path) }}
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
class RadioInput2 extends React.Component<any, any>{

	constructor(props){ super(props);

		this.state = {
			errorValue: '* Lütfen bir seçim yapınız.'
		};

		this.change = this.change.bind(this);

	}

	change(e, value){

		this.props.change(this.props.name, value);

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
class CheckListInput2 extends React.Component<any, any>{

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
export default{
  default: props => {
    return (
      <div className={props.type}>
        {props.children}
      </div>
    );
  },
  form: props => {
    return (
      <form className="form" onSubmit={props.onSubmit}>
        <div className="formWrapper">
            <div>{props.children}</div>
            <button type="submit">Gönder</button>
        </div>
      </form>
    );
  },
  string: props => {
    return (
        <div className="formItemSingle">
            <em>{props.description}</em>
            <div className={ 'formItemInput' + (props.error ? ' formItemInputError' : '') }>
                <span><FaIcon code="fa-user" /></span>
                <input type="text" value={props.value || ""} onChange={e=>{props.onChange(e.target.value,props.path)}} />
                <u></u>
            </div>
            { props.error && ( <i className="formItemError">{ props.error }</i> ) }
        </div>
    );
  },
  object:props=>{
    return(
      <div>
        <label>{props.description}</label>
        {props.children}
      </div>
    )
  },
  breadcrumb:props=>{
    return(
      <BreadCrumb {...props}></BreadCrumb>
    )
  },
  row:props=>{
      return(
        <div className="formItemFlex">{...props.children}</div>
      )
  },
  tcinput:props=>{
      return(
        <div className="formItemSingle">
            <em>{props.description}</em>
            <div className={ 'formItemInput' + (props.error ? ' formItemInputError' : '') }>
                <span><FaIcon code="fa-key" /></span>
                <InputMask mask="99999999999" value={props.value || ""} onChange={e=>{{props.onChange(e.target.value,props.path)}}} maskChar={null} />
                <u></u>
            </div>
            { props.error && ( <i className="formItemError">{ props.error }</i> ) }
        </div>
      )
  },
  dateinput:props=>{
      return(
        <DefaultDateInput
            title={props.description}
            name={props.name}
            value={props.value || ''}
            error={props.error}
            change={(e,v)=>{{props.onChange(e,props.path)}}}
        />
      )
  },
  radio:props=>{
      return(
        <RadioInput2
            title={props.description}
            name={props.name}
            value={props.value || ''}
            error={props.error}
            errorName="error_yasli_cinsiyet"
            change={(e,v)=>{props.onChange(v,props.path)}}
            radioData={props.enum}
        />
      )
  },
  check:props=>{
      return(
        <CheckListInput2
            title={props.description}
            name={props.name}
            value={props.value || []}
            error={props.error}
            errorName="error_yasli_engeldurumu"
            change={(k,v)=>{props.onChange(v,props.path);console.log(v)}}
            checkData={props.items.enum}
        />
      )
  },
  array:props=>{
    console.log(props)
    class ArrayItem extends React.Component<any,any>{
      constructor(props){
        super(props)
        this.state={
          data:props.value || []
        }
      }

      render(){
        return props.children
      }
    }
    return(
      <div className="array">
        <ArrayItem {...props} />
      </div>
    )
  }
}