function templateStrings() {
  const baseText = 'Hola'
  const user = 'Danilo'
  
  const getUser = () => user

  const welcomeText = `
      Estimado ${getUser()}
      Tenemos el agrado de comunicarle que ha sido seleccionado
      para la beca
      saludos cordiales`
      // const key="name"
      // const separator ='-'
      // const userDos = {
      //   [`${key}${separator}`]: 'Danilo2'
      // }
      // userDos[key] = 'Danilo2'
      // console.log(userDos[`${key}${separator}`])

  // console.log(welcomeText)
  return {
    textWithUser: `${baseText} ${user}`,
    welcomeText
  }
}


module.exports = {
  templateStrings,
}