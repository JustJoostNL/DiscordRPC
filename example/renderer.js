const { ipcRenderer: ipc, webFrame } = require('electron');
const snek = document.getElementById('snek');
const counter = document.getElementById('boops');

webFrame.setZoomLevelLimits(1, 1);

let boops = 0;
function boop() {
  boops++;
  counter.innerHTML = `${boops} BOOPS`;
  ipc.send('boop', { boops });
}

snek.onmousedown = () => {
  snek.style['font-size'] = '550%';
  boop();
};

snek.onmouseup = () => {
  snek.style['font-size'] = '500%';
};