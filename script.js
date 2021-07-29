const conteiner = document.querySelector(".conteiner");
const fragment = document.createDocumentFragment();


function corregir(){
  let x=0;
  do{
    x=0;
    for (let i = 1; i <=64; i++) {
      let imagen = document.getElementById(`${i}`);
      
      if(imagen.tabIndex == 0){
        imagen.removeAttribute("tabindex");
        
          if(i>=0 && i<=8){
            selectImage(imagen)
            
            

          }
          else{   
            
            imagen.src = document.getElementById(`${i-8}`).src
            document.getElementById(`${i-8}`).src = "https://w7.pngwing.com/pngs/133/456/png-transparent-minion-illustration-bob-the-minion-youtube-minions-universal-s-illumination-entertainment-minions-banana-film-despicable-me-animation-thumbnail.png";
            document.getElementById(`${i-8}`).tabIndex = 0;

          }
      }
      else{x++;}
    }
    borrarCandyHor();
    borrarCandyVar();
    console.log(x)
  }while(x<64)
  
}


function borrarCandyHor(){
let valor=true;
  let img1= document.getElementById(`1`)
  let img2= document.getElementById(`2`)

 for (let i = 3; i <= 64; i++) {
   let img3 = document.getElementById(`${i}`)
   
   
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

return valor;
}



function borrarCandyVar(){
  let valor=true;
  

 for (let i = 1; i <= 8; i++) {
  let img1= document.getElementById(`${i}`)
  let img2= document.getElementById(`${i+8}`)
  for (let j = 2; j <= 7; j++) {
    let img3 = document.getElementById(`${i+(8*j)}`)
   
   
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





function selectImage(img){

  let valor = Math.floor((Math.random() * (7-1))+1);
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



for (let i = 1; i <= 64; i++) {

    

    var imgCandy = document.createElement(`img`)
    
    imgCandy.classList.add(`imgCandy`)
    imgCandy.setAttribute("id",`${i}`)
    imgCandy.classList.toggle("hover")
    

    selectImage(imgCandy)

      

    imgCandy.addEventListener("click",(e)=>{
      document.getElementById(`${i}`).classList.toggle("focus")
          let arrCandy = JSON.parse(localStorage.getItem("candy"));
          
              
          if (arrCandy.estado == "click"){

              arrCandy.candy2 = `${i}`
              
              if(arrCandy.numEstado != `${i}`){
                arrCandy.numEstado = `${i}`

                let n1=parseInt(arrCandy.candy1)
                let n2=parseInt(arrCandy.candy2)

                let imagen1 = document.getElementById(`${n1}`)
                let imagen2 = document.getElementById(`${n2}`)
                imagen1.classList.toggle("focus");
                imagen2.classList.toggle("focus");

                if(n1+1==n2 || n1-1 == n2 || n1+8==n2 || n1-8 == n2){
                      
                      let x=imagen1.src;
                      imagen1.src = imagen2.src;
                      imagen2.src = x;
                      
                      

                      if(borrarCandyHor()==true && borrarCandyVar()==true ){
                        let x=imagen1.src;
                        imagen1.src = imagen2.src;
                        imagen2.src = x;
                      }
                      setTimeout(()=>{
                        corregir();
                      },1200)
                      
                      
                      
                }
                
                
                arrCandy.estado = "no-click";
                arrCandy.candy1 = ""
                arrCandy.candy2 = ""
                arrCandy.numEstado = ""
                
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
              arrCandy.candy1 = `${i}`
              arrCandy.candy2 = ""
              arrCandy.estado = "click";
              arrCandy.numEstado = `${i}`
          }

          localStorage.setItem("candy",JSON.stringify(arrCandy))

          
    })
    fragment.appendChild(imgCandy)
}


conteiner.appendChild(fragment);

borrarCandyHor();
borrarCandyVar();

corregir();

