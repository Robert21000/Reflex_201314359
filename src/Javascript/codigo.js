var contador=0;

var Estados = [{
    A: 'sucio',
    posicion: 'A',
    B: 'sucio',
    movido:false,
    No:0
},
{
    A: 'limpio',
    posicion: 'A',
    B: 'limpio',
    movido:false,
    No:1
},
{
    A: 'sucio',
    posicion: 'A',
    B: 'limpio',
    movido:false,
    No:2
},
{
    A: 'limpio',
    posicion: 'A',
    B: 'sucio',
    movido:false,
    No:3
},
{
    A: 'sucio',
    posicion: 'B',
    B: 'sucio',
    movido:false,
    No:4
},
{
    A: 'limpio',
    posicion: 'B',
    B: 'limpio',
    movido:false,
    No:5
},
{
    A: 'sucio',
    posicion: 'B',
    B: 'limpio',
    movido:false,
    No:6
},
{
    A: 'limpio',
    posicion: 'B',
    B: 'sucio',
    movido:false,
    No:7
},

];

var registro=[]


var registro2=[]


export function reflex(){
    for(let i=0;i<Estados.length;i++){
      //      await sleep(3000); 
      dormir(Estados[i]);
          
    }

   /* for(let j=0;j<registro.length;j++){
        await sleep(3000);

        console.log(registro[j]);
    }*/
        return registro;
}

export function reflex2(){
    for(let i=0;i<Estados.length;i++){
      //      await sleep(3000); 
      dormir(Estados[i]);
          
    }

   /* for(let j=0;j<registro.length;j++){
        await sleep(3000);

        console.log(registro[j]);
    }*/
        return registro2;
}



export function dormir(estado){
            if(estado.posicion=="A"){
                if(estado.A=="sucio"){
                    registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"limpiar"});
                    estado.A="limpio"
                    if(!estado.movido){
                        registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"Mover a B"});
                        estado.movido=true
                        estado.posicion="B"
                        
                        dormir(estado)
                    }
                
                
                }else if(estado.A=="limpio"){
                    registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"Nada"});
                    if(!estado.movido){
                        registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"Mover a B"});
                        estado.posicion="B"
                        estado.movido=true
                        
                        dormir(estado)
                    }
                   
                }
            }else if(estado.posicion=="B"){
                if(estado.B=="sucio"){
                    registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"limpiar"});
                    if(!estado.movido){
                        registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"Mover a A"});
                        estado.B="limpio"
                        estado.posicion="A"
                        estado.movido=true
                        
                        dormir(estado)
                    }
                    
                   
                }else if(estado.B=="limpio"){
                    registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"Nada"});
                    if(!estado.movido){
                        registro.push({A:estado.A,posicion:estado.posicion,B:estado.B,estado:estado.No,Accion:"Mover a A"});
                        estado.posicion="A"
                        estado.movido=true
                        dormir(estado)
                    }
                    
                 
                }

            }
    
}

function HayaEstadoEnAyB(){

    return true;
}

export function prueba(dato){
dato.mensaje="falso";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



