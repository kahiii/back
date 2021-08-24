import mock from './mock'

import './api/users'
import './api/articles'

mock.onAny().passThrough()