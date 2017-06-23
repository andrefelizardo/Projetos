angular.module('servicoFacil.rotas', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $stateProvider

            .state('app.home', {
                url: '/home',
                templateUrl: 'home.html'
            })

            .state('app.cadastro-cliente', {
                url: '/cadastro-cliente',
                templateUrl: 'cliente/cadastro_clientes/cadastro_clientes.html'
            })

            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'templates/header.html',
                        controller: 'headerCtrl',
                    },
                    'conteudo': {
                        template: '<ui-view/>'
                    }
                },
                resolve: {
                    dps: function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['scripts/controllers/headerCtrl.js']
                            }
                        ]);
                    }
                }

            })

        $urlRouterProvider.otherwise('//home');
    });