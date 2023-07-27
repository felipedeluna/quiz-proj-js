export function getDataAtualFormatada() {
    const data = new Date();
  
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
  
    return `${ano}-${mes}-${dia}`;
}