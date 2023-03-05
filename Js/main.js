function dividir(primerNumero, segundoNumero) {
    resultado = primerNumero / segundoNumero
}
function totalConDescuento(primerNumero){
    resultado= primerNumero - primerNumero * 10 / 100
}

let montoTotal = parseInt(prompt("Ingresar monto total de la compra"));
let formaDePago = prompt(
    `El monto total es de $${montoTotal}. Ingresar forma de pago: E para efectivo, D para débito, C para crédito o X para finalizar`
);

while (formaDePago != "X" && formaDePago != "x") {
    switch (formaDePago) {
        case "E" && "e":
            if (montoTotal > 10000){
                totalConDescuento (montoTotal);
                alert (`Por comprar susperior a $10000 obtiene 10% de descuento, el monto a pagar es de: ${resultado}`);
            }else{
                alert(`El monto total a pagar es de $${montoTotal} en efectivo`);
            }
            break;
        case "D" && "d":
            alert(`El monto total a pagar es de $${montoTotal} con tarjeta de débito`);
            break;
        case "C" && "c":
            if (montoTotal < 6000) {
                alert(`Por compras menores a $6000, el pago de $${montoTotal} solo podrá hacerse en 1 cuota`)
            }
            if (montoTotal >= 6000 && montoTotal < 20000){
                alert (`Por compras superiores a $6000, el pago puede realizar en 1 o 3 cuotas sin intereses`);
                for (let i = 1; i < 4; i++) {
                    dividir (montoTotal, i) ;
                    if(i == 2){
                        continue;
                    }                
                    alert(`El monto total de ${montoTotal} puede pagado en ${i} cuota(s) de $${resultado}`);
                }
            }
            if (montoTotal >= 20000){
                alert (`Por compras superiores a $20000, el pago puede realizar en 1, 3 o 6 cuotas sin intereses`);
                for (let i = 1; i < 7; i++) {
                    dividir (montoTotal, i) ;
                    if(i == 2 || i == 4 || i == 5) {
                        continue;
                    }                
                    alert(`El monto total de ${montoTotal} puede pagado en ${i} cuota(s) de $${resultado}`);
                }
            }
            break;            
        default:
            alert(`Código inválido, ingrese E para efectivo, D para débito, C para crédito o X para finalizar`);
            break;
    }
    montoTotal = parseInt(prompt("Ingresar monto total de la compra"));
    formaDePago = prompt(`El monto total es de $${montoTotal}. Ingresar forma de pago: E para Efectivo, D para débito, C para crédito o X para finalizar`);
}