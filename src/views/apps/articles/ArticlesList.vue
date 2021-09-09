<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Voir</label>
            <v-select
              v-model="maxPerPage"
              :options="[10, 25]"
              :clearable="false"
              class="per-page-selector d-inline-block mx-2"
            />
            <label>entrées</label>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="primary"
                :to="{ name: 'apps-articles-create'}"
              >
                <span class="text-nowrap">Ajouter un article</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>
      <b-table
        striped
        hover
        responsive
        class="position-relative"
        primary-key="id"
        :fields="['titre', 'auteur', 'creation', 'status', 'actions' ]"
        :items="users"
      >

        <!-- Column: Titre -->
        <template #cell(titre)="data">
          <b-link
            :to="{ name: 'apps-articles-edit', params: { id: data.item.id } }"
            class="font-weight-bold d-block text-nowrap"
          >
            {{ data.item.title }}
          </b-link>
        </template>

        <!-- Column: Auteur -->
        <template #cell(auteur)="data">
          <span class="text-capitalize">{{ data.item.author.firstname }} {{ data.item.author.lastname }}</span>
        </template>

        <!-- Column: Status -->
        <template #cell(creation)="data">
          {{ $moment(data.item.createdAt).format('DD/MM/YYYY') }}
        </template>
        
        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ $t(`status.${data.item.status}`) }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
            <b-link
              :to="{ name: 'apps-articles-edit', params: { id: data.item.id } }"
              v-b-tooltip.hover.bottom="'Editer'" 
              class="mr-2"
            >
              <span class="align-middle"><unicon name="edit" width="16px" heigth="16px" class="align-middle text-body" /></span>
            </b-link>
        </template>

      </b-table>
      <div class="mx-4 mb-4">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ metaData.from }} to {{ metaData.to }} of {{ metaData.of }} entries</span>
          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import globalRenderer from '../../../utils/globalRenderer'

export default {
  components: {
    vSelect
  },
  mixins: [globalRenderer],
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      maxPerPage: 10,
      users: []
    }
  },
  computed: {
    metaData: function() {
      return { 
        from : this.currentPage,
        to: this.maxPerPage,
        of: this.users.length,
      }
    },
  },
  created: function() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.$article.getArticles({
        q: this.searchQuery,
        page: this.currentPage,
        limit: this.maxPerPage
      }).then(res => {
        this.users = res
      })
    },
  },
  watch: {
    searchQuery: function() {
      this.fetchUsers()
    }
  }
}
</script>

<style lang="scss">
.per-page-selector {
  width: 80px;
}
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