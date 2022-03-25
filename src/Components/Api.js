import ipad from "../Images/Products/ipad.png"
import iphone1 from "../Images/Products/iphone1.png"
import iphone2 from "../Images/Products/iphone2.png"
import iphone3 from "../Images/Products/iphone3.png"
import iphone4 from "../Images/Products/iphone4.png"
import macbook1 from "../Images/Products/macbook1.png"
import macbook2 from "../Images/Products/macbook2.png"
import macbook3 from "../Images/Products/macbook3.png"
import access1 from "../Images/Products/access1.png"
import access2 from "../Images/Products/access2.png"
import access3 from "../Images/Products/access3.png"
import access4 from "../Images/Products/access4.png"
import access5 from "../Images/Products/access5.png"
import access6 from "../Images/Products/access6.png"
import access7 from "../Images/Products/access7.png"
import access8 from "../Images/Products/access8.png"
import access9 from "../Images/Products/access9.png"
import access10 from "../Images/Products/access10.png"
import access11 from "../Images/Products/access11.png"
import access12 from "../Images/Products/access12.jpg"
import free_shipping from "../Images/Web/shipping.svg"
import free_refund from "../Images/Web/refund.svg"
import support from "../Images/Web/support.svg"



const products = [
    {
        id: 1, imgurl: iphone1, title: "Apple iPhone 11", price: 25999, cat: 'iphone'
    },

    {
        id: 2, imgurl: iphone2, title: "ipod-touch", price: 23999, cat: 'iphone'
    },

    {
        id: 3, imgurl: iphone3, title: "Apple iPhone 10", price: 20999, cat: 'iphone'
    },

    {
        id: 4, imgurl: iphone4, title: "apple_iPod_2A", price: 45999, cat: 'iphone'
    },
    {
        id: 5, imgurl: ipad, title: "Apple Ipad", price: 75999, cat: 'ipad'
    },

    {
        id: 6, imgurl: access1, title: "Apple watch1", price: 15999, cat: 'accessories'
    },

    {
        id: 7, imgurl: access2, title: "Apple Charger", price: 5999, cat: 'accessories'
    },

    {
        id: 8, imgurl: access3, title: "airpods-max-hero", price: 8999, cat: 'accessories'
    },
    {
        id: 19, imgurl: macbook2, title: "Apple Mac Mini", price: 75000, cat: 'macbook'
    },
    {
        id: 20, imgurl: macbook3, title: "Apple Macbook", price: 89999, cat: 'macbook'
    }


]


export const products_1 = [
    {
        id: 9, imgurl: access4, title: "MY812", price: 4999, cat: 'accessories'
    },

    {
        id: 10, imgurl: access5, title: "Apple Magic", price: 5999, cat: 'accessories'
    },

    {
        id: 11, imgurl: access6, title: "Apple Watch 21-1", price: 5555, cat: 'accessories'
    },

    {
        id: 12, imgurl: access7, title: "Apple Airpods", price: 1999, cat: 'accessories'
    },
    {
        id: 13, imgurl: access8, title: "Apple_homepod", price: 6999, cat: 'accessories'
    },

    {
        id: 14, imgurl: access9, title: "design-hero_2x", price: 2999, cat: 'accessories'
    },

    {
        id: 15, imgurl: access10, title: "MQHX2", price: 2999, cat: 'accessories'
    },

    {
        id: 16, imgurl: access11, title: "Headphone", price: 2999, cat: 'accessories'
    },
    {
        id: 17, imgurl: access12, title: "apple_airpods", price: 1599, cat: 'accessories'
    },

    {
        id: 18, imgurl: macbook1, title: "Macbook Air", price: 85599, cat: 'macbook'
    }

]

export const section_3 = [
    {
        id: 21, imgurl: free_shipping, title: "Free Shipping", content: "Most retailers promote free delivery with a minimum spend, in order to encourage customers to increase their order cost. However, Next is one of the few retailers that promotes it after the customer has checked out. Here, the retailer informs shoppers that they can qualify for free delivery if they buy something else within 30 minutes, perhaps making them re-think if there’s any items they’ve missed…"
    },
    {
        id: 22, imgurl: free_refund, title: "100% Free Refund", content: "Most retailers promote free delivery with a minimum spend, in order to encourage customers to increase their order cost. However, Next is one of the few retailers that promotes it after the customer has checked out. Here, the retailer informs shoppers that they can qualify for free delivery if they buy something else within 30 minutes, perhaps making them re-think if there’s any items they’ve missed…"
    },
    {
        id: 23, imgurl: support, title: "Support 24/7", content: "Most retailers promote free delivery with a minimum spend, in order to encourage customers to increase their order cost. However, Next is one of the few retailers that promotes it after the customer has checked out. Here, the retailer informs shoppers that they can qualify for free delivery if they buy something else within 30 minutes, perhaps making them re-think if there’s any items they’ve missed…"
    }
]

export default products;