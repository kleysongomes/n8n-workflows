// Nó: Filtrar Repetidos
// Função: Usa a memória estática (Static Data) do workflow para evitar postar o mesmo link duas vezes.

const staticData = $getWorkflowStaticData('global');
const lastPostId = staticData.lastPostId;
const latestItem = $input.first().json;

// Verifica se o GUID ou Link já foi processado anteriormente
if (latestItem.guid === lastPostId || latestItem.link === lastPostId) {
  // Se for igual, retorna array vazio para parar a execução deste ramo
  return []; 
}

// Atualiza a memória com o novo ID
staticData.lastPostId = latestItem.guid || latestItem.link;

// Retorna o item para continuar o fluxo
return [ { json: latestItem } ];