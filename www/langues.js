const dictionnaire = {
  fr: {
    bonjour: "Bonjour",
    merci: "Merci",
    oui: "Oui",
    non: "Non"
  },
  wo: {
    bonjour: "Salam",
    merci: "Jërëjëf",
    oui: "Waaw",
    non: "Déedéet"
  }
};

function traduireDemo(texte, langue) {
  const mot = texte.trim().toLowerCase();
  return dictionnaire[langue]?.[mot] ||
    "Cette expression n'est pas encore dans le dictionnaire.";
}
