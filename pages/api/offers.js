let offers = {
  "title": "Offers",
  "sections": [
    {
      "title": "Top Cashbacks",
      "items": [
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Burger Joint",
          "title": "3,5% Cashbacks Paying with this coupon",
          "tags": "Cashback",
          "favoriteCount": 283
        },
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Shawerma El Reem",
          "title": "4 Sandwiches for 60 EGP Only!",
          "tags": "Discount",
          "favoriteCount": 1459
        },
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Pizza King",
          "title": "Special Combo for 110 EGP only instead of 211 EGP!",
          "tags": "Discount",
          "favoriteCount": 45
        },
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1510157059722-9c3c2175ed1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Bose",
          "title": "5% Cashbacks Paying with this coupon",
          "tags": "Cashback",
          "favoriteCount": 782
        }
      ]
    },
    {
      "title": "Popular",
      "items": [
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Max Burgers",
          "title": "Double max burger or double chicken ranch sandwich for EGP 25",
          "tags": "Discount",
          "favoriteCount": 101
        },
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1562967914-01efa7e87832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Chicken Tikka",
          "title": "Half grilled chicken meal for 57 EGP instead of 92 EGP!!",
          "tags": "Discount",
          "favoriteCount": 1459
        },
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Shawerma El Reem",
          "title": "Sandwich shawerma beef + 1 shawerma chicken Large for EGP 35 instead of EGP 66!",
          "favoriteCount": 94
        },
        {
          "detailUrl": "https://www.google.com/",
          "imageUrl": "https://images.unsplash.com/photo-1523329110005-297cf111f8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&h=750&q=80",
          "brand": "Sony",
          "title": "10% Cashbacks Paying with this coupon today",
          "tags": "Cashback",
          "favoriteCount": 623
        }
      ]
    }
  ]
}

export default function handler(req, res) {
  res.status(200).json(offers)
}
