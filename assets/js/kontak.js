document.getElementById('wa-form').addEventListener('submit',function(e){e.preventDefault();var d=new FormData(this),g=function(k){return(d.get(k)||'').trim()};
var t='Halo, saya '+g('nama')+' dari '+g('asal')+' ('+g('jenjang')+'). Saya ingin mendaftar magang bidang '+g('bidang')+'.';
if(g('telepon'))t+='\nNo. WhatsApp: '+g('telepon');t+='\n\n'+g('pesan');
window.open('https://wa.me/'+this.dataset.wa+'?text='+encodeURIComponent(t),'_blank','noopener')});