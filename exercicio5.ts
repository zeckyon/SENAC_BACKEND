/*function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Digite o ano atual"))
    const anoNascimento = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }*/
 
 function checkIdRenewal(): boolean {
        const currentYear  = Number(prompt("Digite o ano atual"))
        const birthYear = Number(prompt("Digite o ano de nascimento"))
        const dateOfIssuance = Number(prompt("Digite o ano de emissão do documento"))

        const age = currentYear - birthYear
        const tempoCarteira = currentYear - dateOfIssuance

        const cond1: boolean = age <= 20 && tempoCarteira >= 5
        const cond2: boolean = age > 20 && age <= 50 && tempoCarteira >= 10
        const cond3: boolean = age > 50 && tempoCarteira >= 15

        return (cond1 || cond2 || cond3)
 }