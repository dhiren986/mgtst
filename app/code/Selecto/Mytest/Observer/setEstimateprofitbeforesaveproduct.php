<?php
namespace Selecto\Mytest\Observer;
use Magento\Framework\Event\ObserverInterface;
class setEstimateprofitbeforesaveproduct implements ObserverInterface{
	/**
     * Set the current date to Special Price From attribute if it's empty.
     *
     * @param \Magento\Framework\Event\Observer $observer
     * @return $this
    */
	public function execute(\Magento\Framework\Event\Observer $observer){
		$product = $observer->getEvent()->getProduct();
		$qty = $product->getQty();$price = $product->getPrice();
		$costPrice = $product->getCost(); 
		if(isset($costPrice) && $costPrice > 0){
			$estimated_profit = $price-$costPrice;
			$estimated_profit = $estimated_profit*$qty;			
		}else{$estimated_profit='';}
		$product->setEstimatedProfit($estimated_profit);
		$product->save();
	}
}