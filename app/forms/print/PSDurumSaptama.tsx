import * as React from "react";
import * as ReportService from "../../functions/ReportService";

import JSForm from '../../components/JSForm'

import {DefaultInput, DefaultField,RadioInput,TCKimlikInput,DefaultDateInput,BCForm} from '../../forms/items';
import Form from "react-jsonschema-form";
import {CheckListInput, PhoneNumberInput, NumberInput } from '../../forms/items/Inputs';
import { MyBreadcrumb } from "../items/MyBreadcrumb";
//const schema =require('../../schemas/yasli');

let widgets={
  BaseInput:DefaultInput,
  SelectWidget:RadioInput,
  TCKimlikInput,
  DateWidget:DefaultDateInput
}

let schema = {
  type: "object",
  properties: {
    adi: {
      type: "string",
      description: "Adı",
      maxLength: 100,
      pattern: "\\w+"
    },
    soyadi: {
      type: "string",
      description: "Soyadi"
    },
    dogumYeri: {
      type: "string",
      description: "Doğum Yeri"
    },
    dogumTarihi: {
      type: "string",
      description: "Doğum Tarihi",
      format: "date"
    },
    tcKimlikNo: {
      type: "string",
      description: "TC Kimlik No",
      minLength: 11,
      maxLength: 11,
      format: "tcinput"
    },
    cinsiyet: {
      type: "string",
      enum: ["ERKEK", "KADIN"],
      description: "Cinsiyet"
    },
    medeniDurum: {
      type: "string",
      description: "Medeni Durum",
      enum: ["EVLİ", "BEKAR", "DUL"]
    },
    meslegi:{
      type: "string",
      description: "Mesleği",
    },
    maasDurumu:{
      type:"string",
      description:'Maaş Durumu'
    },
    alacagiHizmetBicimi:{
      type:'string',
      description:'Alacağı Hizmet Biçimi'
    },
    odaTipi:{
      type:'string',
      description:'Oda Tipi',
      enum:['Normal','Suit','1+1']
    },
    SosyalGuvenlikKurulusu: {
      type: "string",
      description: "Sosyal Güvenlik Kuruluşu",
      enum: ["SGK"]
    },
    engelDurumu:{
      type:'array',
      description:'Engel Durumu',
      items:{
        type:'string',
        enum:[
          'Bedensel',
          'Zihinsel',
          'Ruhsal'
        ]
      }
    },
    hastalik:{
      type:'string',
      description:'Varsa Süregelen Hastalığı / Tanısı'
    },
    takip:{
      type:'string',
      description:'Takip Edildiği Sağlık Kuruluşu'
    },
    hastaliklar:{
      type:'string',
      description:'Geçirdiği Hastalıklar'
    },
    yakinlar: {
      description:'Yakın',
      type:'array',
      items:{
        type:'object',
        description:'Yakın',
        properties:{
          tcKimlikNo: {
            type: "string",
            description: "TC Kimlik No",
            minLength: 11,
            maxLength: 11,
            format: "tcinput"
          },
          adi: {
            type: "string",
            description: "Adı",
            maxLength: 100,
            pattern: "\\w+"
          },
          soyadi: {
            type: "string",
            description: "Soyadi"
          },
          yakinligi:{
            type:'string',
            description:'Yakınlığı'
          },
          meslegi:{
            type:'string',
            description:'Mesleği'
          }
        }
      }
    }
  },
  description: "Person",
  required: [
    "adi",
    "soyadi",
    "dogumYeri",
    "dogumTarihi",
    "tcKimlikNo",
    "cinsiyet",
    "medeniDurum",
    "SosyalGuvenlikKurulusu",
    'maasDurumu',
    'alacagiHizmetBicimi',
    'odaTipi'
  ]
};
let uiSchema = {
  content: [
    {
      type: "breadcrumb",
      content: [
        {
          description: "Yaşlıya Ait Bilgiler",
          content: [
            {
              type:'input',
              name:"tcKimlikNo",
              widget:'tcinput'

            },
            ["adi", "soyadi"],
            ["dogumYeri", "dogumTarihi"],
            "cinsiyet",
            'medeniDurum',
            ['meslegi','SosyalGuvenlikKurulusu'],
            ['maasDurumu','alacagiHizmetBicimi'],
            'odaTipi'
          ]
        },
        {
          description: "Yaşlının Sağlık Durumu",
          content: [
            {
              type:'input',
              name:'engelDurumu',
              widget:'check'
            },
            [
              'hastalik',
              'takip'
            ],
            'hastaliklar'
          ]
        },
        {
          description:'Yaşlı Yakınlarına Ait Bilgiler',
          content:[
            {
              type:'input',
              name:'yakinlar',
              content:[
                'tcKimlikNo',
                ['adi','soyadi']
              ]
            }
          ]
        }
      ]
    }
  ]
};


class PSDurumSaptama extends React.Component<any, any> {
  private selectRef:React.RefObject<any>;
  constructor(props){
    super(props)
    this.print=this.print.bind(this);
    this.selectRef=React.createRef<any>();
    this.state={
      selected:0
    }
  }
  render() {
    return (
      <div className="contentWhite">
        <select ref={this.selectRef}>
          {Object.keys(ReportService.Reports).filter(k => !isNaN(Number(ReportService.Reports[k]))).map((k, v) => {
            return(
              <option value={v} key={v}>{k}</option>
            )
          })}
        </select>
        <button onClick={this.print}>Print</button>
         
      </div>
    );
  }
  print() {
    let data = {
      kaymakamlik: "KAHRAMANKAZAN",
      huzurevi: "HUZURA DOĞRU",
      adiSoyadi: "Kemal Etikan",
      dogumYeriTarihi: "200 M.Ö.",
      kabulTarihi: "200 M.S.",
      gorusmeTarihi: "200 M.Ö.",
      fizikselDurum: "fizikselDurum",
      sosyalDurum: "sosyalDurum",
      psikolojikDurum: "psikolojikDurum",
      vasisler:[
        {adiSoyadi:'sdfsdf',yakinlikDerecesi:'yakinlikDerecesi',adresi:'adresi'},
    {adiSoyadi:'sdfsdf',yakinlikDerecesi:'yakinlikDerecesi',adresi:'adresi'},
    {adiSoyadi:'sdfsdf',yakinlikDerecesi:'yakinlikDerecesi',adresi:'adresi lkjhjdsjk hjlskfkldkll fjjsdkjlfjlsdfkj skjdflkjljksd'},
    {adiSoyadi:'sdfsdf',yakinlikDerecesi:'yakinlikDerecesi',adresi:'adresi'}
      ]
    };
    ReportService.createReport(parseInt(this.selectRef.current.value), data);
  }
}

export default PSDurumSaptama;

class PrintRow extends React.Component<any, any> {
  render() {
    return (
      <div className="printRow">
        <div className="printColumn">{this.props.title}</div>
        <div className="printColumn">{this.props.value}</div>
      </div>
    );
  }
}
