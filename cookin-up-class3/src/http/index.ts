import type ICategoria from "@/interfaces/ICategoria";

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json')

  const categorias: ICategoria[] = await resposta.json();
  return categorias;
}

// export function obterCategorias() {
//   return [
//     {
//       "nome": "Laticínios e Ovos",
//       "ingredientes": ["Ovos", "Queijo", "Leite", "Manteiga", "Creme de Leite", "Iogurte", "Leite Condensado", "Sorvete"],
//       "rotulo": "laticinios_e_ovos"
//     },
//     {
//       "nome": "Farinhas e Fermentos",
//       "ingredientes": ["Farinha de trigo", "Polvilho", "Farinha de rosca", "Canjica", "Farinha de mandioca", "Fubá", "Linhaça", "Fermento químico"],
//       "rotulo": "farinhas_e_fermentos"
//     }
//   ];
// }