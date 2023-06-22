/*function checaAnoBissexto(ano) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }*/

 function checLeapYear(year: number): boolean {
    const cond1 = year % 400 === 0;
    const cond2 = (year % 4  === 0) && (year % 100 !== 0);
    return cond1 || cond2
 }