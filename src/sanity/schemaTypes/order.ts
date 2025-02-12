import { title } from "process";

export default {
    name: 'order',
    type: 'document',
    title: 'order',
    fields: [
        {
            name: 'firstname',
            title: 'Firstname',
            type: 'string'
        },
        {
            name: 'lastname',
            title: 'Lastname',
            type: 'string'
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'province',
            title: 'Province',
            type: 'string'
        },
        {
            name: 'zipcode',
            title: 'Zipcode',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'city',
            title: 'Cityl',
            type: 'string'
        },
        {
            name: "additionalInfo",
            title: "Additional Information",
            type: "text"
        },
        {
            name : 'cartproducts',
            title : 'Cartproducts',
            type : 'array',
            of : [{type : 'reference' , to : {type : 'product'} }]
        },
        {
            name : 'subtotal',
            title : 'Subtotal',
            type : 'number'
        },
        {
            name : 'total',
            title : 'Total',
            type : 'number'
        },
        {
            name : 'status',
            title : 'Orderstatus',
            type : 'string',
            options : {
                list : [
                    {title : 'Pending' , value : 'pending'},
                    {title : 'Success' , value : 'success'},
                    {title : 'Cancelled' , value : 'cancelled'}
                ],
                layout : 'radio'
            },
            initialValue : 'pending'
        }
    ]
}