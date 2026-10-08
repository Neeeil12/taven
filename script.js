// ADD/EDIT WATCHES HERE
const watches=[
{name:"TAVEN No. 01",subtitle:"Automatic / Steel",description:"A clean everyday automatic with a restrained profile.",image:"images/watch-01.jpg",details:["Automatic movement","40 mm case","Stainless steel","Sapphire crystal"]},
{name:"TAVEN No. 02",subtitle:"Quartz / Leather",description:"Minimal proportions with a soft leather finish.",image:"images/watch-02.jpg",details:["Quartz movement","38 mm case","Leather strap","Mineral crystal"]},
{name:"TAVEN No. 03",subtitle:"Steel / Everyday",description:"A versatile steel timepiece for day to night.",image:"images/watch-03.jpg",details:["Quartz movement","39 mm case","316L steel","5 ATM water resistance"]}];
document.querySelector("#grid").innerHTML=watches.map((w,i)=>`<article class="card" onclick="show(${i})"><div class="photo"><img src="${w.image}" alt="${w.name}" onerror="this.style.display='none'"></div><div class="info"><b>${w.name}</b><p>${w.subtitle}</p></div></article>`).join("");
function show(i){const w=watches[i];alert(w.name+"\n\n"+w.description+"\n\n"+w.details.join("\n"))}