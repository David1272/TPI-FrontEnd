const precioTicket = 1000;
const descuentoEstudiante = 20;
const descuentoOrador = 30;

const ticketsRange = document.getElementById('ticketsRange');
const totalTickets = document.getElementById('totalTickets');
const montoTotalTickets = document.getElementById('montoTotalTickets');

const categoriaSelect = document.getElementById('categoriaSelect');
const descuentoCategoria = document.getElementById('descuentoCategoria');
const descuentoTotal = document.getElementById('descuentoTotal');

const totalTotal = document.getElementById('totalTotal');

function actualizarCambios () {
    
    tickets.innerText = ticketsRange.value;
    totalTickets.innerText = 'Tickets x' + ticketsRange.value;
    montoTotalTickets.innerText = '$' + precioTicket * ticketsRange.value;

    if(categoriaSelect.value === '1'){
        descuentoCategoria.innerText = 'Sin Descuento';
        descuentoTotal.innerText = '0'
    } else if(categoriaSelect.value === '2'){
        descuentoCategoria.innerText = 'Descuento %20';
        descuentoTotal.innerText = precioTicket * ticketsRange.value * descuentoEstudiante / 100;
    } else if(categoriaSelect.value === '3'){
        descuentoCategoria.innerText = 'Descuento %30';
        descuentoTotal.innerText = precioTicket * ticketsRange.value * descuentoOrador / 100;
    }

    totalTotal.innerText = '$' + (precioTicket * ticketsRange.value - Number(descuentoTotal.innerText));

}

ticketsRange.addEventListener('input', function () {
    actualizarCambios();
});

categoriaSelect.addEventListener('change', function () {
    actualizarCambios();
});