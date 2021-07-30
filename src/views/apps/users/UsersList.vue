<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
        <b-table
          ref="refUserListTable"
          class="position-relative"
          primary-key="id"
          :fields="['utilisateur', 'email', 'role', 'status', 'actions' ]"
          :items="users"
        >
          <!-- Column: User -->
          <template #cell(utilisateur)="data">
            <b-media vertical-align="center">
              <template #aside>
                <b-avatar
                  size="32"
                  :src="data.item.avatar"
                  :text="avatarText(data.item.fullName)"
                  :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                />
              </template>
              <b-link
                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                class="font-weight-bold d-block text-nowrap"
              >
                {{ data.item.fullName }}
              </b-link>
              <small class="text-muted">@{{ data.item.username }}</small>
            </b-media>
          </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
            <b-badge
              pill
              :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
              class="text-capitalize"
            >
              {{ data.item.status }}
            </b-badge>
          </template>

          <!-- Column: Actions -->
          <template #cell(actions)="data">
            <b-dropdown
              variant="link"
              no-caret
            >
              <template #button-content>
                <unicon name="ellipsis-v" width="16px" heigth="16px" class="align-middle text-body" />
              </template>
              <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
                <span class="align-middle ml-50">Details</span>
              </b-dropdown-item>

              <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
                <span class="align-middle ml-50">Edit</span>
              </b-dropdown-item>

              <b-dropdown-item>
                <span class="align-middle ml-50">Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </template>

        </b-table>
    </b-card>
  </div>
</template>

<script>
import { users } from '@datas/users'

export default {
  data() {
    return {
      users
    }
  },
  methods: {
    avatarText(value) {
      if (!value) return ''
      const nameArray = value.split(' ')
      return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
    },
    resolveUserStatusVariant(status) {
      if (status === 'pending') return 'warning'
      if (status === 'active') return 'success'
      if (status === 'inactive') return 'danger'
      return 'primary'
    }
  }
}
</script>

<style lang="scss">
.table {
  color: #6e6b7b;
  th, td {
    vertical-align: middle;
    padding: 0.72rem 2rem;
  }
  th {
    vertical-align: top;
    text-transform: uppercase;
    font-size: 0.857rem;
    letter-spacing: 0.5px;
    background-color: #f3f2f7;
    border-bottom: 2px solid #ebe9f1 !important;
    text-transform: uppercase;
  }
  .media {
    display: flex;
    align-items: flex-start;
  }
}

</style>