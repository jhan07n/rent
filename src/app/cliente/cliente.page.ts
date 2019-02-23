import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  id:any;
  data=[];
  cliente={
    id:'',
    nombre:'',
    cedula:'',
    tarjeta:'',
    credito:'',
    persona:'',
    estado:''
  }
  constructor(public storage:Storage) { 
  this.id=1;
  this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
    
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
      for(let i :any =0; i <= keysLength; i++){
        /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
        if (key==="c"+i){
          this.getValue(i);
         
          this.storage.get("c"+i).then((val=>{
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
    
  this.storage.set("c"+key, value).then((response) => {
    console.log('set c' + key + ' ', response);
    this.id += 1
    //get Value Saved in key
    this.getValue(key);

  }).catch((error) => {
    console.log('set error for c' + key + ' ', error);
  });
}

// get a key/value pair
getValue(key: any) {
  this.storage.get("c"+key).then((valor => {console.table(valor)
  
  }))

}
guardar(){
  
  this.cliente.id=this.id;
  this.setValue(this.id,this.cliente)
  this.data.push(this.cliente)
 } 
  ngOnInit() {
  }

}
