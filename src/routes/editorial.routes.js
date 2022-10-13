import { Router } from 'express';

const router = Router();
import * as editorialCtrl from '../controllers/editorial.controller'

router.get('/listar', editorialCtrl.getEditoriales);
router.get('/buscar/:id', editorialCtrl.getEditorialId);

export default router;