import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.page.html',
  styleUrls: ['./renta.page.scss'],
})
export class RentaPage implements OnInit {
  id:any;
  data=[];
  renta={
    norenta:'',
    empleado:'',
    vehiculo:'',
    cliente:'',
    fechai:'',
    fechaf:'',
    monto:'',
    dias:'',
    comentario:'',
    estado:''
  }
  constructor(public storage:Storage) {  this.id=1;
    this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
      
      this.storage.length().then((keysLength: Number) => {
        console.log("Total Keys " + keysLength);
        for(let i :any =0; i <= keysLength; i++){
          /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
          if (key==="r"+i){
            this.getValue(i);
           
            this.storage.get("r"+i).then((val=>{
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
      
    this.storage.set("r"+key, value).then((response) => {
      console.log('set r' + key + ' ', response);
      this.id += 1
      //get Value Saved in key
      this.getValue(key);
  
    }).catch((error) => {
      console.log('set error for r' + key + ' ', error);
    });
  }
  
  // get a key/value pair
  getValue(key: any) {
    this.storage.get("r"+key).then((valor => {console.table(valor)
    
    }))
  
  }
  guardar(){
    
    this.renta.norenta=this.id;
    this.setValue(this.id,this.renta)
    this.data.push(this.renta)
   } 
  ngOnInit() {
  }

}
