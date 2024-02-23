<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg">
      Selecione abaixo os ingredientes que voce quer usar nessa receita:
    </p>
    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria :categoria="categoria" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)" />
      </li>
    </ul>
    <p class="paragrafo dicas">
      *Atencao: consideramos que voce tem sal, pimenta e agua
    </p>
          <button texto="Buscar Receitas" value="Buscar receitas" @click="$emit('buscarReceitas')">
            Buscar Receitas
          </button>
  </section>
</template>

<script lang="ts">
import { obterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
export default {
  name: 'SelecionarIngredientes',
  components: { CardCategoria },
  data() {
    return {
      categorias: [] as ICategoria[],
    }
  },
  async created() {
    this.categorias = await obterCategorias();
  },
  emits: ['adicionarIngrediente', 'buscarReceitas']

}
</script>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>