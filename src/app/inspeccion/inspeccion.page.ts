import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inspeccion',
  templateUrl: './inspeccion.page.html',
  styleUrls: ['./inspeccion.page.scss'],
})
export class InspeccionPage implements OnInit {
  id:any;
  data=[];
  inspeccion={
    id:'',
    vehiculo:'',
    idcliente:'',
    rallones:'',
    cancumbus:'',
    repuesta:'',
    gato:'',
    roturas:'',
    estgomas:{
      goma1:'',
      goma2:'',
      goma3:'',
      goma4:''
    },
    fecha:'',
    empleado:'',
    estado:''
    
  }
  constructor(public storage:Storage) { 
    this.id=1;
    this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
      
      this.storage.length().then((keysLength: Number) => {
        console.log("Total Keys " + keysLength);
        for(let i :any =0; i <= keysLength; i++){
          /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
          if (key==="i"+i){
            this.getValue(i);
           
            this.storage.get("i"+i).then((val=>{
              this.data.push(val)
              this.id=i+1
            }))
           }
          }
          })
        })
      }

 // set a key/value
 setValue(key: string, value: any) {
    
  this.storage.set("i"+key, value).then((response) => {
    console.log('set i' + key + ' ', response);
    this.id += 1
    //get Value Saved in key
    this.getValue(key);

  }).catch((error) => {
    console.log('set error for i' + key + ' ', error);
  });
}

// get a key/value pair
getValue(key: any) {
  this.storage.get("i"+key).then((valor => {console.table(valor)
  
  }))

}
guardar(){
  
  this.inspeccion.id=this.id;
 this.setValue(this.id,this.inspeccion)
 this.data.push(this.inspeccion)
 }

  ngOnInit() {
  }

}
