
function pedidoStartbucks(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Vanilla':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'Te helado':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);
            break;
        default:
            break;
    }
}

const pedido1 = {tipo: 'Vanilla', cliente:'Maria'};
const pedido2 = {tipo: 'Te helado', cliente:'Pedro'};

pedidoStartbucks(pedido1, cliente => {
    console.log('Pedido listo llamar a: ', cliente);
});

pedidoStartbucks(pedido2, cliente => {
    console.log('Pedido listo llamar a: ', cliente);
});