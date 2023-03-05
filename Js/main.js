function dividir(x, y) {
    resultado= x / y
}
function totalConDescuento(x){
    resultado= x - x * 10 / 100
}
function alertCobrar(x,y){
    alert (`El monto total a pagar es de $${x} ${y}`)
}
function alertAvisoCuotas(x,y){
    alert (`Por compras superiores a $${x}, el pago puede realizar en ${y} cuotas sin intereses`)
}
function alertCobroEnCuotas (x,y,z){
    alert(`El monto total de $${x} puede pagado en ${y} cuota(s) de $${z}`)
}


let montoTotal = parseInt(prompt("Ingresar monto total de la compra"));
let formaDePago = prompt(
    `El monto total es de $${montoTotal}. Ingresar forma de pago: E para efectivo, D para débito, C para crédito o X para finalizar`
)

while (formaDePago != "X" && formaDePago != "x") {
    switch (formaDePago) {
        case "E" && "e":
            if (montoTotal > 10000){
                totalConDescuento (montoTotal);
                alert (`Por compras susperior a $10000 obtiene 10% de descuento`);
                alertCobrar(resultado, "en efectivo");
            }else{
                alertCobrar(montoTotal, "en efectivo");
            }
            break;
        case "D" && "d":
            alertCobrar(montoTotal, "con tarjeta de débito");
            break;
        case "C" && "c":
            if (montoTotal < 6000) {
                alert(`Por compras menores a $6000, el pago solo podrá hacerse en 1 cuota`);
                alertCobrar(montoTotal, "con tarjeta de crédito");
            }
            if (montoTotal >= 6000 && montoTotal < 20000){
                alertAvisoCuotas (6000,"1 o 3");
                for (let i = 1; i < 4; i++) {
                    dividir (montoTotal, i) ;
                    if(i == 2){
                        continue;
                    }                
                    alertCobroEnCuotas (montoTotal,i,resultado);
                }
            }
            if (montoTotal >= 20000){
                alertAvisoCuotas (20000,"1, 3 o 6");
                for (let i = 1; i < 7; i++) {
                    dividir (montoTotal, i) ;
                    if(i == 2 || i == 4 || i == 5) {
                        continue;
                    }                
                    alertCobroEnCuotas (montoTotal,i,resultado);
                }
            }
            break;            
        default:
            alert(`Código inválido, ingrese E para efectivo, D para débito, C para crédito o X para finalizar`);
            break;
    }
    montoTotal = parseInt(prompt("Ingresar nuevo monto total de compra"));
    formaDePago = prompt(`El monto total es de $${montoTotal}. Ingresar forma de pago: E para Efectivo, D para débito, C para crédito o X para finalizar`);
}