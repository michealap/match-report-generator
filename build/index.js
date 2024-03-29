"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTarget/HtmlReport");
// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches - array of matchData tuples
const summary = new Summary_1.Summary(
// instance of analysis and console report
new WinsAnalysis_1.WinsAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
