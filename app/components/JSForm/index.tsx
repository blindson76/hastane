import * as React from "react";
import update from "immutability-helper";
import defaultFields from "./defaultFields";
import * as Ajv from 'ajv';
import {Notify} from 'karcin-ui';


class JSForm extends React.Component<any, any> {
  ajv;
  constructor(props) {
    super(props);
    this.state = {
      formData: {
      },
      errors:{
        
      }
    };
    this.initValidator()

    this.updateForm = this.updateForm.bind(this);
    this.submit=this.submit.bind(this)
    this.validateForm=this.validateForm.bind(this);

  }
  initValidator(){
    this.ajv=new Ajv({allErrors: true});
    this.ajv.addFormat('tcinput',(val)=>{
      if(!val.match(/\d{11}/))
        return false;
      return true;
    })
  }
  createElem(sch) {
    let props = {};
    let type = sch.type;
    if (!this.props.fields[type]) {
      type = "default";
    }

    if (!sch.content) {
      sch.content = [];
    }
    if (type === "string" || type ==='tcinput' || type==='dateinput' || type==='radio' || type==='check') {
      Object.assign(props, this.props.schema.properties[sch.name], {
        onChange: this.updateForm,
        path: sch.name,
        value: this.state.formData[sch.name],
        error:this.state.errors[sch.name]
      });
    }

    

    let children = sch.content.map((k, i) => {
      return this.createElem(k);
    });
    Object.assign(props, { ...sch },{validate:this.validateForm,onSubmit:this.submit});

    return React.createElement(this.props.fields[type], props, ...children);
  }
  getInputFromSchema(key,sch,ops={}){

    let props=sch.properties[key]
    let {type}=props;
    Object.assign(props,ops)

    if(props.widget){
      type=props.widget
    }
    if(type ==='string'){

      switch(props.format){
        case 'date':
          type='dateinput';
          break;
        
      }

      if(props.enum){
        type='radio'
      }
      
      
      return[{
        ...props,
        type,
        name:key
      },
        []
      ]
    }

    if(type==='check'){
      return [{...props,type},[]]
    }

    if(props.type==='object'){
      return[{
        ...props
      },
        Object.keys(props.properties)
      ]
    }
    if(props.type==='array'){
      console.log('arr')
      let content=[]
      return[{
        ...props
      },
        content
      ]
    }
    return [{...props,type},[]]
    
  }
  normalize(uiSch, sch, parent = null) {
    if (typeof uiSch === "string") {
      uiSch={
        type:'input',
        name:uiSch
      }
    }
  
    if (Array.isArray(uiSch)) {
      let type = "row";
      return {
        type: "row",
        content: uiSch.map(k => this.normalize(k,sch,type))
      };
    }
    if (!("type" in uiSch)) {
      uiSch.type = parent === "breadcrumb" ? "bc-page" : "form";
    }

    if(uiSch.type==='input'){
      delete uiSch.type
      let [field,content] =this.getInputFromSchema(uiSch.name,sch,uiSch)

      if(field.type==='array' && ('content' in field)){
        console.log(1)
        content=field.content.map(k=>{
          return this.normalize(k,field.items)
        })
      }
      else{
        content=content.map(k=>{
          return this.normalize(k,sch.properties[uiSch.name])
        })
      }
      
      
      
      
      return{
        ...field,
        content
      }
    }
    if(uiSch.type ==='object'){
      return{
        ...uiSch,
        content:Object.keys(uiSch.properties).map(k=>this.normalize(k,uiSch))
      }
    }
  
    if ("content" in uiSch) {
      uiSch.content = uiSch.content.map(k => this.normalize(k, sch,uiSch.type));
    }
    return uiSch;
  }
  updateForm(val, path) {
    let formData = update(this.state.formData, {
      [path]: {
        $set: val
      }
    });
    this.setState({ formData });
  }
  validateForm(cb){
    let valid = this.ajv.validate(this.props.schema, this.state.formData);
    let errs={}
    if(!valid){
      errs=this.ajv.errors.reduce((val,err)=>{
        switch(err.keyword){
          case 'required':
            val[err.params.missingProperty]='Bu alan boş olamaz';
            break;
          case 'format':
            val[err.dataPath.replace('.','')]='Geçersiz TC Kimlik No';
            break;
          case 'minLength':
              val[err.dataPath.replace('.','')]=`Minimum ${err.params.limit} karakter olmalı`;
              break;
          case 'maxLength':
              val[err.dataPath.replace('.','')]=`Maksimum ${err.params.limit} karakter olmalı`;
              break;
        }
        return val
      },errs)
    }
    this.setState({errors:errs},cb)
  }
  submit(e){
    e.preventDefault()
    this.validateForm(()=>{
      console.log(this.state)
    })
    
  }
  render() {
    return (
      <div>
        {this.createElem(this.normalize(this.props.uiSchema, this.props.schema))}
      </div>
    );
  }
}

export default (props)=>{
  return(
    <JSForm {...props} fields={Object.assign({},defaultFields,props.fields)}/>
  )
}