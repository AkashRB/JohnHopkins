(function(){
'use strict'
angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
  var tobuy=this;
  tobuy.itemlist=ShoppingListCheckOffService.show();
  tobuy.moveitemToBoughtList=function(itemIndex){

      console.log("calling the removeItem method "+itemIndex);
      ShoppingListCheckOffService.transferitem(itemIndex);
  }
}
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought=this;
  bought.itemlist=ShoppingListCheckOffService.showBoughtList();

}
function ShoppingListCheckOffService(){
  var boughtlist=[];
  var toBuyitemlist=[
    {
      name:'Cookies',
      quantity:4
    },
    {
      name:'chips',
      quantity:5
    },
    {
      name:'sugary Drinks',
      quantity:7
    },
    {
      name:'pepso',
      quantity:9
    },
    {
      name:'fries',
      quantity:9
    }
  ];

  var service=this;
  service.show=function(){
    return toBuyitemlist;
  };
  service.transferitem=function(itemIndex){
     {
      var item=toBuyitemlist[itemIndex];console.log(item);
      toBuyitemlist.splice(itemIndex,1);console.log(toBuyitemlist);
      boughtlist.push(item);
    }
  }
  service.showBoughtList=function(){
    return boughtlist;
  }
}
})();
