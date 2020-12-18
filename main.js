const eyes = [ ":" , ";" , "٩" , ">" , "?" , "$" , "!"]
const nose = [ "-" , "+"  ,">" , "-" , "_" , "=" , "*" , "<"];
const lips = [ ")" , "(" , "{" , "[" , "]" , "}" , "/" , "|" ];
let imp=[];
let randomEyes=Math.floor(Math.random()*eyes.length);
let randomNose=Math.floor(Math.random()*nose.length);
let randomLips=Math.floor(Math.random()*lips.length);
function name1(){
    
    for(let i=0; i < eyes.length ; i++){
       
       
       randomEyes=Math.floor(Math.random()*eyes.length);
   
            let inde=eyes.indexOf(eyes[randomEyes]);
            imp.push(eyes[randomEyes]);
            eyes.slice(inde , 1);
        break;
       
           
        
    }

        for(let i=0; i < nose.length ; i++){
            randomNose=Math.floor(Math.random()*nose.length);

                let inde=nose.indexOf(nose[randomNose]);
                imp.push(nose[randomNose]);
                nose.slice(inde , 1);
            break;
   
                
            
        }
            for(let i=0; i < lips.length ; i++){
                randomLips=Math.floor(Math.random()*lips.length);
                
                    let inde=lips.indexOf(lips[randomLips]);
                    imp.push(lips[randomLips]);
                    lips.slice(inde , 1);
                 break;
            
                

            }

            if(imp.length != 0){
                let joined=imp.join('');
                console.log(joined);
                let element=document.createElement('p');
                document.getElementById('test1').appendChild(element).innerHTML = `the new string is -  ${joined}`;
            }else{
                console.log('looks like thats all we had');
            }

            imp=[];
            
            


                
                
                
            
    
}



let i= document.getElementById('blue');
i.addEventListener('click' , name1);

function removeAll(){
    document.getElementById('test1').innerHTML="";
}
let j=document.getElementById('red');
j.addEventListener('click' , removeAll)