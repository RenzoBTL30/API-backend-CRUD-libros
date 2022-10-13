import { connection } from '../database'

export const getEditoriales = async (req,res)=>{
    connection.query('SELECT * FROM editorial;', function (err, result) {
    try {
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json('Error al listar editoriales' + e);
    }
  });
};

export const getEditorialId = async (req,res)=>{
    const id = parseInt(req.params.id);
    connection.query('SELECT nombre FROM editorial WHERE ideditorial = ?;',[id], function(err, result) {
    try {
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error al listar editorial');
    }
  });
};