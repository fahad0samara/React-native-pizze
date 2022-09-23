
import { images } from "../constants";
// price rating
const affordable = 1;
const fairPrice = 2;
const expensive = 3

export const restaurantData = [
    {
        id: 1,
        name: "Pizza Marinara",
        rating: 4.8,
        categories: [1],
        priceRating: affordable,
        size: 'small',
        people: '1-4',
        price: '$ 4',


        photo: images.neapolitan,
        time: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },


    },
    {
        id: 2,
        name: "Pizza Margherita",
        rating: 3.5,
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',
        categories: [1],
        priceRating: expensive,
        photo: images.neapolitan1,
        time: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },


    },
    {
        id: 3,
        name: "Tomato Pie",
        rating: 3.8,
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        categories: [1],
        priceRating: expensive,
        photo: images.neapolitan2,
        time: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
    },

    {
        id: 4,
        name: "Pizza Margherita",
        rating: 3.7,
        categories: [1],
        priceRating: expensive,
        photo: images.neapolitan3,
        time: "10 - 15 min",
        size: 'small',
        people: '1-4',
        price: '$ 4',
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },


    },
    {
        id: 5,
        name: " Pizza ortolana",
        rating: 4.8,
        categories: [2],
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',

        priceRating: affordable,
        photo: images.Chicago,
        time: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },


    },
    {
        id: 6,
        name: " Pizza rustica",
        rating: 4.4,
        categories: [2],
        priceRating: affordable,
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        photo: images.Chicago1,
        time: "5 - 7 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 7,
        name: "Pizza Apizza",
        rating: 4.9,
        categories: [2],
        size: 'small',
        people: '1-4',
        price: '$ 4',
        priceRating: affordable,
        photo: images.Chicago2,
        time: "3 - 4 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 8,
        name: "Tomato Pie",
        rating: 4.7,
        categories: [2],
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        priceRating: affordable,
        photo: images.Chicago3,
        time: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 9,
        name: "Pizza pesto",
        rating: 4.6,
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        categories: [3],
        priceRating: affordable,
        photo: images.Sicilian,
        time: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 10,
        name: "Pizza efichi",
        rating: 4.6,
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',

        categories: [3],
        priceRating: affordable,
        photo: images.Sicilian1,
        time: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 11,
        name: "Pizza pesto",
        rating: 3.9,
        categories: [3],
        size: 'small',
        people: '1-4',
        price: '$ 4',
        priceRating: affordable,
        photo: images.Sicilian2,
        time: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 12,
        name: "Pizza pesto",
        rating: 3.6,
        categories: [3],
        priceRating: affordable,
        photo: images.Sicilian3,
        time: "35 - 40 min",
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 13,
        name: "Grandma Pie",
        rating: 3.6,
        categories: [4],
        priceRating: affordable,
        photo: images.Greek,
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        time: "10 - 20 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 14,
        name: "Pizza pesto",
        rating: 4.6,
        categories: [4],
        priceRating: affordable,
        photo: images.Greek1,
        time: "3 - 4 min",
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 15,
        name: "Pugliese Pizza",
        rating: 4.6,
        categories: [4],
        size: 'small',
        people: '1-4',
        price: '$ 4',
        priceRating: affordable,
        photo: images.Greek2,
        time: "3 - 4 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 16,
        name: "Pizza Fugazzeta",
        rating: 4.2,
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',

        categories: [4],
        priceRating: affordable,
        photo: images.Greek3,
        time: "3 - 4 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 17,
        name: "Pizza California",
        rating: 3.2,
        size: 'small',
        people: '1-4',
        price: '$ 4',
        categories: [5],
        priceRating: affordable,
        photo: images.California,

        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 116,
        name: "Pizza Fugazzeta",
        rating: 4.2,
        categories: [4],
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        priceRating: affordable,
        photo: images.Greek3,
        time: "3 - 4 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },


    },
    {
        id: 18,
        name: "Garlic Fingers",
        rating: 4.8,
        categories: [5],
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',
        priceRating: affordable,
        photo: images.California1,
        time: "3 - 4 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 19,
        name: "Pizza carbonara",
        rating: 4.8,
        categories: [5],
        size: 'small',
        people: '1-4',
        price: '$ 4',
        priceRating: affordable,
        photo: images.California2,
        time: "3 - 4 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 20,
        name: "Pizza  padellino",
        rating: 4.8,
        categories: [6],
        priceRating: affordable,
        photo: images.Detroit,
        time: "2 - 4 min",
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 21,
        name: "Pizza pesto",
        rating: 5.0,
        categories: [6],
        priceRating: affordable,
        photo: images.Detroit,
        time: "2 - 4 min",
        size: 'large',
        people: '6-7',
        price: '$ 9.4',
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 22,
        name: "Pizza pesto",
        rating: 5.0,
        categories: [6],
        priceRating: affordable,
        photo: images.Detroit2,
        time: "2 - 4 min",
        size: 'medium',
        people: '3-5',
        price: '$ 6.6',
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },
    {
        id: 23,
        name: "Pizza e fichi",
        rating: 4.0,
        size: 'small',
        people: '1-4',
        price: '$ 4',
        categories: [6],
        priceRating: affordable,
        photo: images.Detroit3,
        time: "2 - 4 min",

        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },

        // menu: [
        //     {
        //         menuId: 12,
        //         name: "Teh C Peng",
        //         photo: images.teh_c_peng,
        //         description: "Three Layer Teh C Peng",
        //         calories: 100,
        //         price: 2,
        //     },
        //     {
        //         menuId: 13,
        //         name: "ABC Ice Kacang",
        //         photo: images.ice_kacang,
        //         description: "Shaved Ice with red beans",
        //         calories: 100,
        //         price: 3,
        //     },
        //     {
        //         menuId: 14,
        //         name: "Kek Lapis",
        //         photo: images.kek_lapis,
        //         description: "Layer cakes",
        //         calories: 300,
        //         price: 20,
        //     },
        // ],
    },

];
