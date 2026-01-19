// Pega o dia de hoje calculado no nó anterior
const hojeRaw = $('Que dia é hoje?').first().json.hoje_eh;
const hoje = hojeRaw ? hojeRaw.toString().toLowerCase() : '';

// Loop manual para garantir que todos os itens sejam processados
const resultados = [];

for (const item of items) {
  try {
    const diaEnvio = item.json.Dia_Envio ? item.json.Dia_Envio.toString().toLowerCase() : '';
    const ativo = item.json.Ativo;
    
    // Normalização da flag 'Ativo' (aceita boolean, string "SIM", "TRUE", etc)
    let isAtivo = false;
    if (ativo === true) isAtivo = true;
    if (typeof ativo === 'string' && ['TRUE', 'SIM', 'S', 'YES'].includes(ativo.toUpperCase().trim())) isAtivo = true;

    if (isAtivo) {
      // Verifica se é para enviar hoje ou se a flag é 'todos'
      if (diaEnvio === 'todos' || diaEnvio === hoje) {
        resultados.push(item);
      }
    }
  } catch (error) {
    // Loga erro mas não para o fluxo dos outros itens
    console.log('Erro ao processar item:', error);
  }
}

return resultados;