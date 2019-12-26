<template>
  <div class="container-fluid">
    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-user" label="Nome de Usuário:" label-for="input-user">
          <b-form-input
            id="input-user"
            v-model="form.name"
            type="text"
            required
            placeholder="Digite seu nome de usuário"
            class="shadow p-3 mb-3 bg-white rounded mb-sm-4"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-password" label="Senha:" label-for="input-password">
          <b-input
            id="input-password"
            v-model="password"
            type="password"
            placeholder="Digite sua senha"
            :state="validation"
            class="shadow p-3 mb-3 bg-white rounded mb-sm-4"
          ></b-input>
          <b-form-invalid-feedback :state="validation">
            A senha deve conter no mínimo 6 caracteres!
          </b-form-invalid-feedback>
          <b-form-invalid-feedback :state="validation">
            Perfeito!
          </b-form-invalid-feedback>
        </b-form-group>

        <div>
          <b-link href="#foda-se">Esqueceu a senha?</b-link>
        </div>

        <b-button-group class="p-3" size="sm" id="group-btn">
          <b-button type="submit" class="shadow-lg p-3 mb-3 rounded" variant="primary">Login</b-button>
          <b-button type="submit" class="shadow-lg mx-3 p-3 mb-3 rounded" variant="success">Cadastrar</b-button>
          <b-button type="reset" class="shadow-lg p-3 mb-3 rounded" variant="danger">Reset</b-button>
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
          password: '',
        },
        show: true
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
    },
    computed: {
      validation() {
        return this.password.length > 6 && this.password.length < 20
      }
    }
  }
</script>