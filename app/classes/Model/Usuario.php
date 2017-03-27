<?php
include_once 'Classes/Model/Pessoa.php';
class Usuario extends Pessoa implements JsonSerializable{

  private $login;
  private $senha;
  private $ativo;

  public function __construct($nome, $dataNascimento, $sexo, $login, $senha){
    parent::__construct($nome, $dataNascimento, $sexo);
    $this->login = $login;
    $this->senha = $senha;
  }

  public function getLogin()
  {
    return $this->login;
  }

  public function setLogin($login)
  {
    $this->login = $login;
  }

  public function getSenha()
  {
    return $this->senha;
  }

  public function setSenha($senha)
  {
    $this->senha = $senha;
  }

  public function jsonSerialize() {

      return [
        'login' => $this->login,
        'senha' => $this->senha
      ];
  }


}
?>