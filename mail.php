<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$your_name = htmlspecialchars($_POST["your_name"]);
$message = htmlspecialchars($_POST["message"]);
/* Устанавливаем e-mail адресата */
$myemail = "questroomzp1989@gmail.com, fb@cedra.team";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$your_name = check_input($_POST["your_name"], "Введите ваше имя!");
$message = check_input($_POST["message"], "Вы забыли указать телефон!");

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Заявка с сайта quest-room.zp.ua
Имя отправителя: $your_name 
Телефон: $message ";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $your_name <$email> \r\n Reply-To: $email \r\n"; 
mail($myemail, $message_to_myemail, $from);
?>
<html>
<head><meta charset="utf-8"> <!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-107195336-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-107195336-1');
</script>
   <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">     </head>
<body style="background: url(../images/bg.jpg);background-size: cover;background-repeat: no-repeat;color:#fff;">
<!-- Google Code for &#1047;&#1072;&#1103;&#1074;&#1082;&#1072; Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 832825981;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "ulHPCLXhuXUQ_dSPjQM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/832825981/?label=ulHPCLXhuXUQ_dSPjQM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

<h1 style="text-align: center;">Ваше сообщение успешно отправлено</h1>
<h2 style="text-align: center;"><a href="index.html">На Главную</a></h2>
   <script type="text/javascript" src ="js/bootstrap.min.js"></script>    
</body>
</html>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<head><meta charset="utf-8">   <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">     </head>
<body style="background: url(../images/bg.jpg);background-size: cover;background-repeat: no-repeat;color:#fff;">
<h1 style="text-align: center;">При заполнении допущены ошибки попробуйте еще раз.</h1>
<h2 style="text-align: center;"><a href="index.html">На Главную</a></h2>
<?php echo $myError; ?>
  <script type="text/javascript" src ="js/bootstrap.min.js"></script>    
</body>
</html>
<?php
exit();
}
?>