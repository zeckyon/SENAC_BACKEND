function fatorial(anagrama: string): number {
    let wordSize: number = anagrama.length
    
    if (wordSize === 0 || wordSize === 1){
        return 1
    }

    //usando o while

   // let result = wordSize

    //while (wordSize > 1) {
    //    wordSize--
    //    result *= wordSize
    //}

    for (let i = wordSize - 1; i > 1; i--) {
        wordSize *= i  
    }

    return wordSize
}

console.log(fatorial("Aroz"))