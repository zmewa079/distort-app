import { Router } from 'express'
import * as tasteDiveApiCtrl from '../controllers/tasteDiveApi.js'

const router = Router()

router.get('/:name/:type', tasteDiveApiCtrl.getSuggestions)

export { router }