<template>
<section class="section">
<div class="container" >
     <b-table :data="voos">
            <template slot-scope="props">
                <b-table-column field="aviao" label="Avião">
                    {{ props.row.aviao }}
                </b-table-column>
                <b-table-column field="destino" label="Destino">
                    {{ props.row.destino }}
                </b-table-column>
                <b-table-column field="numero" label="Número Acentos">
                    {{ props.row.numero }}
                </b-table-column>
                <b-table-column field="data" label="Data">
                    {{ props.row.data }}
                </b-table-column>
                 <b-table-column field="hora" label="Hora">
                    {{ props.row.hora }}
                </b-table-column>
                <b-table-column field="deletar" label="Deletar" >
                    <b-button type="is-danger" @click="deleteItem(props.row['.key'])">Cancelar Voo</b-button>
                </b-table-column>
            </template>
            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nenhum Voo Cadastrado.</p>
                    </div>
                </section>
            </template>
        </b-table>

</div>
</section>
</template>

<script>
import { db } from '../config/db';

export default {
  name: 'Voo',
  firebase: {
    voos: db.ref('voos')
  },
  data() {
    return {
        title: 'Voos',
        columns: [ 
            { field: 'aviao', label: 'Avião' },
            { field: 'destino', label: 'Destino' },
            { field: 'numero', label: 'Numero de Acentos' },
            { field: 'data', label: 'Data', centered: true },
            { field: 'hora', label: 'Hora' },

        ]
    }
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.voos.child(key).remove();
    }
  }
}
</script>

