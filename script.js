const uuidEl = document.getElementById("uuid");
const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");

function newUUID() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // fallback 方法
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random()*16|0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

genBtn.addEventListener("click", () => {
  const u = newUUID();
  uuidEl.textContent = u;
  copyBtn.disabled = false;
});

copyBtn.addEventListener("click", () => {
  const text = uuidEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "已复制！";
    setTimeout(() => copyBtn.textContent = "复制 UUID", 1500);
  }).catch(err => {
    alert("复制失败，请手动复制。");
  });
});
copyBtn.disabled = true;
