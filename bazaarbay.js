(function(){
	'use strict';
	
	angular.module('BazaarBayEngine', [])
	.controller('ItemsController', ItemsController)
	.controller('CartController', CartController)
	.service('ItemToCartService', ItemToCartService);
	
	ItemsController.$inject = ['ItemToCartService', '$scope'];
	function ItemsController (ItemToCartService, $scope){
		var buy = this;
		
		buy.getItems = ItemToCartService.getBuyItems();
		buy.getItems2 = ItemToCartService.getBuyItems2();
		buy.getItems3 = ItemToCartService.getBuyItems3();
		buy.getItems4 = ItemToCartService.getBuyItems4();
		
		buy.changeToBought = function(index){
			ItemToCartService.changeToBought(index);
		};
		buy.changeToBought2 = function(index){
			ItemToCartService.changeToBought2(index);
		};
		buy.changeToBought3 = function(index){
			ItemToCartService.changeToBought3(index);
		};
		buy.changeToBought4 = function(index){
			ItemToCartService.changeToBought4(index);
		};
		
		buy.changeToRemove = function(index){
			ItemToCartService.changeToRemove(index);
		};
	}
	CartController.$inject = ['ItemToCartService'];
	function CartController (ItemToCartService){
		var bought = this;
		
		bought.getItems = ItemToCartService.getBoughtItems();

		bought.message = function(){
			return (bought.getItems == "");
		};
	}
	
	function ItemToCartService(){
		var service = this;
		var boughtArray = [];
		var buyArray = [
				{
					name: "Jean",
					brand: "Levi's",
					image: "levi jeans",
					price: "Rs. 1299",
					info: "The always perfect, easy to wear, just fits right pair of Levi's Jeans is waiting."
				},
				{
					name: "Leather Jacket",
					brand: "Monte Carlo",
					image: "monte carlo",
					price: "Rs. 2499",
					info: "Monte Carlo is a fashion house with an eclectic mix of clothing for men, women and tweens. With a utilitarian, trendy and premium quality approach to clothing."
				},
				{
					name: "Leather Jacket",
					brand: "Woodland",
					image: "woodland",
					price: "Rs. 4999",
					info: "Woodland Jackets: Discover Men's and Women's new collection of Jackets"
				},
				{
					name: "Men's Shirt",
					brand: "Louis Philippe",
					image: "louis",
					price: "Rs. 899",
					info: "Defining class, elegance and status, Louis Philippe is a purveyor of fine clothing for the discerning gentleman."
				},
				{
					name: "Tshirt",
					brand: "Adidas",
					image: "adidas",
					price: "Rs. 1299",
					info: "Sport is rooted in your core. This t-shirt reveals your passion with a contrast adidas graphic on the chest. It's made of soft fabric that keeps you cool and dry under the sun."
				},
				{
					name: "Runner Shorts",
					brand: "Puma",
					image: "puma",
					price: "Rs. 1499",
					info: "The Favourite Woven 2-in-1 Men's Running Shorts are made for the everyday runner. dryCELL tech keeps you dry on the fly."
				}
			];
		var buyArray2 = [
				{
					name: "Leather Jacket",
					brand: "Levi's",
					image: "woodland",
					price: "Rs. 1549",
					info: "Levi's Leather Jackets: Discover Men's and Women's new collection of Levi's Leather Jackets"
				},
				{
					name: "Leather Jacket",
					brand: "Being Human",
					image: "monte carlo",
					price: "Rs. 1849",
					info: "Being Human is Salmaan's fashion house with an eclectic mix of clothing for men. With a utilitarian, trendy and premium quality approach to clothing."
				},
				{
					name: "Men's Shirt",
					brand: "Van Heusen",
					image: "louis",
					price: "Rs. 1095",
					info: "Defining class, elegance and status, Van Heusen is a purveyor of fine clothing for the discerning gentleman."
				},
				{
					name: "Tshirt",
					brand: "Reebok",
					image: "adidas",
					price: "Rs. 2999",
					info: "Sport is rooted in your core. This t-shirt reveals your passion. It's made of soft fabric that keeps you cool and dry under the sun."
				},
				{
					name: "Jean",
					brand: "Pepe Jeans",
					image: "levi jeans",
					price: "Rs. 999",
					info: "The always perfect, easy to wear, just fits right pair of Pepe Jeans is waiting."
				},
				{
					name: "Runner Shorts",
					brand: "Nike",
					image: "puma",
					price: "Rs. 1849",
					info: "The Nike Men's Running Shorts are made for the everyday runner. dryCELL tech keeps you dry on the fly."
				}
			];
		var buyArray3 = [
				{
					name: "Tshirt",
					brand: "Adidas",
					image: "adidas",
					price: "Rs. 8999",
					info: "Sport is rooted in your core. This t-shirt reveals your passion with a contrast adidas graphic on the chest. It's made of soft fabric that keeps you cool and dry under the sun."
				},
				{
					name: "Jean",
					brand: "Levi's",
					image: "levi jeans",
					price: "Rs. 2499",
					info: "The always perfect, easy to wear, just fits right pair of Levi's Jeans is waiting."
				},
				{
					name: "Leather Jacket",
					brand: "Armani",
					image: "woodland",
					price: "Rs. 9999",
					info: "Armani: Class defined for today's gentlemen "
				},
				{
					name: "Men's Shirt",
					brand: "Louis Philippe",
					image: "louis",
					price: "Rs. 499",
					info: "Defining class, elegance and status, Louis Philippe is a purveyor of fine clothing for the discerning gentleman."
				},
				{
					name: "Runner Shorts",
					brand: "Puma",
					image: "puma",
					price: "Rs. 1649",
					info: "The Favourite Woven 2-in-1 Men's Running Shorts are made for the everyday runner. dryCELL tech keeps you dry on the fly."
				},
				{
					name: "Leather Jacket",
					brand: "Monte Carlo",
					image: "monte carlo",
					price: "Rs. 4599",
					info: "Monte Carlo is a fashion house with an eclectic mix of clothing for men, women and tweens. With a utilitarian, trendy and premium quality approach to clothing."
				}
			];
		var buyArray4 = [
				{
					name: "Runner Shorts",
					brand: "Superdry",
					image: "puma",
					price: "Rs. 1499",
					info: "The Favourite Woven 2-in-1 Men's Running Shorts are made for the everyday runner. dryCELL tech keeps you dry on the fly."
				},
				{
					name: "Jean",
					brand: "Callino",
					image: "levi jeans",
					price: "Rs. 1299",
					info: "The always perfect, easy to wear, just fits right pair of Callino's Jeans is waiting."
				},
				{
					name: "Men's Shirt",
					brand: "Van Huesen",
					image: "louis",
					price: "Rs. 2999",
					info: "Defining class, elegance and status, Van Huesen is a purveyor of fine clothing for the discerning gentleman."
				},
				{
					name: "Leather Jacket",
					brand: "Monte Carlo",
					image: "monte carlo",
					price: "Rs. 1599",
					info: "Monte Carlo is a fashion house with an eclectic mix of clothing for men, women and tweens. With a utilitarian, trendy and premium quality approach to clothing."
				},
				{
					name: "Leather Jacket",
					brand: "Woodland",
					image: "woodland",
					price: "Rs. 4599",
					info: "Woodland Jackets: Discover Men's and Women's new collection of Jackets"
				},
				{
					name: "Tshirt",
					brand: "Reebok",
					image: "adidas",
					price: "Rs. 1199",
					info: "Sport is rooted in your core. This t-shirt reveals your passion. It's made of soft fabric that keeps you cool and dry under the sun."
				}
			];
		
		service.changeToBought = function(index, itemQuantity, itemSize){
			boughtArray.push(buyArray[index]);
		};
		service.changeToBought2 = function(index){
			boughtArray.push(buyArray2[index]);
		};
		service.changeToBought3 = function(index){
			boughtArray.push(buyArray3[index]);
		};
		service.changeToBought4 = function(index){
			boughtArray.push(buyArray4[index]);
		};
		
		service.changeToRemove = function(index){
			boughtArray.splice(index, 1);
		};
		
		service.getBuyItems = function(){
			return buyArray;
		};
		service.getBuyItems2 = function(){
			return buyArray2;
		};
		service.getBuyItems3 = function(){
			return buyArray3;
		};
		service.getBuyItems4 = function(){
			return buyArray4;
		};
		
		service.getBoughtItems = function(){
			return boughtArray;
		};
	}
})();