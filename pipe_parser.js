const parser = {
  A: [
    ":pipe_rd::dot_lr::pipe_dl:",
    ":dot_du::blank::dot_ud:",
    ":pipe_urd::pipe_lr::pipe_dlu:",
    ":dot_du::blank::dot_ud:",
    ":pipe_u::blank::pipe_u:"
  ],
  B: [
    ":pipe_rd::dot_lr::pipe_dl:",
    ":pipe_urd::pipe_rdl::pipe_lu:",
    ":pipe_urd::pipe_lur::pipe_dl:",
    ":pipe_ur::dot_rl::pipe_lu:"
  ],
  C: [
    ":pipe_rd::dot_rl::pipe_l:",
    ":dot_ud::blank::blank:",
    ":pipe_du::blank::blank:",
    ":dot_du::blank::blank:",
    ":pipe_ur::dot_rl::pipe_l:"
  ],
  D: [
    ":pipe_rd::dot_lr::pipe_dl::blank:",
    ":dot_du::blank::pipe_ur::pipe_dl:",
    ":pipe_du::blank::blank::pipe_du:",
    ":dot_du::blank::pipe_rd::pipe_lu:",
    ":pipe_ur::dot_rl::pipe_lu::blank:"
  ],
  E: [
    ":pipe_rd::dot_lr::pipe_l:",
    ":dot_du::blank::blank:",
    ":pipe_urd::dot_lr::pipe_l:",
    ":dot_du::blank::blank:",
    ":pipe_ur::dot_rl::pipe_l:"
  ],
  F: [
    ":pipe_rd::dot_rl::pipe_l:",
    ":dot_ud::blank::blank:",
    ":pipe_urd::dot_lr::pipe_l:",
    ":dot_ud::blank::blank:",
    ":pipe_u::blank::blank:"
  ],
  G: [
    ":blank::pipe_rd::pipe_dl::blank:",
    ":pipe_rd::pipe_lu::pipe_ur::pipe_l:",
    ":dot_du::blank::blank::blank:",
    ":dot_du::blank::pipe_r::pipe_dl:",
    ":pipe_ur::dot_rl::dot_rl::pipe_lu:"
  ],
  H: [
    ":pipe_d::blank::pipe_d:",
    ":dot_du::blank::dot_du:",
    ":pipe_urd::dot_lr::pipe_dlu:",
    ":dot_du::blank::dot_ud:",
    ":pipe_u::blank::pipe_u:"
  ],
  I: [":pipe_d:", ":dot_du:", ":pipe_du:", ":dot_du:", ":pipe_u:"],
  J: [
    ":blank::blank::pipe_d:",
    ":blank::blank::dot_du:",
    ":blank::blank::pipe_du:",
    ":pipe_d::blank::dot_du:",
    ":pipe_ur::dot_lr::pipe_lu:"
  ],
  K: [
    ":pipe_d::blank::pipe_d:",
    ":dot_du::pipe_rd::pipe_lu:",
    ":pipe_urd::pipe_dlu::blank:",
    ":dot_du::pipe_ur::pipe_dl:",
    ":pipe_u::blank::pipe_u:"
  ],
  L: [
    ":pipe_d::blank::blank:",
    ":dot_du::blank::blank:",
    ":pipe_du::blank::blank:",
    ":dot_du::blank::blank:",
    ":pipe_ur::dot_rl::pipe_l:"
  ],
  O: [
    ":pipe_rd::dot_lr::pipe_dl:",
    ":dot_du::blank::dot_ud:",
    ":pipe_du::blank::pipe_du:",
    ":dot_du::blank::dot_ud:",
    ":pipe_ur::dot_rl::pipe_lu:"
  ],
  R: [
    ":pipe_rd::dot_lr::pipe_dl:",
    ":dot_du::blank::dot_ud:",
    ":pipe_urd::pipe_rdl::pipe_lu:",
    ":dot_du::pipe_ur::pipe_dl:",
    ":pipe_u::blank::pipe_u:"
  ],
  U: [
    ":pipe_d::blank::pipe_d:",
    ":dot_ud::blank::dot_du:",
    ":pipe_du::blank::pipe_du:",
    ":dot_ud::blank::dot_du:",
    ":pipe_ur::dot_lr::pipe_lu:"
  ],
  "4": [
    ":pipe_d::blank::pipe_d:",
    ":dot_du::blank::dot_du:",
    ":pipe_ur::dot_rl::pipe_dlu:",
    ":blank::blank::dot_du:",
    ":blank::blank::pipe_u:"
  ]
};

const MaxRows = 5;
const args = process.argv.slice(2);
const inputString = args[0];

if (!inputString) {
  console.log(
    'NO INPUT PROVIDED. PASS IN STRING YOU WANT TO BE PARSED LIKE THIS:\nnode pipe_parser.js "SO COOL"'
  );
  return;
}

function parseCharacther(character, row) {
  switch (character) {
    case " ":
      return ":blank:";
    default:
      return `${parser[character.toUpperCase()][row]}:blank:`;
  }
}

function parseString(string) {
  const characters = string.split("");
  const rows = ["", "", "", "", ""];

  for (let index = 0; index < MaxRows; index++) {
    characters.forEach(
      character => (rows[index] += parseCharacther(character, index))
    );
  }

  rows.splice(0, 0, ":blank:");
  return rows.join("\n");
}

const output = parseString(inputString);
var proc = require("child_process").spawn("pbcopy");
proc.stdin.write(output);
proc.stdin.end();
console.log("COPIED TO CLIPBOARD! NOW PASTE MESSAGE IN SLACK!");
