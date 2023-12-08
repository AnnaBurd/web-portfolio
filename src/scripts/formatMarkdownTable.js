const links = {
  "https://treo.sh/": "https://www.google.com",
  "https://treo.sh/": "https://www.google.com",
};

const manifest = [
  {
    url: "https://treo.sh/",
    isRepresentativeRun: true,
    htmlPath:
      "/Users/lighthouse-ci-action/.lighthouseci/treo_sh-_-2020_07_05_20_37_18.report.html",
    jsonPath:
      "/Users/lighthouse-ci-action/.lighthouseci/treo_sh-_-2020_07_05_20_37_18.report.json",
    summary: {
      performance: 0.99,
      accessibility: 0.98,
      "best-practices": 1,
      seo: 0.96,
      pwa: 0.71,
    },
  },
  {
    url: "https://treo.sh/",
    isRepresentativeRun: true,
    htmlPath:
      "/Users/lighthouse-ci-action/.lighthouseci/treo_sh-_-2020_07_05_20_37_18.report.html",
    jsonPath:
      "/Users/lighthouse-ci-action/.lighthouseci/treo_sh-_-2020_07_05_20_37_18.report.json",
    summary: {
      performance: 0.99,
      accessibility: 0.98,
      "best-practices": 1,
      seo: 0.96,
      pwa: 0.71,
    },
  },
];

const results = manifest;

const score = (res) => (res >= 90 ? "🟢" : res >= 50 ? "🟠" : "🔴");

const excludeKeysFromSummary = ["pwa"];
const resultSummaryKeys = (summary) =>
  Object.keys(summary).filter((key) => !excludeKeysFromSummary.includes(key));

const tableHeader =
  `| Preview URL and Report | ` +
  resultSummaryKeys(results[0].summary)
    .map((key) => ` ${key} |`)
    .join("");

const tableDivider =
  `| --- | ` +
  resultSummaryKeys(results[0].summary)
    .map(() => ` --- |`)
    .join("");

const tableRows = results
  .map((result) => {
    const url = result.url;
    const summary = result.summary;
    return `| 🌎 [${url}](${url}) <br /> ⚡️ [Lighthouse report](${
      links[url]
    }) | ${resultSummaryKeys(summary)
      .map((key) => {
        const percentage = Math.round(summary[key] * 100);
        return ` ${score(percentage)} ${percentage} `;
      })
      .join("|")} |`;
  })
  .join("/n");

let output = "**Lighthouse Performance Results**\n\n";
output += tableHeader + "\n";
output += tableDivider + "\n";
output += tableRows + "\n";

console.log(output);
