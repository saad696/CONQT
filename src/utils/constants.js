export const vendorContactDetails = {
    name: {
        title: 'Dell Technologies',
        color: 'blue',
        icon: null,
        type: 'tag',
    },
    id: {
        title: '#124CONQT',
        color: 'blue',
        type: 'link',
    },
    email: 'delltech@dell.com',
    phone: '+71 931-465-6838',
};

export const billingDetails = {
    street: '1094 Mumbai Maharashtra',
    country: 'India',
    state: 'Maharashtra',
    city: 'Mumbai',
    zipcode: '400001',
};

export const prDetails = {
    'PR Number': '#P0123456',
    department: 'Sales',
    project: 'Laptop Purchase',
    'created by': 'Olivia Rhye',
};

export const quotationDetails = {
    'awarded item': 20,
    'awarded price': '$10,000',
    'awarded to': 'Digital Inc.',
    status: {
        title: 'Awarded',
        color: 'green',
        icon: null,
        type: 'tag',
    },
};

export const historyDetails = {
    'PO created date': '24 May 2024',
    status: {
        title: 'Draft',
        color: 'gray',
        icon: null,
        type: 'tag',
    },
};

export const tableData = [
    {
        key: '1',
        item_code: '#1234',
        item: 'Apple Macbook',
        quantity: 1,
        uom: 'Each',
        price: '$ 1,200',
        shipping_method: 'UPS',
    },
    {
        key: '2',
        item_code: '#1234',
        item: 'Apple Macbook',
        quantity: 1,
        uom: 'Each',
        price: '$ 1,200',
        shipping_method: 'UPS',
    },
    {
        key: '3',
        item_code: '#1234',
        item: 'Apple Macbook',
        quantity: 1,
        uom: 'Each',
        price: '$ 1,200',
        shipping_method: 'UPS',
    },
    {
        key: '4',
        item_code: '#1234',
        item: 'Apple Macbook',
        quantity: 1,
        uom: 'Each',
        price: '$ 1,200',
        shipping_method: 'UPS',
    },
    {
        key: '5',
        item_code: '#1234',
        item: 'Apple Macbook',
        quantity: 1,
        uom: 'Each',
        price: '$ 1,200',
        shipping_method: 'UPS',
    },
];

export const tableColumns = [
    {
        title: 'Item Code',
        dataIndex: 'item_code',
        key: 'item_code',
    },
    {
        title: 'Item',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'UOM',
        dataIndex: 'uom',
        key: 'uom',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Shipping Method',
        dataIndex: 'shipping_method',
        key: 'shipping_method',
    },
];

export const tncOptions = [
    'Payment Terms',
    'Delivery Terms',
    'Shipment Method',
];

export const tncMethodsSelectOptions = ['Net-13', 'Net-14', 'Net-15'];

export const tncMethodsSelectOptionsText = {
    'net-13':
        'Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.',
    'net-14':
        'Please pay within 15 days from the date of invoice, overdue interest @ 16% will be charged on delayed payments.',
    'net-15':
        'Please pay within 15 days from the date of invoice, overdue interest @ 18% will be charged on delayed payments.',
};
