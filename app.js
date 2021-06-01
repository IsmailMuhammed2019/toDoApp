document.addEventListener('DOMContentLoaded', () => {
//create const
  const list = document.querySelector('.inner-wrapper ul');
  const forms = document.forms;
  
  //delete task
  list.addEventListener('click', (e)=>{
      if(e.target.className == 'deleted'){
          const li = e.target.parentElement;
          li.parentNode.removeChild(li);
      }
  });


  //add movie
  const addForm = forms['myform'];
  addForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  //creating elements
const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const title = document.createElement('span');
const deleted = document.createElement('span');
  //add text content
title.textContent = value;
deleted.textContent = 'Delete'
  //add classes
    title.classList.add('title');
    deleted.classList.add('deleted');
  //append to Dom
  li.appendChild(title);
  li.appendChild(deleted);
  list.appendChild(li);

  addForm.reset();
});



})