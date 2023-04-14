const { consultar, atualizar, inserir, deletar } = require('./controllers/tarefas');

async function GET() {

    const dados = await consultar();
    console.log(dados);
    
}

async function PUT( descricao, data, ordem, id ) { // Passar: descrição, data( AAA/MM/DD HH:MM ), ordem, ID que será atualizada
    const dados = [ descricao, data, ordem, id ];
    await atualizar(dados);

    await GET();

}

async function POST( descricao, data, ordem ) { // Passar: descrição, data( AAA/MM/DD HH:MM ), ordem
    const dados = [ descricao, data, ordem ];
    await inserir(dados);

    await GET();
}

async function DELETE( id ) { //Passar ID que será deletada
    await deletar( id );

    await GET();

}

DELETE(9);