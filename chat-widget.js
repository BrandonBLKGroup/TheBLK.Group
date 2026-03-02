(function(){
  const SB_URL='https://fzlwkbhpsklsgkinwljt.supabase.co';
  const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6bHdrYmhwc2tsc2draW53bGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNTE0MzEsImV4cCI6MjA4NzYyNzQzMX0.lc6A8RCUySU0Hn9MjPcR9rH1c8DjSj_A7MV8JuLvwik';
  const TABLE='jarvis_public_chat';
  let sessionId=localStorage.getItem('jarvis_pub_sid');
  if(!sessionId){sessionId='pub_'+Math.random().toString(36).substr(2,12)+'_'+Date.now();localStorage.setItem('jarvis_pub_sid',sessionId)}
  let polling=null;
  let lastMsgCount=1;

  window.toggleJarvisChat=function(){
    const p=document.getElementById('jarvis-chat-panel');
    p.classList.toggle('open');
    if(p.classList.contains('open')){
      document.getElementById('jarvis-chat-input').focus();
      if(!polling)startPolling();
    }
  };

  window.sendJarvisMsg=function(){
    const input=document.getElementById('jarvis-chat-input');
    const text=input.value.trim();
    if(!text)return;
    input.value='';
    addMsg('user',text);
    addMsg('typing','Jarvis is typing...');
    fetch(SB_URL+'/rest/v1/'+TABLE,{
      method:'POST',
      headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({session_id:sessionId,role:'user',content:text,read:false})
    }).catch(e=>console.error('Send error:',e));
  };

  document.addEventListener('keydown',function(e){
    if(e.key==='Enter'&&document.activeElement===document.getElementById('jarvis-chat-input'))window.sendJarvisMsg();
  });

  function addMsg(role,text){
    const container=document.getElementById('jarvis-chat-messages');
    if(role!=='typing'){container.querySelectorAll('.typing').forEach(t=>t.remove())}
    const div=document.createElement('div');
    div.className='jmsg '+role;
    div.textContent=text;
    container.appendChild(div);
    container.scrollTop=container.scrollHeight;
  }

  function startPolling(){
    polling=setInterval(async()=>{
      try{
        const resp=await fetch(SB_URL+'/rest/v1/'+TABLE+'?session_id=eq.'+sessionId+'&role=eq.assistant&order=created_at.asc',{
          headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}
        });
        const msgs=await resp.json();
        if(msgs.length>lastMsgCount-1){
          const container=document.getElementById('jarvis-chat-messages');
          container.querySelectorAll('.typing').forEach(t=>t.remove());
          for(let i=lastMsgCount-1;i<msgs.length;i++){addMsg('assistant',msgs[i].content)}
          lastMsgCount=msgs.length+1;
        }
      }catch(e){console.error('Poll error:',e)}
    },3000);
  }
})();
