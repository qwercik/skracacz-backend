import { Router } from 'express'
import aliasesController from 'src/controllers/aliasesController'

const router = Router()

router.get('/api/aliases/:token([A-Za-z0-9\\-]+)', aliasesController.findOneAlias)
router.post('/api/aliases', aliasesController.createAlias)

export default router
