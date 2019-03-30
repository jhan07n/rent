import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  id:any;
  data=[];
  usuario={
    id:'',
    nombre:'',
    cedula:'',
    tanda:'',
    comision:'',
    ingreso:'',
    estado:''
  }
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
         if (key==="u"+i){
           this.getValue(i);
          
           this.storage.get("u"+i).then((val=>{
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
    
  this.storage.set("u"+key, value).then((response) => {
    console.log('set u' + key + ' ', response);
    this.id += 1
    //get Value Saved in key
    this.getValue(key);

  }).catch((error) => {
    console.log('set error for u' + key + ' ', error);
  });
}

// get a key/value pair
getValue(key: any) {
  this.storage.get("u"+key).then((valor => {console.table(valor)
  
  }))

}
guardar(){
  
  this.usuario.id=this.id;
  this.setValue(this.id,this.usuario)
  this.data.push(this.usuario)
 }
 

  ngOnInit() {
  }
  prit(){
    var content = document.getElementById("printable-area").innerHTML;
      var mywindow = window.open('', 'Empleados', 'height=600,width=800');
  
      mywindow.document.write('<html><head><title>Empleados</title>');
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
