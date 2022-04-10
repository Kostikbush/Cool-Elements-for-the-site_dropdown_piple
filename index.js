// in whis block I am find main DOM elements.
const dropdown = document.querySelector('.dropdown');
const Pluses = document.querySelectorAll(".icon__right");
const Minuses = document.querySelectorAll(".icon__left");
const container = document.querySelector(".container");
const wrappers = document.querySelectorAll(".content-mini");
const clear = document.querySelector('.clear');
const input = document.getElementById('dropdown');
const allVal = document.querySelectorAll(".icon__text");
// in whis coode  block I am find main DOM elements. 


//(--last version of coode--) - this means that I right it last.

//--last version of coode-- const textValues = document.getElementsByClassName("icon__text").innerHTML;


// this handler on all DropDown
container.addEventListener('click', function (){

    // this dropdown.onclick opend body dropdown.
    dropdown.onclick = () => {
        const arrow = document.querySelector('.arrow__down');
        const content = document.querySelector('.content');
    
        content.classList.toggle('content__active');
        arrow.classList.toggle('arrow__up');
    }
    // this dropdown.onclick opend body dropdown.


    // this function sumValue accepts iter object and sums up his values. 
    sumValue = (arrayVal) => {
        valuesSum = 0;
        for(val of arrayVal){
            text = +val.innerHTML;
            valuesSum += text;
        }
        return valuesSum;
    }
    sumValue(allVal);
    console.log(valuesSum);
    // this function sumValue accepts iter object and sums up his values. 

    // --last version of coode-- const textValue1 = document.getElementById("Value1");
    // --last version of coode-- const textValue2 = document.getElementById("Value2");
    // --last version of coode-- const textValue3 = document.getElementById("Value3");

    // --last version of coode-- sumValue = +textValue1.innerHTML + +textValue2.innerHTML + +textValue3.innerHTML;

    
    // this function accept sums up values last function - sumValue, and records new word in placeholder
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
        inPute(valuesSum);
        // this function accept sums up values last function - sumValue, and records new word in placeholder


        // this function for button clear, he resset valuesSum and records in DOM, placeholder first values
        clear.onclick = () => {
            sumValue = (arrayVal) => {
                valuesSum = 0;
                for(val of arrayVal){
                    text = +val.innerHTML;
                    val.innerHTML = '0';
                    console.log(val);
                }
                return valuesSum;
            }
            sumValue(allVal);
            console.log(valuesSum);
 
            // --last version of coode-- textValue1.innerHTML = '0';
            // --last version of coode-- textValue2.innerHTML = '0';
            // --last version of coode-- textValue3.innerHTML = '0';
            // --last version of coode-- textVal = textValue1.innerHTML;
            // --last version of coode-- input.placeholder = "Сколько гостей";

            removePlusAndMinus = (valuesSum) => {
                for(plus of Pluses){
                    if(valuesSum == 0){
                        plus.classList.remove('icon__right-hite');
                    }
                for(minus of Minuses){
                        if(valuesSum == 0){
                            minus.classList.remove('icon__left-active');
                        }
                    }
                }
            }
            removePlusAndMinus(valuesSum)
        }
        // this function for button clear, he resset valuesSum and records in DOM, placeholder first values

        //this function processes click on plus and minus and his styles.
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
    //this function processes click on plus and minus and his styles.
})
// this handler on all DropDown


