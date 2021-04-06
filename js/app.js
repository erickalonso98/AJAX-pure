'use strict'
document.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('#form');
    let message = document.querySelector('#respuesta');
    form.addEventListener('submit',(e)=>{
        let data = new FormData(form);

        console.log(data.get('username'));
        console.log(data.get('password')); 

        fetch('http://localhost/AJAX-pure/post.php',{
            method:'POST',
            body:data
        })
        .then(req=>req.json())
        .then((res)=>{
            let template = '';
            if(res=='error'){
                template = `
                    <div class="alert alert-danger" id="respuesta" role="alert">
                        Llena todos los campos
                    </div>
                `;
                message.innerHTML = template;
            }else{
                template = `
                <div class="alert alert-success" id="respuesta" role="alert">
                    ${res}
                </div>
            `;
                message.innerHTML = template;
    
                form.reset();
            }
        }).catch(err => console.log(err));

        e.preventDefault();
    });
});