const pool = require('../../db/conectDB.js')
const insert = module.exports;

// Insertar nuevo Intento 
insert.newAttempt = async(req,res)=>{

    try {
        let {Usuario_idUsuario,Status,Intento_actual,id_moto}=req.body;
        let data = {Usuario_idUsuario,Status,Intento_actual,id_moto};

        pool.query("INSERT INTO Usuario_has_Intento SET ?", data, async(err,result)=>{
            if (err) throw err;
            await res.status(201).send({message:`Agregamos el Intento del Curso ${id_moto} Para el Usuario ${Usuario_idUsuario}`});
        });
        
    } catch (error) {
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
};

// Insertar respuestas de la actividad
insert.answersActivity = async (req,res)=>{

    try {
                
        let {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento} = req.body;
        let data = {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento};

        pool.query("INSERT INTO Usuario_has_Pregunta_actividad SET ?",data,async(err,result)=>{
            if(err) throw err;
            await res.status(201).send({message:`Respuestas del usuario ${Usuario_idUsuario} en la pregunta con ID ${Pregunta_actividad_id} ha sido agregados a su base de datos`});
        });

    } catch (error) {

        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);

    };
};

// Insertar reesultado de la actividad -- usuario has activity
insert.activityTotalResult = async(req,res)=>{

    try {
        let {Usuario_idUsuario,Actividad_idActividades,Calificacion,Intento_idIntento,Nivel_completado} =req.body  
        let data = {Usuario_idUsuario,Actividad_idActividades,Calificacion,Intento_idIntento,Nivel_completado}
        pool.query("INSERT INTO Usuario_has_Actividad SET ? ",data, async (err,result)=>{
            if(err) throw err;
            await res.send(`Datos ingrasados Correctamente a la base de datos`);
            console.log(`Agregaron los datos del usuario con ID ${Usuario_idUsuario} en la actividad con ID ${Actividad_idActividades}`)
        });
    } catch (error) {
        res.status(500);
        console.error(error);
    }
};

// Insertar respuestas de una actividad
insert.resultActivity = async(req,res)=>{
     
    try {
        
        let {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento} = req.body;
        let data = {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento};

        await pool.query("INSERT INTO Usuario_has_Pregunta_actividad SET ?", data, async(err,result)=>{

            if (err) throw err;

            await res.status(201).json({message:`Datos del usuario agregados a su base de datos`});
        });

    } catch (error) {
        
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
    
};

// Insertar respuestas de un examen
insert.resultQuestionExamen = async(req,res)=>{
     
    try {
        
        let {Usuario_idUsuario,Pregunta_examen_idPregunta_examen,Calificacion,Respuesta,Intento_idIntento} = req.body;
        let data = {Usuario_idUsuario,Pregunta_examen_idPregunta_examen,Calificacion,Respuesta,Intento_idIntento};

        pool.query("INSERT INTO Usuario_has_Pregunta_examen SET ?", data, async(err,result)=>{

            if (err) throw err;

            await res.status(201).json({message:`Datos del usuario agregados a su base de datos`});
        });

    } catch (error) {
        
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
    
};

//Insertar Resultado del examen 
insert.restulExamen = async(req,res) =>{
    try {
        let {Usuario_idUsuario,Examen_idExamen,Calificacion,Intento_idIntento } = req.body;
        let data = {Usuario_idUsuario,Examen_idExamen,Calificacion,Intento_idIntento }

        pool.query('INSERT INTO Usuario_has_Examen SET ? ',data, async(err,result)=>{
            if (err) throw err;

            res.send({
                message:`El Usuario con ID ${Usuario_idUsuario} obtuvo una calificación de ${Calificacion} en el examen con ID ${Examen_idExamen} en su Intento N ${Intento_idIntento}`,
                resultado:result
            });
        });
    } catch (error) {
        res.status(500);
        res.send(`Hay un error tipo: ${error}`);
    };
}


// Resultado del Usuario que completó el curso
insert.resultModule = async(req,res)=>{
     
    try {
        
        let {Usuario_idUsuario,Moto_id,Calificacion,Intento_idIntento} = req.body;
        let data = {Usuario_idUsuario,Moto_id,Calificacion,Intento_idIntento};

        pool.query("INSERT INTO Usuario_has_Moto SET ?", data, async(err,result)=>{

            if (err) throw err;

            await res.status(201).json({message:`Datos del usuario agregados a su base de datos`});
            console.log(`El usuario ${Usuario_idUsuario} termino el curso id ${Moto_id}`)
        });

    } catch (error) {
        
        res.status(500);
        res.send(`Hay un error tipo: ${error}`);
    };
    
};


