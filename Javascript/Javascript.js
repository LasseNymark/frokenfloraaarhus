       
function totalIt()
{
   var input = document.getElementsByName("product");
   var total = 0;
   for (var i = 0; i < input.length; i++)
   {
      if (input[i].checked)
      {
         total += parseFloat(input[i].value);
      }
   }
   document.getElementById("total").value = "kr " + total.toFixed(2);
}