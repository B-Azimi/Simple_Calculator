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
       
        if (document.querySelector('.inputs-txt').innerText.length < 30)  // Creating an input limit of up to 30 characters
         {
            const input = document.querySelector('.inputs-txt');
            input.innerText = input.innerText.startsWith('-') ?
             input.innerText.substring(1) : '-' + input.innerText;   
        }

        
    }

// input numbers
    const addNumber = (num) => {
        
        if (document.querySelector('.inputs-txt').innerText.length < 30) {
            if (document.querySelector('.result-txt').innerText) // Clearing previous data before a new entry is entered
             {
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
       
            const inputText = document.querySelector('.inputs-txt').innerText;
            const result = eval(inputText);
            if (document.querySelector('.result-txt').innerText &&
             document.querySelector('.result-txt').innerText !== 'Error' )  // If there was a number in the output 
             {
                document.querySelector('.inputs-txt').innerText = result;  // Transfer the result to the input field for further operation
                document.querySelector('.result-txt').innerText = '';
            } else{  
                   if (isNaN(result) || !isFinite(result)) {
                document.querySelector('.result-txt').innerText = 'Error';
            } else {
                document.querySelector('.result-txt').innerText = result;
            }

            }
            changResult();
            
    }


