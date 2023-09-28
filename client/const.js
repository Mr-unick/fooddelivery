export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('./images/rest/piza.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('./images/rest/brgr.jpg'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('./images/rest/itl3.jpeg'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('./images/rest/chini2.jpg'),
    },
   
    {
        id: 5,
        name: 'Nonveg',
        image: require('./images/rest/non1.jpeg'),
    },
    {
        id: 6,
        name: 'Biryani',
        image: require('./images/rest/non2.jpeg'),
    },

]


export const featured = [
    {
        id: 1,
        title: 'Hot and Spicy',
        description: 'soft and cheezy pizza',
        restaurants: [
            {
                id: 1,
                name: 'KFC',
                image: require('./images/rest/kfc.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Datta square yavatmal',
                stars: 3.5,
                reviews: '4.0k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'Braded Chicken',
                       description: 'Braded Chicken',
                       price: 10,
                       image:  require('./images/rest/kfc1.jpg')
                    },
                    {
                       id: 2,
                       name: 'Fried Chicken Wings',
                       description: 'Fried Chicken Wings',
                       price: 12,
                       image:  require('./images/rest/kfc2.jpg')
                    },
                    {
                       id: 3,
                       name: 'KFC Bucket',
                       description: 'KFC Bucket',
                       price: 10,
                       image:  require('./images/rest/kfc3.jpg')
                    },
                    
                    {
                       id: 4,
                       name: 'KFC Special',
                       description: 'KFC Special',
                       price: 10,
                       image:  require('./images/rest/kfc4.jpg')
                    },
                    {
                       id: 5,
                       name: 'Full Meal with coke',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./images/rest/kfc5.jpg')
                    }
                ]
        
            },
            {
                id: 2,
                name: 'MacDonalds',
                image: require('./images/rest/mac.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Sate Bank Square yavatmal',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            },
            {
                id: 3,
                name: 'Dominozz',
                image: require('./images/rest/dominoz.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Near GOV Pollytecnic collage',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            }
        ]
    },
    {
        id: 1,
        title: 'Italian Special',
        description: 'italian food',
        restaurants: [
            {
                id: 1,
                name: 'Artushi Restaurent',
                image: require('./images/rest/itl1.jpeg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Datta square yavatmal',
                stars: 3.5,
                reviews: '4.0k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            },
            {
                id: 2,
                name: 'Celini Gran Hayatt',
                image: require('./images/rest/itl2.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Sate Bank Square yavatmal',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            },
            {
                id: 3,
                name: 'Paradise Cafe',
                image: require('./images/rest/itl3.jpeg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Near GOV Pollytecnic collage',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            }
        ]
    },
    {
        id: 1,
        title: 'NonVeg Special',
        description: 'Hot and Spicy Chicken',
        restaurants: [
            {
                id: 1,
                name: 'Yeti,himalayin kitchen',
                image: require('./images/rest/non1.jpeg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Haidrabad',
                stars: 3.5,
                reviews: '4.0k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            },
            {
                id: 2,
                name: 'Gulati Biryani Center',
                image: require('./images/rest/non2.jpeg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Sate Bank Square yavatmal',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            },
            {
                id: 3,
                name: 'Hotel Shabab',
                image: require('./images/rest/non3.jpeg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Near GOV Pollytecnic collage',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('./brgr.jpg')
                    },
                ]
        
            }
        ]
    }
]