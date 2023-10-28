    // Create a space between every three numbers in the output
    const changResult = () => {
        const resultTxt = document.querySelector('.result-txt');
        if (resultTxt.innerText.indexOf('.') === -1) {

            const resultArray = resultTxt.innerText.split('');
    
            const spacedResult = resultArray.map((char, index) =>
                (index > 0 && (resultArray.length - index) % 3 === 0) ? ` ${char}` : char).join('');
    
            document.querySelector('.result-txt').innerText = spacedResult;
        }
    }
    
//   Empty the input and output
    const clear_txt = () => {
        document.querySelector('.inputs-txt').innerText = '';
        document.querySelector('.result-txt').innerText = '';     
    }
// Making negative or positive input numbers
    const pos_neg = () => {
       const input = document.querySelector('.inputs-txt');
        // Creating an input limit of up to 30 characters
        if (input.innerText.length < 30) {
            input.innerText = input.innerText.startsWith('-') ?
             input.innerText.substring(1) : '-' + input.innerText;   
        }
    }

// input numbers
    const addNumber = (num) => {
        const input = document.querySelector('.inputs-txt')
        const result = document.querySelector('.result-txt')
        if (input.innerText.length < 30) {
            // Clearing previous data before a new entry is entered
            if (result.innerText) {
                input.innerText = '';
                result.innerText = '';
            }
            input.innerText += num;
        }
       
    }
// input functions
    const addSymbol = (symbol) => {
        const input = document.querySelector('.inputs-txt');
        if (input.innerText.length < 30) {
            let processSymbol = symbol;
             // If there is no number before the entered symbol
            const inputIsEmpty = input.innerText === '';
            const symbolWithLeadingZero  = ['*','/','+','-','.','%'] ;
            const symbolIsSymbol = symbolWithLeadingZero.includes(symbol);
            if (inputIsEmpty && symbolIsSymbol) {
                processSymbol = '0' + symbol;
            } 
            // add other conditions here......
            input.innerText += processSymbol;
        }
    }
// calculation
    const equals = () => {
        const result = document.querySelector('.result-txt')
        const input = document.querySelector('.inputs-txt');
        let resultValue = eval(input.innerText);
        // If there was a number in the output
        // Transfer the result to the input field for further operation
        if (result.innerText && result.innerText !== 'Error' ) {
            input.innerText = resultValue;
            resultValue = '';
        } else if (isNaN(resultValue) || !isFinite(resultValue)) {
            resultValue = 'Error';
        }
        result.innerText = resultValue
        changResult();
            
    }


