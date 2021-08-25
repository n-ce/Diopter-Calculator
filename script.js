document.body.oninput = function()
{
  var y = document.getElementById('y').value;
  var x = document.getElementById('x').value;
  document.querySelector('b').innerHTML=(y/(1+(y*(x/1000)))).toFixed(2);
      }