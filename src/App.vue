<template>
  <div>
    <RegistroVoo/>
    <Voo/>
  </div>
</template>

<script>
import RegistroVoo from './components/RegistroVoo.vue'
import Voo from './components/Voo.vue'

export default {
  name: 'app',
  components: {
    RegistroVoo,
    Voo
  }
}
</script>

