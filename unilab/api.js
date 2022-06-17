var for_card = document.querySelector(".for_card")
var inp = document.querySelector(".inp")
var p = document.querySelector("p")
var arr1 = []
var pages=document.querySelectorAll('.page')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(arr => {  
     
arr1=arr

    function list(){
      for(var i =0;i<10;i++){
        const div = document.createElement("div");

        div.innerHTML = ` <div class="card" style="width: 18rem;">
<div class="card-body cc">
  <h5 class="card-title">USER ID:${arr[i].userId}</h5>
  <h6 class="card-subtitle mb-2 text-muted">ID:${arr[i].id}</h6>
  <p class="card-text" style="font-size:12px">TITLE:${arr[i].title}</p>
  <p class="card-text bod" style="font-size:14px">BODY:${arr[i].body}</p> 
</div>
</div>
`
        results.appendChild(div);
      }
    }   

    const search = document.getElementById("search");
    const results = document.getElementById("results");
    let search_term = "";

    const showList = () => {
      results.innerHTML = "";

      arr.filter((i) => {
        return (
          i.title.toLowerCase().includes(search_term) ||
          i.body.toLowerCase().includes(search_term)
        );
      })
        .forEach((e) => {
          const div = document.createElement("div");

          div.innerHTML = ` <div class="card" style="width: 18rem;">
  <div class="card-body cc">
    <h5 class="card-title">USER ID:${e.userId}</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID:${e.id}</h6>
    <p class="card-text " style="font-size:12px">TITLE:${e.title}</p>
    <p class="card-text bod" style="font-size:14px">BODY:${e.body}</p> 
  </div>
</div>
`
          results.appendChild(div);
        });
    };
    list()
    search.addEventListener("input", (event) => {
      search_term = event.target.value.toLowerCase();
      showList();
    });
  })

// ****************************background effect****************************//
 
function createSquare(){
  
  const section=document.querySelector('section')
  const square=document.createElement('span'); 

  var size=Math.random()*50;
  square.style.width=20+size+'px';
  square.style.height=20+size+'px';

  square.style.left=Math.random()*(innerHeight*2)+'px' 
  square.style.top=Math.random()*(innerWidth*2)+'px'


    section.appendChild(square)

    setTimeout(()=>{
      square.remove()
    },5000)

}
setInterval(createSquare,150) 

// ******************************pagination******************************// 
 for(var i of pages){
  i.addEventListener("click",function(){
     results.innerHTML=""
    for(var i=(this.innerText-1)*10;i<this.innerText*10;i++){  
          const div = document.createElement("div"); 
          div.innerHTML = ` <div class="card" style="width: 18rem;">
  <div class="card-body cc">
    <h5 class="card-title">USER ID:${arr1[i].userId}</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID:${arr1[i].id}</h6>
    <p class="card-text" style="font-size:12px">TITLE:${arr1[i].title}</p>
    <p class="card-text bod" style="font-size:14px;overflow:hidden;height:100px">BODY:${arr1[i].body}</p> 
  </div>
  </div>
  `
          results.appendChild(div);
        
      } 
  })
 }