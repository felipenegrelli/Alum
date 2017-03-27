<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Alum - <?php echo $page_title; ?></title>

    <!-- Bootstrap -->
    <link href="plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="plugins/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- bootstrap-progressbar -->
    <link href="plugins/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="css/custom.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

    <!-- Select2 -->
    <link href="plugins/select2/dist/css/select2.min.css" rel="stylesheet" />

    <!-- Select -->
    <link href="plugins/datatables.net-bs/css/dataTables.bootstrap.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.bootstrap.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.bootstrap.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.bootstrap4.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.bootstrap4.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.dataTables.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.dataTables.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.foundation.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.foundation.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.jqueryui.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.jqueryui.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.semanticui.css" rel="stylesheet">
    <link href="plugins/datatables.net-bs/css/select.semanticui.min.css" rel="stylesheet">

    <!-- Datatables -->
    <link href="plugins/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
    <link href="plugins/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/select/1.2.0/css/select.dataTables.min.css" rel="stylesheet">

    <!-- Datatables -->
    <link href="plugins/pivottable/c3.min.css" rel="stylesheet">
    <link href="plugins/pivottable/pivot.css" rel="stylesheet">

    <!-- DatePicker -->
    <!--<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->

    <script src="plugins/jquery/dist/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.php" class="site_title"><i class="fa fa-graduation-cap"></i> <span>Alum</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile">
              <div class="profile_pic">
                <img src="images/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Bem vinda,</span>
                <h2>Renata de Oliveira</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />
            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                  <li><a href="index.php"><i class="fa fa-home"></i>Home</a></li>
                  <li><a href="dados-dinamicos.php"><i class="fa fa-table"></i>Dados Dinâmicos</a></li>
                  <li><a href="importar-dados.php"><i class="fa fa-upload"></i>Importar Dados</a></li>
                  <li><a href="cursos.php"><i class="fa fa-pencil-square"></i>Cursos</a></li>
                  <li><a href="usuarios.php"><i class="fa fa-user"></i>Usuarios</a></li>
                </ul>
              </div>
            </div>
            <!-- /sidebar menu -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav class="" role="navigation">
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="images/img.jpg" alt="">Renata de Oliveria
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;">Perfil</a></li>
                    <li><a href="javascript:;">Configurações</a></li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="logout.php"><i class="fa fa-sign-out pull-right"></i>Fazer logoff</a></li>
                  </ul>
                </li>

              </ul>
            </nav>
          </div>
        </div>