'use strict';

const area = document.querySelectorAll('.js_area');
// console.log(area);

const tooltip = document.querySelectorAll('.js_form_tooltip');
// console.log(tooltip);

area.forEach((area, index) =>{
  area.addEventListener('focus', ()=>{
    tooltip.forEach((tooltip, index2)=>{
      if(index === index2){
        tooltip.style.display = 'inline-block';
      } else {
        tooltip.style.display = 'none';
      }
      // console.log(tooltip, index);
    });
  });
  area.addEventListener('blur', ()=>{
    tooltip.forEach((tooltip, index2)=>{
      tooltip.style.display = 'none';
    });
  });
});