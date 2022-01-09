module.exports = function toReadable (number) {
    const onenumber = ['','one','two','three',
    'four','five','six','seven','eight','nine','ten', 
    'eleven','twelve','thirteen','fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen','twenty'];
    const twonumber = ['','','twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety'];
    const threenumber = ['','one hundred','two hundred','three hundred',
    'four hundred','five hundred','six hundred','seven hundred',
    'eight hundred','nine hundred'];
    numberstr = number.toString()
    const numberstrA = numberstr.split('')
 if (number === 0) {result = 'zero'}                               
 if (number <= 20 && number >0) {result = onenumber[number]}                            
    if (number > 19 && number <= 99) {
            const numberarr = numberstr.split('')
             result = twonumber[numberarr[0]] + ' ' + onenumber[numberarr[1]]
         }
    if (number > 99) {
                const numberarr = numberstr.split('')
                const numb = Number(numberarr[1])
                if (Number(numberarr[1]) < 2) {
                    const IndexTwo = numberarr[1] + numberarr[2]
                    result = threenumber[numberarr[0]] + ' ' + onenumber[Number(IndexTwo)] }
                else {result = threenumber[numberarr[0]] + " "+ twonumber[numberarr[1]] + ' ' + onenumber[numberarr[2]]}
                }
    result = result.trimRight()
    return result  
}
