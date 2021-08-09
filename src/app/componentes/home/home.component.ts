import { Component, OnInit, ɵConsole } from '@angular/core';
import {  timer,interval} from "rxjs";

import {reflex,dormir,prueba} from '../../../Javascript/codigo.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  

registro:any=[];
registro2:any=[];
registro3:any=[];
registro4:any=[];
  ngOnInit(): void {
     /* var dato={mensaje:"verdadero"}
          console.log(dato.mensaje);
          prueba(dato)
          console.log(dato.mensaje);*/
          this.registro2= reflex();
         const cronometro=interval(3000);
         const cronometro2=interval(3000);
         cronometro.subscribe((n)=>{
            if(n<=this.registro2.length-1){
              this.registro[n]=this.registro2[n]
              
            }
         
         }); 
         this.registro2=reflex(); 
         cronometro2.subscribe((n)=>{
            if(n<=this.registro2.length-1){
              this.registro[n]=this.registro2[n]
              
            }
         
         });
          
  }




}
