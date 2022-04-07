// Register
const signUpStudentAdmin = () => {
  let id_num, psw, con_pass;
  id_num = document.querySelector('#id_num').value,
    psw = document.querySelector('#psw').value,
    con_pass = document.querySelector('#con_pass').value

  console.log(fu_name, id_num, e_mail, psw, con_pass)

  let signup_students_records = new Array()
  if (((id_num != psw) != con_pass) != '') {
    signup_students_records = JSON.parse(localStorage.getItem('stdadminsignupdata')) ? JSON.parse(localStorage.getItem("signupdata")) : []
    if (signup_students_records.some((v) => { return v.id_num === id_num })) {
      alert('ID Number Already Exist')
    }
    if (signup_students_records.some((v) => { return v.psw === v.con_pass })) {
      alert('Password is Not the Same')
    } else {
      signup_students_records.push({
        'id_num': id_num,
        'psw': psw,
        'con_pass': con_pass,
      })
      localStorage.setItem('stdadminsignupdata', JSON.stringify(signup_students_records))
    } 
      alert('Fill the Form')
  }
}

// Login
// login validation
//   var attempt = 5 // Variable to count number of attempts.
//   function validate() {
//     var email = document.querySelector('#email').value
//     var pswd = document.querySelector('#pswd').value
//     attempt-- //Decrement by one
//     alert(`You have ${attempt} Attempt Left`)
//     if (attempt === 0) {
//       document.querySelector('#email').disabled = true
//       document.querySelector('#pswd').disabled = true
//       document.querySelector('#submit').disabled = true
//       return false
//     }
//   }

// Login
const stdLoginAdmin = () => {
  let idnum = document.querySelector('#idmin').value
  let pass_word = document.querySelector('#pass_word').value

  login_records = JSON.parse(localStorage.getItem('stdadminsignupdata'))
  // console.log(login_records)
  for (v of login_records) {
    if (v.id_num === idnum && v.psw === pass_word) {
      window.open(`studentdashboard.html`)
    }
  }
}
