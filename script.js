const translations = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_menu: "Menü",
    nav_about: "Hakkımızda",
    nav_gallery: "Galeri",
    nav_reservation: "Rezervasyon",
    nav_contact: "İletişim",
    online_order: "Online Sipariş",
    online_order_short: "Sipariş",
    hero_eyebrow: "Odun Ateşinde Gerçek Lezzet",
    hero_title: "Anadolu Fırını'nda döner, pide ve lahmacun keyfi",
    hero_text: "Günlük hazırlanan etler, taş fırın lezzeti ve sıcak servisle sofranıza klasik Anadolu tadı getiriyoruz.",
    order_now: "Online Sipariş Ver",
    book_table: "Masa Rezervasyonu",
    feature_fire: "Odun Ateşinde",
    feature_fire_text: "Taş fırın tadı",
    feature_fresh: "Günlük Malzeme",
    feature_fresh_text: "Taze ve özenli",
    feature_master: "Usta Şefler",
    feature_master_text: "Deneyimli ekip",
    feature_fast: "Hızlı Servis",
    feature_fast_text: "Sıcak teslimat",
    menu_eyebrow: "Menü",
    menu_title: "Kategoriler",
    popular_title: "Popüler Ürünler",
    popular_hint: "En çok tercih edilenler",
    add_cart: "Sepete Ekle",
    drinks_eyebrow: "İçecekler",
    drinks_title: "Sıcak ve soğuk seçenekler",
    shops_eyebrow: "Online Sipariş",
    shops_title: "Dükkanlarımızdan sipariş ver",
    shops_text: "Yemeksepeti ve Trendyol mağaza bağlantılarını buradan gösterebilirsin.",
    reservation_eyebrow: "Rezervasyon",
    reservation_title: "Masanı ayır",
    name: "Ad Soyad",
    phone: "Telefon",
    date: "Tarih",
    time: "Saat",
    people: "Kişi Sayısı",
    reserve_button: "Rezervasyon Yap",
    about_eyebrow: "Hakkımızda",
    about_title: "25 yıllık tecrübe, değişmeyen lezzet",
    about_text: "Mahalle sıcaklığını, taş fırın geleneğini ve usta elini aynı sofrada buluşturuyoruz.",
    gallery_eyebrow: "Galeri",
    gallery_title: "Fırından ve salondan kareler",
    contact_eyebrow: "İletişim",
    contact_title: "Bize ulaşın",
    address_label: "Adres",
    phone_label: "Telefon",
    hours_label: "Çalışma Saatleri"
  },
  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_reservation: "Reservation",
    nav_contact: "Contact",
    online_order: "Order Online",
    online_order_short: "Order",
    hero_eyebrow: "Wood-Fired Real Taste",
    hero_title: "Doner, pide and lahmacun at Anadolu Firini",
    hero_text: "Freshly prepared meat, stone-oven flavor and warm service bring classic Anatolian taste to your table.",
    order_now: "Order Online",
    book_table: "Book a Table",
    feature_fire: "Wood Fired",
    feature_fire_text: "Stone oven taste",
    feature_fresh: "Fresh Ingredients",
    feature_fresh_text: "Prepared daily",
    feature_master: "Skilled Chefs",
    feature_master_text: "Experienced team",
    feature_fast: "Fast Service",
    feature_fast_text: "Served hot",
    menu_eyebrow: "Menu",
    menu_title: "Categories",
    popular_title: "Popular Items",
    popular_hint: "Guest favorites",
    add_cart: "Add to Cart",
    drinks_eyebrow: "Drinks",
    drinks_title: "Hot and cold options",
    shops_eyebrow: "Online Order",
    shops_title: "Order from our stores",
    shops_text: "You can show Yemeksepeti and Trendyol store links here.",
    reservation_eyebrow: "Reservation",
    reservation_title: "Book your table",
    name: "Full Name",
    phone: "Phone",
    date: "Date",
    time: "Time",
    people: "Guests",
    reserve_button: "Make Reservation",
    about_eyebrow: "About",
    about_title: "25 years of experience, unchanged flavor",
    about_text: "We bring neighborhood warmth, stone-oven tradition and skilled hands to the same table.",
    gallery_eyebrow: "Gallery",
    gallery_title: "Moments from the oven and dining room",
    contact_eyebrow: "Contact",
    contact_title: "Reach us",
    address_label: "Address",
    phone_label: "Phone",
    hours_label: "Opening Hours"
  }
};

const buttons = document.querySelectorAll("[data-lang]");
const translatedNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.tr;
  translatedNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem("siteLanguage", lang);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("siteLanguage") || "tr");

document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => btn.style.transform = 'scale(1)', 100);
    
    const productName = e.target.closest('.product-card').querySelector('h4').textContent;
    alert(`${productName} sepete eklendi!`); 
  });
});



const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  
  bottomNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      bottomNavLinks.forEach(l => l.style.color = '#5d5149');
      link.style.color = 'var(--brand)'; 
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll("[data-open-modal]");
  const closeButtons = document.querySelectorAll(".close-modal-btn");
  const overlays = document.querySelectorAll(".modal-overlay");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-open-modal");
      const targetModal = document.getElementById(modalId);
      
      if (targetModal) {
        targetModal.classList.add("is-visible");
        targetModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; 
      }
    });
  });

  const closeModal = (modal) => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; 
  };

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".category-modal");
      closeModal(modal);
    });
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      const modal = overlay.closest(".category-modal");
      closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".category-modal.is-visible");
      if (activeModal) closeModal(activeModal);
    }
  });
});