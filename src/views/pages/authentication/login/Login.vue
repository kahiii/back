<template>
  <div class="auth-wrapper">
    <b-row class="auth-inner">
      <!-- Logo -->
      <Logo />
      <!-- Left side (picture) -->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="require('@/assets/img/login/login.svg')"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- Right side (form) -->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-4 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-4 mx-auto"
        >

          <b-card-title
            class="mb-3 font-weight-bold text-center"
            title-tag="h2"
          >
           Bonjour ! 👋
          </b-card-title>
          <b-card-text class="mb-5 text-center">
            Ce site est réservé aux bénévoles de l'association.
            Si vous pensez être au mauvais endroit, veuillez retourner sur <b-link href="www.lacouleurdesmaux.fr">LaCouleurDesMaux.fr</b-link>
          </b-card-text>

          <!-- form -->
          <ValidationObserver
            tag="b-form"
            ref="loginForm"
            #default="{invalid, errors}"
            class="auth-login-form mt-2"
          >
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="login-email"
              >
                <ValidationProvider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="user.email"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0]  }}</small>
                </ValidationProvider>
              </b-form-group>

              <!-- password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Mot de passe</label>
                  <b-link :to="{ name: 'login' }">
                    <small>Mot de Passe oublié?</small>
                  </b-link>
                </div>
                <ValidationProvider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="user.password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      type="password"
                      name="login-password"
                      placeholder="Password"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>

              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  name="checkbox-1"
                >
                  Se souvenir de moi
                </b-form-checkbox>
              </b-form-group>


              <!-- submit buttons -->
              <b-button
                variant="primary"
                block
                :disabled="invalid"
                @click="handleConnect"
              >
                Connexion
              </b-button>
          </ValidationObserver>

          <b-card-text class="text-center mt-4">
            <span>C'est une erreur? </span>
            <b-link href="https://www.lacouleurdesmaux.fr">
              <span>quitter</span>
            </b-link>
          </b-card-text>

        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Logo from '@/components/globals/Logo.vue'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    Logo
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.$user.resetToken()
    this.$user.resetUserProfile()
  },
  methods: {
    async handleConnect() {
      console.log(process.env)
      await this.$user.signIn(this.user)
      .then(() => {
        this.$router.push({ name: '/'})
      }).catch(() => {
        this.$refs.loginForm.setErrors({ email: 'Email ou Mot de Passe incorrect'})
      })
    }
  }
}
</script>

<style lang="scss">
.auth-wrapper {
  display: flex;
  align-items: flex-start;
  .auth-inner {
    width: 100%;
    overflow-y: auto;
    height: calc(var(--vh, 1vh) * 100);
    .logo-brand {
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .auth-bg {
      background-color: #fff;
      .group-form {
        margin-bottom: 1rem;
      }
      label {
        color: #5e5873;
        font-size: 0.857rem;
      }
    }
  }
}
</style>