
let api = new XMLHttpRequest();
let count = document.querySelector('.cona');
document.title = "PORT"

api.open("GET", "https://api.github.com/users/mouaiz-09/repos", true)
api.send()


api.onreadystatechange = function (params) {
  if (this.readyState === 4 && this.status === 200) {
    let x = JSON.parse(api.responseText)

    for (let i = 0; i < x.length; i++) {
      let div = document.createElement('div');
      let h = document.createElement('a')
      let counenet = document.createTextNode(x[i].name)
      h.href = x[i].svn_url;
      h.target = "_blank"
      h.appendChild(counenet);
      div.appendChild(h);
      count.appendChild(div)
    }
  }
}
// the secand api
let api2 = new XMLHttpRequest();
api2.open("GET", "https://api.github.com/users/mouaiz-09", true)
api2.send()

let h2 = document.getElementById('name');
let boi = document.getElementById('boi');
let img = document.getElementById('imge');
let repo = document.getElementById('repo');
let following = document.getElementById('following');
let created_at = document.getElementById('created_at');
let locatio = document.getElementById('locatio');


api2.onreadystatechange = function (params) {
  if (this.readyState === 4 && this.status === 200) {
    let x = JSON.parse(this.responseText)


    img.src = x.avatar_url;
    boi.innerHTML = x.bio;
    h2.innerHTML = x.login
    
    //informayion github
      //time
    let dateTime = x.created_at;
    let result = dateTime.substring(0, 10);
    created_at.innerHTML += result
    
     //repo
     repo.innerHTML+= x.public_repos;
     following.innerHTML+= x.followers;
     locatio.innerHTML+= x.location
   
    
  }
}
