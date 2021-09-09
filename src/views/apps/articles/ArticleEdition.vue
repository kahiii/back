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
          <h6 class="mb-1 text-capitalize text-muted">
            {{ article.author.firstname }} {{ article.author.lastname }}
          </h6>
          <b-card-text class="text-muted">Créé le {{ $moment(article.createdAt).format('DD/MM/YYYY') }}</b-card-text>
        </b-media-body>
      </b-media>
      <!-- Formulaire -->
      <ValidationObserver
        tag="b-form"
        ref="articleForm"
        #default="{invalid}"
      >
        <b-row>
          <b-col cols="6">
            <b-form-group
              label="Titre"
              label-for="blog-title"
              class="mb-4 required"
            >
            <ValidationProvider
              #default="{ errors }"
              name="title"
              vid="title"
              rules="required"
            >
              <b-form-input
                id="blog-title"
                v-model="article.title"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </ValidationProvider>
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
                disabled
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
              class="mb-4 required"
            >
              <ValidationProvider
                #default="{ errors }"
                name="status"
                vid="status"
                rules="required"
              >
                <v-select
                  id="blog-status"
                  
                  v-model="article.status"
                  label="text"
                  :reduce="status => status.value"
                  :options="listStatus"
                  class="text-capitalize"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label="Date de publication"
              label-for="scheduled-date"
            >
              <flat-pickr
                v-model="article.publishedAt"
                class="form-control"
                :config="{ enableTime: true, dateFormat: 'd-m-Y H:i'}"
                placeholder="YYYY/MM/DD HH:mm"
                :disabled="article.status !== 'Scheduled'"
              />
          </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Contenu"
              label-for="blog-content"
              class="mb-4 required"
            >
              <ValidationProvider
                #default="{ errors }"
                name="contenu"
                vid="contenu"
                rules="required"
              >
                <quill-editor
                  id="blog-content"
                  v-model="article.content"
                />
               <small class=" text-danger">{{ errors[0] }}</small>
              </ValidationProvider>
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
              :disabled="invalid"
            >
              {{ currentMode === 'edit' ? $t('btn.save') : $t('btn.create') }}
            </b-button>
            <b-button
              variant="outline-secondary"
              @click="cancelArticle"
            >
              {{ $t('btn.cancel') }}
            </b-button>
          </b-col>
        </b-row>
      </ValidationObserver>
    </b-card>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    flatPickr,
    vSelect,
    quillEditor,
    
  },
  data() {
    return {
      article: {
        picture: 'http://localhost:9999/img/articles/placeholder-image.jpg',
      },
      fileToUpload: [],
      currentMode: 'create',
      listStatus: [
        { value: 'draft', text: this.$t(`status.draft`) },
        { value: 'published', text: this.$t(`status.published`) }
      ]
    }
  },
  watch: {
    'article.title': function(title) {
      if (this.currentMode !== 'edit') {
        this.article.url = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(' ', '-').replaceAll("'", '-')
      }
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
      this.currentMode === 'edit' ? this.updateArticle() : this.createArticle()
    },
    updateArticle() {
      this.$article.updateArticle( this.article.id, {
        title: this.article.title,
        content: this.article.content,
        url: this.article.url,
        status: this.article.status,
        picture: this.article.picture,
        author:  this.article.author.id
      }).then(() => {
        this.$toast.success("L'article à été sauvegarder")
        this.fetchArticle()
      }).catch(
        this.$toast.error("Une erreur s'est produite")
      )
    },
    createArticle() {
      this.$article.createArticle({
        title: this.article.title,
        content: this.article.content,
        url: this.article.url,
        status: this.article.status,
        picture: this.article.picture,
        author: 1
      })
    },
    cancelArticle() {
      this.$router.push({ name: 'apps-articles-list' })
    },
    inputImageRenderer() {
      const file = this.fileToUpload
      const reader = new FileReader()

      reader.onload = e => {
        this.article.picture = e.target.result
      }

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
.flatpickr-input, input {
  &[disabled] {
    cursor: not-allowed;
  }
  &:not([disabled])[readonly] {
    background-color: inherit;
  }
}
</style>