# projects related to DOM

## Project 1
```javascript
const buttons=document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button)
{
  console.log(button);
  button.addEventListener('click',function(e){
  console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })
});
```
## project 2
```javascript
const form = document.querySelector('form')
// this use case will give you empty value
//const height = parseInt(document.querySelector('#height').value
form.addEventListener('submit',function(e)
{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')
   if(height === '' || height < 0 || isNaN(height))
   {
          results.innerHTML = `please enter a valid height ${height}`;
   }
  else if(weight === '' || weight < 0 || isNaN(weight))
   {
          results.innerHTML = `please enter a valid weight ${weight}`;
   }
   else {
    const bmi= (weight/((height*height)/1000)).toFixed(2)
   //show the result
    // results.innerHTML = `<span>${bmi}</span>`
   
    if(bmi  < 18.6 ) {
       results.innerHTML = `<span> ${bmi} ,BMI value is less </span>`
    }
      else if( bmi === 18.6 && bmi === 24.9) {
         
        results.innerHTML = `<span> ${bmi},Normal Range </span>`
      }
      else if( bmi > 24.9) {
         
        results.innerHTML = `<span>${bmi}, Overweight </span>`
      }}
  });
```
## project 3 clock
```javascript


const clock =document.getElementById('clock')
setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML =  date.toLocaleTimeString();
},1000)
```


