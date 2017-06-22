/*var xhr = null;

function init()
{
    xhr = new XMLHttpRequest();
}

init();

xhr.onreadystatechange = function ()
{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
       console.log(xhr.responseText);
    }
}

function myCallBack(response)
{
   xhr.open('post', '/moncompte/test', true);
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.send();
}*/

//document.getElementById('getAddress').addEventListener("click", myCallBack);

$(document).ready(function(){
  $('#getAdress').click(function(){
    $.post("/moncompte/test", function(data){
      $('#result').htlm(data.email);

      $.each(data.addresses, function( index, value ) {
        console.log(value);
        $('#result').htlm('#result');
      });

      });
     });
  });
