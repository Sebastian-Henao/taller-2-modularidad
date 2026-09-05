'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">uceva-angular-taller-modulos documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-8b1dab8c80155ed96cf1b6cffcf055aff37b8ed62c9da37aa7ee4976beab938544c9b8d0e909c36bee607102534a90a97c28a9bc80eb7c12837876aad06c44c8"' : 'data-bs-target="#xs-components-links-module-AppModule-8b1dab8c80155ed96cf1b6cffcf055aff37b8ed62c9da37aa7ee4976beab938544c9b8d0e909c36bee607102534a90a97c28a9bc80eb7c12837876aad06c44c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8b1dab8c80155ed96cf1b6cffcf055aff37b8ed62c9da37aa7ee4976beab938544c9b8d0e909c36bee607102534a90a97c28a9bc80eb7c12837876aad06c44c8"' :
                                            'id="xs-components-links-module-AppModule-8b1dab8c80155ed96cf1b6cffcf055aff37b8ed62c9da37aa7ee4976beab938544c9b8d0e909c36bee607102534a90a97c28a9bc80eb7c12837876aad06c44c8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CatalogoModule.html" data-type="entity-link" >CatalogoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CatalogoModule-8d69343f77af6780720f3d1a1ce89e18d4311336c715bde6718566446daed36d4bfe9ce14a70c498b543577148f7be89b4110c477a1d437ca1a361a1b9ea1cc7"' : 'data-bs-target="#xs-components-links-module-CatalogoModule-8d69343f77af6780720f3d1a1ce89e18d4311336c715bde6718566446daed36d4bfe9ce14a70c498b543577148f7be89b4110c477a1d437ca1a361a1b9ea1cc7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CatalogoModule-8d69343f77af6780720f3d1a1ce89e18d4311336c715bde6718566446daed36d4bfe9ce14a70c498b543577148f7be89b4110c477a1d437ca1a361a1b9ea1cc7"' :
                                            'id="xs-components-links-module-CatalogoModule-8d69343f77af6780720f3d1a1ce89e18d4311336c715bde6718566446daed36d4bfe9ce14a70c498b543577148f7be89b4110c477a1d437ca1a361a1b9ea1cc7"' }>
                                            <li class="link">
                                                <a href="components/CatalogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListCatalogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListCatalogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableCatalogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableCatalogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatalogoRoutingModule.html" data-type="entity-link" >CatalogoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleMarvelRivalsModule.html" data-type="entity-link" >ModuleMarvelRivalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ModuleMarvelRivalsModule-c6077cb98a2cac7bd45f04d6adfc4a838a52a517661ac0dbd93890ae8fdcf48cdd13616612a1d236561da5f2fbae91aea705bac100049e467c763dd7698c65ca"' : 'data-bs-target="#xs-components-links-module-ModuleMarvelRivalsModule-c6077cb98a2cac7bd45f04d6adfc4a838a52a517661ac0dbd93890ae8fdcf48cdd13616612a1d236561da5f2fbae91aea705bac100049e467c763dd7698c65ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModuleMarvelRivalsModule-c6077cb98a2cac7bd45f04d6adfc4a838a52a517661ac0dbd93890ae8fdcf48cdd13616612a1d236561da5f2fbae91aea705bac100049e467c763dd7698c65ca"' :
                                            'id="xs-components-links-module-ModuleMarvelRivalsModule-c6077cb98a2cac7bd45f04d6adfc4a838a52a517661ac0dbd93890ae8fdcf48cdd13616612a1d236561da5f2fbae91aea705bac100049e467c763dd7698c65ca"' }>
                                            <li class="link">
                                                <a href="components/ListModuleMarvelRivalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListModuleMarvelRivalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarvelRivalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarvelRivalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableModuleMarvelRivalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableModuleMarvelRivalsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleMarvelRivalsRoutingModule.html" data-type="entity-link" >ModuleMarvelRivalsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductsModule-bc37760490be44e2451a30a8891ebb2dafe2d2e2f5080bdbebfd0ef0e549cad386ef3cbf3dcb87a43f9960c965e742a6caa83dc04163019a6d4e2b5baf1c8b65"' : 'data-bs-target="#xs-components-links-module-ProductsModule-bc37760490be44e2451a30a8891ebb2dafe2d2e2f5080bdbebfd0ef0e549cad386ef3cbf3dcb87a43f9960c965e742a6caa83dc04163019a6d4e2b5baf1c8b65"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-bc37760490be44e2451a30a8891ebb2dafe2d2e2f5080bdbebfd0ef0e549cad386ef3cbf3dcb87a43f9960c965e742a6caa83dc04163019a6d4e2b5baf1c8b65"' :
                                            'id="xs-components-links-module-ProductsModule-bc37760490be44e2451a30a8891ebb2dafe2d2e2f5080bdbebfd0ef0e549cad386ef3cbf3dcb87a43f9960c965e742a6caa83dc04163019a6d4e2b5baf1c8b65"' }>
                                            <li class="link">
                                                <a href="components/ListProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableProductsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-f203caa12be8fe7a94396bbe39f1ce986f731981db9333c77e47d186d0aea4d84b0803ff30c81933d65c158bd4e3e567477da4953f75f3581e8e7dbf89a60b06"' : 'data-bs-target="#xs-components-links-module-SharedModule-f203caa12be8fe7a94396bbe39f1ce986f731981db9333c77e47d186d0aea4d84b0803ff30c81933d65c158bd4e3e567477da4953f75f3581e8e7dbf89a60b06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f203caa12be8fe7a94396bbe39f1ce986f731981db9333c77e47d186d0aea4d84b0803ff30c81933d65c158bd4e3e567477da4953f75f3581e8e7dbf89a60b06"' :
                                            'id="xs-components-links-module-SharedModule-f203caa12be8fe7a94396bbe39f1ce986f731981db9333c77e47d186d0aea4d84b0803ff30c81933d65c158bd4e3e567477da4953f75f3581e8e7dbf89a60b06"' }>
                                            <li class="link">
                                                <a href="components/BadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BadgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsersModule-f69a7f32ce9aef9bf24c12c047e4a3c22262f7485c9899a22f54ed346d3b615e8acec822e831793f9e3ce2e99565e1bfd09d6b64b6d453bb88fb2486821b71fb"' : 'data-bs-target="#xs-components-links-module-UsersModule-f69a7f32ce9aef9bf24c12c047e4a3c22262f7485c9899a22f54ed346d3b615e8acec822e831793f9e3ce2e99565e1bfd09d6b64b6d453bb88fb2486821b71fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-f69a7f32ce9aef9bf24c12c047e4a3c22262f7485c9899a22f54ed346d3b615e8acec822e831793f9e3ce2e99565e1bfd09d6b64b6d453bb88fb2486821b71fb"' :
                                            'id="xs-components-links-module-UsersModule-f69a7f32ce9aef9bf24c12c047e4a3c22262f7485c9899a22f54ed346d3b615e8acec822e831793f9e3ce2e99565e1bfd09d6b64b6d453bb88fb2486821b71fb"' }>
                                            <li class="link">
                                                <a href="components/ListUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CatalogoService.html" data-type="entity-link" >CatalogoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModuleMarvelRivalsService.html" data-type="entity-link" >ModuleMarvelRivalsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Catalogo.html" data-type="entity-link" >Catalogo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarvelRivals.html" data-type="entity-link" >MarvelRivals</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavbarItem.html" data-type="entity-link" >NavbarItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});