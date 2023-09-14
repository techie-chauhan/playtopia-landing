<?php
if (isset($_POST["submit"]))
{
	extract($_POST);

$from="hello@playtopia.in";
$to = "hello@playtopia.in";

$subjects = "Enquiry Form by $name";
$msg = "<html>
<head>
<title>Enquiry Form by $name</title>
</head>

<body style=\"background-color:#e5e5e5;\">

<div>
<p>Playtopia.in</p>
<h3>Hello Admin</h3>
</div>

<table cellspacing=\"4\" cellpadding=\"4\" border=\"1\" align=\"center\">
  
  <tr>
  <td align=\"center\">Name</td>
  <td align=\"center\"> $name</td>
   </tr>

   <tr>
   <td align=\"center\">Gaurdian</td>
   <td align=\"center\">$parentName</td>
   </tr>

   <tr>
   <td align=\"center\">Email</td>
   <td align=\"center\">$email</td>
   </tr>

   <tr>
   <td align=\"center\">Phone</td> 
   <td align=\"center\">$phone</td>
   </tr>
   
  <tr>
  <td align=\"center\">Age</td>
  <td align=\"center\">$age</td>
  </tr>

  <tr>
  <td align=\"center\">DOB</td>
  <td align=\"center\">$date</td>
  </tr>
  
</table>
</body>
</html>";

// Make sure to escape quotes

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From:".$from. "\r\n";

if(mail($to, $subjects, $msg, $headers))
{
	?>
    <script>
	// alert("Thanks for Submitting... Get will be contact you soon.");
	window.location.href="/thanks" ;
	</script>
<?php

}
else
echo "not sent";
}
?>