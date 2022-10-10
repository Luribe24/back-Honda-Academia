const { query } = require('express');
const pool = require('../../db/conectDB.js')
const insert = module.exports;

// Insertar nuevo Intento 
insert.newAttempt = (req,res)=>{

    try {
        let {Usuario_idUsuario,Status,Intento_actual,id_moto,Fecha,Escape}=req.body;
        let data = {Usuario_idUsuario,Status,Intento_actual,id_moto,Fecha,Escape};

        pool.query("INSERT INTO Usuario_has_Intento SET ?", data, (err,result)=>{
            if (err) throw err;
            res.status(201).send({message:`Agregamos el Intento del Curso ${id_moto} Para el Usuario ${Usuario_idUsuario}`});
        });
        
    } catch (error) {
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
};

// Insertar respuestas de la actividad
insert.answersActivity =  (req,res)=>{

    try {
                
        let {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento,Fecha} = req.body;
        let data = {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento,Fecha};

        pool.query("INSERT INTO Usuario_has_Pregunta_actividad SET ?",data,(err,result)=>{
            if(err) throw err;
             res.status(201).send({message:`Respuestas del usuario ${Usuario_idUsuario} en la pregunta con ID ${Pregunta_actividad_id} ha sido agregados a su base de datos`});
        });

    } catch (error) {

        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);

    };
};

// Insertar reesultado de la actividad -- usuario has activity
insert.activityTotalResult = (req,res)=>{

    try {
        let {Usuario_idUsuario,Actividad_idActividades,Fecha,Calificacion,Intento_idIntento,Nivel_completado,Duration} =req.body  
        let data = {Usuario_idUsuario,Actividad_idActividades,Fecha,Calificacion,Intento_idIntento,Nivel_completado,Duration}
        pool.query("INSERT INTO Usuario_has_Actividad SET ? ",data,  (err,result)=>{
            if(err) throw err;
             res.send(`Datos ingrasados Correctamente a la base de datos`);
            console.log(`Agregaron los datos del usuario con ID ${Usuario_idUsuario} en la actividad con ID ${Actividad_idActividades}`)
        });
    } catch (error) {
        res.status(500);
        console.error(error);
    };
};

// Insertar respuestas de una actividad
insert.resultActivity = (req,res)=>{
     
    try {
        
        let {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento} = req.body;
        let data = {Usuario_idUsuario,Pregunta_actividad_id,Calificacion,Respuesta,Intento_idIntento};

         pool.query("INSERT INTO Usuario_has_Pregunta_actividad SET ?", data, (err,result)=>{

            if (err) throw err;

             res.status(201).json({message:`Datos del usuario agregados a su base de datos`});
        });

    } catch (error) {
        
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
    
};

// Insertar respuestas de un examen
insert.resultQuestionExamen = (req,res)=>{
     
    try {
        let {Usuario_idUsuario,Pregunta_examen_idPregunta_examen,Calificacion,Respuesta,Intento_idIntento,Fecha} = req.body;
        let data = {Usuario_idUsuario,Pregunta_examen_idPregunta_examen,Calificacion,Respuesta,Intento_idIntento,Fecha};
        pool.query("INSERT INTO Usuario_has_Pregunta_examen SET ?", data, (err,result)=>{
            if (err) throw err;
            res.status(201).json({message:`Datos del usuario agregados a su base de datos`});
        });
    } catch (error) { 
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
};

// Insertar ficha tecnica realizada
insert.fichatecnicaResult = (req,res)=>{
    try {
        let {Usuario_idUsuario,Ficha_tecnica_idFicha_tecnica,Fecha,Ficha_completada,Intento_idIntento,Duracion} =req.body;
        let data = {Usuario_idUsuario,Ficha_tecnica_idFicha_tecnica,Fecha,Ficha_completada,Intento_idIntento,Duracion};
        pool.query(`INSERT INTO Usuario_has_Ficha_tecnica SET ?`,data,(err,result)=>{
            if(err) throw err;
            res.status(201).json({message:`Datos agregados a su base de datos`});
        })
    } catch (error) {
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
};


//Insertar Resultado del examen 
insert.restulExamen = (req,res) =>{
    try {
        let {Usuario_idUsuario,Examen_idExamen,Calificacion,Intento_idIntento,Fecha,Duration } = req.body;
        let data = {Usuario_idUsuario,Examen_idExamen,Calificacion,Intento_idIntento,Fecha,Duration }

        pool.query('INSERT INTO Usuario_has_Examen SET ? ',data, (err,result)=>{
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
};

// Resultado del Usuario que completó el curso
insert.resultModule = (req,res)=>{
     
    try {
        
        let {Usuario_idUsuario,Moto_id,Calificacion,Intento_idIntento,Fecha,Escape} = req.body;
        let data = {Usuario_idUsuario,Moto_id,Calificacion,Intento_idIntento,Fecha,Escape};

        pool.query("INSERT INTO Usuario_has_Moto SET ?", data, (err,result)=>{

            if (err) throw err;

             res.status(201).json({message:`Datos del usuario agregados a su base de datos`});
            console.log(`El usuario ${Usuario_idUsuario} termino el curso id ${Moto_id}`)
        });

    } catch (error) {
        
        res.status(500);
        res.send(`Hay un error tipo: ${error}`);
    };
};


