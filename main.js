
function switchTab(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function checkTeaching() {
  const input = document.getElementById("inputText").value.toLowerCase();
  let result = "";
  if (input.includes("jesus is not god")) {
    result = "❌ Arianism detected. See John 1:1.";
  } else if (input.includes("everyone goes to heaven")) {
    result = "⚠️ Possible Universalism. See Matthew 25:46.";
  } else if (input.includes("we can earn salvation")) {
    result = "❌ Pelagianism. See Ephesians 2:8-9.";
  } else {
    result = "✅ No major issues detected. Keep growing in the Word!";
  }
  document.getElementById("resultBox").innerText = result;
}
function simulateTranscript() {
  const file = document.getElementById("audioInput").files[0];
  const textarea = document.getElementById("transcript");
  const msg = document.getElementById("audioMsg");
  if (!file) {
    msg.innerText = "❌ Please select an audio file first.";
    msg.style.color = 'red';
    return;
  }
  textarea.value = `Transcript of ${file.name} (simulated):\n\nJesus is the Son of God. We are saved by grace through faith...`;
  msg.innerText = "✅ Transcript generated.";
  msg.style.color = 'green';
}
