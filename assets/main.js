// Dark Modern Cyber High-Tech Script - By Alireza Daneshman
// Telegram Bot: @Box2056_bot | Support: @Online_support99

const BOT_USERNAME = "Box2056_bot";
const BOT_URL = "https://t.me/" + BOT_USERNAME;
const SUPPORT_USERNAME = "Online_support99";
const SUPPORT_URL = "https://t.me/" + SUPPORT_USERNAME;

// Products / Services Database
const servicesData = [
  {
    id: "instagram-reporter",
    title: "ریپورتر اینستاگرام",
    category: "social",
    badge: "🔥 پرفروش و پرقدرت",
    badgeType: "hot",
    icon: "report",
    description: "سیستم هوشمند و قدرتمند ریپورت انبوه صفحات و پیج‌های متخلف و فیک در اینستاگرام با الگوریتم‌های به‌روز.",
    features: ["الگوریتم دور زدن لیمیت", "پشتیبانی از چندین متد ریپورت", "تحویل و اجرای فوری", "تضمین حداکثر بازدهی"],
    promoBadge: "تضمینی و ارزان"
  },
  {
    id: "telegram-fake-members",
    title: "ممبر فیک تلگرام",
    category: "social",
    badge: "⚡ تحویل آنی",
    badgeType: "green",
    icon: "group_add",
    description: "افزایش فوری اعضای کانال و گروه تلگرام با کمترین افت، کیفیت بالا و مناسب برای بالابردن اعتبار.",
    features: ["قیمت فوق‌العاده ارزان", "بدون نیاز به پسورد", "قابلیت سفارش در حجم دلخواه", "سرعت ارسال توربو"],
    promoBadge: "ارزان‌ترین قیمت بازار"
  },
  {
    id: "telegram-fake-reactions",
    title: "ری‌اکشن فیک تلگرام",
    category: "social",
    badge: "❤️ تنوع کامل ایموجی",
    badgeType: "cyan",
    icon: "add_reaction",
    description: "ارسال ری‌اکشن‌های مثبت و سفارشی (لایک، قلب، آتش، ستاره و...) روی پست‌های کانال به صورت فوری و طبیعی.",
    features: ["انتخاب ایموجی‌های دلخواه", "تقسیم بین چند پست", "بسیار ارزان و سریع", "بدون هیچ‌گونه ریزش"],
    promoBadge: "طبیعی و بدون ریزش"
  },
  {
    id: "telegram-fake-views",
    title: "بازدید فیک تلگرام",
    category: "social",
    badge: "👁️ سین میلیونی",
    badgeType: "purple",
    icon: "visibility",
    description: "افزایش آنی بازدید (سین) پست‌های تلگرام با سرعت باورنکردنی و مناسب برای قرعه‌کشی‌ها و افزایش آمار کانال.",
    features: ["شروع در کمتر از ۱ دقیقه", "امکان پخش روی آخرین پست‌ها", "تعرفه‌های کف قیمتی", "پشتیبانی از لینک خصوصی/عمومی"],
    promoBadge: "سرعت فوق‌العاده بالا"
  },
  {
    id: "sms-bomber",
    title: "اسمس بمبر پر قدرت",
    category: "tools",
    badge: "💥 نسخه اختصاصی VIP",
    badgeType: "hot",
    icon: "electric_bolt",
    description: "قدرتمندترین پنل اسمس بمبر با صدها وب‌سرویس فعال و آپدیت شده روز، پایداری بالا و ارسال همزمان صدها پیامک.",
    features: ["تعداد وب‌سرویس نامحدود", "بدون وقفه و بلک‌لیست", "سازگار با تمامی اپراتورها", "پشتیبانی ۲۴ ساعته"],
    promoBadge: "۱۰۰٪ فعال و تست شده"
  },
  {
    id: "v2ray-config",
    title: "کانفیگ ویتوری تضمینی با حجم دلخواه",
    category: "tools",
    badge: "🌐 پینگ پایین و بدون قطعی",
    badgeType: "green",
    icon: "vpn_key",
    description: "سرورهای اختصاصی و بهینه‌شده V2Ray (Vless, Vmess, Trojan) با آی‌پی تمیز، سرعت دانلودی خارق‌العاده و گارانتی تعویض.",
    features: ["ترافیک با حجم و زمان دلخواه", "مناسب تمامی اپراتورها (همراه/ایرانسل/مخابرات)", "پینگ عالی برای گیم و استریم", "پشتیبانی و تمدید آسان"],
    promoBadge: "تضمین بازگشت وجه"
  },
  {
    id: "custom-bot-dev",
    title: "سفارش ساخت ربات به سلیقه شما",
    category: "dev",
    badge: "🤖 توسعه تخصصی تلگرام",
    badgeType: "cyan",
    icon: "smart_toy",
    description: "برنامه‌نویسی و طراحی هر نوع ربات تلگرام اختصاصی (فروشگاهی، مدیریت کانال، ضداسپم، ابزارهای کاربردی و ربات هوش مصنوعی).",
    features: ["کدنویسی استاندارد و بهینه", "پنل مدیریت اختصاصی و وب‌هوک", "هاستینگ پرسرعت ضد فیلتر", "پشتیبانی و آپدیت رایگان"],
    promoBadge: "تحویل با ضمانت کامل"
  },
  {
    id: "custom-site-dev",
    title: "سفارش ساخت سایت به سلیقه شما",
    category: "dev",
    badge: "💻 طراحی مدرن و ریسپانسیو",
    badgeType: "purple",
    icon: "code",
    description: "طراحی وب‌سایت‌های حرفه‌ای، فروشگاه‌های آنلاین، لندینگ پیج‌های پرسرعت و وب‌اپلیکیشن‌های پیشرفته طبق سلیقه دقیق شما.",
    features: ["گرافیک اختصاصی و نئونی/مدرن", "ریسپانسیو کامل موبایل و تبلت", "سئو پایه و امنیت درجه یک", "آموزش و پشتیبانی مستقیم"],
    promoBadge: "طراحی صفر تا صد اختصاصی"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  initFilters();
  initModalEvents();
  initContactForm();
});

// Navbar scroll & mobile menu
function initNavbar() {
  const header = document.getElementById("main-header");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Scroll reveal animations
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => observer.observe(el));
}

// Category filter
function initFilters() {
  const filterBtns = document.querySelectorAll("[data-filter]");
  const productCards = document.querySelectorAll(".product-card, [data-category]");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.className = "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 bg-white/5 border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105";
      });
      btn.className = "px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:scale-105";

      const filter = btn.getAttribute("data-filter");
      productCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          setTimeout(() => { card.style.opacity = "1"; }, 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Modal handling
let currentSelectedService = null;

function openTelegramModal(serviceTitle, serviceDesc, serviceIcon) {
  const modal = document.getElementById("telegram-connect-modal");
  if (!modal) {
    // Fallback: direct redirect
    window.open(BOT_URL, "_blank");
    return;
  }

  currentSelectedService = serviceTitle;
  document.getElementById("modal-service-title").textContent = serviceTitle;
  document.getElementById("modal-service-desc").textContent = serviceDesc || "برای اطلاع از لیست قیمت، توضیحات کامل و فعال‌سازی فوری، مستقیماً وارد ربات تلگرام شوید.";
  
  if (serviceIcon) {
    const iconEl = document.getElementById("modal-service-icon");
    if (iconEl) iconEl.textContent = serviceIcon;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeTelegramModal() {
  const modal = document.getElementById("telegram-connect-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function initModalEvents() {
  const modal = document.getElementById("telegram-connect-modal");
  const closeBtn = document.getElementById("close-telegram-modal");
  const directBtn = document.getElementById("modal-connect-bot-btn");
  const supportBtn = document.getElementById("modal-connect-support-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeTelegramModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeTelegramModal();
      }
    });
  }

  if (directBtn) {
    directBtn.addEventListener("click", () => {
      // Connect directly to bot
      window.open(BOT_URL, "_blank");
      closeTelegramModal();
    });
  }

  if (supportBtn) {
    supportBtn.addEventListener("click", () => {
      window.open(SUPPORT_URL, "_blank");
      closeTelegramModal();
    });
  }
}

// Contact form simulation
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || "";
    const contact = form.querySelector('[name="contact"]')?.value || "";
    const service = form.querySelector('[name="service"]')?.value || "سفارش عمومی";
    const msg = form.querySelector('[name="message"]')?.value || "";

    const text = `سلام، من از سایت درخواست ثبت کردم.%0Aنام: ${encodeURIComponent(name)}%0Aراه ارتباطی: ${encodeURIComponent(contact)}%0Aسرویس انتخابی: ${encodeURIComponent(service)}%0Aپیام: ${encodeURIComponent(msg)}`;
    
    // Redirect to Telegram support with prefilled message
    window.open(`https://t.me/${SUPPORT_USERNAME}`, "_blank");
    showToast("در حال انتقال به تلگرام پشتیبانی...");
    form.reset();
  });
}

function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "fixed bottom-6 left-6 z-[9999] flex flex-col gap-2 pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "bg-slate-900/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-xl px-6 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2 pointer-events-auto transition-all";
  toast.innerHTML = `<span class="material-symbols-outlined text-lg text-cyan-400">check_circle</span> <span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
