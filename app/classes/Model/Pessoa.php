<?php
abstract class Pessoa implements JsonSerializable{
    protected $nome;
    protected $dataNascimento;
    protected $sexo;    

    public function __construct($nome, $dataNascimento, $sexo){

      $this->nome = $nome;
      $this->dataNascimento = $dataNascimento;
      $this->sexo = $sexo;
    }

    public function getNome(){
      return $this->nome;
    }

    public function setNome($nome){
      $this->nome = $nome;
    }

    public function setDataNascimento($dataNascimento){
      $this->dataNascimento = $dataNascimento;
    }

    public function getDataNascimento(){
      return $this->dataNascimento;
    }

    public function getSexo(){
      return $this->sexo;
    }

    public function setSexo($sexo){
      $this->sexo = $sexo;
    }

    public function jsonSerialize() {
        return [
          'nome' => $this->nome,
          'data_nascimento' => $this->dataNascimento,
          'sexo' => $this->sexo
        ];
    }
}
?>
