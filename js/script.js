/* ---------------------------------------------------------
   Language switching
   English is the default. Marathi is applied to all
   current text sections without reloading the page.
   --------------------------------------------------------- */

const preWeddingPhotoNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let photoIndex = 0;

const copy = {
  en: {
    groomName: "Aditya",
    brideName: "Vaishnavi",
    ganeshBlessing: "॥ Shree Ganeshay Namah ॥",
    eyebrow: "YOU ARE CORDIALLY INVITED TO<br>CELEBRATE THE WEDDING OF",
    date: "28 DECEMBER 2026",
    eventTime: "Monday, 7:19 PM",
    countdownLabel: "Time until the wedding",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Mins",
    countdownSeconds: "Secs",
    intro: "WE WOULD LIKE TO INVITE YOU TO<br>CELEBRATE WITH US ON THE MOST<br>SPECIAL DAY OF OUR LIVES.",
    rsvpButton: "RSVP ON WHATSAPP",
    downloadWeddingCard: "DOWNLOAD INVITATION PDF",
    scroll: "SCROLL",
    welcomeKicker: "A CELEBRATION OF LOVE",
    welcomeTitle: "A day of joy.<br>Forever begins.",
    welcomeCopy: "Join us for a day filled with joy, family, and the beginning of our forever.",
    locationKicker: "THE CELEBRATION",
    locationTitle: "Wedding Location",
    locationName: "Shivtirth Mangal Karyalaya Va Lawns Tirthpuri",
    locationCity: "Tirthpuri, Maharashtra",
    directions: "Locate on map",
    transportButton: "NEARBY TRANSPORT",
    transportKicker: "PLAN YOUR JOURNEY",
    transportTitle: "Nearby Transport",
    transportClose: "Close transport details",
    transportNote: "Approximate road distances from Tirthpuri town center; routes and journey times may vary. Please confirm bus stop locations and current schedules locally.",
    transportBus: "Bus",
    transportLocalBus: "Tirthpuri Local Bus Stop",
    transportLocalBusInfo: "MSRTC service information could not be independently confirmed; check current routes and timings locally.",
    transportAmbadBus: "Ambad Bus Stand",
    transportAmbadBusInfo: "About 30 km by road.",
    transportJalnaBus: "Jalna Bus Stand",
    transportJalnaBusInfo: "About 58 km by road.",
    transportRail: "Railway",
    transportRanjaniRail: "Ranjani Railway Station",
    transportRanjaniRailInfo: "About 47 km by road (around 31 km straight-line).",
    transportJalnaRail: "Jalna Railway Station",
    transportJalnaRailInfo: "About 58 km by road.",
    transportAir: "Airport",
    transportAirport: "Chhatrapati Sambhajinagar Airport / Aurangabad Airport (IXU)",
    transportAirportInfo: "About 90 km by road; allow around 2 hours.",
    galleryKicker: "LITTLE MOMENTS, BIG LOVE",
    galleryTitle: "Our Pre-wedding Moments",
    galleryCopy: "A few favorite memories from our journey together.",
    galleryLabel: "Pre-wedding photos",
    galleryPrevious: "Previous photo",
    galleryNext: "Next photo",
    galleryProgress: "Photo progress",
    galleryPhotoAlt: "Pre-wedding moment",
    thankKicker: "WITH LOVE & GRATITUDE",
    thankTitle: "Thank You",
    thankCopy: "For joining us on this special day.<br>Your presence is the best gift we could receive."
  },
  mr: {
    groomName: "आदित्य",
    brideName: "वैष्णवी",
    ganeshBlessing: "॥ श्री गणेशाय नमः ॥",
    eyebrow: "आपणास आमच्या विवाह सोहळ्यास<br>मनःपूर्वक आमंत्रण",
    date: "२८ डिसेंबर २०२६",
    eventTime: "सोमवार, सायंकाळी ७:१९",
    countdownLabel: "विवाह सोहळ्यापर्यंतचा वेळ",
    countdownDays: "दिवस",
    countdownHours: "तास",
    countdownMinutes: "मिनिटे",
    countdownSeconds: "सेकंद",
    intro: "आमच्या आयुष्यातील या खास दिवशी<br>आपण आमच्यासोबत यावे,<br>हीच मनापासून इच्छा.",
    rsvpButton: "व्हॉट्सॲपवर उपस्थिती कळवा",
    downloadWeddingCard: "लग्नपत्रिका PDF डाउनलोड करा",
    scroll: "पुढे",
    welcomeTitle: "तुमच्यासोबत हा आनंदाचा दिवस<br>साजरा करताना आम्हाला खूप आनंद होईल.",
    welcomeCopy: "आपली उपस्थिती आमच्यासाठी खूप खास आहे.<br>आपले स्वागत करण्यासाठी आम्ही उत्सुक आहोत.",
    welcomeKicker: "प्रेमाचा सुंदर सोहळा",
    welcomeTitle: "आनंदाचा दिवस.<br>नव्या आयुष्याची सुरुवात.",
    welcomeCopy: "आनंद, कुटुंब आणि आमच्या नव्या प्रवासाची सुरुवात साजरी करण्यासाठी आमच्यासोबत या.",
    locationKicker: "सोहळ्याचे ठिकाण",
    locationTitle: "विवाह स्थळ",
    locationName: "शिवतीर्थ मंगल कार्यालय वा लॉन तीर्थपुरी",
    locationCity: "तीर्थपुरी, महाराष्ट्र",
    directions: "नकाशावर ठिकाण पहा",
    transportButton: "जवळची वाहतूक",
    transportKicker: "तुमचा प्रवास नियोजित करा",
    transportTitle: "जवळचे वाहतूक पर्याय",
    transportClose: "वाहतुकीची माहिती बंद करा",
    transportNote: "तीर्थपुरीच्या मध्यवर्ती भागापासूनचे रस्त्याचे अंदाजे अंतर; मार्ग आणि प्रवासाचा वेळ बदलू शकतो. बस थांब्यांची ठिकाणे आणि सध्याची वेळापत्रके स्थानिक पातळीवर तपासा.",
    transportBus: "बस",
    transportLocalBus: "तीर्थपुरी स्थानिक बस थांबा",
    transportLocalBusInfo: "MSRTC बस सेवेची माहिती स्वतंत्रपणे निश्चित करता आली नाही; सध्याचे मार्ग आणि वेळा स्थानिक पातळीवर तपासा.",
    transportAmbadBus: "अंबड बस स्थानक",
    transportAmbadBusInfo: "रस्त्याने अंदाजे ३० किमी.",
    transportJalnaBus: "जालना बस स्थानक",
    transportJalnaBusInfo: "रस्त्याने अंदाजे ५८ किमी.",
    transportRail: "रेल्वे",
    transportRanjaniRail: "रांजणी रेल्वे स्थानक",
    transportRanjaniRailInfo: "रस्त्याने अंदाजे ४७ किमी (सरळ अंतर सुमारे ३१ किमी).",
    transportJalnaRail: "जालना रेल्वे स्थानक",
    transportJalnaRailInfo: "रस्त्याने अंदाजे ५८ किमी.",
    transportAir: "विमानतळ",
    transportAirport: "छत्रपती संभाजीनगर विमानतळ / औरंगाबाद विमानतळ (IXU)",
    transportAirportInfo: "रस्त्याने अंदाजे ९० किमी; सुमारे २ तासांचा प्रवास धरावा.",
    galleryKicker: "छोटे क्षण, खूप सारे प्रेम",
    galleryTitle: "आमच्या प्री-वेडिंगच्या आठवणी",
    galleryCopy: "एकत्रच्या प्रवासातील काही खास आठवणी.",
    galleryLabel: "प्री-वेडिंगचे फोटो",
    galleryPrevious: "मागील फोटो",
    galleryNext: "पुढील फोटो",
    galleryProgress: "फोटो प्रगती",
    galleryPhotoAlt: "लग्नापूर्वीचा क्षण",
    thankKicker: "मनःपूर्वक आभार",
    thankTitle: "धन्यवाद",
    thankCopy: "या खास दिवशी आमच्यासोबत सहभागी झाल्याबद्दल धन्यवाद.<br>आपली उपस्थिती आमच्यासाठी सर्वात सुंदर भेट आहे."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang === "mr" ? "mr" : "en";

  document.querySelectorAll(".language").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  Object.entries(copy[lang]).forEach(([key, value]) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => {
      element.innerHTML = value;
    });
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", copy[lang][element.dataset.i18nAria]);
  });

  const currentPhoto = document.getElementById("preWeddingPhoto");
  if (currentPhoto) {
    currentPhoto.alt = `${copy[lang].galleryPhotoAlt} ${preWeddingPhotoNumbers[photoIndex]}`;
  }
}

document.querySelectorAll(".language").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("en");

const weddingCountdown = document.getElementById("weddingCountdown");
if (weddingCountdown) {
  const weddingTime = new Date("2026-12-28T19:19:00+05:30").getTime();
  const days = document.getElementById("countdownDays");
  const hours = document.getElementById("countdownHours");
  const minutes = document.getElementById("countdownMinutes");
  const seconds = document.getElementById("countdownSeconds");

  function updateCountdown() {
    const remainingSeconds = Math.max(0, Math.floor((weddingTime - Date.now()) / 1000));
    days.textContent = String(Math.floor(remainingSeconds / 86400));
    hours.textContent = String(Math.floor((remainingSeconds % 86400) / 3600)).padStart(2, "0");
    minutes.textContent = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, "0");
    seconds.textContent = String(remainingSeconds % 60).padStart(2, "0");

    if (remainingSeconds === 0) {
      window.clearInterval(countdownInterval);
    }
  }

  const countdownInterval = window.setInterval(updateCountdown, 1000);
  updateCountdown();
}

const photoCarousel = document.getElementById("photoCarousel");

if (photoCarousel) {
  const photo = document.getElementById("preWeddingPhoto");
  const frame = document.getElementById("carouselFrame");
  const count = document.getElementById("photoCount");
  const progress = document.getElementById("carouselProgress");
  let swipeStart = null;

  function showPhoto(nextIndex) {
    photoIndex = (nextIndex + preWeddingPhotoNumbers.length) % preWeddingPhotoNumbers.length;
    const photoNumber = preWeddingPhotoNumbers[photoIndex];
    const lang = document.documentElement.lang === "mr" ? "mr" : "en";

    photo.src = `images/pre_wed/${photoNumber}.jpg`;
    photo.alt = `${copy[lang].galleryPhotoAlt} ${photoNumber}`;
    count.textContent = `${String(photoIndex + 1).padStart(2, "0")} / ${String(preWeddingPhotoNumbers.length).padStart(2, "0")}`;
    progress.value = photoIndex + 1;
  }

  document.getElementById("previousPhoto").addEventListener("click", () => {
    showPhoto(photoIndex - 1);
  });

  document.getElementById("nextPhoto").addEventListener("click", () => {
    showPhoto(photoIndex + 1);
  });

  frame.addEventListener("pointerdown", event => {
    if (!event.isPrimary || event.button !== 0) return;

    swipeStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY
    };
    frame.setPointerCapture(event.pointerId);
  });

  frame.addEventListener("pointerup", event => {
    if (!swipeStart || event.pointerId !== swipeStart.pointerId) return;

    const swipeDistanceX = event.clientX - swipeStart.x;
    const swipeDistanceY = event.clientY - swipeStart.y;
    swipeStart = null;

    if (Math.abs(swipeDistanceX) >= 45 && Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
      showPhoto(photoIndex + (swipeDistanceX < 0 ? 1 : -1));
    }
  });

  frame.addEventListener("pointercancel", () => {
    swipeStart = null;
  });

  frame.addEventListener("lostpointercapture", () => {
    swipeStart = null;
  });

  photoCarousel.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(photoIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(photoIndex + 1);
    }
  });

}

/* Handle directions button click to open Google Maps */
const directionsBtn = document.getElementById("directionsBtn");
if (directionsBtn) {
  directionsBtn.addEventListener("click", () => {
    const location = "Shivtirth Mangal Karyalaya Va Lawns Tirthpuri, CWP9+M5X, Gondiya - Ghungarde - Hadgaon Rd, Tirthpuri, Maharashtra 431209";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  });
}

const transportDialog = document.getElementById("transportDialog");
const transportButton = document.getElementById("transportButton");
const transportClose = document.getElementById("transportClose");

if (transportDialog && transportButton && transportClose) {
  transportButton.addEventListener("click", () => transportDialog.showModal());
  transportClose.addEventListener("click", () => transportDialog.close());
  transportDialog.addEventListener("click", event => {
    if (event.target === transportDialog) transportDialog.close();
  });
}

/* Smoothly reveal later pages as the user scrolls. */
const pageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("aria-hidden", "false");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".page").forEach(page => pageObserver.observe(page));

/* =========================================================
   ✦ WOW LAYER — gate, petals, reveals, tilt, sparkles
   ========================================================= */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  /* ---- Petal canvas (ambient fall + bursts) ---- */
  const cv = document.getElementById("petals");
  const ctx = cv && !reduce ? cv.getContext("2d") : null;
  const colors = ["#f4a62a", "#e8672a", "#e0536e", "#f6dc94", "#fff4e0", "#d96b8a"];
  const phone = matchMedia("(max-width: 600px), (pointer: coarse)").matches;
  const maxPetals = phone ? 12 : 22, maxDpr = phone ? 1.5 : 2;
  let W = 0, H = 0, dpr = 1, ambient = false;
  const petals = [];

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, maxDpr);
    W = cv.width = innerWidth * dpr;
    H = cv.height = innerHeight * dpr;
  }

  function addPetal(x, y, burst) {
    const a = Math.random() * Math.PI + Math.PI;           // upward fan
    const s = burst ? (4 + Math.random() * 11) * dpr : 0;
    petals.push({
      x, y, vx: burst ? Math.cos(a) * s : (Math.random() - .5) * dpr, vy: burst ? Math.sin(a) * s : (.7 + Math.random()) * dpr,
      r: (5 + Math.random() * 7) * dpr, rot: Math.random() * 6.28, vr: (Math.random() - .5) * .08,
      ph: Math.random() * 6.28, flip: Math.random() * 6.28, c: colors[(Math.random() * colors.length) | 0],
      drag: burst ? .965 : 1, term: (1.1 + Math.random() * .9) * dpr
    });
  }

  function burst(x, y, n) {
    if (!ctx) return;
    for (let i = 0; i < n; i++) addPetal(x * dpr, y * dpr, true);
  }

  function frame() {
    requestAnimationFrame(frame);
    if (document.hidden) return;
    if (!petals.length && !ambient) return;
    ctx.clearRect(0, 0, W, H);
    if (ambient && petals.length < maxPetals && Math.random() < .05) addPetal(Math.random() * W, -20 * dpr, false);
    for (let i = petals.length - 1; i--;) {
      const p = petals[i];
      p.vx *= p.drag; p.vy = Math.min(p.vy + .12 * dpr, p.term);
      p.ph += .02; p.flip += .05; p.rot += p.vr;
      p.x += p.vx + Math.sin(p.ph) * .8 * dpr; p.y += p.vy;
      if (p.y > H + 30 || p.x < -60 || p.x > W + 60) { petals.splice(i, 1); continue; }
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, .45 + .55 * Math.abs(Math.cos(p.flip)));
      ctx.fillStyle = p.c; ctx.globalAlpha = .85;
      ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * .55, 0, 0, 6.283); ctx.fill();
      ctx.restore();
    }
  }
  if (ctx) { resize(); addEventListener("resize", resize); frame(); }

  /* ---- Opening gate ---- */
  const gate = document.getElementById("gate");
  const openBtn = document.getElementById("openGate");
  if (gate && !reduce) {
    openBtn.focus({ preventScroll: true });
    openBtn.addEventListener("click", () => {
      if (gate.classList.contains("open")) return;
      gate.classList.add("open");
      burst(innerWidth / 2, innerHeight / 2, phone ? 80 : 150);
      root.classList.remove("intro-lock");
      setTimeout(() => { gate.classList.add("done"); ambient = true; }, 1700);
    });
  } else {
    if (gate) gate.remove();
    root.classList.remove("intro-lock");
  }

  /* ---- Scroll reveals ---- */
  const groups = [
    [".page-welcome", [[".welcome-kicker", "rv"], [".welcome-title", "rv-wipe"], [".welcome-copy", "rv"], [".couple-art-frame", "rv-photo"]]],
    [".page-location", [[".section-floral", "rv"], [".section-kicker", "rv"], [".section-title", "rv-wipe"], [".location-illustration", "rv-iris"], [".location-card", "rv"]]],
    [".page-thank-you", [[".thank-paper", "rv-unfold"], [".thank-floral", "rv"], [".thank-kicker", "rv"], [".thank-title", "rv-wipe"], [".thank-copy", "rv"], [".thank-names", "rv"], [".thank-divider", "rv"], [".thank-date", "rv"], [".thank-content .event-time", "rv"]]]
  ];
  const onSee = entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add("in");
    io.unobserve(el); ioClip.unobserve(el);
    if (el.classList.contains("rv-unfold")) {
      const b = el.getBoundingClientRect();
      burst(b.left + b.width / 2, Math.max(b.top, 80), phone ? 50 : 90);
    }
    setTimeout(() => el.classList.remove("rv", "rv-wipe", "rv-iris", "rv-unfold", "rv-photo", "in"), 4200);
  });
  const io = new IntersectionObserver(onSee, { threshold: .22, rootMargin: "0px 0px -6% 0px" });
  /* clipped elements are mostly invisible, so they need a zero threshold */
  const ioClip = new IntersectionObserver(onSee, { threshold: 0, rootMargin: "0px 0px -10% 0px" });

  groups.forEach(([page, items]) => {
    items.forEach(([sel, cls], i) => {
      const el = document.querySelector(`${page} ${sel}`);
      if (!el) return;
      el.classList.add(cls);
      el.style.setProperty("--d", cls === "rv-unfold" ? 0 : Math.min(i, 4));
      (cls === "rv-wipe" || cls === "rv-iris" ? ioClip : io).observe(el);
    });
  });

  /* ---- Countdown: flip digits on change ---- */
  ["countdownDays", "countdownHours", "countdownMinutes", "countdownSeconds"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    new MutationObserver(() => {
      el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick");
    }).observe(el, { childList: true });
  });

  if (reduce) return;

  /* ---- Scroll progress + heart parallax ---- */
  const bar = document.getElementById("scrollProgress");
  const hearts = [...document.querySelectorAll(".page-heart-pattern")];
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.setProperty("--p", max > 0 ? (scrollY / max).toFixed(4) : 0);
      hearts.forEach(h => {
        const r = h.parentElement.getBoundingClientRect();
        h.style.setProperty("--py", `${((r.top + r.height / 2 - innerHeight / 2) * -.08).toFixed(1)}px`);
      });
      ticking = false;
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Portrait tilt ---- */
  const portrait = document.querySelector(".couple-art-frame");
  if (portrait) {
    portrait.addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      const b = portrait.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
      portrait.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    });
    ["pointerleave", "pointercancel"].forEach(t => portrait.addEventListener(t, () => { portrait.style.transform = ""; }));
  }

  /* ---- Sparkles: mouse trail + tap bursts ---- */
  const glyphs = ["✦", "✧", "♡", "❈"];
  function spark(x, y, spread) {
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = glyphs[(Math.random() * glyphs.length) | 0];
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", (Math.random() - .5) * spread + "px");
    s.style.setProperty("--dy", (Math.random() * spread * .8 + 10) + "px");
    s.style.fontSize = 10 + Math.random() * 10 + "px";
    s.addEventListener("animationend", () => s.remove());
    document.body.appendChild(s);
  }
  let last = 0;
  addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse" || root.classList.contains("intro-lock")) return;
    const now = performance.now();
    if (now - last > 55) { last = now; spark(e.clientX, e.clientY, 50); }
  });
  addEventListener("pointerdown", e => {
    for (let i = 0; i < 7; i++) spark(e.clientX, e.clientY, 120);
  });
})();