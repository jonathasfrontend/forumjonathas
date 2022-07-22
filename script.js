let btnRespostas = document.querySelectorAll('.thread button');

for(let i = 0; i < btnRespostas.length; i++){
    btnRespostas[i].addEventListener('click', function(e){
        let respostas = document.querySelectorAll('.respostas');
        respostas[i].style.display = 'block';
        e.preventDefault();
    })
}

let form = document.querySelectorAll('form');
for(let i = 0; i < form.length; i++){
    form[i].addEventListener('submit', function(e){
        e.preventDefault();
        let conteudo = document.querySelectorAll('textarea')[i];
        form[i].insertAdjacentHTML('beforebegin', `<p>${conteudo.value}</p>`);
        conteudo.value = '';
    }) 
}