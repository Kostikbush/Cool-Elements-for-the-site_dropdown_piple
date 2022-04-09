const dropdown = document.querySelector('.dropdown');

dropdown.onclick = () => {
    const arrow = document.querySelector('.arrow__down');
    const content = document.querySelector('.content');

    content.classList.toggle('content__active');
    arrow.classList.toggle('arrow__up');
}
const Pluses = document.querySelectorAll(".icon__right");
const Minuses = document.querySelectorAll(".icon__left");
const container = document.querySelector(".container");
const wrappers = document.querySelectorAll(".content-mini");
const clear = document.querySelector('.clear');
const input = document.getElementById('dropdown');

//const textValues = document.getElementsByClassName("icon__text").innerHTML;





container.addEventListener('click', function (){

    

    const textValue1 = document.getElementById("Value1");
    const textValue2 = document.getElementById("Value2");
    const textValue3 = document.getElementById("Value3");

    console.log(textValue1.innerHTML,textValue2.innerHTML,textValue3.innerHTML);
    sumValue = +textValue1.innerHTML + +textValue2.innerHTML + +textValue3.innerHTML;
    console.log(typeof(sumValue));





    
    const inPute = (valuesSum) => {
        if(valuesSum === 1){
            input.placeholder =  valuesSum + "  Гость";
        }
        else if(valuesSum === 0) {
            input.placeholder = "Сколько гостей";
            }
        else if(valuesSum <= 4){
            input.placeholder =  valuesSum + "  Гостя";
            }
        else if(valuesSum > 4){
            input.placeholder =  valuesSum + "  Гостей";
        }
        if(valuesSum > 0){
            clear.classList.add('clear__active');
            }
        else {
            clear.classList.remove('clear__active');
            }

        }
        inPute(sumValue);


        clear.onclick = () => {
            textValue1.innerHTML = '0';
            textValue2.innerHTML = '0';
            textValue3.innerHTML = '0';
            textVal = textValue1.innerHTML;
            input.placeholder = "Сколько гостей";
            for(plus of Pluses){
                if(textVal == 0){
                    plus.classList.remove('icon__right-hite');
                }
            for(minus of Minuses){
                    if(textVal == 0){
                        minus.classList.remove('icon__left-active');
                    }
                }
            }
        }
        console.log(sumValue);


        
    


    Object.values(wrappers).map(wrapper =>{
        const plus = document.querySelector('.icon__right');
        Object.values(Pluses).map(plus =>{
            plus.onclick = function(event) {
                let minus = event.currentTarget.parentNode.querySelector('.icon__left');
                let text = event.currentTarget.previousElementSibling;
    
                let countPlus = text.innerHTML;
                if(+countPlus <= 5){
                    text.innerHTML++;
                }
                if(+countPlus >= 5){
                    plus.classList.add('icon__right-hite');
                }
                else{
                    plus.classList.remove('icon__right-hite');
                }
    
                if(+countPlus >= 0){
                    minus.classList.add('icon__left-active');
                }
                else{
                    minus.classList.remove('icon__left-active');
                }
                return countPlus
            }
        })
    
        Object.values(Minuses).map(minus =>{
            minus.onclick = function(event) {
                let plus = event.currentTarget.parentNode.querySelector('.icon__right');
                
                let text = event.currentTarget.nextElementSibling;
                let countMinus = text.innerHTML;
                if(+countMinus >=1){
                    text.innerHTML--;
                }
                if(+countMinus >= 2){
                    minus.classList.add('icon__left-active');
                }
                else{
                    minus.classList.remove('icon__left-active');
                }
                if(+countMinus >= 7){
                    plus.classList.add('icon__right-hite');
                }
                else{
                    plus.classList.remove('icon__right-hite');
                }
                return countMinus
            }
        })
    }) 
})



