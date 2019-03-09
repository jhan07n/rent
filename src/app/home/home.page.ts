import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: any;



  mid:any;
  mdata=[];
  id:any;
  
   
  vehiculo={
  id:'',
  descripcion:  '',
  chasis: '',
  motor: '', 
  placa: '',  
  tipo: '',
  marcaym: '', 
  combustible: '',
  estado: true,
  }
  data=[];

  constructor(
    private storage: Storage
  ) {
    /* Usar solo en caso de emergencias XDD

     this.storage.clear() 
    
    */
  
    this.id=1;
    this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
      
      this.storage.length().then((keysLength: Number) => {
        console.log("Total Keys " + keysLength);
        for(let i :any =0; i <= keysLength; i++){
          /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
          if (key==="v"+i){
            this.getValue(i);
           
            this.storage.get("v"+i).then((val=>{
              this.data.push(val)
              this.id=i+1
            }))
           }
          }
          })
        })

        this.mid=1;
   this.storage.forEach((value: any, key: any, iterationNumber: Number) => {
     
     this.storage.length().then((keysLength: Number) => {
       console.log("Total Keys " + keysLength);
       for(let i :any =0; i <= keysLength; i++){
         /* console.log("esto es for " + i + " Esto es k "+k + " Estoy es key"+ key) */
         if (key==="m"+i){
           this.getValue(i);
          
           this.storage.get("m"+i).then((val=>{
             this.mdata.push(val)
             this.mid=i+1
           }))
          }
         }
         })
       })
      }

          

 // set a key/value
 setValue(key: string, value: any) {
    
  this.storage.set("v"+key, value).then((response) => {
    console.log('set v' + key + ' ', response);
    this.id += 1
    //get Value Saved in key
    this.getValue(key);

  }).catch((error) => {
    console.log('set error for ' + key + ' ', error);
  });
}

// get a key/value pair
getValue(key: any) {
  this.storage.get("v"+key).then((valor => {console.table(valor)
  
  }))

}
guardar(){
  
  this.vehiculo.id=this.id;
 this.setValue(this.id,this.vehiculo)
 this.data.push(this.vehiculo)
 }



prit(){
  var content = document.getElementById("printable-area").innerHTML;
    var mywindow = window.open('', 'Vehiculos', 'height=600,width=800');

    mywindow.document.write('<html><head><title>Vehiculos</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
}


 }
  





























 
 /* getid(){
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
 } */
 
 
 /* 
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
  */





