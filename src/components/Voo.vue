<template>
<div class="container">
    <div class="columns is-vcentered">
        <h1 class="title is-size-1-touch"> 
            VOOS
        </h1>
    </div>
</div>
</template>

<script>
export default {
  name: 'Voo',
  data() {
    return {
      title: 'Voos',
      data: new Date,
      aviao: '',
      numero: 100,
      hora: new Date
    }
  },
  methods: {
    carregarVoo () {
    }
  }
}
</script>

