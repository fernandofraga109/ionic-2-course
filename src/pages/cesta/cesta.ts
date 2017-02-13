import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProdutosClienteService } from '../../providers/produtos-cliente-service';


@Component( {
    selector: 'page-cesta',
    templateUrl: 'cesta.html'
})
export class CestaPage {

    produtos: any[];

    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        public produtosClienteService: ProdutosClienteService,
        public alertCtrl: AlertController ) {
        this.produtos = [];
    }




    carregaProdutos() {
        console.log( 'CARREGANDO PRODUTOS' );
        this.produtosClienteService.getAll().then(( res ) => {
            if ( res != null ) {
                this.produtos = [];
                for ( let i = 0; i < res.length; i++ ) {
                    this.produtos.push( JSON.parse( res[i].value ) );
                }
                console.log( 'CARREGOU!' );
            } else {
                console.log( res, "NENHUM PRODUTO" );
            }

        }).catch(( err ) => {
            console.log( err );
        });

    }

    carregaProdutosCancelar() {
        this.produtos = [];
    }

    ionViewWillEnter() {
        this.carregaProdutos();
        console.log( 'ionViewWillEnter CestaPage' );
    }





    getQtdProdutos() {
        return this.produtos.length;
    }

    getTotalValorItens() {
        let total: number = 0.0;
        for ( let i = 0; i < this.produtos.length; i++ ) {
            total = total + this.produtos[i].pf_valor * this.produtos[i].quantidade;
        }
        return total
    }

    decrementaQtd( produto ): void {
        if ( produto.quantidade == 1 ) {
            let confirm = this.alertCtrl.create( {
                title: 'Confirmacao',
                message: 'Confirma exclusao do produto ' + produto.prod_nome + ' ?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: () => {
                            console.log( 'Disagree clicked' );
                        }
                    },
                    {
                        text: 'Confirmar',
                        handler: () => {
                            this.produtosClienteService.remove( produto.prod_id ).then(( res ) => {
                                if ( res != null ) {
                                    this.produtos = this.produtos.filter(prod => prod.prod_id !== produto.prod_id);
                                    this.carregaProdutos();

                                } else {
                                    console.log( res );
                                }

                            }).catch(( err ) => {
                                console.log( err );
                            });
                        }
                    }
                ]
            });
            confirm.present();


        } else {

            produto.quantidade = produto.quantidade - 1;
            this.produtosClienteService.update( produto.prod_id, JSON.stringify( produto ) ).then(( res ) => {
                if ( res != null ) {
                    this.carregaProdutos();

                } else {
                    console.log( res );
                }

            }).catch(( err ) => {
                console.log( err );
            });
        }
    }

    cancelar(): void {

        let confirm = this.alertCtrl.create( {
            title: 'Confirmacao',
            message: 'Confirma o cancelamento esvaziar a cesta de compras? ',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        console.log( 'Disagree clicked' );
                    }
                },
                {
                    text: 'Confirmar',
                    handler: () => {
                        this.produtosClienteService.removeAll();
                        this.carregaProdutosCancelar();
                    }
                }
            ]
        });
        confirm.present();



    }

    incrementaQtd( produto ): void {
        produto.quantidade = produto.quantidade + 1;
        this.produtosClienteService.update( produto.prod_id, JSON.stringify( produto ) ).then(( res ) => {
            if ( res != null ) {
                this.carregaProdutos();

            } else {
                console.log( res, "NENHUM PRODUTO" );
            }

        }).catch(( err ) => {
            console.log( err );
        });

    }

}
