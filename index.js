#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Raphael Kezzou"),
    handle: chalk.white("Watidja"),
    work: chalk.white("Junior WebDev at BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~kezzouraphael"),
    github: chalk.gray("https://github.com/") + chalk.green("KezzouRaphael"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("raphaël-kezzou-44539720b"),
    npx: chalk.red("npx") + " " + chalk.white("rkcard"),
    labelWork: chalk.white.bold("       Work:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);