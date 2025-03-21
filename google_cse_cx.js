const script = document.createElement("script");
googleCseCx = new URL(document.location).searchParams.get("google_cse_cx") || "023f20ab423c448cb";
script.src = "https://cse.google.com/cse.js?cx="+googleCseCx;
document.body.appendChild(script);

Array.from(document.getElementsByClassName("backhome")).forEach((element)=>{
    element.href = "./index.html?google_cse_cx="+googleCseCx;
})

Array.from(document.getElementsByClassName("gcse-searchbox-only")).forEach((element) => {
    element.dataset.resultsurl = "./search.html?google_cse_cx="+googleCseCx;
})
