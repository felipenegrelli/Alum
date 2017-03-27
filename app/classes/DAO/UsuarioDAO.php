<?php
include_once 'DB.php';
include_once 'IDAO.php';

class UsuarioDAO extends DB implements IDAO {

	public function acharPorId($id) {
	 	$sql = "SELECT * FROM usuarios WHERE id_usuario = :id";
		$stmt = DB::prepare($sql);
		$stmt->bindParam(":id",$id, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch();
	}

	public function listar() {

		$sql = "SELECT *
				FROM usuarios";

		$stmt = DB::prepare($sql);
		$stmt->execute();
		
		$totaldata = $totalfiltered = $stmt->rowCount();


		$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_data = array(
		                "draw"            => intval( $_REQUEST['draw'] ),
		                "recordsTotal"    => intval( $totaldata ),
		                "recordsFiltered" => intval( $totalfiltered ),
		                "data"            => $data);

		echo json_encode($json_data);
	}

	public function inserir($usuario) {
		$sql = "INSERT INTO usuarios (data_nascimento, sexo, nome, login, senha) 
					VALUES (:data_nascimento, :sexo, :nome, :login, :senha)";

		$stmt = $this->prepare($sql);

		$data_nascimento = $usuario->getDataNascimento();
		$sexo = $usuario->getSexo();
		$nome = $usuario->getNome();
    	$login = $usuario->getLogin();
	    $senha = $usuario->getSenha();

		$stmt->bindParam(":data_nascimento", $data_nascimento);
		$stmt->bindParam(":sexo", $sexo);
		$stmt->bindParam(":nome", $nome);
	    $stmt->bindParam(":login", $login);
	    $stmt->bindParam(":senha", $senha);
	    $stmt->execute();
	}

	public function editar($id_usuario, $usuario) {
		$sql = "UPDATE usuarios 
				SET nome = :nome, 
				sexo = :sexo, 
				data_nascimento = :dataNascimento, 
				login = :login, 
				senha = :senha 
				WHERE id_usuario = :id";

		$stmt = DB::prepare($sql);
		$stmt->bindParam(":nome", $usuario->getNome());
		$stmt->bindParam(":sexo", $usuario->getSexo());
		$stmt->bindParam(":dataNascimento", $usuario->getDataNascimento());
		$stmt->bindParam(":login", $usuario->getLogin());
		$stmt->bindParam(":senha", $usuario->getSenha());
		$stmt->bindParam(":id", $id_usuario);

		return $stmt->execute();
	}

	public function deletar($id_usuario) {
		$sql = "DELETE FROM usuarios 
				WHERE id_usuario = :id";
		$stmt = DB::prepare($sql);
		$stmt->bindParam(":id",$id_usuario, PDO::PARAM_INT);
		return $stmt->execute();
	}

	public function validarLogin($login, $senha){
	    $sql = "SELECT * 
	    		FROM usuarios 
	    		WHERE login = :login 
	    		AND senha = :senha";
	    $stmt = DB::prepare($sql);
	    $stmt->bindParam(":login",$login);
	    $stmt->bindParam(":senha",$senha);
	    $stmt->execute();

	    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
	    return $usuario;
  	}
}
?>