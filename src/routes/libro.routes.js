import { Router } from 'express';

const router = Router();
import * as libroCtrl from '../controllers/libro.controller'

router.get('/listar', libroCtrl.getLibros);
router.get('/buscar/:id', libroCtrl.getLibroId);
router.get('/buscartitulo/:titulo', libroCtrl.getLibroTitulo);
router.post('/agregar', libroCtrl.crearLibro);
router.put('/actualizar/:id', libroCtrl.updateLibro);
router.delete('/eliminar/:id', libroCtrl.deleteLibro);

export default router;