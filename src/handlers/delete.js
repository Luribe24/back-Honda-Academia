const pool = require('../../db/conectDB.js')
const erase = module.exports;

// Borrar nuevo Intento 
erase.deleteAttempt = (req,res)=>{

    try {
        let {id}=req.params;

        pool.query("DELETE FROM Usuario_has_Intento WHERE id_usuario_intentos = ?", id, (err,result)=>{
            if (err) throw err;
             res.status(201).send({message:`Hemos Eliminado el Intento con ${id} de los registros`});
        });
        
    } catch (error) {
        res.status(500);
        res.send(`Hay un error tipo: ${error.message}`);
    };
};


erase.prueba = (req,res)=>{

    try {
        // variables
        let grupo = req.query.grupo;
        let userId = req.query.userId;
        let gerente = req.query.gerente;
        let razon = req.query.razon;
        let ciudad = req.query.ciudad;
        let fecha = req.query.fecha;

        //Variables consulta SQL
        let grupo2="";
        let nombre2 = "";
        let gerente2 ="";
        let razon2 = "";
        let ciudad2 = "";
        let fecha2 = "";

        // Consulta del grupo 1 por defecto
        if(grupo){grupo2=`Grupo = ${grupo}`}else{grupo2=`Grupo = 1`};
        if(userId){nombre2=`and idUsuario = ${userId}`}else{nombre2=``};
        if(gerente){gerente2=`and Gerente_regional = ${gerente}`}else{gerente2=''};
        if(razon){razon2=`and Razon_social = ${razon}`}else{razon2=``};
        if(ciudad){ciudad2=`and Ciudad = ${ciudad}`}else{ciudad2=``};
        if(fecha){fecha2=`and Fecha = ${fecha}`}else{fecha2=``}


        pool.query(`SELECT * FROM Usuario WHERE ${grupo2} ${nombre2} ${gerente2} ${razon2} ${ciudad2}`,(err,result)=>{
            res.send(result);
        })
        
    } catch (error) {
        
    }

}

erase.consulta=(req,res)=>{

    try {
        // variables
        let grupo = req.query.grupo;
        let userId = req.query.userId;
        let gerente = req.query.gerente;
        let razon = req.query.razon;
        let ciudad = req.query.ciudad;
        let fecha = req.query.fecha;

        //Variables consulta SQL
        let grupo2="";
        let nombre2 = "";
        let gerente2 ="";
        let razon2 = "";
        let ciudad2 = "";
        let fecha2 = "";

        // Consulta del grupo 1 por defecto
        if(grupo){grupo2=`Grupo = ${grupo}`}else{grupo2=`Grupo = 1`};
        if(userId){nombre2=`and idUsuario = ${userId}`}else{nombre2=``};
        if(gerente){gerente2=`and Gerente_regional = ${gerente}`}else{gerente2=''};
        if(razon){razon2=`and Razon_social = ${razon}`}else{razon2=``};
        if(ciudad){ciudad2=`and Ciudad = ${ciudad}`}else{ciudad2=``};
        if(fecha){fecha2=`and Fecha = ${fecha}`}else{fecha2=``}


        pool.query(`SELECT *, MAX(Calificacion) AS Calificacion_Max FROM Usuario_has_Moto
                    INNER JOIN Usuario ON Usuario_has_Moto.Usuario_idUsuario = Usuario.idUsuario 
                    INNER JOIN Moto ON Usuario_has_Moto.Moto_id = Moto.id
                    WHERE ${grupo2} ${nombre2} ${gerente2} ${razon2} ${ciudad2} GROUP BY Usuario.idUsuario `,(err,result)=>{
            res.send(result);
        })
        
    } catch (error) {
        
    }

}


