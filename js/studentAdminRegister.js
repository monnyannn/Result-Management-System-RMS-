// Register
const signUpStudentAdmin = () => {
  let id_num, psw, con_pass;
  (id_num = document.querySelector('#id_num').value),
    (psw = document.querySelector('#psw').value),
    (con_pass = document.querySelector('#con_pass').value)

  console.log(id_num, psw, con_pass)

  let signup_students_records = new Array()
  if (((id_num != psw) != con_pass) != '') {
    signup_students_records = JSON.parse(localStorage.getItem('stdadminsignupdata'))
    if (
      signup_students_records.some((a) => {
        return a.id_num === id_num
      })
    ) {
      alert('ID Number Already Exist')
    }
    if (
      signup_students_records.some((a) => {
        return a.psw === a.con_pass
      })
    ) {
      alert('Password is Not the Same')
    } else {
      signup_students_records.push({
        id_num: id_num,
        psw: psw,
        con_pass: con_pass,
      })
    }
  } else {
    alert('Fill the Form');
  }
  localStorage.setItem('stdadminsignupdata', JSON.stringify(signup_students_records))
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
// const stdLoginAdmin = () => {
//   let idnum = document.querySelector('#idmin').value
//   let pass_word = document.querySelector('#pass_word').value

//   login_records = JSON.parse(localStorage.getItem('stdadminsignupdata'))
//   // console.log(login_records)
//   for (v of login_records) {
//     if (v.id_num === idnum && v.psw === pass_word) {
//       window.open(`studentdashboard.html`)
//     }
//   }
// }
