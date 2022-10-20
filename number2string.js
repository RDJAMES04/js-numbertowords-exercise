const onesToTens = ['', 'one', 'two','three','four','five', 'six', 'seven', 'eight','nine','ten','eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen']
const tenth = [,,'twenty','thirty','forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function number2String (numberInput){ 

    let len = numberInput.toString().length
    let output = []
    x = len
    let b = true

    while (x !== 0) {
        let temp = ""
        let num = 0
    
        if (x === 3) {
            num = parseInt(numberInput.toString().substring(len-3,1))
            temp = onesToTens[num] + " " + "hundred"
            output.push(temp)
        } else if (x === 2) {
            let tens = parseInt(numberInput.toString().substring(len-2,2))
            if ( tens >= 2){
                temp = tenth[tens]
                b = true
            } else {
                num = parseInt(numberInput.toString().substring(len-2,3))
                temp = onesToTens[num]
                b = false
            } 
            output.push(temp)
        } else if (x === 1) {
            if (b === true) {
                num = parseInt(numberInput.toString().substring(len-1))
                temp = onesToTens[num]
                output.push(temp)
            }
        }
        x--
    }
    console.log(numberInput)
    console.log(output.join(' '))
}
number2String(989)
