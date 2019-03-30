import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.page.html',
  styleUrls: ['./renta.page.scss'],
})
export class RentaPage implements OnInit {
  eid:any;
  edata=[];
  cid:any;
  cdata=[];
  vid:any
  vdata=[];
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
    estado:true
  }
  constructor(public storage:Storage) {  
    this.id=1;
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

      //para buscar vehiculos
      this.vid=1;
      this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
      
        this.storage.length().then((keysLength: Number) => {
          console.log("Total Keys " + keysLength);
          for(let i :any =0; i <= keysLength; i++){
            /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
            if (key==="v"+i){
              this.getValue(i);
             
              this.storage.get("v"+i).then((val=>{
                this.vdata.push(val)
                this.vid=i+1
              }))
             }
            }
            })
          })


          //para buscar clientes
          this.cid=1;
  this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
    
    this.storage.length().then((keysLength: Number) => {
      console.log("Total Keys " + keysLength);
      for(let i :any =0; i <= keysLength; i++){
        /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
        if (key==="c"+i){
          this.getValue(i);
         
          this.storage.get("c"+i).then((val=>{
            this.cdata.push(val)
            this.cid=i+1
          }))
         }
        }
        })
    })



    //para buscar empleados
    this.eid=1;
   this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
     
     this.storage.length().then((keysLength: Number) => {
       console.log("Total Keys " + keysLength);
       for(let i :any =0; i <= keysLength; i++){
         /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
         if (key==="u"+i){
           this.getValue(i);
          
           this.storage.get("u"+i).then((val=>{
             this.edata.push(val)
             this.eid=i+1
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

   
    if (this.renta.estado===true){
     

      this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
    
        this.storage.length().then((keysLength: Number) => {
          console.log("Total Keys " + keysLength);
          for(let i :any =0; i <= keysLength; i++){
          
            /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
            if (key==="v"+this.renta.vehiculo){
              
             
              this.storage.get("v"+this.renta.vehiculo).then((val=>{
                
                console.table(val)
              
                val.estado=false;
               this.storage.set("v"+this.renta.vehiculo, val);
                
              }))
             }
            }
            })
        })

    }
    else{
      this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
    
        this.storage.length().then((keysLength: Number) => {
          console.log("Total Keys " + keysLength);
          for(let i :any =0; i <= keysLength; i++){
          
            /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
            if (key==="v"+this.renta.vehiculo){
              
             
              this.storage.get("v"+this.renta.vehiculo).then((val=>{
                
                console.table(val)
               
                val.estado=true;
               this.storage.set("v"+this.renta.vehiculo, val);
                
              }))
             }
            }
            })
        })

    }
    
   } 
  ngOnInit() {
  }
  prit(){
    var content = document.getElementById("printable-area").innerHTML;
      var mywindow = window.open('', 'Renta', 'height=600,width=800');
  
      mywindow.document.write('<html><head><title>Renta</title>');
      mywindow.document.write('</head><body >');
      mywindow.document.write(content);
      mywindow.document.write('---------------------------------------------------');
      mywindow.document.write('</body></html>');
  
      mywindow.document.close();
      mywindow.focus()
      mywindow.print();
      mywindow.close();
      return true;
  }
}
