;
((c)=> {
  c('**********Programación Reactiva**********')

  const createUser = () => {
    let id = Math.floor( Math.random() * 10000 )
    users.push(id)
    c(`Usuario ${id} creado`)
  }

  const getUsers = () => {
    c('Obteniendo Usuarios')
    c(`Usuarios: ${users}\nTotal de Usuarios: ${users.length}`)
  }

  let users = []

  setInterval(() => {
    c('Enviando información...')
    createUser()
    getUsers()
  }, 5000)

  setInterval(() => {
    c('Enviando información...')
    createUser()
    getUsers()
  }, 2500)
})(console.log);