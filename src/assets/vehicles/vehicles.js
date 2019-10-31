const vehicles = [
    {
        brand:"Chevrolet",
        model:"Sail",
        price:"10500",
        data: {
            km:"45000",
            year:"2015",
            fuel:"Nafta",
            equip:["A/C","D/H"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/72827602_137415977622474_3371854089649389568_n.jpg?_nc_cat=100&_nc_oc=AQlo9eM-o0wMJ6x9eCe3-5amSLWlwoLofQtvODNj1Y5RBUFVkczz4qUY3oFzs89G8aY&_nc_ht=scontent.fmvd4-1.fna&oh=2ed3a61a6a2daff09e1a0e574a2e0c88&oe=5E28C5C4',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=137416320955773&id=107603400603732&__xts__%5B0%5D=68.ARDRi1oQN4JZy8j3dr5R5t_hn6sJr317_I0N7vYMFbneNTmIf80T71wbGWKl7h0wvt64mbdQ_jfRNrCRuKRgjxmDVSCTl8dDx_3O5MJSw8oFSu1TC4VBC46fxEBHgm_749tw1q4Q6RCJUilFgzaKCs4N2FzrdR3UdWWNbwMZSbJHKFva7zRNM6DvKDTQIPn27N0n4ySFbcCfjZjXfK9ILnW6CfGHAVulEYaddWM-CZUmdiiqdiOUP__--UriYzSTRrN_2HXLbh_1Efp-YJKBPGGLYUwhEzuLOilSFeXTGFxcr4rHEvfN3uefUhCEDU4ufpVzHq9xqa51khqYEF_xKVY&__tn__=-R'
    },
    {
        brand:"Citroen",
        model:"ZX Diesel",
        price:"4800",
        data: {
            km:"",
            year:"1997",
            fuel:"Diesel",
            equip:["A/C","D/H"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75462465_143949203635818_3096166323672055808_n.jpg?_nc_cat=102&_nc_oc=AQnGHJ48k1zzGZfL_FZchhLiGGguNqO-rPOiEtqzl1Mzt63GWsgRiAwhYGhVzBtGevg&_nc_ht=scontent.fmvd4-1.fna&oh=6a26719296edd0b1ba3b1f0a5cf8594b&oe=5E18686C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=143949380302467&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Volkswagen",
        model:"Saveiro G5",
        price:"10500",
        data: {
            km:"",
            year:"2012",
            fuel:"Nafta",
            equip:["A/C","D/H"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73482853_143071457056926_319131192672649216_n.jpg?_nc_cat=100&_nc_oc=AQmyg4nP6EVJtzGJanI893puEIPk0nC307cBc-0JvWtKWjfdoT9PXmo-KHL9mYozjAE&_nc_ht=scontent.fmvd4-1.fna&oh=146057128ac5a4fb51336e4166842d12&oe=5E61812B',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=143071473723591&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Volkswagen",
        model:"Gol G2",
        price:"5500",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:["Std"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/74368460_142966957067376_2598619299010576384_n.jpg?_nc_cat=107&_nc_oc=AQk2osfxFhXRLyV8olW0v4cKPiZI5JRUAxhlv6qYWlr_wtEu6dNQlZUK0h3ddAac8GY&_nc_ht=scontent.fmvd4-1.fna&oh=fe676393f4fd13c02b253e95fba30ffb&oe=5E5FE73C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=142967127067359&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Renault",
        model:"19",
        price:"3900",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:["Std"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73533050_142966787067393_6370625716282720256_n.jpg?_nc_cat=111&_nc_oc=AQm-mUCKQymRTo896NLnhppkObEbZ2wcX29bIvw7TUNPKkEB9tRabpPSGhUGnFCECvI&_nc_ht=scontent.fmvd4-1.fna&oh=2c78a43714b55c18b145fc389fc6656e&oe=5E60922C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=142966840400721&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Chevrolet",
        model:"Corsa II",
        price:"7900",
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["A/C", "D/H"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73105946_138701627493909_7972913560122556416_n.jpg?_nc_cat=105&_nc_oc=AQm7kYFMsx5ZTMnDRxNwPlaCGtKjemrQUbKSEJoQawtVhfH-LkGY2Cpg8UztGPSZwDM&_nc_ht=scontent.fmvd4-1.fna&oh=d1763305306a3136d9d519f6a1facae6&oe=5E517BAF',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=138701747493897&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Kia",
        model:"Carnival Diesel Automatica",
        price:"12900",
        data: {
            km:"",
            year:"2001",
            fuel:"Diesel",
            equip:["Superfull"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71954533_137416467622425_514216535766597632_n.jpg?_nc_cat=111&_nc_oc=AQnnZiTk3dezCUoYWkpom4Totkl3f-p_XjMODLXL9dlPkJQsdZcHG5rpckd2uOJb2k0&_nc_ht=scontent.fmvd4-1.fna&oh=68f9cdc27e53b682e657785b749d8264&oe=5E5CD6B9',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=137416637622408&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Hyundai",
        model:"H100 Diesel",
        price:"8900",
        data: {
            km:"",
            year:"",
            fuel:"Diesel",
            equip:["Full", "12 pasajeros"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71927528_137115384319200_6640835333078384640_n.jpg?_nc_cat=100&_nc_oc=AQlX5j6tcTjOLDz-vXgqB_y2pwq-ndQJrGXBx2HPx5gX0L2-_PW3XmQalG_GNY6VVO4&_nc_ht=scontent.fmvd4-1.fna&oh=5b788ac4600b5c6989e1be13ed502d40&oe=5E1760C4',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=137115464319192&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Citroen",
        model:"Berlingo Furgon Nafta",
        price:"6000",
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Std"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71170497_133274698036602_1445040939285348352_n.jpg?_nc_cat=101&_nc_oc=AQmNNMTbhQYDP9KDUAdUXdpHgVn-4iYyHU3eA6KI9FZY2ChzGRwtrmpj5OJOLoyQpLo&_nc_ht=scontent.fmvd4-1.fna&oh=6740ca96adc44ce17f9682ae51f830ed&oe=5E561AB7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=133274814703257&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Renault",
        model:"Sandero",
        price:"10990",
        data: {
            km:"",
            year:"2016",
            fuel:"Nafta",
            equip:["Full"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71100677_133274361369969_614088647251066880_n.jpg?_nc_cat=102&_nc_oc=AQnL8x1bYVAtoHeloWMbLClk4rfaJK7H2EVbRBruV9LMJoz_Fbr0Nu5q0xC3fZkPJ9c&_nc_ht=scontent.fmvd4-1.fna&oh=7ae6d4818d862a74e032e6251ffa28f3&oe=5E27B3B8',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=133274464703292&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Fiat",
        model:"Palio",
        price:"5300",
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Std"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71110786_132475944783144_3259001221196808192_n.jpg?_nc_cat=111&_nc_oc=AQl_x-ftDluABkD7FCG08CyGbXMGeLr9hKeCcc86U7ARJnN7XdI0Bt6gfVIGQAV0g9I&_nc_ht=scontent.fmvd4-1.fna&oh=52d97a20f5c622e846ca52a8f03e87b4&oe=5E16E294',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=132476101449795&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Hyundai",
        model:"HB20",
        price:"15500",
        data: {
            km:"13000",
            year:"2017",
            fuel:"Nafta",
            equip:["Full"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70725500_132052134825525_8027266070605725696_n.jpg?_nc_cat=109&_nc_oc=AQmp1cG6mptQlW8X07b_ELtut-PnHPx6UyGjj0v-pSbLt6s-2Nl6sZ-i2SIGgAvLkHY&_nc_ht=scontent.fmvd4-1.fna&oh=72771498ef224d6821bb1843785b62b4&oe=5E554284',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=132052198158852&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Nissan",
        model:"Tiida Automatico",
        price:"",
        data: {
            km:"",
            year:"2008",
            fuel:"Nafta",
            equip:["Full"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70623265_131687438195328_5308303497358213120_n.jpg?_nc_cat=106&_nc_oc=AQm3Olo_kXjYLrEC8BhYl2MnbSmdHILwYkUommJHAceRzEL-wz73YTSwnIaRn_IyEiU&_nc_ht=scontent.fmvd4-1.fna&oh=38e659d986a3e39330ff58db2ac27a22&oe=5E516937',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131687458195326&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Suzuki",
        model:"Grand Vitara Automatica",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Full"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71962366_131687151528690_7021330312646885376_n.jpg?_nc_cat=110&_nc_oc=AQnXl9H7oNQcQnbcG5Qm7GVAkp7tR2knOaeIQnjepKEZ2-HknTA8VksdSVL1-YdIaDc&_nc_ht=scontent.fmvd4-1.fna&oh=20a2e9326b636acf8652c2f4ed47de86&oe=5E1B57CF',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131687261528679&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Volkwagen",
        model:"Amarok",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70978483_131674411529964_1170762648430575616_n.jpg?_nc_cat=109&_nc_oc=AQnam9IcK9rGQKy28ReeX6hemtZiSS6k-s3QrKdNcXU0daLBQmfGefNF1IhC9ujpz0I&_nc_ht=scontent.fmvd4-1.fna&oh=7c6b35e5f39020e6d3728221aaf802d8&oe=5E1F46D4',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131674524863286&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Vokwagen",
        model:"Gol G2",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70808883_131248214905917_2425634315728584704_n.jpg?_nc_cat=108&_nc_oc=AQn_N6L8fu2UzJeKaIjrfMY9oeHtmy8k427z-COVEj0_eQoHkFjkRr6aW4qxHIxt4r8&_nc_ht=scontent.fmvd4-1.fna&oh=6a50274631da9245328292a772da93a9&oe=5E59FDF7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131248354905903&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Ford",
        model:"Ranger 2.3 Nafta",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70240401_129025555128183_1173720059831386112_n.jpg?_nc_cat=100&_nc_oc=AQmy6_GxfWog2azr3suSrZkCrupAbjkWBEs-10kW7afVEx9BuEGfl7SbeuMCbhsMu-w&_nc_ht=scontent.fmvd4-1.fna&oh=70831f65c084e4806cd5f0cf97bbb9cc&oe=5E235F69',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=129025615128177&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Nissan",
        model:"Note",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70406336_128755151821890_6752391864436916224_n.jpg?_nc_cat=107&_nc_oc=AQmnWJO_0aLQgaW7yqJwIKglghZezeG6fUh2X3wWwSn_AnzXqa77DT9DTVrZ3yGOEAg&_nc_ht=scontent.fmvd4-1.fna&oh=f62bab9c1e79dc6e8fca4f801b78c49a&oe=5E601F7B',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=128755195155219&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Mercedes Benz",
        model:"E300",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70779351_128682041829201_1197161995627921408_n.jpg?_nc_cat=106&_nc_oc=AQlDShZPwk1QENgY3CzLBCZRhZsgRkdXitt_G54Jzei6tIk7dQlOIvMqhFhcTN8gj8g&_nc_ht=scontent.fmvd4-1.fna&oh=18c419bcee679487afcc0243dce1bb7c&oe=5E606932',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=128682278495844&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Fiat",
        model:"Strada",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70903578_128681841829221_6969016618844160000_n.jpg?_nc_cat=108&_nc_oc=AQneAIqqrZM27mJgUp14_ZP15icoJRItp2Ams_jrG1YfB2FG4Xb1m4dCn0ChOVha7YQ&_nc_ht=scontent.fmvd4-1.fna&oh=3a26fde86c6ac9b3b62af12dc09adac5&oe=5E58EE01',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=128681941829211&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Hyundai",
        model:"Accent Hatchback",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70682430_125518015478937_8673257262485078016_n.jpg?_nc_cat=102&_nc_oc=AQke5vxJ2CayFf557Wd0fzXTHHH7ticKBSBIbYeo-jlxTcZ4vOBjZJK6Ybv560mSJS8&_nc_ht=scontent.fmvd4-1.fna&oh=9c33ad02e74f2e3c0dabfc6c0109f49e&oe=5E2470DA',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=125518142145591&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Nissan",
        model:"Frontier NP300 Nafta",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69854457_125510525479686_720428571461419008_n.jpg?_nc_cat=106&_nc_oc=AQmNyHtlWAUvQ9fGRDOkSv6IYPcTizENpjDusExw62IwsYwps0hshPRNvGMYgMZYFXs&_nc_ht=scontent.fmvd4-1.fna&oh=725b58570a62a973561d2516083cd791&oe=5E25B072',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=125510658813006&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Peugeot",
        model:"Bipper",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70329059_125491592148246_2631319775548014592_n.jpg?_nc_cat=102&_nc_oc=AQmuZ45KATe6ECLj1RXpMZadCSpxQomrX86Q77LvfJ58TFmfHpb_gF80Uz5DpAqbz0M&_nc_ht=scontent.fmvd4-1.fna&oh=e114e5f357349ad21c0992c544092f70&oe=5E58D74A',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=125491675481571&id=107603400603732&__tn__=-R'
    },
    {
        brand:"BMW",
        model:"530d Diesel",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69685535_122959775734761_5198844572192473088_n.jpg?_nc_cat=100&_nc_oc=AQkK2kTq0q5QR-nWzmmGWcNDa5DR1O_2uWmerp5ljjt6Xxesa8bqikstgV543NOgRGM&_nc_ht=scontent.fmvd4-1.fna&oh=86a4dc988f598294b904b5a90c18a128&oe=5E23559C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=122959882401417&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Geely",
        model:"Emgrand",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69038255_118943219469750_6812587450293026816_n.jpg?_nc_cat=100&_nc_oc=AQkl-ihptijI6CBarlE-T2xxDpNj_VAhnxMUg8KuFqTXTmn7PtDtFD9zDTi4WM7ER1M&_nc_ht=scontent.fmvd4-1.fna&oh=c8ec9ae5c68f0a6d709d00f37aacaa7f&oe=5E27C189',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118943272803078&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Volkswagen",
        model:"Saveiro G3",
        price:"7900",
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Std"],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69675620_118942422803163_2708856953286688768_n.jpg?_nc_cat=107&_nc_oc=AQmM7Ahr6KatkMI_wyIs-Rn6EMAUiqY0VlwB7Owr3IMsjubb7KEeScgy8oG5rzbHr0A&_nc_ht=scontent.fmvd4-1.fna&oh=8b6f9acb94f28ba6f65b638748fa240f&oe=5E197FE1',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118942482803157&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Citroen",
        model:"ZX Vulcan",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69880044_118938192803586_712738776115314688_n.jpg?_nc_cat=103&_nc_oc=AQm6f51pVqC95sI7r_q6iWHAObajLlLwSyXOelBMjtvpAMIMcGY9dGKn-PpolBwUDUw&_nc_ht=scontent.fmvd4-1.fna&oh=e6b65cc13ff9f8e694ff05c475e05e74&oe=5E21C8E5',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118938262803579&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Ford",
        model:"Escort MK3",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69635778_118937332803672_3676110376056913920_n.jpg?_nc_cat=108&_nc_oc=AQna2MqMMYlOW4hALd42VpShTIcrlDysAVSzcF9-Lq6Qm-u3rvD_som4ECotiDGjI0Q&_nc_ht=scontent.fmvd4-1.fna&oh=4fa72454f730d9edaed542d71c828d80&oe=5E188105',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118937409470331&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Hyundai",
        model:"Scoupe",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69318714_118936692803736_4388004396529614848_n.jpg?_nc_cat=104&_nc_oc=AQkUS3c6vKPkwxdzflJFuVzJC7wHncN_q-nRQ-NPewOe_NDmIRd6CQWjWZMP9SrjwI0&_nc_ht=scontent.fmvd4-1.fna&oh=e539b77f2b623f675237305094849190&oe=5E5330CB',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118936746137064&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Volkwagen",
        model:"Vento GLI",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68785497_110332176997521_3308429830847987712_n.jpg?_nc_cat=102&_nc_oc=AQnTE5-jZkHdytwaA47SeifqefDweHuLZdC_nAFWPBI2Bp2y08XGnBBqzYXCzbiUy1o&_nc_ht=scontent.fmvd4-1.fna&oh=2204defea97f12837b80c87f65e0cecb&oe=5E1EA644',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=110332296997509&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Ford",
        model:"Ranger Limited 3.0 Diesel",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68724024_107734293923976_5303960198795231232_n.jpg?_nc_cat=107&_nc_oc=AQnVGoEvUuO8B7mBKWTFpoFRIlF6OI8VRy07mRn9KZg7xc13R-NfMSMqslIn4hVqc3E&_nc_ht=scontent.fmvd4-1.fna&oh=4941a3200a90fbeb1faf613724a8180b&oe=5E55900C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=107734687257270&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Chevrolet",
        model:"Camaro RS",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68832639_107732350590837_3226455651244834816_n.jpg?_nc_cat=111&_nc_oc=AQkuS0D4QQqcOofIZ8OfQusSLZFvUjMKW5lIpmxSpuHVgUIk6bfqnGpFZFlz0wdRGcw&_nc_ht=scontent.fmvd4-1.fna&oh=4f4079014a6ec8a7016db6fc20e30918&oe=5E564D96',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=107733407257398&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Volkwagen",
        model:"Quantum Diesel",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69309579_117548942942511_7544604955915583488_n.jpg?_nc_cat=108&_nc_oc=AQnepjo40D-C-ri1dE2X5ENHUPXSfrCyexiaknyk92ysNAOMmZ0IitaxHL7qAPL0zWM&_nc_ht=scontent.fmvd4-1.fna&oh=c054298b8a3fe3febab151a0729c23d1&oe=5E1E99DC',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=117549016275837&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Peugeot",
        model:"308",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69858617_118780632819342_3213964052397031424_n.jpg?_nc_cat=110&_nc_oc=AQkBpiODInwuDSynUnlUAuQozxJ4jupgIAUFEcwkrsyu6HDq0uPMfE08cBSSN_JEP3w&_nc_ht=scontent.fmvd4-1.fna&oh=304a15cd261e88402c01a12c2d340d4d&oe=5E552623',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118780646152674&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Ford",
        model:"Ranger Limited 3.0 Diesel",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69252846_117551452942260_6268575493738463232_n.jpg?_nc_cat=101&_nc_oc=AQnfyY6-GjGmGedkunlihFCz5vpk4l_7cbTdyDI6k_1JRGZR7LpT_cITlsnBwrDQ7hs&_nc_ht=scontent.fmvd4-1.fna&oh=e465cdfebb9c32c3f99487f6d1c59dab&oe=5E2518F3',
        fbLink: 'https://www.facebook.com/107603400603732/photos/a.107727857257953/117551449608927/?type=3&__tn__=-R'
    },
    {
        brand:"Mitsubishi",
        model:"L200 Sportero",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69249265_118878736142865_7413328709282693120_n.jpg?_nc_cat=103&_nc_oc=AQk6OeRuvBIuoRJKF6n5s4Gwg6zrBi7L9g0LUgD17Lgw6YVYrKZmHkIIkOCht0hD1GM&_nc_ht=scontent.fmvd4-1.fna&oh=b2a60f0f283fe3d3c568943e5b4c3c0d&oe=5E55F195',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118878769476195&id=107603400603732&__tn__=-R'
    },
    {
        brand:"BMW",
        model:"328i E36",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69504120_118879216142817_5521392772126343168_n.jpg?_nc_cat=102&_nc_oc=AQlpE00IA7ZNSQgRZ7GKQP4i3tk2lgr9O0Jj7lSf3WJ4zTg3DDybSZcPQgxcV8CX4tc&_nc_ht=scontent.fmvd4-1.fna&oh=af29d82c8a536b270e561456ce6c76e0&oe=5E5FF01A',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118879259476146&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Chevrolet",
        model:"Spark L",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69167067_118880886142650_790328077577093120_n.jpg?_nc_cat=108&_nc_oc=AQn0fMYR8kQagD5RFqUaOU-P92qFnK6NmQM6cbHQ5ws2bjEIwxKOUJvMBzdt8NnHiUs&_nc_ht=scontent.fmvd4-1.fna&oh=5ac9b59569e6f8b96fa65af24115a60a&oe=5E55FFF3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118880926142646&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Peugeot",
        model:"208 1.2 Fase II",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69016926_118911622806243_6810423607114596352_n.jpg?_nc_cat=107&_nc_oc=AQmDkaqphisZeJlz940OevNOAM8pNf38cMLa7OD3tmyy5L_W7SAYdjOVtG9nXwuNQ-w&_nc_ht=scontent.fmvd4-1.fna&oh=009de50dc1bf548b934857d600a93432&oe=5E6065D9',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118911656139573&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Tata",
        model:"Ecoline",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68886327_118912126139526_667062945678622720_n.jpg?_nc_cat=109&_nc_oc=AQkyToFPyb9Zf7DI4kwF8KgaF0nKdnmkKKQVCDbmzoDDCY4Au7pppEC2ebZJ39qb9Fo&_nc_ht=scontent.fmvd4-1.fna&oh=638d09fd85c15c5a4f6141d7bcc78740&oe=5E26D58A',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118912152806190&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Ford",
        model:"Taunus",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69406166_118912436139495_57372744370618368_n.jpg?_nc_cat=102&_nc_oc=AQmkE1tSAA5m9aYVOl7c6T7tprYGi8ndiBTPdMN4Sp7RVcEqX6t1GGviXEBeBVAv3Bk&_nc_ht=scontent.fmvd4-1.fna&oh=9c9a22456ed4c37cf0f22dac11e6c0fc&oe=5E62AE72',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118912479472824&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Peugeot",
        model:"3008",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69242060_118933822804023_6573456178196512768_n.jpg?_nc_cat=101&_nc_oc=AQkyun4ScvnlPOzXFFAyeXM50ALt-Dg0DXdhS9Fl_2mqRrLsEHgHk0m_3YnOzBLEC3U&_nc_ht=scontent.fmvd4-1.fna&oh=93a5c66d26555a2589c891bd90092392&oe=5E19D4B3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118933872804018&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Alfa Romeo",
        model:"146ti",
        price:"9500",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69280594_118934246137314_1883506337988476928_n.jpg?_nc_cat=101&_nc_oc=AQldipPNtFYVvdNIjAV-yTbQfdGDs93ETU_dG9Adbe5fSPxzP6Ix0ZNoleng3YhlX60&_nc_ht=scontent.fmvd4-1.fna&oh=b7437907eecbd1695a9ed5487e400f02&oe=5E573874',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118934336137305&id=107603400603732&__tn__=-R'
    },
    {
        brand:"BMW",
        model:"550i F18",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69045703_118934786137260_1432196684967837696_n.jpg?_nc_cat=111&_nc_oc=AQnLR1NDS5XqAco1itA1npyLlVMn3_be_Q8MWkLcQ-9iTOuXp4IYy-dSxXdj1Y4gD3Q&_nc_ht=scontent.fmvd4-1.fna&oh=4c03afc9323fbadb8760efa43df0d613&oe=5E16C33E',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118934829470589&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Hyndai",
        model:"H1 Diesel",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/72710532_144692700228135_1402326763677155328_n.jpg?_nc_cat=102&_nc_oc=AQn5KHNPQ89PvZun6D-ytaRJefn2ccEbG-Qunr_p-fRFSUdjZsKTvwxJulJmTrZ81xU&_nc_ht=scontent.fmvd4-1.fna&oh=ad5d7ec33b9ba1a92de203d7f2800053&oe=5E55FA5D',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144692863561452&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Faw",
        model:"Doble cabina",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73342919_144691070228298_5038229129082699776_n.jpg?_nc_cat=101&_nc_oc=AQmcCAuf9kbchQ47UlYYCzmL581wGBFCoxwXWn_iRZ-nXhRAyIp30nw7B_ohPNqNT88&_nc_ht=scontent.fmvd4-1.fna&oh=223b52b4250a6872ea302e1245cb2c02&oe=5E1A2A12',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144691160228289&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Mitsubishi",
        model:"Lancer GLXI",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75627553_144700680227337_2006675627691737088_n.jpg?_nc_cat=102&_nc_oc=AQmrQDj22N5KG0mJ_OVita5op-6xzmWcl_Ekh9XyMqE7QDGJmg5ShOZcuNI8dlNSWPc&_nc_ht=scontent.fmvd4-1.fna&oh=0d5474d55fa64c729145b8f14f486f02&oe=5E215500',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144700880227317&id=107603400603732&__xts__[0]=68.ARA1HPBEafDt0AKnz80YTJvgQIB6PGOn5oG4eiU2AMtcBCg-HQzN3dDGnyElUtb3oXh_JjdWseXddgRs4YuiTolDPEhKWKFILBQ6_69Rkkxa9zV43rFbVyIv2Ad5F_NxMUCS6m36ckiz3ldAZMCgLYBWlAnip2An44n-h-0D63oWBN2wzRZdBZigTW6Haf0M18TETvV83VfopOpWL8JmKHlBpBc5GacdQPSDjIymesACXTLfb8wNPdPYobtraPEAnKl6jxnBIViM7O02_sUjKO50J02yR5UUrtp-OODs3IBzcOpxr6yJrQuyMWsdtKa0b9c0HdhjMxawJsIZZl3B_BA&__tn__=-R'
    },
    {
        brand:"Subaru",
        model:"Impreza Automatico",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75462434_144699730227432_1788255443810779136_n.jpg?_nc_cat=107&_nc_oc=AQm95gnN5EdeLZYkG1wQawzukHAuMyVaLtflt9Kj_Xu52NxyPDCqZRLw21YWtbn2QPY&_nc_ht=scontent.fmvd4-1.fna&oh=7036251a244d6acca49544534b110daf&oe=5E5C3CB7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144699750227430&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Citroen",
        model:"AX",
        price:"3000",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73497783_146158820081523_7318263993347342336_n.jpg?_nc_cat=101&_nc_oc=AQlKzRPUV4-T_7kUD2ntmPdT9OkFeKlC9GeqfKDAwRZn4noOVCKLbO7kIHJBnjQOaWk&_nc_ht=scontent.fmvd4-1.fna&oh=41d745924848a9bb4ef10c049f966da3&oe=5E1868E9',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=146159130081492&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Nissan",
        model:"NP300 Frontier",
        price:"12900",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/76689072_145839526780119_1768663233230536704_n.jpg?_nc_cat=110&_nc_oc=AQnoqM6Mzx5z4ubxdxUtUFU6-lrMnZ1Dfrz4KDD7JN6o4ZrfFKX1lKd5FfI3U2hR5QU&_nc_ht=scontent.fmvd4-1.fna&oh=ed7fef66b4017955791187f42ae1506e&oe=5E1B91F3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=145839710113434&id=107603400603732&__tn__=-R'
    },
    {
        brand:"Citroen",
        model:"Saxo Diesel",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/76769683_145766526787419_6108737486953906176_n.jpg?_nc_cat=111&_nc_oc=AQlHgTI_JiZzhi1caKBzo9vU1doeRE8ANOGft8Isz0BJ2hCoagTVTwetW-s0s9Sjdak&_nc_ht=scontent.fmvd4-1.fna&oh=9fe4ec83f7b5d27eb951ee82d3d8a01e&oe=5E52E170',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=145766656787406&id=107603400603732&__tn__=-R'
    }
    /*{
        brand:"",
        model:"",
        price:"",
        data: {
            km:"",
            year:"",
            fuel:"",
            equip:[],
        },
        img:'',
        fbLink: ''
    },*/

];
module.exports = vehicles;
