let $ = document;
console.log($.querySelectorAll("link")[3]);
window.addEventListener("load" , aosHandler)
window.addEventListener("resize" , aosHandler)
function aosHandler() {
    if (window.innerWidth > 948 && !$.hidden) {
        
        $.querySelectorAll("link")[3].setAttribute("href" , "node_modules/aos/dist/aos.css")
    } else {
        $.querySelectorAll("link")[3].setAttribute("href" , "")
        console.log("damon");
    }
}
let menuMobileIcon = $.querySelector(".menu_mobile_icon");
menuMobileIcon.addEventListener("click" , () => {
    $.querySelector(".leave_menu").classList.add("active");
    $.querySelectorAll(".menu_mobile_icon span").forEach((sp) => {
       sp.classList.add("open") 
    })
    $.querySelector(".menu_mobile").classList.add("open");

    $.querySelector(".leave_menu").addEventListener("click" , closeMobileMenu)
})

$.querySelector(".close_menu_mobile_icon").addEventListener("click" , closeMobileMenu)

function closeMobileMenu () {
    $.querySelector(".leave_menu").classList.remove("active");
        $.querySelectorAll(".menu_mobile_icon span").forEach((sp) => {
            sp.classList.remove("open") 
        })
    $.querySelector(".menu_mobile").classList.remove("open");
}


/////////////////////////benefit
let benefits = [
    {src: "pic/benefit/Location-Icon.png", h2Tag: "Pay Us a Visit", p: "Union St, Seattle, WA 98101, United States"},
    {src: "pic/benefit/phone-call.png", h2Tag: "Give Us a Call", p: "(110) 1111-1010"},
    {src: "pic/benefit/mail.png", h2Tag: "Send Us a Message", p: "Contact@HydraVTech.com"},
];
let benefit = $.querySelector(".benefit");
console.log(benefit , benefits);
benefits.forEach((ben) => {
benefit.insertAdjacentHTML("beforeend" , `<div class="benefit_item">
   <img src="${ben.src}" alt="">
   <div class="">
       <h2>${ben.h2Tag}</h2>
       <p>${ben.p}</p>
   </div>
   </div>`) 
})



let benefitMobile = $.querySelector(".benefit_mobile .swiper-wrapper")
benefits.forEach((ben) => {
    benefitMobile.insertAdjacentHTML("beforeend" , `<div class="benefit_item_mobile swiper-slide">
            <img src="${ben.src}" alt="">
            <p>${ben.p}</p>
       </div>`) 
})
var swiper = new Swiper('.benefit_mobile', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});





let products = [
    {src: "pic/product/Mask group.png" , h2Tag: "SIMULATION"},
    {src: "pic/product/Mask group (2).png" , h2Tag: "EDUCATION"},
    {src: "pic/product/Mask group (4).png" , h2Tag: "SELF-CARE"},
    {src: "pic/product/Mask group (1).png" , h2Tag: "OUTDOOR"}
]

products.forEach((pro) => {
    $.querySelector(".product").insertAdjacentHTML("beforeend" , `<div class="product_item">
    <img src="${pro.src}" alt="">
    <h2>${pro.h2Tag}</h2>
    <hr style="width: 160px;">
    <p>Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.</p>
    <a href="#" class="btn_one">TRY IT NOW</a>
    </div>`)
})

products.forEach((pro) => {
    $.querySelector(".product_mobile .swiper-wrapper").insertAdjacentHTML("beforeend" , `<div class="product_item_mobile swiper-slide">
    <img src="${pro.src}" alt="">
    <h2>${pro.h2Tag}</h2>
    <hr style="width: 160px;">
    <p>Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.</p>
    <a href="#" class="btn_one">TRY IT NOW</a>
    </div>`)
})

var swiper = new Swiper('.product_tab', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed: 700, // سرعت تزریق اسلایدها (به میلی ثانیه)
    autoplay: {
      delay: 5000, // تاخیر بین تغییرات اسلاید (به میلی ثانیه)
      disableOnInteraction: false,
    },
    effect: 'slide', // افکت حرکت اسلایدها
    grabCursor: true, // نمایش دستگیره هنگام روی اسلاید ها
    slideToClickedSlide: true,
    loop: true,
});

var swiper = new Swiper('.product_mobile', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



products.slice(0,2).forEach((pro) => {
    $.querySelectorAll(".product_tab .swiper-wrapper .swiper-slide")[0].insertAdjacentHTML("beforeend" , `<div class="product_item_mobile">
    <img src="${pro.src}" alt="">
    <h2>${pro.h2Tag}</h2>
    <hr style="width: 160px;">
    <p>Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.</p>
    <a href="#" class="btn_one">TRY IT NOW</a>
    </div>`)
})

products.slice(2,4).forEach((pro) => {
    $.querySelectorAll(".product_tab .swiper-wrapper .swiper-slide")[1].insertAdjacentHTML("beforeend" , `<div class="product_item_mobile">
    <img src="${pro.src}" alt="">
    <h2>${pro.h2Tag}</h2>
    <hr style="width: 160px;">
    <p>Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.</p>
    <a href="#" class="btn_one">TRY IT NOW</a>
    </div>`)
})



var swiper = new Swiper('.company_tab', {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 450,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    grabCursor: true,
    slideToClickedSlide: true,
    grabCursor: true,
    slideToClickedSlide: true,
    loop: true,
  });


 var swiper = new Swiper('.road_map_mobile', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    speed: 900, // سرعت تزریق اسلایدها (به میلی ثانیه)
    autoplay: {
      delay: 6000, // تاخیر بین تغییرات اسلاید (به میلی ثانیه)
      disableOnInteraction: false,
    },
    effect: 'slide',
    grabCursor: true,
    slideToClickedSlide: true,
    loop: true,
 });


console.log("amkn");


 function scrollToSection(event, sectionId) {
    event.preventDefault();
    
    const section = document.getElementById(sectionId);
    const sectionOffsetTop = section.offsetTop;
    
    window.scrollTo({
      top: sectionOffsetTop - 80,
      behavior: 'smooth'
    });
    
    // نمایش مسیر طی شده
    console.log(`Scrolling to ${sectionId}`);
}









































