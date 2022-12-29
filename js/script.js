
// typing annimation

var typed = new Typed(".typing", {
    strings:["","Web Design","Web Development","Wix Website Deisgn","Shopify Website","Ecommerce Website","WordPress","PSD TO HTML","REACTJS"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
// aside
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++) {
            // console.log(navList(i));
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function() {

                // for(let i=0; i<totalSection; i++) {
                //     allSection[i].classList.remove("back-section");
                // }
                removeBacksection();

                for(let j=0; j<totalNavList; j++) {
                    if(navList[j].querySelector("a").classList.contains("active")) {
                        addBackSection(j);
                    //  allSection[j].classList.add("back-section");   
                    }
                  navList[j].querySelector("a").classList.remove("active")  
                }
               this.classList.add("active") 
               showSection(this);
               if(window.innerWidth <1200) {
                asideSectionTogglerBtn();
               }
            })
        }

        function removeBacksection() {
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.remove("back-section");
            }
        }

        function addBackSection(num) {
            allSection[num].classList.remove("back-section"); 
        }
        function showSection(element) {
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.remove("active");
            }
            const target=element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")

           
        }
        function updateNav(element) {
            for(let i=0; i<totalNavList; i++) {
                navList[i].querySelector("a").classList.remove("active");
                const target=element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[i]) {
                    navList[i].querySelector("a").add("active");
                }
            }
        }
        document.querySelector(".hire-me").addEventListener("click", function() {
            const sectionIndex = this.getAttribute("data-section-index")
            showSection(this) 
            updateNav(this); 
            removeBacksection(); 
            addBackSection();
        })

        const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
       navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn(); 
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++) {
                allSection[i].classList.toggle("open");
            }
        }
