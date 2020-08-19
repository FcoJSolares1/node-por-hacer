const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descipcion de la tarea por hacer'

};


const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea '
};



const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de una area', {

        descripcion,
        completado
    })


.command('crear', 'Crear un elemento por hacer', {
    descripcion
})


.command('borrar', 'Borra una tarea', {
    descripcion
})

.help()
    .argv;



module.exports = {

    argv
}