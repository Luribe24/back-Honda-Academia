const express = require('express');
const router = express.Router();
const viewer =require('./handlers/views.js');
const insert = require('./handlers/results.js')
const erase = require('./handlers/delete.js')

// --------------------------------------------------------------------------
// gets
// --------------------------------------------------------------------------

// MOSTRAR LAS TABLAS
router.get('/tables', viewer.tables);
router.get('/categorias',viewer.categories);

    // =========== RUTAS DEL FRONT END ==========
    router.get('/info/usuario/:idUsuario/curso/:idCurso', viewer.mixingInfo);

    // =============== INTENTOS =======================

    router.get('/intentos', viewer.intentos);
    router.get('/intentos/usuario/:id/curso/:curseId', viewer.intentosEachUser);

    // =============== USUARIOS =======================

    //Ver todos los usuarios
    router.get('/usuarios',viewer.users);
    //Mostrar info del usuario único
    router.get('/usuario/:id',viewer.user);
    

    // ================= CURSOS ==========================

    //Mostrar un curso filtrado por ID de la moto
    router.get('/curso/:id', viewer.curso);
    //Mostrar Todos los cursos -- listado cpompleto
    router.get('/cursos', viewer.cursos);

    // =============== ACTIVIDADES =======================

    //Ver todas las actividades de cualquier curso -- listado completo 
    router.get('/todas/actividades',viewer.allActivities);
    //Todas las actividades que corresponen a un curso -- se filtra por id curso 
    router.get('/todas/actividad/:id', viewer.activities);
    //Ver todas las preguntas de las actividades 
    router.get('/preguntas/actividades',viewer.questionsActivities);
    //Ver todas las preguntas filtrando Id actividad
    router.get('/preguntas/actividad/:idActivity',viewer.questionsEachActivity);
    // Ver todas las respuestas 
    router.get('/respuestas/actividades',viewer.answersActivity);
    // Ver todas las respuestas por Id de pregunta
    router.get('/respuestas/actividades/:id_question',viewer.answersActivityEachQuestion);
    // Ver las respuestas de un usuario por IOD actividad y por el intento Actual
    router.get('/respuestas/actividad/:idActividad/usuario/:idUser/intento/:idIntento',viewer.answerFilterActivityAttemp)
    // Respuestas enviadas por los usuarios
    router.get('/respuestas/usuarios', viewer.answersEachUsers);
    // Respuestas enviadas por los usuarios
    router.get('/respuestas/usuario/:id_user', viewer.answersForUser);
    //ver todos los resultados de todas la actividades
    router.get('/resultado/actividades', viewer.activitiesResults);
    //ver todos los resultados de las actividades por id de la actividad
    router.get('/resultado/actividades/:activity_id', viewer.activitiesResultEachCurso);
    //ver todos los resultados de las actividades por id de la actividad y por id del usuario
    router.get('/resultado/actividad/:activity_id/usuario/:id_user/intento/:idIntento', viewer.activitiesResultEachUserAndActivity);
    //Ver todos los resultados filtrados por el id de usuario
    router.get('/actividades/resultado/usuario/:id_user', viewer.activitiesResultEachUser);
    //Consulta especifica de las actividades 
    router.get('/consultaEspecifica/usuario/:iduser/actividad/:idActividad/intento/:attemp', viewer.specificConsult);
    //AVG actividades 
    router.get('/avgActividades/usuario/:idUser/intento/:attemp/curso/:curse', viewer.avgActividades);

    // Ver las preguntas y respuestas por ID de la actividad 
    router.get('/actividades/preguntas/respuestas/:idCurso', viewer.AnswersAndQuestions);
    //Ver las actividades y el estado en el que se encuentran
    router.get('/actividades/resultados/usuario/:idUser/actividad/:idCurse/intento/:idIntento', viewer.activitiyWithResults);

    // =============== EXAMENES =======================

    //Ver todos los examenes
    router.get('/todos/examenes' , viewer.allQuizzes);
    //Ver examenes por cursos
    router.get('/todos/examenes/:id_curso' , viewer.allQuizEachCurso);
    //Ver todas las preguntas de los examenes
    router.get('/preguntas/examenes',viewer.allQuestionQuizzes);
    //Ver todas las preguntas de los examanes filtrado por ID Examen
    router.get('/preguntas/examen/:id_examen',viewer.questionsQuizz);
    //Ver Respuestas de las preguntas de los examenes
    router.get('/respuestas/examenes',viewer.answersQuizzes);
    //Ver Respuestas de los examenes filtrado por el ID del examen
    router.get('/respuestas/examen/:id_examen',viewer.answersQuizz);
    //Ver Respuestas que mandaron los usuarios en los examenes
    router.get('/respuestas/examenes/usuarios', viewer.answersQuizzesUsers);
    //Ver Respuestas que mandaron los usuarios en los examenes -- se filtra por usuario 
    router.get('/respuestas/examenes/usuario/:id_user',viewer.answersQuizzesEachUser);
    //Ver Respuestas que mandaron los usuarios en los examenes filtrado por usuario y Id examen
    router.get('/respuestas/usuario/:id_user/examen/:id_examen',viewer.answersQuizzEachUsersAndQuizz);
    //Ver Resultado de todos los examenes
    router.get('/resultados/examenes',viewer.allResultQuizzes);
    //Ver el resultado de los examenes filtrado por usuario
    router.get('/resultado/examenes/usuario/:id_user', viewer.resultQuizzesForUser);
    //Ver las catergorias por examen filtrado por ID CURSO 
    router.get('/categorias/examen/:idCurse',viewer.categoriesExamen);
    // Ver las peguntas por categoria del examen
    router.get('/preguntas/examen/:categoria1/:categoria2/:categoria3/:categoria4/:categoria5/:limit',viewer.questionsEachCategory);
    //Ver las respuestas por id de la pregunta del examen
    router.get(`/respuestas/examen/pregunta/:idQuestion`,viewer.answerEachQuestionId);
    
    //Ver el resultado de un examen filtrando id examen y id usuario 
    router.get('/resultado/examen/usuario/:id_user/Examen/:id_examen/intento/:idIntento', viewer.resultQuizzesForUserForQuizz);
    //AVG del examen
    router.get('/avgExamen/usuario/:idUser/intento/:attemp/curso/:curse', viewer.avgExamen);

    // Ver los resultados en el menu del aside 
    router.get('/resultClick/aside/:user/:curse/:attempt',viewer.resultsconsultclick);


    // =============== RESULTADO FINAL =====================

    //Ver el estado de todos los cursos 
    router.get('/resultados/cursos',viewer.UserCompleteCurso);
    // Ver el resultado del curso filtrado por intento usuario y curso
    router.get('/resultado/curso/usuario/:user/intento/:attemp/curso/:curse', viewer.userCompleteCursoSpacificConsult);

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//                               POSVENTA 
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

    // Información del usuario curso e intento 
    router.get('/posventa/CompleteInfo/user/:user/curse/:curse', viewer.manyInfoPosventa);

    // información del Curso y Usuario
    router.get('/posventa/user/:user/curse/:curse',viewer.someInfoPosventa);

    // Preguntas Random para posventa 
    router.get('/posventa/preguntas/:activityId',viewer.questionsRandomPosventa);

    // Respuesta Random para presuntas de Posventa 
    router.get('/posventa/respuestas/:questionID',viewer.answersRandomPosventa)


// --------------------------------------------------------------------------
// post
// --------------------------------------------------------------------------

    // =============== INTENTOS =======================

    //Insertar nuevo Intento Por usuario
    router.post('/insertar/nuevoIntento', insert.newAttempt);

    // =============== ACTIVIDADES =======================

    //Insertar respuestass del usuario a una pregunta de la actividad
    router.post('/respuestas/Actividades/unicas', insert.answersActivity);    

    //Insertar resultado de las actividades
    router.post('/insertar/resultados/actividades',insert.activityTotalResult);

    // =============== EXAMEN =======================

    // Insertar respuestas del usuario a una pregunta del examen
    router.post('/respuestas/examen/unicas',insert.resultQuestionExamen);

    //Insertar el resultado del examen
    router.post('/insertar/resultado/examen', insert.restulExamen);

    // =============== CURSO COMPLETO ==================

    //Insertar cuando El módulo ya está completo -- Resultado Total del módulo
    router.post('/insert/cursoCompleto', insert.resultModule);

// -------------------------------------------------------------------------
// DELETE
// --------------------------------------------------------------------------

    // Eliminamos el intento por Id Unico de la tabla
    router.delete('/delete/intento/:id', erase.deleteAttempt);

    router.get('/probandoCositas',erase.prueba);
    router.get('/probandoCositas2', erase.consulta);

//========================================================= DANIEL DASHBOARD

    // Ver el resultado de los cursos POR ID  Y POR  USUARIO 
    router.get('/resultados/historico', viewer.HitoricResults);

    // Ver el conteo de los usuarios que completado un curso filtro ID 
    router.get(`/conteo/usuarioCompleto/curso/:idcurse`, viewer.userCompleteDashboard)

    // Ver el coneto de los usuarios inscritos en el curso Fitlro ID
    router.get(`/conteo/usuarioInscrito/curso/:idcurse`, viewer.userInscriptDashboard)

    // Ver el resultado de los cursos por ID Usuario
    router.get('/resultados/cursos/usuario/:userId', viewer.UserCompleteCursoEachUser);

    //Ver el resultado de los cursos por ID CURSO 
    router.get('/resultados/cursos/:idCurso', viewer.resultEachCurse);
    
    
module.exports=router;




