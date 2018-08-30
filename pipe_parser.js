const parser = {
  A: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':dot_du::blank::dot_ud:',
    ':pipe_urd::pipe_lr::pipe_dlu:',
    ':dot_du::blank::dot_ud:',
    ':pipe_u::blank::pipe_u:',
  ],
  B: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':pipe_urd::pipe_rdl::pipe_lu:',
    ':dot_du::dot_ud::blank:',
    ':pipe_urd::pipe_lur::pipe_dl:',
    ':pipe_ur::dot_rl::pipe_lu:',
  ],
  C: [
    ':pipe_rd::dot_lr::pipe_l:',
    ':dot_du::blank::blank:',
    ':pipe_du::blank::blank:',
    ':dot_du::blank::blank:',
    ':pipe_ur::dot_rl::pipe_l:',
  ],
  D: [
    ':pipe_rd::dot_lr::pipe_dl::blank:',
    ':dot_du::blank::pipe_ur::pipe_dl:',
    ':pipe_du::blank::blank::pipe_du:',
    ':dot_du::blank::pipe_rd::pipe_lu:',
    ':pipe_ur::dot_rl::pipe_lu::blank:',
  ],
  E: [
    ':pipe_rd::dot_lr::pipe_l:',
    ':dot_du::blank::blank:',
    ':pipe_urd::dot_lr::pipe_l:',
    ':dot_du::blank::blank:',
    ':pipe_ur::dot_rl::pipe_l:',
  ],
  F: [
    ':pipe_rd::dot_rl::pipe_l:',
    ':dot_ud::blank::blank:',
    ':pipe_urd::dot_lr::pipe_l:',
    ':dot_ud::blank::blank:',
    ':pipe_u::blank::blank:',
  ],
  G: [
    ':blank::pipe_rd::pipe_dl::blank:',
    ':pipe_rd::pipe_lu::pipe_ur::pipe_l:',
    ':dot_du::blank::blank::blank:',
    ':dot_du::blank::pipe_r::pipe_dl:',
    ':pipe_ur::dot_rl::dot_rl::pipe_lu:',
  ],
  H: [
    ':pipe_d::blank::pipe_d:',
    ':dot_du::blank::dot_du:',
    ':pipe_urd::dot_lr::pipe_dlu:',
    ':dot_du::blank::dot_ud:',
    ':pipe_u::blank::pipe_u:',
  ],
  I: [':pipe_d:', ':dot_du:', ':pipe_du:', ':dot_du:', ':pipe_u:'],
  J: [
    ':blank::blank::pipe_d:',
    ':blank::blank::dot_du:',
    ':blank::blank::pipe_du:',
    ':pipe_d::blank::dot_du:',
    ':pipe_ur::dot_lr::pipe_lu:',
  ],
  K: [
    ':pipe_d::blank::pipe_d:',
    ':dot_du::pipe_rd::pipe_lu:',
    ':pipe_urd::pipe_dlu::blank:',
    ':dot_du::pipe_ur::pipe_dl:',
    ':pipe_u::blank::pipe_u:',
  ],
  L: [
    ':pipe_d::blank::blank:',
    ':dot_du::blank::blank:',
    ':pipe_du::blank::blank:',
    ':dot_du::blank::blank:',
    ':pipe_ur::dot_rl::pipe_l:',
  ],
  M: [
    ':pipe_rd::pipe_dl::pipe_rd::pipe_dl:',
    ':dot_du::dot_ud::dot_du::dot_ud:',
    ':pipe_du::pipe_ur::pipe_lu::pipe_du:',
    ':dot_du::blank::blank::dot_ud:',
    ':pipe_u::blank::blank::pipe_u:',
  ],
  N: [
    ':pipe_rd::pipe_dl::blank::pipe_d:',
    ':dot_du::dot_ud::blank::dot_du:',
    ':pipe_du::pipe_ur::pipe_dl::pipe_du:',
    ':dot_du::blank::dot_ud::dot_du:',
    ':pipe_u::blank::pipe_ur::pipe_lu:',
  ],
  O: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':dot_du::blank::dot_ud:',
    ':pipe_du::blank::pipe_du:',
    ':dot_du::blank::dot_ud:',
    ':pipe_ur::dot_rl::pipe_lu:',
  ],
  P: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':dot_du::blank::dot_ud:',
    ':pipe_urd::pipe_lr::pipe_lu:',
    ':dot_du::blank::blank:',
    ':pipe_u::blank::blank:',
  ],
  Q: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':dot_du::blank::dot_ud:',
    ':pipe_du::blank::pipe_du:',
    ':dot_du::blank::dot_ud:',
    ':pipe_ur::dot_rl::pipe_lur:',
  ],
  R: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':dot_du::blank::dot_ud:',
    ':pipe_urd::pipe_rdl::pipe_lu:',
    ':dot_du::pipe_ur::pipe_dl:',
    ':pipe_u::blank::pipe_u:',
  ],
  S: [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':dot_du::blank::blank:',
    ':pipe_ur::dot_rl::pipe_dl:',
    ':blank::blank::dot_du:',
    ':pipe_ur::dot_lr::pipe_lu:',
  ],
  T: [
    ':pipe_r::pipe_rdl::pipe_l:',
    ':blank::dot_du::blank:',
    ':blank::pipe_du::blank:',
    ':blank::dot_du::blank:',
    ':blank::pipe_u::blank:',
  ],
  U: [
    ':pipe_d::blank::pipe_d:',
    ':dot_ud::blank::dot_du:',
    ':pipe_du::blank::pipe_du:',
    ':dot_ud::blank::dot_du:',
    ':pipe_ur::dot_lr::pipe_lu:',
  ],
  V: [
    ':pipe_d::blank::pipe_d:',
    ':dot_ud::blank::dot_du:',
    ':pipe_du::blank::pipe_du:',
    ':pipe_ur::pipe_dl::dot_du:',
    ':blank::pipe_ur::pipe_lu:',
  ],
  W: [
    ':pipe_d::blank::pipe_d:',
    ':dot_ud::blank::dot_du:',
    ':pipe_du::pipe_d::pipe_du:',
    ':dot_ud::pipe_du::dot_du:',
    ':pipe_ur::pipe_lur::pipe_lu:',
  ],
  X: [
    ':pipe_d::blank::pipe_d:',
    ':pipe_ur::pipe_dl::dot_du:',
    ':pipe_rd::pipe_x::pipe_lu:',
    ':dot_du::pipe_ur::pipe_dl:',
    ':pipe_u::blank::pipe_u:',
  ],
  Y: [
    ':pipe_d::blank::pipe_d:',
    ':dot_ud::blank::dot_du:',
    ':pipe_du::blank::pipe_du:',
    ':pipe_ur::pipe_rdl::pipe_lu:',
    ':blank::pipe_u::blank:',
  ],
  Z: [
    ':pipe_r::dot_lr::pipe_dl:',
    ':blank::pipe_rd::pipe_lu:',
    ':blank::dot_ud::blank:',
    ':pipe_rd::pipe_lu::blank:',
    ':pipe_ur::dot_lr::pipe_l:',
  ],
  Å: [
    ':blank::dot_ud::blank:',
    ':pipe_rd::pipe_lur::pipe_dl:',
    ':dot_ud::blank::dot_ud:',
    ':pipe_urd::pipe_lr::pipe_dlu:',
    ':pipe_u::blank::pipe_u:',
  ],
  Ä: [
    ':dot_ud::blank::dot_ud:',
    ':pipe_urd::pipe_lr::pipe_dlu:',
    ':dot_ud::blank::dot_ud:',
    ':pipe_urd::pipe_lr::pipe_dlu:',
    ':pipe_u::blank::pipe_u:',
  ],
  Ö: [
    ':dot_du::blank::dot_ud:',
    ':pipe_urd::pipe_lr::pipe_dlu:',
    ':pipe_du::blank::dot_ud:',
    ':dot_du::blank::pipe_du:',
    ':pipe_ur::dot_rl::pipe_lu:',
  ],
  '1': [
    ':pipe_rd::pipe_dl::blank:',
    ':pipe_u::dot_ud::blank:',
    ':blank::pipe_du::blank:',
    ':blank::dot_ud::blank:',
    ':pipe_r::pipe_lur::pipe_l:',
  ],
  '3': [
    ':pipe_r::dot_rl::pipe_dl:',
    ':blank::blank::dot_du:',
    ':pipe_r::dot_rl::pipe_dlu:',
    ':blank::blank::dot_du:',
    ':pipe_r::dot_lr::pipe_lu:',
  ],
  '4': [
    ':pipe_d::blank::pipe_d:',
    ':dot_du::blank::dot_du:',
    ':pipe_ur::dot_rl::pipe_dlu:',
    ':blank::blank::dot_du:',
    ':blank::blank::pipe_u:',
  ],
  '?': [
    ':pipe_rd::dot_lr::pipe_dl:',
    ':pipe_u::blank::dot_ud:',
    ':blank::pipe_rd::pipe_lu:',
    ':blank::dot_ud::blank:',
    ':blank::pipe_u::blank:',
  ],
  '^': [
    ':pipe_d::blank::blank:',
    ':dot_du::blank::blank:',
    ':pipe_lu::pipe_lr::pipe_l:',
    ':pipe_lr::dot_lr::pipe_l:',
    ':pipe_lr::dot_lr::pipe_l:',
  ],
};

const MaxRows = 5;
const args = process.argv.slice(2);
const inputString = args[0];
const inputPipeColor = args[1];
const pipeColor = inputPipeColor === 'g' ? 'g' : '';
const inputDotColor = args[2];
const dotColor = inputDotColor === 'r' ? 'r' : '';

if (!inputString) {
  console.log('NO INPUT PROVIDED. PASS IN STRING YOU WANT TO BE PARSED LIKE THIS:\nnode pipe_parser.js "SO COOL"');
  return;
}

function parseCharacther(character, row) {
  switch (character) {
    case ' ':
      return ':blank::blank:';
    default:
      return `${parser[character.toUpperCase()][row]}`;
  }
}

function parseString(string) {
  const characters = string.split('');
  const rows = ['', '', '', '', ''];

  for (let index = 0; index < MaxRows; index++) {
    characters.forEach(character => (rows[index] += parseCharacther(character, index)));
  }

  rows.splice(0, 0, ':blank:');
  const output = rows.join('\n');
  const pipeColorised = output.split('pipe').join(`pipe${pipeColor}`);
  const fullyColorised = pipeColorised.split('dot').join(`dot${dotColor}`);

  return fullyColorised;
}

const output = parseString(inputString);
var proc = require('child_process').spawn('pbcopy');
proc.stdin.write(output);
proc.stdin.end();
console.log('COPIED TO CLIPBOARD! NOW PASTE MESSAGE IN SLACK!');
