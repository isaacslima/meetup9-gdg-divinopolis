<template>
<section class="section">
    <div class="container">
      <div>
        <h1 class="title is-size-1-touch">
          Registrar Voo
        </h1>
      </div>
      <div class="columns is-vcentered">
          <div class="column is-2">
                <b-field label="Avião" >
                  <b-select placeholder="Selecione um avião" v-model="aviao">
                    <option value="Boing">Boing</option>
                    <option value="Air Bus">Air Bus</option>
                  </b-select> 
                </b-field>
                
          </div>
          <div class="column is-2">
          <b-field label="Destino">
                <b-select placeholder="Selecione um destino" v-model="destino">
                    <option
                        v-for="option in destinos"
                        :value="option.nome"
                        :key="option.nome">
                        {{ option.nome }}
                    </option>
                </b-select>
            </b-field>
          </div>
          <div class="column is-2">
            <b-field label="Data do voo" >
                  <b-datepicker v-model="data"
                    placeholder="Selecione uma data"
                    icon="calendar-today">
                  </b-datepicker>
                </b-field>
          </div>
          <div class="column is-2">
                <b-field label="Hora do Voo">
                    <b-clockpicker
                        rounded
                        placeholder="Click to select..."
                        icon="clock"
                        v-model="hora"
                        hour-format="24">
                    </b-clockpicker>
                </b-field>
          </div>
          <div class="column is-2">
            <b-field label="Numeros de Acentos">
              <b-numberinput v-model="numero"></b-numberinput>
            </b-field>
          </div>
          <div class="column is-2">
          </div>
      </div>
      <div>
        <b-button type="is-success" icon-right="check" @click="registrarVoo()">Registrar Voo</b-button>
      </div>
    </div>
</section>
</template>

<script>
import { voosRef } from '../config/db.js';

export default {
  name: 'RegistroVoo',
  data() {
    return {
      title: 'Registro de Voo',
      data: new Date,
      aviao: '',
      numero: 100,
      hora: new Date,
      destino: '',
      destinos: [ 
        {'nome': 'Belo Horizonte'},
        {'nome': 'Divinópolis'},
        {'nome': 'Guarulhos'},
        {'nome': 'Brasília'},
        {'nome': 'Rio de Janeiro'}
      ]
    }
  },
  methods: {
    registrarVoo () {
      voosRef.push({
        data: this.data.toLocaleDateString(),
        aviao: this.aviao,
        numero: this.numero,
        hora: this.hora.toLocaleTimeString(),
        destino: this.destino
      })
      }
    }
}
</script>

