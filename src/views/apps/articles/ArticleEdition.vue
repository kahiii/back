<template>
  <div>
    <b-card class="blog-edit-wrapper">
      <!-- Author -->
      <b-media
        no-body
        vertical-align="center"
        v-if="article.author"
      >
        <b-media-aside class="mr-75">
          <b-avatar
            size="38"
            :src="article.author.avatar"
          />
        </b-media-aside>
        <b-media-body>
          <h6 class="mb-25 text-capitalize">
            {{ article.author.firstname }} {{ article.author.lastname }}
          </h6>
          <b-card-text>{{ article.createdAt }}</b-card-text>
        </b-media-body>
      </b-media>
      <!-- Formulaire -->
      <b-form class="mt-4">
        <b-row>
          <b-col cols="6">
            <b-form-group
              label="Titre"
              label-for="blog-title"
              class="mb-4"
            >
              <b-form-input
                id="blog-title"
                v-model="article.title"
              />
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label="Catégories"
              label-for="blog-category"
              class="mb-4"
            >
              <v-select
                id="blog-category"
                v-model="article.categories"
                multiple
                :options="['Association', 'Interventions']"
              />
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label="Url"
              label-for="blog-url"
              class="mb-4"
            >
              <b-form-input
                id="blog-url"
                v-model="article.url"
                disabled
              />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Status"
              label-for="blog-status"
              class="mb-4"
            >
              <v-select
                id="blog-status"
                v-model="article.status"
                :options="['draft', 'published']"
              />
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Date de publication"
              label-for="scheduled-date"
            >
              <flat-pickr
                v-model="this.article.publishedAt"
                class="form-control"
                :config="{ enableTime: true, dateFormat: 'd-m-Y H:i'}"
                placeholder="YYYY/MM/DD HH:mm"
                :disabled="this.article.status !== 'Scheduled'"
              />
          </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Contenu"
              label-for="blog-content"
              class="mb-4"
            >
              <quill-editor
                id="blog-content"
                v-model="article.content"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            class="mb-4"
          >
            <div class="border rounded p-4">
              <h4 class="mb-3">
                Image de présentation
              </h4>
              <b-media
                no-body
                vertical-align="center"
                class="flex-column flex-md-row"
              >
               <b-media-aside>
                  <b-img
                    :src="article.picture"
                    height="110"
                    width="170"
                    class="rounded mr-2 mb-1 mb-md-0"
                  /> 
                </b-media-aside>
                <b-media-body>
                  <small class="text-muted">Required image resolution 800x400, image size 10mb.</small>
                  <b-card-text class="my-50">
                    <b-link id="blog-image-text">
                      
                    </b-link>
                  </b-card-text>
                  <div class="d-inline-block">
                    <b-form-file
                      v-model="fileToUpload"
                      accept=".jpg, .png"
                      placeholder="Choose file"
                      @input="inputImageRenderer"
                    />
                  </div>
                </b-media-body>
              </b-media>
            </div>
          </b-col>
          <b-col
            cols="12"
            class="btn-row"
          >
            <b-button
              variant="primary"
              @click="saveArticle"
            >
              Sauvegarder
            </b-button>
            <b-button
              variant="outline-secondary"
              @click="cancelArticle"
            >
              Annuler
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    flatPickr,
    vSelect,
    quillEditor,
    
  },
  data() {
    return {
      article: {},
      fileToUpload: [],
      currentMode: 'create'
    }
  },
  watch: {
    'article.title': function(title) {
      this.article.url = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(' ', '-')
    }
  },
  created: function() {
    if (this.$route.name === 'apps-articles-edit') {
      this.currentMode = 'edit'
      this.fetchArticle()
    }
  },
  methods: {
    async fetchArticle() {
      this.article = await this.$article.getArticle(parseInt(this.$route.params.id))
    },
    saveArticle() {
      this.currentMode === 'edit' ? this.$article.updateArticle(this.article) : this.$article.createArticle({...this.article, author: { id: 1}})
    },
    cancelArticle() {
      this.$router.push({ name: 'apps-articles-list' })
    },
    inputImageRenderer() {
      const file = this.fileToUpload
      const reader = new FileReader()
      
      reader.addEventListener(
        'load',
        () => {
          this.article.picture = reader.result
        }
      )

      if (file) {
        reader.readAsDataURL(file)
      } 
    }
  }
}
</script>

<style lang="scss">
// MOOVE //
.card {
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.428rem;
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
}
// MOOVE //
.form-control {
    height: 2.714rem;
    color: #6e6b7b;
    padding: 0.438rem 1rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #d8d6de;
    border-radius: 0.357rem;
}
// MOOVE //
label {
  color: #5e5873;
  font-size: 0.857rem;
}
// MOOVE //
.media {
    display: flex;
    align-items: flex-start;
}
// MOOVE //
.ql-editor {
  min-height: 250px;
  color: #6e6b7b;
}
// MOOVE //
.flatpickr-input {
  &[disabled] {
    cursor: not-allowed;
  }
  &:not([disabled])[readonly] {
    background-color: inherit;
  }
}
</style>