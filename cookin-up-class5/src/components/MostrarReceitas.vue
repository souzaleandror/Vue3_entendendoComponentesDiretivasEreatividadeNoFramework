<template>
  <div>
    <h1>atas</h1>
    <button texto="Buscar Receitas" value="Buscar receitas" @click="$emit('SelecionarIngredientes')">
      Editar Receitas
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MostrarReceitas'
}
</script>

<style></style>