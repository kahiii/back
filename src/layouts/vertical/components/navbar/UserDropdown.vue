<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          {{ userData.firstname }} {{ userData.lastname }}
        </p>
        <span class="user-status">{{ userData.role }}</span>
      </div>
      <b-avatar
        size="40"
        variant="light-primary"
        :src="userData.avatar"
      >
      </b-avatar>
    </template>

    <b-dropdown-divider />

    <b-dropdown-item
      :to="{ name: 'login' }"
      link-class="d-flex align-items-center"
    >
      <span>Déconexion</span>
    </b-dropdown-item></b-nav-item-dropdown>
</template>

<script>
import { userData } from '@datas/datas/users'

export default {
  data() {
    return {
      userData
    }
  }
}
</script>

<style lang="scss">
.dropdown-user {
  line-height: 1 !important;
  .nav-link {
    padding: 0;
  }
  .user-nav {
    margin-right: 0.8rem;
    flex-direction: column;
    align-items: flex-end;
    .user-name {
      color: #6e6b7b;
      font-weight: 600;
    }
    .user-status {
      font-size: smaller;
    }
  }
  .dropdown-menu {
    margin-top: 10px;
    padding: 0.5rem 0;
  }
}
</style>