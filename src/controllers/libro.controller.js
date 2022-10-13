import { connection } from '../database'

export const getLibros = async (req,res)=>{
    connection.query('SELECT l.idlibro, l.titulo, l.autor, l.paginas, l.edicion, l.ideditorial, e.nombre as editorial FROM libro l JOIN editorial e ON e.ideditorial = l.ideditorial ORDER BY l.idlibro;', function (err, result) {
    try {
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json('Error al listar libros' + e);
    }
  });
};

export const getLibroId = async (req,res)=>{
    const id = parseInt(req.params.id);
    connection.query('SELECT * FROM libro WHERE idlibro = ?;',[id], function(err, result) {
    try {
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error al listar un libro');
    }
  });
};

export const getLibroTitulo = async (req,res)=>{
    const titulo = req.params.titulo;
    connection.query('SELECT l.idlibro, l.titulo, l.autor, l.paginas, l.edicion, l.ideditorial, e.nombre as editorial FROM libro l JOIN editorial e ON e.ideditorial = l.ideditorial WHERE l.titulo = ?;',[titulo], function(err, result) {
    try {
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error al listar un libro');
    }
  });
};

export const crearLibro = async (req,res)=>{
    const {titulo,autor,paginas,ideditorial} = req.body;
        connection.query('INSERT INTO libro (titulo,autor,paginas,edicion,ideditorial) VALUES (?,?,?,1,?);',[titulo,autor,paginas,ideditorial], function(err,result) {
    try {
        return res.status(200).json({
            message: 'Libro registrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar libro');
    }
  });
};

export const updateLibro = async (req,res)=>{
    const id = parseInt(req.params.id);
    const {titulo,autor,paginas,ideditorial}  = req.body;
    connection.query('UPDATE libro SET titulo = ?, autor = ?, paginas = ?, ideditorial = ? WHERE idlibro = ?',[titulo,autor,paginas,ideditorial, id], function(err, result) {
    try {
        return res.status(200).json({
            message: 'Libro modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar libro');
    }
  });
};

export const deleteLibro = async (req,res)=>{
    const id = parseInt(req.params.id);
    connection.query('DELETE FROM libro WHERE idlibro = ?',[id], function(err, result) {
    try {
        return res.status(200).json({
            message: 'Libro eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar libro');
    }
  });
};