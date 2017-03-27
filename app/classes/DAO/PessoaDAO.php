<?php
include_once 'DB.php';
include_once 'IDAO.php';

class PessoaDAO extends DB implements IDAO {

	public function findById($id) {
	 	$sql = "SELECT * FROM pessoas WHERE id_pessoa = :id";
		$stmt = DB::prepare($sql);
		$stmt->bindParam(":id",$id, PDO::PARAM_INT);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function getLastId(){
		$sql = "SELECT id_pessoa FROM pessoas ORDER BY id_pessoa DESC LIMIT 1";
		$stmt = DB::prepare($sql);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}
	 
	public function listAll(){

	}

	public function insert($pessoa) {
		$con = $this->getInstance();

	    $sql = "INSERT INTO pessoas (data_nascimento, sexo, nome) 
				VALUES 	(:data_nascimento, :sexo, :nome)";

		$stmt = $this->prepare($sql);
		if(is_object($pessoa)){
			$data_nascimento = $pessoa->getDataNascimento();
			$sexo = $pessoa->getSexo();
			$nome = $pessoa->getNome();
		}else{
			$data_nascimento = $pessoa['data_nascimento'];
			$sexo = $pessoa['sexo'];
			$nome = $pessoa['nome'];
		}


		$stmt->bindParam(":data_nascimento",$data_nascimento);
		$stmt->bindParam(":sexo",$sexo);
		$stmt->bindParam(":nome",$nome);
		$stmt->execute();
		$id = $this->getLastId();
		return $id['id_pessoa'];
	}

	public function update($pessoa, $idPessoa) {
		$con = $this->getInstance();

	    $sql = "INSERT INTO pessoas (data_nascimento, sexo, nome) 
				VALUES 	(:data_nascimento, :sexo, :nome)";

		$stmt = $this->prepare($sql);
		if(is_object($pessoa)){
			$data_nascimento = $pessoa->getDataNascimento();
			$sexo = $pessoa->getSexo();
			$nome = $pessoa->getNome();
		}else{
			$data_nascimento = $pessoa['data_nascimento'];
			$sexo = $pessoa['sexo'];
			$nome = $pessoa['nome'];
		}


		$stmt->bindParam(":data_nascimento",$data_nascimento);
		$stmt->bindParam(":sexo",$sexo);
		$stmt->bindParam(":nome",$nome);
		$stmt->execute();
		$id = $this->getLastId();
		return $id['id_pessoa'];
	}

	public function delete($id) {
		$sql = "DELETE FROM pessoas WHERE id_pessoa = :id";
		$stmt = DB::prepare($sql);
		$stmt->bindParam(":id",$id, PDO::PARAM_INT);
		return $stmt->execute();
	}

}
?>