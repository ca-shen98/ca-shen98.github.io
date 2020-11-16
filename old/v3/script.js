var sections = {
  career: "https://coda.io/d/Me-Carl_db5WBdDsPFg/Career_sum9x#_lu2I0",
  interests: "https://coda.io/d/Me-Carl_db5WBdDsPFg/Interests_sueZZ#_lu_NN",
  activities: "https://coda.io/d/Me-Carl_db5WBdDsPFg/Activities_suTSM#_luSUT",
  consumption: "https://coda.io/d/Me-Carl_db5WBdDsPFg/Consumption_sudVa#_lubk3",
  travel_gallery: "https://coda.io/d/Me-Carl_db5WBdDsPFg/Travel-Gallery_suBDr#_lucTv",
};
function redirect(anchorHash) {
  var redirectLink = "https://coda.io/@ca-shen98/me-carl";
  if (sections.hasOwnProperty(anchorHash.toLowerCase())) {
    redirectLink = sections[anchorHash];
  } else { location.hash = ''; }
  setTimeout(function () { window.location.replace(redirectLink); }, 1000);
};
