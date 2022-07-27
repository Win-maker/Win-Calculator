const buttonTag = document.querySelectorAll('.button');
const resultTag = document.querySelector('.result');

for(let i=0;i<buttonTag.length;i++){
    buttonTag[i].addEventListener('click', () => {
        const getValue = buttonTag[i].textContent;

        switch(getValue){
            case 'AC': resultTag.textContent ='';
            break;

            case '←': resultTag.textContent = resultTag.textContent.slice(0,-1);
            break;

            case '=' : try{
                resultTag.textContent = eval(resultTag.textContent);
            }
            catch(error){
                resultTag.textContent = 'ERROR';
            }
            break;

            default: resultTag.textContent += getValue;
        }
    })
}