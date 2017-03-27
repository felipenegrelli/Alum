var dataTable;

  $("#limpar").click(function(event) {
    $('#novo-usuario')[0].reset()
  });

  function montaTabela(){
    dataTable = $('#datatable').DataTable( {
      "language": {
        "url": "plugins/datatables.net/Portuguese-Brasil.json"
      },
      "processing": true,
      "serverSide": true,
      "ajax":{
          url :'Classes/Control/UsuarioController.php',
          type: "post",
          data: {acao: 'listar'}
      },
      "columns" :[
        {"data":"id_usuario"},
        {"data":"nome"},
        {"data":"sexo"},
        {"data":"data_nascimento"},
        {"data":"login"}
      ]
    });
  }

  function abreModal(){
    $('#cad-modal').modal('toggle');
  }

  function limpaFormulario(){
    $("#nome").val("");
    $("#data_nascimento").val("");
    $("#sexo").val();
    $("#username").val("");
    $("#senha").val("");
  }

  $('#inserir').click( function () {
    $("#cad_title").text("Novo Usuário");
    limpaFormulario();

    abreModal();
  });

  $('#editar').click( function () {
    var dados = dataTable.row('.selected').data();
    if(dados){
      dataTable.$('tr.selected').removeClass('selected');
      $("#id_usuario").val(dados.id_usuario);
      $("#nome").val(dados.nome);
      $("#data_nascimento").val(dados.data_nascimento);
      $("#username").val(dados.login);
      $("#senha").val(dados.senha);

      $("#cad_title").text("Editar Usuário");

      abreModal();
    }

  });

  $('#excluir').click( function () {
      var user = dataTable.row('.selected').data();
      if(user){
        dataTable.$('tr.selected').removeClass('selected');
        $("#texto-confirmacao").text('Deseja realmente excluir usuário '+user.login+'?');
        $('#modal_confirmacao').modal('toggle');
        $('#excluir_modal').click( function () {
          $.post('classes/Control/UsuarioController.php', {acao: 'deletar', id_usuario: user.id_usuario}, function(data, textStatus, xhr){
            if(textStatus='sucess')
              $('#datatable').DataTable().ajax.reload();
            $('#modal_confirmacao').modal('toggle');
          });
        });       
      }
  });

  $(document).ready(function() {

    montaTabela();

    $('#datatable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            dataTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $("#data_nascimento").datepicker({
      dateFormat: 'dd/mm/yy',
      dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
      dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
      dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
      monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
      nextText: 'Próximo',
      prevText: 'Anterior'
    });
  });

  jQuery(document).ready(function() {
      jQuery('#novo-usuario').submit(function(){

        var nome = $("#nome").val();
        var data_nascimento = $("#data_nascimento").val();
        var sexo = $("#sexo").val();
        var username = $("#username").val();
        var senha = $("#senha").val();
        var id_usuario = $("#id_usuario").val();

        //se o código está preenchido, siginifica que temos que editar o usuario.
        if(id_usuario != "") {
            jQuery.ajax({
            type: "POST",
            url: "classes/Control/UsuarioController.php",
            data: {acao: 'editar', id_usuario:id_usuario, nome:nome, data_nascimento:data_nascimento, sexo:sexo, username:username, senha:senha},
            success: function( data ){
              if(data=="ok"){
                $('#datatable').DataTable().ajax.reload();
                abreModal();
              }
            }
          });
        }
        //se o código não está preenchido, siginifica que temos que cadastrar o usuario.
        else {
          jQuery.ajax({
            type: "POST",
            url: "classes/Control/UsuarioController.php",
            data: {acao: 'inserir', nome:nome, data_nascimento:data_nascimento, sexo:sexo, username:username, senha:senha},
            success: function( data ){
              if(data=="ok"){
                $('#datatable').DataTable().ajax.reload();
                abreModal();

              }
            }
          });
        }

      });
  });
