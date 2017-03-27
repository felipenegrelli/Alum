	$(window).load(function(){

		//transforma os selects em Select2
		$(".categorizeSelect").select2({
			width: '120px'
		});

		$(".cursoSelect").select2({
			placeholder: "Curso",
		  	allowClear: true
		});

		$(".cidadeSelect").select2({
			placeholder: "Cidade",
		  	allowClear: true
		});

		$(".situacaoSelect").select2({
			placeholder: "Situação de Matrícula",
		  	allowClear: true
		});

		$(".sexoSelect").select2({
			placeholder: "Sexo",
		  	allowClear: true,
		  	width: '80px'
		});

		// VARIAVEIS DE MAPA //
		
		//coordenada central do mapa na inicialização da página		
		var coordanadaInicial = [-20.1625356,-40.401568];

		//criação do objeto mapa do Leaflet
		var mymap = new L.map('mapid').setView(coordanadaInicial, 11);

		//camada para guardar todos os marcadores
		var markers = new L.FeatureGroup();

		//adiciona a camada no mapa
		mymap.addLayer(markers);

		//adiciona a camada base do mapa utilizando as imagens do MapBox
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmVsaXBlbmVncmVsbGkiLCJhIjoiY2owbWgyY2N0MDA4cjJxcHM1MHZsZWdpNyJ9.6mTEv7QMuAipbm49TKWVCQ', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);

		var heat = L.heatLayer([], {
				radius: 25,
				gradient: {0.1: 'blue', 0.5: 'lime', 0.8: 'red'},
				blur: 15,
				minOpacity: 0.2
			}).addTo(mymap);


		//inicializacao dos icones utlizados para exibir por sexo
		var blueIcon = L.icon({
		    iconUrl: 'icons/blue_marker.png',
		    iconSize:     [36, 36],// size of the icon
		    iconAnchor:   [17.5, 34]
		});

		var pinkIcon = L.icon({
		    iconUrl: 'icons/pink_marker.png',
		    iconSize:     [36, 36],// size of the icon
		    iconAnchor:   [17.5, 34]
		});

		//inicializacao dos icones utlizados para exibir por situação de matrícula
		var matriculadoIcon = L.icon({
		    iconUrl: 'icons/matriculado.png',
		    iconSize:     [26, 46], // size of the icon
		    iconAnchor:   [13, 44]
		});

		var trancadoIcon = L.icon({
		    iconUrl: 'icons/trancado.png',
		    iconSize:     [26, 46], // size of the icon
		    iconAnchor:   [13, 44]
		});

		var canceladoIcon = L.icon({
		    iconUrl: 'icons/cancelado.png',
		    iconSize:     [26, 46], // size of the icon
		    iconAnchor:   [13, 44]
		});

		var concluidoIcon = L.icon({
		    iconUrl: 'icons/concluido.png',
		    iconSize:     [26, 46], // size of the icon
		    iconAnchor:   [13, 44]
		});

		var concluinteIcon = L.icon({
		    iconUrl: 'icons/concluinte.png',
		    iconSize:     [26, 46], // size of the icon
		    iconAnchor:   [13, 44]
		});

		//pega os alunos cadastrados no banco
		//var listaAlunos = <?php echo $alunos; ?>;

		//seta a visualizacao inicial para todos os alunos sem filtro
		/*var listaAlunosFiltrada = listaAlunos;

		//carrega os marcadores quando a página for carregada
		carregaDadosMapa();

		//funcao que decide qual o categorizacao deve ser utilizada
		function carregaDadosMapa(){				
			var categorizado = $( "#categorizeSelect" ).val();

			limpaDadosMapa();			

			if(categorizado == "Sexo")
				carregaMarkersSexo();
			else if(categorizado == "Situacao")
				carregaMarkersSituacao();
			else
				carregaHeatmap();			
		}

		function limpaDadosMapa(){
			markers.clearLayers();
			heat._latlngs = [];
			heat.redraw();
		}
		
		//essa função carrega os marcadores no caso de opção de mostrar por sexo esteja ativada
		function carregaMarkersSexo(){
			if(listaAlunosFiltrada != null){
				for (var i = 0; i < listaAlunosFiltrada.length; i++) {
					var aluno = listaAlunosFiltrada[i];

					var popup = L.popup({offset: [0, -12]}).setContent("<b>Nome: </b>"+aluno.nome+"<br><b>Matrícula: </b>"+aluno.matricula.numeroMatricula);

					if(aluno.sexo == 'F')
						L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: pinkIcon}).addTo(markers).bindPopup(popup);
					else
						L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: blueIcon}).addTo(markers).bindPopup(popup);
				}
			}
		}

		//essa função carrega os marcadores no caso de opção de mostrar por situacao esteja ativada
		function carregaMarkersSituacao(){
			if(listaAlunosFiltrada != null){
				for (var i = 0; i < listaAlunosFiltrada.length; i++) {
					var aluno = listaAlunosFiltrada[i];

					var popup = L.popup({offset: [0, -25]}).setContent("<b>Nome: </b>"+aluno.nome+"<br><b>Matrícula: </b>"+aluno.matricula.numeroMatricula);


					switch (aluno.matricula.situacao) {
					    case 0:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: matriculadoIcon}).addTo(markers).bindPopup(popup);
					        break;
					    case 1:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: canceladoIcon}).addTo(markers).bindPopup(popup);
					        break;
					    case 2:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: trancadoIcon}).addTo(markers).bindPopup(popup);
					        break;
					    case 3:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: concluinteIcon}).addTo(markers).bindPopup(popup);
					        break;
					    case 4:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: concluinteIcon}).addTo(markers).bindPopup(popup);
					        break;
					    case 5:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: concluidoIcon}).addTo(markers).bindPopup(popup);
					        break;
					    case 6:
					        L.marker([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt], {icon: matriculadoIcon}).addTo(markers).bindPopup(popup);
					}
				}
			}
		}

		//essa função carrega os marcadores no caso de opção de mostrar por sexo esteja ativada
		function carregaHeatmap(){
			if(listaAlunosFiltrada != null){


				for (var i = 0; i < listaAlunosFiltrada.length; i++) {
					var aluno = listaAlunosFiltrada[i];

					heat.addLatLng([aluno.endereco.ponto.lat, aluno.endereco.ponto.lgt, 10]);
				}
			}
		}

		function makePoligon(){
			var polygon = L.polygon([
			    [51.509, -0.08],
			    [51.503, -0.06],
			    [51.51, -0.047]
			]).addTo(mymap);
		}

		function filtraResultados(){
			//reseta a lista
			listaAlunosFiltrada = listaAlunos;

			//pega os valores selecionados dos selects
			var filtroCurso = $( "#cursoSelect" ).val();
			var filtroSituacao = $( "#situacaoSelect" ).val();
			var filtroSexo = $( "#sexoSelect" ).val();
			var filtroCidade = $( "#cidadeSelect option:selected" ).text();

			//filtra por curso
			if(filtroCurso != null){
				var temp = listaAlunosFiltrada;
				listaAlunosFiltrada = temp.filter(function (aluno) {
				  	return aluno.matricula.curso.id == filtroCurso;
				});
			}

			//filtra por situacao de matricula
			if(filtroSituacao != null){
				temp = listaAlunosFiltrada;
				listaAlunosFiltrada = temp.filter(function (aluno) {
				  	return aluno.matricula.situacao == filtroSituacao;
				});
			}

			//filtra por sexo
			if(filtroSexo != null){
				temp = listaAlunosFiltrada;
				makePoligon();
				listaAlunosFiltrada = temp.filter(function (aluno) {
				  	return aluno.sexo == filtroSexo;
				});
			}

			//filtra por cidade
			if(filtroCidade != ""){
				temp = listaAlunosFiltrada;
				listaAlunosFiltrada = temp.filter(function (aluno) {
				  	return aluno.endereco.cidade == filtroCidade;
				});
			}

			carregaDadosMapa();
			recarregarTabela();
			
		}

		//eventos para ativar o filtro
		$('#categorizeSelect').change(function() {
		    carregaDadosMapa();
		});

		$('#cursoSelect').change(function() {
		    filtraResultados();
		});

		$('#situacaoSelect').change(function() {
		    filtraResultados();
		});

		$('#sexoSelect').change(function() {
		    filtraResultados();
		});

		$('#cidadeSelect').change(function() {
		    filtraResultados();
		});		


		$('#ativarMapa').on("click",function(){
			$('#panel-lista').hide();
			$('.page-control.fa.fa-list').css('color', '#bbb');

			$('#panel-graficos').hide();
			$('.page-control.fa.fa-bar-chart').css('color', '#bbb');

			$('#mapid').show()
			$('.page-control.fa.fa-map-marker').css('color', '#5A738E');
			destroiTabela();

		})

		$('#ativarLista').on("click",function(){
			$('#panel-graficos').hide();
			$('.page-control.fa.fa-bar-chart').css('color', '#bbb');

			$('#mapid').hide()
			$('.page-control.fa.fa-map-marker').css('color', '#bbb');

			$('#panel-lista').show();
			$('.page-control.fa.fa-list').css('color', '#5A738E');
			montaTabela();
		})

		$('#ativarGraficos').on("click",function(){
			$('#mapid').hide()
			$('.page-control.fa.fa-map-marker').css('color', '#bbb');

			$('#panel-lista').hide();
			$('.page-control.fa.fa-list').css('color', '#bbb');

			$('#panel-graficos').show();
			$('.page-control.fa.fa-bar-chart').css('color', '#5A738E');
			destroiTabela();
			montaGraficoPizza();
			//montaGraficoRenda();
		})

		function montaTabela(){
			if(typeof dataTable === 'undefined' || dataTable == null){
			    dataTable = $('#datatable').DataTable( {
			      language: {
			        url: "plugins/datatables.net/Portuguese-Brasil.json"
			      },
			      data : listaAlunosFiltrada,
			      columns :[
			        { data : "matricula.numeroMatricula" },
			        { data : "nome" },
			        { data : "matricula.curso.sigla" }
			      ]
			    });
			}
		}

		function recarregarTabela(){
			dataTable.clear();
			dataTable.rows.add(listaAlunosFiltrada);
			dataTable.draw();
		}

		function destroiTabela() {
			if(typeof dataTable != 'undefined' && dataTable != null){
				dataTable.destroy();
				dataTable = null;
			}
		}

		var theme = {
	          color: [
	              '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
	              '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
	          ],

	          title: {
	              itemGap: 8,
	              textStyle: {
	                  fontWeight: 'normal',
	                  color: '#408829'
	              }
	          },

	          dataRange: {
	              color: ['#1f610a', '#97b58d']
	          },

	          toolbox: {
	              color: ['#408829', '#408829', '#408829', '#408829']
	          },

	          tooltip: {
	              backgroundColor: 'rgba(0,0,0,0.5)',
	              axisPointer: {
	                  type: 'line',
	                  lineStyle: {
	                      color: '#408829',
	                      type: 'dashed'
	                  },
	                  crossStyle: {
	                      color: '#408829'
	                  },
	                  shadowStyle: {
	                      color: 'rgba(200,200,200,0.3)'
	                  }
	              }
	          },

	          dataZoom: {
	              dataBackgroundColor: '#eee',
	              fillerColor: 'rgba(64,136,41,0.2)',
	              handleColor: '#408829'
	          },
	          grid: {
	              borderWidth: 0
	          },

	          categoryAxis: {
	              axisLine: {
	                  lineStyle: {
	                      color: '#408829'
	                  }
	              },
	              splitLine: {
	                  lineStyle: {
	                      color: ['#eee']
	                  }
	              }
	          },

	          valueAxis: {
	              axisLine: {
	                  lineStyle: {
	                      color: '#408829'
	                  }
	              },
	              splitArea: {
	                  show: true,
	                  areaStyle: {
	                      color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
	                  }
	              },
	              splitLine: {
	                  lineStyle: {
	                      color: ['#eee']
	                  }
	              }
	          },
	          timeline: {
	              lineStyle: {
	                  color: '#408829'
	              },
	              controlStyle: {
	                  normal: {color: '#408829'},
	                  emphasis: {color: '#408829'}
	              }
	          },

	          k: {
	              itemStyle: {
	                  normal: {
	                      color: '#68a54a',
	                      color0: '#a9cba2',
	                      lineStyle: {
	                          width: 1,
	                          color: '#408829',
	                          color0: '#86b379'
	                      }
	                  }
	              }
	          },
	          map: {
	              itemStyle: {
	                  normal: {
	                      areaStyle: {
	                          color: '#ddd'
	                      },
	                      label: {
	                          textStyle: {
	                              color: '#c12e34'
	                          }
	                      }
	                  },
	                  emphasis: {
	                      areaStyle: {
	                          color: '#99d2dd'
	                      },
	                      label: {
	                          textStyle: {
	                              color: '#c12e34'
	                          }
	                      }
	                  }
	              }
	          },
	          force: {
	              itemStyle: {
	                  normal: {
	                      linkStyle: {
	                          strokeColor: '#408829'
	                      }
	                  }
	              }
	          },
	          chord: {
	              padding: 4,
	              itemStyle: {
	                  normal: {
	                      lineStyle: {
	                          width: 1,
	                          color: 'rgba(128, 128, 128, 0.5)'
	                      },
	                      chordStyle: {
	                          lineStyle: {
	                              width: 1,
	                              color: 'rgba(128, 128, 128, 0.5)'
	                          }
	                      }
	                  },
	                  emphasis: {
	                      lineStyle: {
	                          width: 1,
	                          color: 'rgba(128, 128, 128, 0.5)'
	                      },
	                      chordStyle: {
	                          lineStyle: {
	                              width: 1,
	                              color: 'rgba(128, 128, 128, 0.5)'
	                          }
	                      }
	                  }
	              }
	          },
	          gauge: {
	              startAngle: 225,
	              endAngle: -45,
	              axisLine: {
	                  show: true,
	                  lineStyle: {
	                      color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
	                      width: 8
	                  }
	              },
	              axisTick: {
	                  splitNumber: 10,
	                  length: 12,
	                  lineStyle: {
	                      color: 'auto'
	                  }
	              },
	              axisLabel: {
	                  textStyle: {
	                      color: 'auto'
	                  }
	              },
	              splitLine: {
	                  length: 18,
	                  lineStyle: {
	                      color: 'auto'
	                  }
	              },
	              pointer: {
	                  length: '90%',
	                  color: 'auto'
	              },
	              title: {
	                  textStyle: {
	                      color: '#333'
	                  }
	              },
	              detail: {
	                  textStyle: {
	                      color: 'auto'
	                  }
	              }
	          },
	          textStyle: {
	              fontFamily: 'Arial, Verdana, sans-serif'
	          }
	      	};

		function montaGraficoPizza(){
			var quantMasc = 0, quantFem = 0;

			

	      	var echartPie = echarts.init(document.getElementById('graficoSexo'), theme);

	      	for (var i = 0; i < listaAlunosFiltrada.length; i++) {
				if(listaAlunosFiltrada[i].sexo == 'M')
					quantMasc++;
				else
					quantFem++;
			}

		    echartPie.setOption({
		    	title : {
			        text: 'Alunos por Sexo',
			        x:'center'
			    },
		        tooltip: {
		          trigger: 'item',
		          formatter: "{a} <br/>{b} : {c} ({d}%)"
		        },
		        legend: {
		          x: 'center',
		          y: 'bottom',
		          data: ['Masculino', 'Feminino']
		        },
		        toolbox: {
		          show: true,
		          feature: {
		            magicType: {
		              show: true,
		              type: ['pie', 'funnel'],
		              option: {
		                funnel: {
		                  x: '25%',
		                  width: '50%',
		                  funnelAlign: 'left',
		                  max: 1548
		                }
		              }
		            },
		            restore: {
		              show: true,
		              title: "Restore"
		            },
		            saveAsImage: {
		              show: true,
		              title: "Save Image"
		            }
		          }
		        },
		        calculable: true,
		        series: [{
					name: 'Alunos',
					type: 'pie',
					radius: '65%',
					center: ['50%', '48%'],
					itemStyle : {
						normal : {
						    label : {
						        position : 'inner',
						        formatter : function (params) {                         
		                          return (params.percent - 0).toFixed(0) + '%'
		                        }
							},
						    labelLine : {
						        show : false
						    }
						}
					},
					data: [{
					value: quantMasc,
					name: 'Masculino'
					}, {
					value: quantFem,
					name: 'Feminino'
					}]
					}]
		      });
		}

		function montaGraficoRenda(){

			var echartBar = echarts.init(document.getElementById('graficoRenda'), theme);

			echartBar.setOption({
				title: {
				  text: 'Alunos por Renda',
				  subtext: 'Graph Sub-text'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  data: ['sales', 'purchases']
				},
				toolbox: {
				  show: false
				},
				calculable: false,
				xAxis: [{
				  type: 'category',
				  data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
				}],
				yAxis: [{
				  type: 'value'
				}],
				series: [{
				  name: 'sales',
				  type: 'bar',
				  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				  markPoint: {
				    data: [{
				      type: 'max',
				      name: '???'
				    }, {
				      type: 'min',
				      name: '???'
				    }]
				  },
				  markLine: {
				    data: [{
				      type: 'average',
				      name: '???'
				    }]
				  }
				}, {
				  name: 'purchases',
				  type: 'bar',
				  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				  markPoint: {
				    data: [{
				      name: 'sales',
				      value: 182.2,
				      xAxis: 7,
				      yAxis: 183,
				    }, {
				      name: 'purchases',
				      value: 2.3,
				      xAxis: 11,
				      yAxis: 3
				    }]
				  },
				  markLine: {
				    data: [{
				      type: 'average',
				      name: '???'
				    }]
				  }
				}]
			});
		}*/



	});