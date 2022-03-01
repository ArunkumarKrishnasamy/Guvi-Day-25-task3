// MutualFund API
fetch("https://api.mfapi.in/mf")
.then((x)=>x.json())
.then((response)=>{

for(let i=0; i<200; i++){
    let arr = response[i]
    console.log(arr);  
   
    let table =document.getElementById("table")
    let row =document.createElement("tr")
    row.classList.add("p-2", "item")
    
    let  list =document.createElement('td') ;
        list.innerText = i+1 ;
        list.classList.add("p-2", "text-center")
    row.appendChild(list) ;

    let  scode = document.createElement("td") ;
    scode.innerText = arr.schemeCode  ;
    scode.classList.add("p-2","text-center")
    row.appendChild(scode) ;

    let  sname = document.createElement("td") ;
    sname.innerText = arr.schemeName  ;
    sname.classList.add("p-2","text-center")
    row.appendChild(sname) ;

    let btn =document.createElement("button") ;
    btn.innerText = "view more"  ;
    btn.classList.add("btn", "btn-primary","text-capitalize")
    btn.setAttribute("data-bs-toggle", "modal")
    btn.setAttribute("data-bs-target","#staticBackdrop")
    btn.addEventListener("click",()=>{
     let   schemename =document.getElementById("schemename") ;
     schemename.innerText = arr.schemeName ;
     let schemeid =document.getElementById("schemeid") ;
     schemeid.innerText = arr.schemeCode ;
    })
    row.appendChild(btn) ;

    table.appendChild(row)
}
})