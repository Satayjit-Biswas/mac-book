var promo_active = false;
// add your price 
function add_tk(add_area_id,price){
    const  add_area_text = document.getElementById(add_area_id);
    add_area_text.innerText = price;
    total_tk()
}
// check promo condition
function with_promo_Total(all_price){
    if(promo_active){
        const promo_discount = all_price - ((all_price * 20)/100);
        document.getElementById("Total_Price_voucher").innerText = promo_discount;
    }
    else{
        document.getElementById("Total_Price_voucher").innerText = all_price; 
    }
}
function total_tk(){
    // Best Price field
    const  Best_Price_field = document.getElementById("Best_Price");
    const  Best_Price_field_value = parseFloat(Best_Price_field.innerText);
    // Extra Memory field
    const  Extra_Memory_Cost_field = document.getElementById("Extra_Memory_Cost");
    const  Extra_Memory_Cost_field_value = parseFloat(Extra_Memory_Cost_field.innerText);
    // Extra storage field
    const  Extra_storage_Cost_field = document.getElementById("Extra_storage_Cost");
    const  Extra_storage_Cost_field_value = parseFloat(Extra_storage_Cost_field.innerText);
    // Delivery charge field
    const  Delivery_charge_field = document.getElementById("Delivery_charge");
    const  Delivery_charge_field_value = parseFloat(Delivery_charge_field.innerText);
    // total price
    const all_price = Best_Price_field_value + Extra_Memory_Cost_field_value + Extra_storage_Cost_field_value +Delivery_charge_field_value ;
    document.getElementById("Total_Price").innerText = all_price;
    with_promo_Total(all_price);
}


// extra memory 8gb
document.getElementById('memory_8gb').addEventListener('click', function () {
    add_tk('Extra_Memory_Cost',0)
});
// extra memory 16gb
document.getElementById('memory_16gb').addEventListener('click', function () {
    add_tk('Extra_Memory_Cost',180)
});
// extra Storage 256gb 
document.getElementById('Storage_256gb').addEventListener('click', function () {
    add_tk('Extra_storage_Cost',0)
});
// extra memory 512gb
document.getElementById('Storage_512gb').addEventListener('click', function () {
    add_tk('Extra_storage_Cost',100)
});
// extra memory 1tb
document.getElementById('Storage_1tb').addEventListener('click', function () {
    add_tk('Extra_storage_Cost',180)
});
// delivery free
document.getElementById('delivery_free').addEventListener('click', function () {
    add_tk('Delivery_charge',0)
});
// delivery 20
document.getElementById('delivery_20').addEventListener('click', function () {
    add_tk('Delivery_charge',20)
});
// promo btn
document.getElementById('promo_btn').addEventListener('click', function () {
    const  Total_Price_text = document.getElementById("Total_Price");
    const  Total_Price_text_value = parseFloat(Total_Price_text.innerText);
    // promo input 
    const  promo_input_text = document.getElementById("promo_input");
    const  promo_input_value = promo_input_text.value;
    // check promo value 
    if(promo_input_value == 'stevekaku'){
        promo_active = true;
        // clear input value 
        promo_input_text.value = '';
        with_promo_Total(Total_Price_text_value);
    }
    // clear input value 
    promo_input_text.value = '';
});