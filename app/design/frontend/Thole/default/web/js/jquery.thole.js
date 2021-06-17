/*
    Author  : Thole.
    main jQuery widget of Fpmini
*/

define([
    'jquery',
    'jquery/ui',
     'matchMedia',
     'collapsible'
  
  ], function($, ui, mediaCheck){
      'use strict';
  
      $.widget('main.thole', {
          
          _create: function() {
              this.initAllPages();
              this.initHomePage();
              this.initCategoryPage();
              this.initProductPage();
              this.initSearchPage();
              this.initShoppingCartPage();
              this.initCmsPage();
              this.initCheckoutPage();
              this.initStoreLocator();
              this.initCustomerAccountLogin();
              this.initCustomerAccountPage();
              this.initCustomerAccountCreate();
          },
  
          initAllPages: function() {
              console.log("masuk");
          },
  
          initHomePage: function() {
              
              if ($('body.cms-index-index').length) {
                  
                  
              }
              
          },
  
          initCategoryPage: function() {
  
              if ($('body.catalog-category-view').length || $('body.catalogsearch-result-index').length) {

              }
          },
  
          initProductPage: function() {
              if ($('body.catalog-product-view').length) {
              }
          },
  
          initSearchPage: function() {
  
              if ($('body.catalogsearch-result-index').length) {
              }
          },
  
          initCategorySearchPage: function() {
  
              if ($('body.catalog-category-view').length || $('body.catalogsearch-result-index').length) {
              }
          },
  
          initShoppingCartPage: function() {
  
              if ($('body.checkout-cart-index').length) {
  
              }
          },
  
          initCheckoutPage: function() {
  
              if ($('body.checkout-index-index').length) {  
              }
  
              if ($('body.onestepcheckout-index-index').length) {
              }
          },
  
          initRegisterPage: function() {
  
              if ($('body.customer-account-create').length) {
              }
          },
          
          initInvoicePage: function() {
              if ($('body.sales-order-invoice').length) {
              }
          },
  
          initCmsPage: function() {
  
              
          },
          initContactPage: function() {
              if ($('body.contact-index-index').length) {   
              }
          },
          initStoreLocator: function() {
              if ($('body.cms-store-locator').length) {
                 
              }
          },
          initMpsellerbuyercommunicationCustomerView: function() {
              if ($('body.mpsellerbuyercommunication-customer-view').length) {
                 
              }
          },
          initCustomerAccountLogin: function() {
              if ($('body.customer-account-login').length) {
              }
              
          },
          initCustomerAccountCreate: function() {
              if ($('body.customer-account-create').length) {
  
              }
              
          },
          initCustomerAccountPage: function(){
              if( $('body.account').length ) {
              }
  
              if ($('body.account.customer-account-index').length ||
                  $('body.account.sales-order-history').length ||
                  $('body.account.mpsellerbuyercommunication-customer-history').length ||
                  $('body.account.wishlist-index-index').length ||
                  $('body.account.review-customer-index').length ||
                  $('body.account.pdc-customerdesign-index').length ) {
                      
              }
          }
      });
  
      $(document).thole();
  
  });