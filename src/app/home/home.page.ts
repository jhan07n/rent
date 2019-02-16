import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'
import { version } from 'punycode';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any;
  id:any;
  vehiculo = {
   
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

  constructor(
    private storage: Storage
  ) {
    /* this.vehiculo.id= 0; */
   /*  this.data = {}; */
    //Set String Value
    this.setValue("name", "Freaky Jolly");
    //Set Integer Value
    this.setValue("phone", 8908904);
    this.getid();
   
    this.getValue("vehiculos");
 
    /* let vehiculos =  this.vehiculo; */
     /*  {
        descripcion: this.vehiculo.descripcion,
        chasis: this.vehiculo.chasis,
        motor: this.vehiculo.motor,
        placa: this.vehiculo.placa,
        tipo: this.vehiculo.tipo,
        marca: this.vehiculo.marca,
        modelo: this.vehiculo.modelo,
        combustible: this.vehiculo.combustible,
        estado: this.vehiculo.estado
      },  */
    
 
    //Set Object Value
   /*  this.setValue("vehiculos", vehiculos); */

   /*  console.log(this.data.vehiculos) */
  }
 getid(){
  this.storage.forEach((value: any, key: string, iterationNumber: Number) => {
     if (key==="vehiculos"){
        this.id=parseInt(value.id) + 1;
        this.vehiculo.id = this.id;
        console.log("el id es: " + this.vehiculo.id);
      }
        else {
          this.id=1;
            this.vehiculo.id= this.id;
            console.log("el id els: " + this.vehiculo.id);
        }
    
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
  getValue(key: string) {
    this.storage.get(key).then((valor => {console.table(valor)
      this.data=valor
    }))
   /*  this.storage.get(key).then((val) => {
      console.log('get ' + key + ' ', val);
      this.data = "";
      this.data = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    }); */
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
     
      /* if (key==="id"){
        this.vehiculo.id = parseInt(value) + 1;
        console.log("el id es: " + this.vehiculo.id);
      }
        else {
            this.vehiculo.id= 1
            console.log("el id els: " + this.vehiculo.id);
        } */
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
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
    });
  }
 
ver(){
  console.table(this.vehiculo)
  this.setValue("vehiculo"+this.id, this.vehiculo);
}
}




