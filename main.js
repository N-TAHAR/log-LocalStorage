if(localStorage.getItem('enter')){
  window.location.href = 'account.html';
}

let logobtn = document.querySelector('section a');
let form = document.querySelector('.form');
let enter;
let log = document.querySelector('input[type="submit"]');

logobtn.addEventListener('click', ()=>{
  form.classList.toggle('reveal'); 
})

let user = ({
  login:document.getElementsByTagName('input')[0],
  mdp: document.getElementsByTagName('input')[1],
  traitement: function(){
    if(this.login.value){
      console.log(this.login);
      this.login.classList.remove('error');
    }else{
      this.login.classList.add('error');
    }

    if(this.mdp.value){
      this.mdp.classList.remove('error');
      console.log(this.mdp);
    }else{
      this.mdp.classList.add('error'); 
    }

    if(this.login.value && this.mdp.value){
      return true;
    }else{
      return false;
    }
  }
})

log.addEventListener('click',(e)=>{
  e.preventDefault();
  if(user.traitement()){
    localStorage.setItem('mail', user.login.value);
    localStorage.setItem('password', user.mdp.value);
    localStorage.setItem('enter', enter);
    window.location.assign('account.html');
  }
})
console.log(user.login);


