c_value=0;
c_Val.innerHTML=0;
//var display_str = "";
//let p=document.getElementById("P_count")
incr.addEventListener("click", (e)=>{
    e.preventDefault()
   
    c_value++;
    c_Val.innerHTML=c_value;
})


dis.addEventListener("click", (e)=>{
    //e.preventDefault()
    curr_date = new Date();
    // curr_time=Date().getHours()+":"+Date().getMinutes()+":"+ Date().getSeconds();

    c_Val.innerHTML=0;
    
    //his = " Value at " + curr_date + " is "+ val+ "\n";
    //p.textContent += his;
    const listUl = document.getElementById("listUL")
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${curr_date}</span>
            <span>${c_value}</span>
    `;
    listUl.insertBefore(li,listUl.children[0]);
    
    c_value=0
    
	 
})