function add(n1, n2){

    let negativeN1 = false
    let negativeN2 = false
    if(n1 < 0 && n2 < 0){
        n1 = String(n1)
        n1 = Number(n1.substr(1))
        negativeN1 = true
        n2 = String(n2)
        n2 = Number(n2.substr(1))
        negativeN2 = true
    } else if (n1 < 0) {
        n1 = String(n1)
        n1 = Number(n1.substr(1))
        negativeN1 = true
    } else if (n2 <0){
        n2 = String(n2)
        n2 = Number(n2.substr(1))
        negativeN2 = true
    } else {}

    let x
    for (let i = ""; i.length <= n1; i = i + "j"){
        x = i
    }

    let y
    for (let i = ""; i.length <= n2; i = i + "j"){
        y = i
    }

    //Retorno

    if (negativeN1 && negativeN2){
        return Number("-" + (x.length + y.length))
    } else if (negativeN1){
        if(n1 >= n2){
            return Number("-" + (x.substr(y.length)).length)
        } else {
            return (y.substr(x.length)).length
        }
    } else if (negativeN2){
        if (n1 <= n2){
            return Number("-" + (y.substr(x.length)).length)
        } else {
            return (x.substr(y.length)).length
        }
    } {
        return (x + y).length
    }

}

console.log(add(20, 20))
console.log(add(-20, 10))
console.log(add(10, -20))
console.log(add(-10, -10))
console.log(add(10, -10))
console.log(add(-10, 10))