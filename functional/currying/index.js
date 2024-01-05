const programmingQuote = (name, year, text) => `${text}, ${name}, ${year}`;
const stuckWise = programmingQuote(
  "Danny",
  2024,
  "It's totally okay whenever you need help if you're getting stuck",
);

// Imagine we have another quote from Danny,
// We have to write the same name and year again and again
const growthWise = programmingQuote(
  "Danny",
  2024,
  "Get out of your comfort zone",
);

const curriedQuote = (name) => (year) => (text) => {
  return `${text}, ${name}, ${year}`;
};
const quoteFromDanny = curriedQuote("Danny");

const motivationalQuote = quoteFromDanny("2017")(
  "Get out of your comfort zone",
);
const inspirationalQuote = quoteFromDanny("2018")(
  "Motivation is temporary, inspiration is forever",
);

// See? We don't have to write Danny again and again 😎

// Or maybe now we wanna avoid the same year again and again
const dannyQuotePlusTheYear = quoteFromDanny("2018");

// Now we just have to write the quote instead

const sophisticatedQuote = dannyQuotePlusTheYear(
  `
  If you feel deppresed, tell me about
  how you feel. I don't want to be
  someone who offers you an umbrella
  when you're stood in the rain. I'd 
  rather be someone who stands in the
  rain with you.
  `,
);

const anotherSophisticatedQuote = dannyQuotePlusTheYear(
  `
  You can't change what you did yesterday,
  but you can change what you do today.
  `,
);
