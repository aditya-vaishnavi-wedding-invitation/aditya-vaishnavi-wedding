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
    eyebrow: "YOU ARE CORDIALLY INVITED TO<br>CELEBRATE THE WEDDING OF",
    date: "28 DECEMBER 2026",
    eventTime: "Monday, 7:19 PM",
    intro: "WE WOULD LIKE TO INVITE YOU TO<br>CELEBRATE WITH US ON THE MOST<br>SPECIAL DAY OF OUR LIVES.",
    scroll: "SCROLL",
    welcomeKicker: "A CELEBRATION OF LOVE",
    welcomeTitle: "A day of joy.<br>Forever begins.",
    welcomeCopy: "Join us for a day filled with joy, family, and the beginning of our forever.",
    locationKicker: "THE CELEBRATION",
    locationTitle: "Wedding Location",
    locationName: "Shivtirth Mangal Karyalaya Va Lawns Tirthpuri",
    locationCity: "Tirthpuri, Maharashtra",
    directions: "GET DIRECTIONS",
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
    eyebrow: "आपणास आमच्या विवाह सोहळ्यास<br>मनःपूर्वक आमंत्रण",
    date: "२८ डिसेंबर २०२६",
    eventTime: "सोमवार, सायंकाळी ७:१९",
    intro: "आमच्या आयुष्यातील या खास दिवशी<br>आपण आमच्यासोबत यावे,<br>हीच मनापासून इच्छा.",
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
    directions: "मार्ग पहा",
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
