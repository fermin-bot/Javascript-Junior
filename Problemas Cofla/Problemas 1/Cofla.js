cofla = prompt("Cuanto dinero tiene Cofla?")
roberto = prompt("Cuanto dinero tiene Roberto?")
pedro = prompt("Cuanto dinero tiene Pedro?")

if ( cofla >= 0.6 &&  cofla <= 1 ) {
    alert("Comprate el helado de agua")
}
else if ( cofla >= 1 &&  cofla <= 1.6 ) {
    alert("Comprate el helado de crema")
}
else if ( cofla >= 1.6 &&  cofla <= 1.7 ) {
    alert("Comprate el helado de heladix")
}
else if ( cofla >= 1.7 &&  cofla <= 1.8 ) {
    alert("Comprate el helado de heladovich")
}
else if ( cofla >= 1.8 &&  cofla <= 2.9 ) {
    alert("Comprate el helado de helardo")
}
else if ( cofla >= 2.9 ) {
    alert("Comprate el helado con confites o el pote de 1/4kg")
}