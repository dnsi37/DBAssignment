export interface createLiquorDTO {
    name : string
    country : string
    unit_price : number
    category_id : number
}

export interface createSaleDTO {
    customer_id : number
    liquor_id : number
    qty : number
    total_cost : number
}

export interface createStockDTO {
    liquor_id : number
    qty : number
    location : string
}

export interface createCustomerDTO {

    name : string
    phone_num : string

}