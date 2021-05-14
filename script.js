function verify() {
  let date = new Date()
  let year = date.getFullYear()

  let fullYear = document.getElementById('txtyear')
  let result = document.getElementById('result')
  let img = document.createElement('img')
  img.setAttribute('id', 'photo')

  if (fullYear.value.lenght == 0 || Number(fullYear.value) > year) {
    window.alert('[ERRO]Verifique os dados e tente novamente')

  } else {
    let fsex = document.getElementsByName('radsex')
    let age = year - Number(fullYear.value)
    let gender = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'photo')
    if (fsex[0].checked) {

      gender = 'Homem'

      if (age >= 0 && age < 10) {
        //Criança
        img.setAttribute('src', 'foto-bebe-m.png')

      } else if (age < 251) {
        // jovem
        img.setAttribute('src', 'foto-jovem-m.png')

      } else if (age < 60) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-m.png')

      } else if (age < 100) {
        // Minguado velhinho
        img.setAttribute('src', 'foto-idoso-m.png')
      }
    }

    else if (fsex[1].checked) {
      gender = 'Mulher'
      if (age >= 0 && age < 10) {
        //Criança
        img.setAttribute('src', 'foto-bebe-f.png')

      } else if (age < 251) {
        // jovem
        img.setAttribute('src', 'foto-jovem-f.png')

      } else if (age < 60) {
        // Adulto
        img.setAttribute('src', 'foto-adulto-f.png')

      } else {
        // Minguado velhinho
        img.setAttribute('src', 'foto-idoso-f.png')
      }
    }
    result.innerHTML = `detectado ${gender} com ${age} anos <br> <br>`
    result.appendChild(img)
  }
}