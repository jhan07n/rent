import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'
import { version } from 'punycode';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  id:any;
  
   
  vehiculo={
  id:'',
  descripcion:  '',
  chasis: '',
  motor: '', 
  placa: '',  
  tipo: '',
  marca: '', 
  modelo: '',  
  combustible: '',
  estado: ''
  }
  data=[];

  constructor(
    private storage: Storage
  ) {
  
   
this.id=1;
    this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
      let k:Number;
      this.storage.length().then((keysLength: Number) => {
        console.log("Total Keys " + keysLength);
        k=keysLength
        console.log(k);
        for(let i :any =0; i <= k; i++){
          /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
          if (key==i){
            this.getValue(i);
            this.id=i+1
            this.storage.get(i).then((val=>{
              this.data.push(val)
            }))
            
           }}})})}
    
 
  
  
 getid(){
   this.id=1;
  this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
    let k:Number;
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
      k=keysLength
      console.log(k);
      for(let i = 0; i <= k; i++){
        console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key)
        if (key==i){
           this.id=i + 1;
          
           console.log("el id es: " + i);
         }}


    });
   
    
  })
 }
 
  // set a key/value
  setValue(key: string, value: any) {
    
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);
 
      //get Value Saved in key
      this.getValue(key);
 
    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }
 
  // get a key/value pair
  getValue(key: any) {
    this.storage.get(key).then((valor => {console.table(valor)
      /* this.data[key]="",
      this.data[key]=valor */
    }))
  
  }
 
  // Remove a key/value pair
  removeKey(key: string) {
    this.storage.remove(key).then(() => {
      console.log('removed ' + key);
      this.data[key] = "";
    }).catch((error) => {
      console.log('removed error for ' + key + '', error);
    });
  }
 
  //Get Current Storage Engine Used
  driverUsed() {
    console.log("Driver Used: " + this.storage.driver);
  }
 
  // Traverse key/value pairs
  traverseKeys() {
    this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
     
      
      console.log("key " + key);
      console.log("iterationNumber " + iterationNumber);
      console.log("value " + value);
     
      
    });
  }
 
  // Traverse key/value pairs
  listKeys() {
    this.storage.keys().then((k) => {
      console.table(k)
      
    });
  }
 
  // Total Keys Stored
  getKeyLength() {
    let k:any;
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
      k=keysLength
    });
    return k;
  }
 
ver(){
  
 this.vehiculo.id=this.id;
this.setValue(this.id,this.vehiculo)
this.data.push(this.vehiculo)
}
}




