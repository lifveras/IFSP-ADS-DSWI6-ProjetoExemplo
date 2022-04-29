<template>
  <div>
    <b-card
      tag="article"
      style="max-width: 260px; max-height: 300px"
      v-bind:title="item.itemTipo.nome"
      v-bind:sub-title="item.patrimonio"
      class="mb-2"
    >
      <b-card-img
        top
        v-bind:src="item.itemTipo.imagem"
        class="card-image"
      ></b-card-img>
      <b-card-text
        ><b>Responsável:</b> <br />
        {{ item.responsavel.prontuario }} -
        {{ item.responsavel.nome }}</b-card-text
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  data: function () {
    return {
    }
  },
  props: ['item'],
}
</script>

<style>
.card-image {
    height: 130px; 
    object-fit: cover; 
    object-position: "center";
}
</style>
