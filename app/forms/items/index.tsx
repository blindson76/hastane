import * as React from "react";
import { FaIcon, DateInput } from "karcin-ui";
const InputMask = require("react-input-mask");
import { DatePickerInput } from "rc-datepicker";
import { MyBreadcrumb, MyBreadcrumbButtons } from "../items/MyBreadcrumb";
import update from "immutability-helper";
class uniq{
  static num:number=0;
  static next(){
    return (uniq.num)++;
  }
}
const fields={
  breadcrumb: props => {
    return (
      <div></div>
    );
  },
  row: props => {
    return (
      <div className="formItemFlex" key={uniq.next()}>{props.children}</div>
    )
  },
  form:props=>{
    return(
      <div className="form">{props.children}</div>
    )
  }
}
const inputs={
  text: (props) => {
    return (
      <div className="formItemSingle" key={uniq.next()}>
        <em>{props.description}</em>
        <div className="formItemInput">
          <span>
            <FaIcon code="fa-user"></FaIcon>
          </span>
          <input
            type="text"
            value={props.value}
            onChange={e => { props.onChange(e.target.value) }}
          />
          <u />
        </div>
      </div>

    );
  },
  select:(props)=>{
    return(
      <div className="formItemSingle">
				<em>{props.description}</em>
				<div className="formInputRadio">
					{ props.options.map((item, index) => (
					<label key={index} className={ props.value === item ? 'active' : null } onClick={(e) => {props.onChange(item)}}>
						<div className="radioBox">
							<div className="radioBoxRadio">
                <FaIcon code="fa-check" />
							</div>
						</div>
						<span>{item}</span>
					</label>
					)) }
				</div>
			</div>
    )
  }
}
class JSForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      formData: {
        tcKimlikNo:'',
        adi:'',
        soyadi:''
      }
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);

    props = props || {
      content: []
    };
  }
  getUpdateObjByPath(path, updater) {
    return path
      .split(".")
      .reverse()
      .reduce((val, key) => ({ [key]: val }), updater);
  }
  chooseInputType(sch) {
    if (sch.type === 'string') {
      if ('enum' in sch) {
        return 'select';
      }
      else {
        return 'text'
      }
    }
  }
  updateFormData(path, val) {
    this.setState({
      formData: update(
        this.state.formData,
        this.getUpdateObjByPath(path, {
          $set: val
        })
      )
    });
  }
  parseSchema(field, schema, path = '') {
    if (typeof field === "string" || (typeof field === 'object' && field.type === 'input')) {
      let inputType = this.chooseInputType(schema.properties[field]);
      let props = {
        ...schema.properties[field],
        onChange: val => {
          this.updateFormData(path + field, val)
        },
        value:this.state.formData[field]
      }
      if (inputType === 'select') {
        props.options = schema.properties[field].enum
        return inputs['select'](props)
      }

      return inputs['text'](props)
    }

    if (Array.isArray(field)) {
      return fields['row']({
        children: field.map((k,i) =>
          this.parseSchema(k, schema, path)
        )
      })
    }
    if (field.type && field.type === 'breadcrumb') {
      console.log("oke")
    }
    return null;
  }
  change(e) {
    let formData = update(this.state.formData, {
      k1: {
        $set: e
      }
    });
    this.setState({
      formData
    });
  }

  submit(e) {
    e.preventDefault();
  }


  render() {
   return(
    <form onSubmit={this.submit} key={uniq.next()}>
      {this.props.uiSchema.content.map((k,i) =>
        this.parseSchema(k, this.props.schema)
      )}
      <button type="submit">Submit</button>
      {JSON.stringify(this.state.formData)}
    </form>
   )
  }
}
class BCForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state={
        viewData:["view1", "view2", "view3"],
        view:1,
        formData:[]
    }
    this.viewChange=this.viewChange.bind(this);
  }
  splitSchema(schema:Object){
    let schemas=[];
    
  }
  viewChange(fw){
    this.setState({
        view:this.state.view+(fw?1:-1)
    });
  }

  submit(){
      console.log("submit")
  }

  render() {
    return (
      <div>
        <MyBreadcrumb view={this.state.view} viewData={this.state.viewData}/>
        {this.state.view===1 && (
              <div>View 1</div>  
            )}
            {this.state.view===2 && (
              <div>View 2</div>  
            )}
            {this.state.view===3 && (
              <div>View 3</div>  
            )}
        <MyBreadcrumbButtons
          view={this.state.view}
          maxView={this.state.viewData.length}
          viewChange={this.viewChange}
          submit={this.submit}
        />
      </div>
    );
  }
}
class DefaultField extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="formItemSingle">
        <em>{this.props.rawDescription}</em>
        {this.props.children}
      </div>
    );
  }
}

class DefaultInput extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      <div className="formItemInput">
        <span>
          <FaIcon code="fa-user" />
        </span>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <u />
      </div>
    );
  }
}
class RadioInput extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      <div
        className={
          "formInputRadio" +
          (this.props.error ? " formInputRadioCheckError" : "")
        }
      >
        {this.props.schema.enum.map((item, index) => (
          <label
            key={index}
            className={this.props.value === item ? "active" : null}
            onClick={e => {
              this.props.onChange(item);
            }}
          >
            <div className="radioBox">
              <div className="radioBoxRadio">
                <FaIcon code="fa-check" />
              </div>
            </div>
            <span>{item}</span>
          </label>
        ))}
      </div>
    );
  }
}

class TCKimlikInput extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      <div className="formItemInput">
        <span>
          <FaIcon code="fa-key" />
        </span>
        <InputMask
          mask="99999999999"
          value={this.state.value}
          onChange={this.handleChange}
          maskChar={null}
        />
        <u />
      </div>
    );
  }
}

class DefaultDateInput extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      minDate: ""
    };
  }

  componentDidMount() {
    let date = new Date();
    let ay = (date.getMonth() + 1).toString();
    ay = ay.length === 1 ? "0" + ay : ay;
    let gun = date.getDate().toString();
    gun = gun.length === 1 ? "0" + gun : gun;
    let minDate = date.getFullYear() + "-" + ay + "-" + gun;
    this.setState({ minDate });
  }
  render() {
    return (
      <div className="formDateItemInput">
        <DatePickerInput
          onChange={(jsDate, dateString) => {
            this.props.onChange(dateString);
          }}
          showOnInputClick
          returnFormat="YYYY-MM-DD"
          displayFormat="DD.MM.YYYY"
          value={this.props.value}
          minDate={this.props.minDate ? this.state.minDate : ""}
        />
      </div>
    );
  }
}

export {
  DefaultField,
  DefaultInput,
  RadioInput,
  TCKimlikInput,
  DefaultDateInput,
  BCForm,
  JSForm
};
