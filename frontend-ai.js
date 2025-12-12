const aiBtn = document.getElementById('aiBtn');
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const messages = document.getElementById('messages');

aiBtn.onclick = () => chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';

async function sendMessage(text){
  if(!text) return;
  messages.innerHTML += `<div style="margin:6px 0"><b>You:</b> ${text}</div>`;
  chatInput.value = '';
  messages.scrollTop = messages.scrollHeight;
  try{
    const resp = await fetch('/api/ai/ask', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ question: text })
    });
    const data = await resp.json();
    messages.innerHTML += `<div style="margin:6px 0;color:#0aff9d"><b>AI:</b> ${data.answer || data.error}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }catch(err){
    messages.innerHTML += `<div style="margin:6px 0;color:#ff6666"><b>Error:</b> ${err.message}</div>`;
  }
}

chatInput.addEventListener('keypress', function(e){
  if(e.key==='Enter'){ sendMessage(chatInput.value.trim()); }
});
