let cant = document.getElementById('cantidad');
let btn = document.getElementById('generar');
let ver_pass = document.getElementById('contrasena');
let mandar_sms = document.getElementById('sms');

const cadena_Caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()._,';
const caract_mayus='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const caract_minus='abcdefghijklmnopqrstuvwxyz';
const caract_num='0123456789';
const caract_espes='!@#$%^&*()._,';

function limpiar(){
    cant.value="";
    ver_pass.value="";
    mandar_sms.textContent="";
}
function buscar(elemento,caracter){
    let cantidad=0;
    for(let i=0; i<caracter.length; i++){
        if(elemento == caracter[i]){
            cantidad++;
        }
    }
    return cantidad;
}
function validar(pass, t_pass){
    let n_may = 0;
    let n_min = 0;
    let n_num = 0;
    let n_esp = 0;
    for(let i=0; i<t_pass; i++){
        if(buscar(pass[i],caract_minus)>0){
            n_min++;
        }else{
            if(buscar(pass[i],caract_mayus)>0){
                n_may++;
            }else{
                if(buscar(pass[i],caract_num)>0){
                    n_num++;
                }else{
                    if(buscar(pass[i],caract_espes)>0){
                        n_esp++;
                    }   
                }
            }
        }
    }
    if(n_may>2 && n_esp>2 && n_num>2){
       mandar_sms.textContent = "CONTRASEÑA FUERTE" 
       mandar_sms.style.color = '#09cfae'
    }else{
        if(n_may>0 && n_esp>0 && n_num>0){
            mandar_sms.textContent = "CONTRASEÑA ACEPTABLE" 
            mandar_sms.style.color = '#f7efef'
        } else {              
            if (n_may == 0) {
                mandar_sms.textContent = "CONTRASEÑA DÉBIL: No contiene letras mayúsculas";
            } else if (n_num == 0) {
                mandar_sms.textContent = "CONTRASEÑA DÉBIL: No contiene números";
            } else if (n_esp == 0) {
                mandar_sms.textContent = "CONTRASEÑA DÉBIL: No contiene caracteres especiales";
            } 
            mandar_sms.style.color = '#f14e4e'     
        }   
    }
}

function generar(){
    let num_dig = parseInt(cant.value);
    if(num_dig < 8){
        alert("La cantidad de caracteres deben ser mayor de 8");
    }else{
        let password='';
        for(let i=0; i<num_dig; i++){
            let caracter_alea = cadena_Caracteres[Math.floor(Math.random() * cadena_Caracteres.length)];
            password+=caracter_alea;
        }
        ver_pass.value = password;
        validar(password,num_dig);
    }
}