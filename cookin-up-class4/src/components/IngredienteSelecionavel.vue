<template>
  <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionado">
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<script lang="ts">
import Tag
  from './Tag.vue';
export default {
  name: 'IngredienteSelecionavel',
  components: { Tag },
  props: {
    ingrediente: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      selecionado: false,
    }
  },
  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado;

      if (this.selecionado) {
        this.$emit('adicionarIngrediente', this.ingrediente);
      }
    }
  },
  emits: ['adicionarIngrediente']
}

</script>

<style>
.ingrediente {
  cursor: pointer;
}
</style>