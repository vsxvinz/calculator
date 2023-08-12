let result = document.querySelector('.result');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(btn => {
    btn.addEventListener("click", () => {
        let text = btn.innerText;
        if(result.innerText==='0' && text !='.') {
            result.innerText = '';
        }
        if(text === 'AC'){
            result.innerText = '0';
        } else if(text === 'DEL'){
            result.innerText = result.innerText.slice(0,-1) || 0;
        }else if(text === '='){
            try{
                result.innerText = eval(result.innerText)
            }catch(e){
                result.innerText = 'ERROR!'
            }
        }else {
            result.innerText += text;
        }
    })
})