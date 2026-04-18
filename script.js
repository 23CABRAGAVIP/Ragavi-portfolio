function showPage(pageId){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

/* PROJECT ADD */
function addProject(){
  let name=document.getElementById("projName").value;
  let link=document.getElementById("projLink").value;

  let div=document.createElement("div");
  div.classList.add("card");

  div.innerHTML=`
    <h3>${name}</h3>
    <a href="${link}" target="_blank">View Project</a>
  `;

  document.getElementById("projectList").appendChild(div);
}

/* CERTIFICATE ADD */
function addCertificate(){
  let file=document.getElementById("certUpload").files[0];
  if(!file) return;

  let reader=new FileReader();

  reader.onload=function(e){
    let div=document.createElement("div");
    div.classList.add("card");

    div.innerHTML=`<img src="${e.target.result}" style="width:100%">`;

    document.getElementById("certList").appendChild(div);
  };

  reader.readAsDataURL(file);
}
function openModal(title, desc) {
  document.getElementById("skillModal").style.display = "block";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
}

function closeModal() {
  document.getElementById("skillModal").style.display = "none";
}

/* click outside close */
window.onclick = function(e) {
  let modal = document.getElementById("skillModal");
  if (e.target == modal) {
    modal.style.display = "none";
  }
}