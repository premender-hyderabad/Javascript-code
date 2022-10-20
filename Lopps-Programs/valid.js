const form=document.getElementById("form")

const usernamename=document.getElementById("uname")
const password=document.getElementById("pass")
const emailid=document.getElementById("emai")
const tandc=document.getElementById("tc")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
})
  
function validate(){
    let nameValue =uname.value.trim()
    let emailidvalue =email.value.trim()
    let passwordvalue =pass.value.trim()

   if(nameValue===''){
    setError(uname,'user name cannot be empty')
   }
   else if(nameValue.length<3){
    setError(uname,'user name should be minimum 3 characters')
   }
   else{
    setsuccess(uname)
   }

}