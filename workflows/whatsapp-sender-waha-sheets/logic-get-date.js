// Define dia da semana em PT-BR (Sem acentos para compatibilidade)
const diasSemana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
const hoje = new Date();
const diaTexto = diasSemana[hoje.getDay()];

return [{ json: { hoje_eh: diaTexto } }];