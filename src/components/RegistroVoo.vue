<template>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-7">
          <h1 class="title is-size-1-touch">
              Registrar Voo
            </h1>
              <section>
                <b-field label="Avião" >
                  <b-select placeholder="Selecione um avião" v-model="aviao">
                    <option value="Boing">Boing</option>
                    <option value="Air Bus">Air Bus</option>
                  </b-select> 
                </b-field>
                <b-field label="Data do voo" >
                  <b-datepicker v-model="data"
                    placeholder="Selecione uma data"
                    icon="calendar-today">
                  </b-datepicker>
                </b-field>
                <b-field label="Hora do Voo">
                    <b-clockpicker
                        rounded
                        placeholder="Click to select..."
                        icon="clock"
                        v-model="hora"
                        hour-format="24">
                    </b-clockpicker>
                </b-field>
                <b-field label="Numeros de Acentos">
                  <b-numberinput v-model="numero"></b-numberinput>
                </b-field>
                <b-button type="is-success" icon-right="check" @click="registrarVoo()">Registrar Voo</b-button>
              </section>
          </div>
          <div class="column is-hidden-mobile">
                <div class="is-block has-text-centered">
                <img src="../assets/logo.png" class="hero__img is-inline-block" height="50%" width="50%">
                </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RegistroVoo',
  data() {
    return {
      title: 'Registro de Voo',
      data: new Date,
      aviao: '',
      numero: 100,
      hora: new Date
    }
  },
  methods: {
    registrarVoo () {
      alert(this.data + this.aviao + this.numero + this.hora)
    }
  }
}
</script>

