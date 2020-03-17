import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'

import HelloController from './controllers/hello_controller'

const application = Application.start()
application.register('hello', HelloController)

Turbolinks.start()
