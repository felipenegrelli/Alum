<?php

/*
Testa se estamos pasta raiz (vendo se a pasta filha "Classes" existe), 
se não estirvermos, voltamos para pasta pai até acharmos.
*/
while (! file_exists('Classes') ){
    chdir('..');
}


include_once 'Classes/Model/Usuario.php';
include_once 'Classes/DAO/UsuarioDAO.php';

if(isset($_REQUEST['acao'])){
	extract($_REQUEST);
	$resultado = true;
	$usuarioController = new UsuarioController();
	switch ($acao){
		case 'listar':
			$resultado = $usuarioController->listarUsuarios();
			break;	
		case 'deletar':
			$resultado = $usuarioController->deletarUsuario($id_usuario);
			break;
		case 'inserir':
			$usuario = new Usuario($nome, $data_nascimento, $sexo, $username, $senha);
			$resultado = $usuarioController->inserirUsuario($usuario);
			break;
		case 'editar':
			$usuario = new Usuario($nome, $data_nascimento, $sexo, $username, $senha);
			$resultado = $usuarioController->editarUsuario($id_usuario, $usuario);
			break;
	}
	echo $resultado;
}

class UsuarioController{

	public function listarUsuarios(){
		$usuarioDAO = new UsuarioDAO();
		$lista = $usuarioDAO->listar();
		return $lista;
	}

	public function inserirUsuario($usuario){
		$usuarioDAO = new UsuarioDAO();
		$resultado = $usuarioDAO->inserir($usuario);
		return $resultado;
	}

	public function editarUsuario($id_usuario, $usuario){
		$usuarioDAO = new UsuarioDAO();
		$resultado = $usuarioDAO->editar($id_usuario, $usuario);
		return $resultado;
	}	

	public function deletarUsuario($id_usuario){
		$usuarioDAO = new UsuarioDAO();
		$resultado = $usuarioDAO->deletar($id_usuario);
		return $resultado;
	}

	public function validarLogin($login, $senha){
		$usuarioDAO = new UsuarioDAO();
		$resultado = $usuarioDAO->validarLogin($login, $senha);
		return $resultado;
	}
}
?>