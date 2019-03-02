import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.page.html',
  styleUrls: ['./marcas.page.scss'],
})
export class MarcasPage implements OnInit {
  id:any;
  marca={
    id:'',
    descripcion:'',
    modelo:'',
    estado:''
  } 
  idm:any;
  modelo={
    id:'',
    descripcion:'',
    estado:''
  }

  datam=[];
  data=[];

  constructor(public storage:Storage) { 
    /* Usar solo en caso de emergencias XDD
    

    this.storage.clear() 
    
    */

   this.id=1;
   this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
     
     this.storage.length().then((keysLength: Number) => {
       console.log("Total Keys " + keysLength);
       for(let i :any =0; i <= keysLength; i++){
         /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
         if (key==="m"+i){
           this.getValue(i);
          
           this.storage.get("m"+i).then((val=>{
             this.data.push(val)
             this.id=i+1
           }))
          }
         }
         })
       })
     

    //------ Modelo -------------------//
    this.idm=1;
   this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
     
     this.storage.length().then((keysLength: Number) => {
       console.log("Total Keys " + keysLength);
       for(let i :any =0; i <= keysLength; i++){
         /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
         if (key==="mo"+i){
           this.getValue(i);
          
           this.storage.get("mo"+i).then((val=>{
             this.datam.push(val)
             this.idm=i+1
           }))
          }
         }
         })
       })
     }
     // set a key/value
 setValue(key: string, value: any) {
    
  this.storage.set("m"+key, value).then((response) => {
    console.log('set m' + key + ' ', response);
    this.id += 1
    //get Value Saved in key
    this.getValue(key);

  }).catch((error) => {
    console.log('set error for m' + key + ' ', error);
  });
}
   // set a key/value modelo
   setValuem(key: string, value: any) {
    
    this.storage.set("mo"+key, value).then((response) => {
      console.log('set mo' + key + ' ', response);
      this.idm += 1
      //get Value Saved in key
      this.getValue(key);
  
    }).catch((error) => {
      console.log('set error for mo' + key + ' ', error);
    });
  }

// get a key/value pair
getValue(key: any) {
  this.storage.get("mo"+key).then((valor => {console.table(valor)
  
  }))

}
guardar(){
  
  this.marca.id=this.id;
 this.setValue(this.id,this.marca)
 this.data.push(this.marca)
 }

 guardarm(){
  
  this.marca.id=this.idm;
 this.setValuem(this.idm,this.modelo)
 this.datam.push(this.modelo)
 }
  

  ngOnInit() {
  }

}
