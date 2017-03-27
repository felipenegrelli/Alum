<?php
interface IDAO {
    public function acharPorId($id);
    public function listar();
    public function inserir($objeto);
    public function editar($id, $objeto);
    public function deletar($id);
}
?>