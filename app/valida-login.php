<?php
	session_start();
	include_once 'Classes/Control/UsuarioController.php';

	$login = $_POST['usuario'];
	$senha = $_POST['senha'];

	$usuarioController = new UsuarioController();
	$usuario = $usuarioController->validarLogin($login, ($senha));

	if($usuario){
		$_SESSION["id_usuario"] = $usuario['id_usuario'];
		$_SESSION["nome_usuario"] = $usuario['nome'];
		$_SESSION["login"] = $usuario['login'];
		$_SESSION['sexo'] = $usuario['sexo'];
		
		header("location:index.php");	    
	}else{

		header("location:login.php?error=1");
	}	

?>