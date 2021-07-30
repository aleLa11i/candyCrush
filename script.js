const conteiner = document.querySelector(".conteiner");
const fragment = document.createDocumentFragment();
const send = document.querySelector(".send");
const dif = document.querySelector(".dif");
const difH1 = document.querySelector(".dif-h1");



send.addEventListener("click",(e)=>{
  let dific = JSON.parse(localStorage.getItem("dific"));
  dific.nivel = dif.value;
  console.log(dif)
  localStorage.setItem("dific",JSON.stringify(dific))
  location.reload();
})

dif.addEventListener("change",()=>{
    difH1.innerHTML = dif.value;
})


function corregir(){
  let x=0;
  do{
    x=0;
    for (let i = 1; i <=8; i++) {
      for (let j = 1; j <=8; j++) {
        let imagen = document.getElementById(`${i}${j}`);
        
        if(imagen.tabIndex == 0){
          imagen.removeAttribute("tabindex");
          
            if(i>=0 && i<=8){
              selectImage(imagen) 
            }
            else{   
              
              imagen.src = document.getElementById(`${i-1}${j}`).src
              document.getElementById(`${i-1}${j}`).src = "https://w7.pngwing.com/pngs/133/456/png-transparent-minion-illustration-bob-the-minion-youtube-minions-universal-s-illumination-entertainment-minions-banana-film-despicable-me-animation-thumbnail.png";
              document.getElementById(`${i-1}${j}`).tabIndex = 0;
            }
        }else{x++;}
      }
    }
    borrarCandyHor3();
    borrarCandyVar3();

  }while(x<64)
  
}

function borrarEle1(){
  let valor=true;
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      
        let img1 = document.getElementById(`${i}${j}`)
        let img2 = document.getElementById(`${i+1}${j}`)
        let img3 = document.getElementById(`${i+2}${j}`)
        let img4 = document.getElementById(`${i+2}${j+1}`)
        let img5 = document.getElementById(`${i+2}${j+2}`)
        if(img1.src == img2.src && img2.src == img3.src && img3.src == img4.src && img4.src == img5.src ){
          img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img3.tabIndex=0;
          img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img1.tabIndex=0;
          img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img2.tabIndex=0;
          img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img4.tabIndex=0;
          img5.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img5.tabIndex=0;
          valor=false;     
        }  
        img1 = img2;
        img2 = img3;
        img3 = img4;
        img4 = img5;
        
      
      
    }

  }
  return valor;
  
}
function borrarEle2(){
  let valor=true;
  for (let i = 1; i <= 6; i++) {
    for (let j = 3; j <= 8; j++) {
      
        let img1 = document.getElementById(`${i}${j}`)
        let img2 = document.getElementById(`${i+1}${j}`)
        let img3 = document.getElementById(`${i+2}${j}`)
        let img4 = document.getElementById(`${i+2}${j-1}`)
        let img5 = document.getElementById(`${i+2}${j-2}`)
        if(img1.src == img2.src && img2.src == img3.src && img3.src == img4.src && img4.src == img5.src ){
          img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img3.tabIndex=0;
          img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img1.tabIndex=0;
          img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img2.tabIndex=0;
          img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img4.tabIndex=0;
          img5.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img5.tabIndex=0;
          valor=false;     
        }  
        img1 = img2;
        img2 = img3;
        img3 = img4;
        img4 = img5;
      
      
      
    }

  }
  return valor;
  
}
function borrarEle3(){
  let valor=true;
  for (let i = 3; i <= 8; i++) {
    for (let j = 1; j <= 6; j++) {
      
        let img1 = document.getElementById(`${i}${j}`)
        let img2 = document.getElementById(`${i-1}${j}`)
        let img3 = document.getElementById(`${i-2}${j}`)
        let img4 = document.getElementById(`${i-2}${j+1}`)
        let img5 = document.getElementById(`${i-2}${j+2}`)
        if(img1.src == img2.src && img2.src == img3.src && img3.src == img4.src && img4.src == img5.src ){
          img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img3.tabIndex=0;
          img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img1.tabIndex=0;
          img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img2.tabIndex=0;
          img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img4.tabIndex=0;
          img5.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img5.tabIndex=0;
          valor=false;     
        }  
        img1 = img2;
        img2 = img3;
        img3 = img4;
        img4 = img5;
     
     
    }

  }
  return valor;
  
}
function borrarEle4(){
  let valor=true;
  for (let i = 3; i <= 8; i++) {
    for (let j = 3; j <= 8; j++) {
      
        let img1 = document.getElementById(`${i}${j}`)
        let img2 = document.getElementById(`${i-1}${j}`)
        let img3 = document.getElementById(`${i-2}${j}`)
        let img4 = document.getElementById(`${i-2}${j-1}`)
        let img5 = document.getElementById(`${i-2}${j-2}`)
        if(img1.src == img2.src && img2.src == img3.src && img3.src == img4.src && img4.src == img5.src ){
          img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img3.tabIndex=0;
          img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img1.tabIndex=0;
          img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img2.tabIndex=0;
          img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img4.tabIndex=0;
          img5.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
          img5.tabIndex=0;
          valor=false;     
        }  
        img1 = img2;
        img2 = img3;
        img3 = img4;
        img4 = img5;
      
      
    }

  }
  return valor;
  
}



function borrarCandyHor3(){
  let valor=true;
  for (let i = 1; i <= 8; i++) {
    
    let img1= document.getElementById(`${i}1`)
    let img2= document.getElementById(`${i}2`)
    for (let j = 3; j <= 8; j++) {
      let img3 = document.getElementById(`${i}${j}`)
      if(img3.src == img1.src && img3.src == img2.src ){
        img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
        img3.tabIndex=0;
        img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
        img1.tabIndex=0;
        img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
        img2.tabIndex=0;
        valor=false;     
      }  
      img1 = img2;
      img2 = img3;
    }

  }
  return valor;
}



function borrarCandyHor4(){
  let valor=true;
  for (let i = 1; i <= 8; i++) {
    
    let img1= document.getElementById(`${i}1`)
    let img2= document.getElementById(`${i}2`)
    let img3= document.getElementById(`${i}3`)
    for (let j = 4; j <= 8; j++) {
      let img4 = document.getElementById(`${i}${j}`)
      
      
       if(img4.src == img1.src && img4.src == img2.src && img4.src == img3.src ){
         img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
         img4.tabIndex=0;
         img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
         img1.tabIndex=0;
         img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
         img2.tabIndex=0;
         img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
         img3.tabIndex=0;
         valor=false;     
       }  
      img1 = img2;
      img2 = img3;
      img3 = img4;
    }

  }
  return valor;
}





  function borrarCandyHor5(){
    let valor=true;
      for (let i = 1; i <= 8; i++) {
        let img1= document.getElementById(`${i}1`)
        let img2= document.getElementById(`${i}2`)
        let img3= document.getElementById(`${i}3`)
        let img4= document.getElementById(`${i}4`)
          
          for (let j = 5; j <= 8; j++) {
            let img5 = document.getElementById(`${i}${j}`)
            
            
              if(img5.src == img1.src && img5.src == img2.src && img5.src == img3.src && img5.src == img4.src ){
                img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
                img4.tabIndex=0;
                img5.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
                img5.tabIndex=0;
                img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
                img1.tabIndex=0;
                img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
                img2.tabIndex=0;
                img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
                img3.tabIndex=0;
                valor=false;     
              }  
            img1 = img2;
            img2 = img3;
            img3 = img4;
            img4 = img5;
          
          }
        
      }
    return valor;
  }


function borrarCandyVar3(){
  let valor=true;
  

 for (let i = 1; i <= 8; i++) {
  let img1= document.getElementById(`1${i}`)
  let img2= document.getElementById(`2${i}`)
  for (let j = 3; j <= 8; j++) {
    let img3 = document.getElementById(`${j}${i}`)
   
   
    if(img3.src == img1.src && img3.src == img2.src ){
      img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img3.tabIndex=0;
      img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img1.tabIndex=0;
      img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img2.tabIndex=0;

      valor=false;
      
    }
   
   
   img1 = img2;
   img2 = img3;
  }
 }

return valor;
}


function borrarCandyVar4(){
  let valor=true;
  

 for (let i = 1; i <= 8; i++) {
  let img1= document.getElementById(`1${i}`)
  let img2= document.getElementById(`2${i}`)
  let img3= document.getElementById(`3${i}`)
  for (let j = 4; j <= 8; j++) {
    let img4 = document.getElementById(`${j}${i}`)
   
   
    if(img4.src == img1.src && img4.src == img2.src && img4.src == img3.src ){
      img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img4.tabIndex=0;
      img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img1.tabIndex=0;
      img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img2.tabIndex=0;
      img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img3.tabIndex=0;
      valor=false;     

      
      
    }
   
   
   img1 = img2;
   img2 = img3;
   img3 = img4;
  }
 }

return valor;
}
function borrarCandyVar5(){
  let valor=true;
  

 for (let i = 1; i <= 8; i++) {
  let img1= document.getElementById(`1${i}`)
  let img2= document.getElementById(`2${i}`)
  let img3= document.getElementById(`3${i}`)
  let img4= document.getElementById(`4${i}`)
  for (let j = 5; j <= 8; j++) {
    let img5 = document.getElementById(`${j}${i}`)
   
   
    if(img5.src == img1.src && img5.src == img2.src && img5.src == img3.src && img5.src == img4.src ){
      img4.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img4.tabIndex=0;
      img5.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img5.tabIndex=0;
      img1.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img1.tabIndex=0;
      img2.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img2.tabIndex=0;
      img3.src = "http://pngimg.com/uploads/minions/minions_PNG59.png";
      img3.tabIndex=0;
      valor=false;  
    }
   
   
   img1 = img2;
   img2 = img3;
   img3 = img4;
   img4 = img5;
  }
 }

return valor;
}




function selectImage(img){
  let dific = JSON.parse(localStorage.getItem("dific"));
  let valor = Math.floor((Math.random() * (parseInt(dific.nivel)+2-1))+1);
  switch (valor) {
    case 1: //banana dolca
        img.src = "https://hhmayorista.com.ar/wp-content/uploads/2020/09/DOLCA-BANANITA-30gr.png";
      break;
    case 2: //flin paff
        img.src = "https://hhmayorista.com.ar/wp-content/uploads/2020/09/FLYNN-PAFF-CARAMELO-T-FRUT.png"
      break;
    case 3: //bon o bon
        img.src = "https://hhmayorista.com.ar/wp-content/uploads/2020/07/GOMA-BILLIKEN-CITRICAS-200gr.png"
      break;
    case 4: //lenguetazo
        img.src = "https://hhmayorista.com.ar/wp-content/uploads/2020/07/TIC-TAC-X-UNIDAD-MIX-DE-FRUTAS-16-GR-300x300.png"
      break;
      case 5: //
        img.src = "https://hhmayorista.com.ar/wp-content/uploads/2020/07/CARA-BULL-DOG-MANDARINA-30gr-300x300.png"
      break;
      case 6: //
        img.src = "https://hhmayorista.com.ar/wp-content/uploads/2020/07/CHOC-FULL-MANI-160-GR-300x300.png"
      break;
  }
}



for (let i = 1; i <= 8; i++) {

   for (let j = 1; j <= 8; j++) {

    var imgCandy = document.createElement(`img`)
    
    imgCandy.classList.add(`imgCandy`)
    imgCandy.setAttribute("id",`${i}${j}`)
    imgCandy.classList.toggle("hover")
    

    selectImage(imgCandy)
    imgCandy.addEventListener("click",(e)=>{
      document.getElementById(`${i}${j}`).classList.toggle("focus")
          let arrCandy = JSON.parse(localStorage.getItem("candy"));
          
              
          if (arrCandy.estado == "click"){

              arrCandy.candy2 = `${i}${j}`
              
              if(arrCandy.numEstado != `${i}${j}`){
                arrCandy.numEstado = `${i}${j}`

                let n1=parseInt(arrCandy.candy1)
                let n2=parseInt(arrCandy.candy2)

                let imagen1 = document.getElementById(`${n1}`)
                let imagen2 = document.getElementById(`${n2}`)
                imagen1.classList.toggle("focus");
                

                if(n1+1==n2 || n1-1 == n2 || n1+10==n2 || n1-10 == n2){
                      
                      let x=imagen1.src;
                      imagen1.src = imagen2.src;
                      imagen2.src = x;
                      
                      imagen2.classList.toggle("focus");

                      if( borrarEle1()==true && borrarEle2()==true && borrarEle3()==true && borrarEle4()==true && borrarCandyVar5()==true && borrarCandyHor5()==true && borrarCandyHor4()==true &&  borrarCandyVar4()==true && borrarCandyHor3()==true &&   borrarCandyVar3()==true ){
                        let x=imagen1.src;
                        imagen1.src = imagen2.src;
                        imagen2.src = x;
                      }
                      setTimeout(()=>{
                        corregir();
                      },1200)      
                      arrCandy.estado = "no-click";
                      arrCandy.candy1 = ""
                      arrCandy.candy2 = ""
                      arrCandy.numEstado = ""
                }
                else
                {
                  arrCandy.candy1 = `${i}${j}`
                  arrCandy.candy2 = ""
                  arrCandy.estado = "click";
                  arrCandy.numEstado = `${i}${j}`
                }
  
              }
              else
              {
                
                arrCandy.estado = "no-click";
                arrCandy.candy1 = ""
                arrCandy.candy2 = ""
                arrCandy.numEstado = ""

              }      
          }
          else{
              arrCandy.candy1 = `${i}${j}`
              arrCandy.candy2 = ""
              arrCandy.estado = "click";
              arrCandy.numEstado = `${i}${j}`
          }

          localStorage.setItem("candy",JSON.stringify(arrCandy))

          
    })
    fragment.appendChild(imgCandy)
  }
}


conteiner.appendChild(fragment);


borrarEle1();
borrarEle2();
borrarEle3();
borrarEle4();
borrarCandyHor5();
borrarCandyVar5();
borrarCandyHor4();
borrarCandyVar4();
borrarCandyHor3();
borrarCandyVar3();


corregir();

