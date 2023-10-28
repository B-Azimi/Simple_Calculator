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
        updateInputDisplay({
            reset: true
        })
    }

let memory = []
const updateInputDisplay = ({
    reset = false,
    append = true,
    value = null
} = {}) => {
    const input = document.querySelector('.inputs-txt')
    if (reset && append) {
        memory = []
    } else if (reset && !append && value !== null) {
        memory[memory.length - 1] = value
    } else if (!reset && append && value !== null) {
        memory.push(value)
    } else if (!reset && !append && value !== null) {
        memory[memory.length - 1] = memory[memory.length - 1] + value 
    }
    input.innerText = memory.join(' ')
} 

// Making negative or positive input numbers
    const pos_neg = () => {
        const lastCommand = memory[memory.length - 1];
        if (!isNaN(+lastCommand)) {
            updateInputDisplay({
                append: false,
                reset: true,
                value: `${+lastCommand * -1}`
            })
        }
    }
// input numbers
    const addNumber = (num) => {
        const input = document.querySelector('.inputs-txt')
        const result = document.querySelector('.result-txt')
        if (input.innerText.length < 30) {
            // Clearing previous data before a new entry is entered
            if (result.innerText) {
                updateInputDisplay({ reset: true })
                result.innerText = '';
            }
            // add new number to memory only if last input was a symbol
            const lastCommand = memory[memory.length - 1]
            
            if (isNaN(+lastCommand)) {
                updateInputDisplay({
                    value: num
                })
            } else {
                updateInputDisplay({
                    append: false,
                    value: num
                })
            }
        }
       
    }
// input functions
    const addSymbol = (symbol) => {
        const input = document.querySelector('.inputs-txt');
        if (input.innerText.length < 30) {
            let processSymbol = symbol;
             // If there is no number before the entered symbol
            const inputIsEmpty = !memory.length;
            const symbolWithLeadingZero  = ['*','/','+','-','.','%'] ;
            const symbolIsSymbol = symbolWithLeadingZero.includes(symbol);
            if (inputIsEmpty && symbolIsSymbol) {
                processSymbol = '0' + symbol;
            } 
            // TODO: change symbol if last command was a symbol
            // add other conditions here......
            updateInputDisplay({
                value: processSymbol
            })
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


