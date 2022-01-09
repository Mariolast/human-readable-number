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
    if (number <= 20) {result = twonumber[number];console.log(number,onenumber[number])}                            
    if (number > 19 && number <= 99) {
            const numberarr = numberstr.split('')
             result = twonumber[numberarr[0]] + ' ' + onenumber[numberarr[1]]}
    if (number > 99) {
                const numberarr = numberstr.split('')
                 result = threenumber[numberarr[0]] + " "+ twonumber[numberarr[1]] + ' ' + onenumber[numberarr[2]]}
    return result  
}
