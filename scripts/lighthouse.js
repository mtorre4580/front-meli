const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const logger = require('lighthouse-logger');
const fs = require('fs');
const path = require('path');

// Method to generate report html
const generateReport = report => {
  fs.writeFile(path.join(__dirname, 'performance-meli.html'), report, err => {
    if (err) {
      return console.log('Error in write result report lighthouse', err);
    }
  });
};

// Configuration for lighthouse report
const opts = {
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu'],
  output: 'html',
  logLevel: 'info',
  onlyCategories: ['performance'],
  view: true,
};

// URL mercadolibre results
const url = 'http://localhost:5000/items?search=iphone';

const launchChromeAndRunLighthouse = (url, opts, config = null) => {
  return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      generateReport(results.report);
      return chrome.kill().then(() => results.report);
    });
  });
};

launchChromeAndRunLighthouse(url, opts).then(() => {
  logger.setLevel(opts.logLevel);
  console.log('Success report lighthouse for app mercadolibre');
});
