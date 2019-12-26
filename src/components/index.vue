<template>
  <div class="container-fluid">
    <div class="container">
      <b-form @submit.stop.prevent @reset="onReset" v-if="show">

        <b-form-group id="input-group-user" label="Defina um nome de Usuário:" label-for="input-user">
          <b-form-input
            id="input-user"
            v-model="form.name"
            type="text"
            required
            placeholder="Sem caracteres espaciais..."
            class="shadow p-3 mb-3 bg-white rounded mb-sm-4"
          ></b-form-input>
        </b-form-group>

        <label for="input-password">Criar Senha</label> 
          <b-input
            id="input-password"
            v-model="form.password1"
            type="password"
            placeholder="Digite sua senha..."
            class="shadow p-3 mb-3 bg-white rounded mb-sm-4"
            :state="validationCaracteres"
          ></b-input>
          <b-form-invalid-feedback :state="validationCaracteres">
            A senha deve conter no mínimo 6 caracteres!
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationCaracteres">
            Perfeito!
          </b-form-valid-feedback>

        <label for="input-password">Repita a Senha</label> 
          <b-input
            id="input-password"
            v-model="form.password2"
            type="password"
            placeholder="Repita a senha..."
            class="shadow p-3 mb-3 bg-white rounded mb-sm-4"
            :state="validationConf"
          ></b-input>
          <b-form-invalid-feedback :state="validationConf">
            As senhas não conferem!
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationConf">
            Perfeito!
          </b-form-valid-feedback>

        <b-button-group class="p-3" size="sm" id="group-btn">
          <b-button type="submit" class="shadow-lg mx-1 p-3 mb-3 rounded" variant="success">Cadastrar</b-button>
          <b-button type="reset" class="shadow-lg mx-1 p-3 mb-3 rounded" variant="danger">Reset</b-button>
        </b-button-group>
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user: '',
          password1: '',
          password2: '',
        },
        show: true
      }
    },
    computed: {
      validationCaracteres() {
        return this.form.password1.length >= 6 && this.form.password1.length < 30
      },
      validationConf() {
        return this.form.password2 === this.form.password1
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.user = ''
        this.form.password = ''
        this.form.food = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>