document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.inner-wrapper ul');
  const forms = document.forms;
  
  list.addEventListener('click', (e)=>{
      if(e.target.className == 'delete'){
          const li = e.target.parentElement;
          li.parentNode.removeChild(li);
      }
  });
})