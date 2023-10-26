    
    const clear_txt = () => {
        document.querySelector('.inputs-txt').innerText = '';
        document.querySelector('.result-txt').innerText = '';     
    }

    const pos_neg = () => { 
        if (document.querySelector('.inputs-txt').innerText.length < 30) {
            const input = document.querySelector('.inputs-txt');
            input.innerText = input.innerText.startsWith('-') ?
             input.innerText.substring(1) : '-' + input.innerText;   
        }

        
    }


    const addNumber = (num) => {
        if (document.querySelector('.inputs-txt').innerText.length < 30) {
            if (document.querySelector('.result-txt').innerText) {
            document.querySelector('.inputs-txt').innerText = '';
            document.querySelector('.result-txt').innerText = '';
            const input = document.querySelector('.inputs-txt');
            input.innerText += num;
        } else{
            const input = document.querySelector('.inputs-txt');
            input.innerText += num;
        }
        }

       
       
    }

    const addSymbol = (symbol) => {
        if (document.querySelector('.inputs-txt').innerText.length < 30) {
            const input = document.querySelector('.inputs-txt');
            if (input.innerText === '' &&
             (symbol === '*' || symbol === '/' || symbol === '+' 
             || symbol === '-' || symbol === '%' || symbol === '.')) {
                input.innerText = '0' + symbol;
            } else {
                input.innerText += symbol;
            }
        }

         
    }

    const equals = () => {
        const inputText = document.querySelector('.inputs-txt').innerText;
            const result = eval(inputText);
            if (document.querySelector('.result-txt').innerText &&
             document.querySelector('.result-txt').innerText !== 'Error' ) {
                document.querySelector('.inputs-txt').innerText = result;
                document.querySelector('.result-txt').innerText = '';
            } else{  
                   if (isNaN(result) || !isFinite(result)) {
                document.querySelector('.result-txt').innerText = 'Error';
            } else {
                document.querySelector('.result-txt').innerText = result;
            }

            }
            
    }


