<?php 

error_reporting(E_ALL ^ E_NOTICE);
//dirname('C:/xampp/htdocs/Evasao/');
//include_once 'Classes/Control/AlunoController.php';
//include_once 'Classes/Control/CursoController.php';

session_start();
if(!isset($_SESSION["id_usuario"])){
  header("location:login.php");
}

//$alunoController = new AlunoController();
//$cursoController = new CursoController();

//$cidades = $alunoController->getCidades();

//$alunos = $alunoController->getAlunosDB();
//$cursos = $cursoController->listaCursos();

$page_title = "Home";
$nome_arquivo_js = basename(__FILE__, '.php'); 
include_once 'header.php';

?>

		<!-- page content -->
	<div class="right_col" role="main">
		<div class="">
            <div class="filters-bar">

				<div class="categorize">
					<h4 class="categorize-title">Categorizar:</h4>
					<div class="categorize-select">
						<select id="categorizeSelect" class="categorizeSelect">
							<option selected value="Sexo">Sexo</option>
							<option value="Situacao">Situação Matricula</option>
							<option value="Heatmap">Mapa de Calor</option>
						</select>
					</div>
				</div>

				<div class="filters">
					<h4 class="filters-title">Filtros:</h4>

					<div class="filter-select">
						<select id="cursoSelect" class="cursoSelect">
							<option disabled selected></option>
							<?php 
							foreach ($cursos as $curso) {
								echo '<option value='.$curso->getId().'>'.$curso->getNome().'</option>';
							}
							?>						

						</select>
					</div>					

					<div class="filter-select">
						<select id="situacaoSelect" class="situacaoSelect">
							<option disabled selected></option>
							<option value=0 >Matriculado</option>
							<option value=2 >Trancado</option>
							<option value=1 >Cancelado</option>
							<option value=3 >Concluinte</option>
							<option value=4 >Concluente</option>
							<option value=5 >Concluido</option>
						</select>
					</div>

					<div class="filter-select">
						<select id="sexoSelect" class="sexoSelect">
							<option disabled selected></option>
							<option value="M" >Masculino</option>
							<option value="F" >Feminino</option>
						</select>
					</div>
					<?php /*
					<div class="filter-select">
						<select id="cidadeSelect" class="cidadeSelect">
							<option disabled selected></option>
							<?php 
							foreach ($cidades as $cidade) {
								echo '<option value='.$cidade['gid'].'>'.$cidade['nome'].'</option>';
							}
							?>						
						</select>
					</div>
					*/?>

				</div>

				<div class="switch-page-controls">
					<a id="ativarMapa" href="javascript:void(0)"><i class="page-control fa fa-map-marker"></i></a>
					<a id="ativarLista" href="javascript:void(0)"><i class="page-control fa fa-list"></i></a>
					<a id="ativarGraficos" href="javascript:void(0)"><i class="page-control fa fa-bar-chart"></i></a>
				</div>


            </div>
          </div>

          <div id="mapid"></div>
          <div id="panel-lista">
          	
          	<div class="painelTabela">
              <div class="col-md-12">
                <div class="x_panel">

                  <div class="x_content">
                    <div class="tcol-md-12">
	                    <table id="datatable" class="table table-striped table-bordered">
	                      <thead>
	                        <tr>
	                          <th class="col-sm-1 text-center">Matricula</th>
	                          <th class="col-sm-3 text-center">Nome</th>
	                          <th class="col-sm-1 text-center">Curso</th>
	                        </tr>
	                      </thead>
	                    </table>
                  	</div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <div id="panel-graficos">

          	<div class="row">

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Sexo</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div id="graficoSexo" style="height:300px;"></div>
                  </div>
                </div>
              </div>
              <?php /*
              <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Renda</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div id="graficoRenda" style="height:300px;"></div>
                  </div>
                </div>
              </div>
				*/?>

          </div>
        </div>
        <!-- /page content -->

	<script>

	</script>

<?php 
include_once 'footer.php';
?>