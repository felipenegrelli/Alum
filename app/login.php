<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Página para realizar login">
    <meta name="author" content="Cesar">
    <link rel="icon" href="imagens/favicon.ico">

    <title>Evavão Login</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/signin.css" rel="stylesheet">
    <script src="js/ie-emulation-modes-warning.js"></script>

  </head>

  <body>
    <div class="container">
      <form class="form-signin" method="POST" action="valida-login.php">
        <img src="images/logo.png"/>
        <label for="inputEmail" class="sr-only">Usuário</label>

        <input type="text" name="usuario" class="form-control" placeholder="Digitar o Usuário" required > <br/>

        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" name="senha" class="form-control" placeholder="Digite a Senha" required >

        <button class="btn btn-lg btn-danger btn-block" type="submit">Acessar</button>
      </form>
    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
