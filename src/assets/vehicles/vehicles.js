import brands from "./brands"
const vehicles = [
    {
        brand:brands.CHE,
        model:"Sail",
        price:10500,
        data: {
            km:"45000",
            year:"2015",
            fuel:"Nafta",
            equip:["A/C","D/H"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/72827602_137415977622474_3371854089649389568_n.jpg?_nc_cat=100&_nc_oc=AQlo9eM-o0wMJ6x9eCe3-5amSLWlwoLofQtvODNj1Y5RBUFVkczz4qUY3oFzs89G8aY&_nc_ht=scontent.fmvd4-1.fna&oh=2ed3a61a6a2daff09e1a0e574a2e0c88&oe=5E28C5C4',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=137416320955773&id=107603400603732&__xts__%5B0%5D=68.ARDRi1oQN4JZy8j3dr5R5t_hn6sJr317_I0N7vYMFbneNTmIf80T71wbGWKl7h0wvt64mbdQ_jfRNrCRuKRgjxmDVSCTl8dDx_3O5MJSw8oFSu1TC4VBC46fxEBHgm_749tw1q4Q6RCJUilFgzaKCs4N2FzrdR3UdWWNbwMZSbJHKFva7zRNM6DvKDTQIPn27N0n4ySFbcCfjZjXfK9ILnW6CfGHAVulEYaddWM-CZUmdiiqdiOUP__--UriYzSTRrN_2HXLbh_1Efp-YJKBPGGLYUwhEzuLOilSFeXTGFxcr4rHEvfN3uefUhCEDU4ufpVzHq9xqa51khqYEF_xKVY&__tn__=-R'
        
    },
    {
        brand:brands.CIT,
        model:"ZX Diesel",
        price:4800,
        data: {
            km:"",
            year:"1997",
            fuel:"Diesel",
            equip:["A/C","D/H"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75462465_143949203635818_3096166323672055808_n.jpg?_nc_cat=102&_nc_oc=AQnGHJ48k1zzGZfL_FZchhLiGGguNqO-rPOiEtqzl1Mzt63GWsgRiAwhYGhVzBtGevg&_nc_ht=scontent.fmvd4-1.fna&oh=6a26719296edd0b1ba3b1f0a5cf8594b&oe=5E18686C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=143949380302467&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Gol G2",
        price:5500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/74368460_142966957067376_2598619299010576384_n.jpg?_nc_cat=107&_nc_oc=AQk2osfxFhXRLyV8olW0v4cKPiZI5JRUAxhlv6qYWlr_wtEu6dNQlZUK0h3ddAac8GY&_nc_ht=scontent.fmvd4-1.fna&oh=fe676393f4fd13c02b253e95fba30ffb&oe=5E5FE73C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=142967127067359&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.REN,
        model:"19",
        price:3900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:["Std"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73533050_142966787067393_6370625716282720256_n.jpg?_nc_cat=111&_nc_oc=AQm-mUCKQymRTo896NLnhppkObEbZ2wcX29bIvw7TUNPKkEB9tRabpPSGhUGnFCECvI&_nc_ht=scontent.fmvd4-1.fna&oh=2c78a43714b55c18b145fc389fc6656e&oe=5E60922C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=142966840400721&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Corsa II",
        price:7900,
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["A/C", "D/H"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73105946_138701627493909_7972913560122556416_n.jpg?_nc_cat=105&_nc_oc=AQm7kYFMsx5ZTMnDRxNwPlaCGtKjemrQUbKSEJoQawtVhfH-LkGY2Cpg8UztGPSZwDM&_nc_ht=scontent.fmvd4-1.fna&oh=d1763305306a3136d9d519f6a1facae6&oe=5E517BAF',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=138701747493897&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.KIA,
        model:"Carnival Diesel Automatica",
        price:12900,
        data: {
            km:"",
            year:"2001",
            fuel:"Diesel",
            equip:["Superfull"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71954533_137416467622425_514216535766597632_n.jpg?_nc_cat=111&_nc_oc=AQnnZiTk3dezCUoYWkpom4Totkl3f-p_XjMODLXL9dlPkJQsdZcHG5rpckd2uOJb2k0&_nc_ht=scontent.fmvd4-1.fna&oh=68f9cdc27e53b682e657785b749d8264&oe=5E5CD6B9',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=137416637622408&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"H100 Diesel",
        price:8900,
        data: {
            km:"",
            year:"",
            fuel:"Diesel",
            equip:["Full", "15 pasajeros"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71927528_137115384319200_6640835333078384640_n.jpg?_nc_cat=100&_nc_oc=AQlX5j6tcTjOLDz-vXgqB_y2pwq-ndQJrGXBx2HPx5gX0L2-_PW3XmQalG_GNY6VVO4&_nc_ht=scontent.fmvd4-1.fna&oh=5b788ac4600b5c6989e1be13ed502d40&oe=5E1760C4',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=137115464319192&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CIT,
        model:"Berlingo Furgon Nafta",
        price:6000,
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71170497_133274698036602_1445040939285348352_n.jpg?_nc_cat=101&_nc_oc=AQmNNMTbhQYDP9KDUAdUXdpHgVn-4iYyHU3eA6KI9FZY2ChzGRwtrmpj5OJOLoyQpLo&_nc_ht=scontent.fmvd4-1.fna&oh=6740ca96adc44ce17f9682ae51f830ed&oe=5E561AB7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=133274814703257&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.REN,
        model:"Sandero",
        price:10990,
        data: {
            km:"",
            year:"2016",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71100677_133274361369969_614088647251066880_n.jpg?_nc_cat=102&_nc_oc=AQnL8x1bYVAtoHeloWMbLClk4rfaJK7H2EVbRBruV9LMJoz_Fbr0Nu5q0xC3fZkPJ9c&_nc_ht=scontent.fmvd4-1.fna&oh=7ae6d4818d862a74e032e6251ffa28f3&oe=5E27B3B8',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=133274464703292&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FIA,
        model:"Palio",
        price:5300,
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Std"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/71110786_132475944783144_3259001221196808192_n.jpg?_nc_cat=111&_nc_oc=AQl_x-ftDluABkD7FCG08CyGbXMGeLr9hKeCcc86U7ARJnN7XdI0Bt6gfVIGQAV0g9I&_nc_ht=scontent.fmvd4-1.fna&oh=52d97a20f5c622e846ca52a8f03e87b4&oe=5E16E294',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=132476101449795&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"HB20",
        price:15500,
        data: {
            km:"13000",
            year:"2017",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70725500_132052134825525_8027266070605725696_n.jpg?_nc_cat=109&_nc_oc=AQmp1cG6mptQlW8X07b_ELtut-PnHPx6UyGjj0v-pSbLt6s-2Nl6sZ-i2SIGgAvLkHY&_nc_ht=scontent.fmvd4-1.fna&oh=72771498ef224d6821bb1843785b62b4&oe=5E554284',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=132052198158852&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"Tiida Automatico",
        price:0,
        data: {
            km:"",
            year:"2008",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70623265_131687438195328_5308303497358213120_n.jpg?_nc_cat=106&_nc_oc=AQm3Olo_kXjYLrEC8BhYl2MnbSmdHILwYkUommJHAceRzEL-wz73YTSwnIaRn_IyEiU&_nc_ht=scontent.fmvd4-1.fna&oh=38e659d986a3e39330ff58db2ac27a22&oe=5E516937',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131687458195326&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Amarok",
        price:17500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70978483_131674411529964_1170762648430575616_n.jpg?_nc_cat=109&_nc_oc=AQnam9IcK9rGQKy28ReeX6hemtZiSS6k-s3QrKdNcXU0daLBQmfGefNF1IhC9ujpz0I&_nc_ht=scontent.fmvd4-1.fna&oh=7c6b35e5f39020e6d3728221aaf802d8&oe=5E1F46D4',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131674524863286&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Gol G2",
        price:5500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70808883_131248214905917_2425634315728584704_n.jpg?_nc_cat=108&_nc_oc=AQn_N6L8fu2UzJeKaIjrfMY9oeHtmy8k427z-COVEj0_eQoHkFjkRr6aW4qxHIxt4r8&_nc_ht=scontent.fmvd4-1.fna&oh=6a50274631da9245328292a772da93a9&oe=5E59FDF7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=131248354905903&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Ranger 2.3 Nafta",
        price:14500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70240401_129025555128183_1173720059831386112_n.jpg?_nc_cat=100&_nc_oc=AQmy6_GxfWog2azr3suSrZkCrupAbjkWBEs-10kW7afVEx9BuEGfl7SbeuMCbhsMu-w&_nc_ht=scontent.fmvd4-1.fna&oh=70831f65c084e4806cd5f0cf97bbb9cc&oe=5E235F69',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=129025615128177&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"Note",
        price:14500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70406336_128755151821890_6752391864436916224_n.jpg?_nc_cat=107&_nc_oc=AQmnWJO_0aLQgaW7yqJwIKglghZezeG6fUh2X3wWwSn_AnzXqa77DT9DTVrZ3yGOEAg&_nc_ht=scontent.fmvd4-1.fna&oh=f62bab9c1e79dc6e8fca4f801b78c49a&oe=5E601F7B',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=128755195155219&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.MER,
        model:"E300",
        price:36900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70779351_128682041829201_1197161995627921408_n.jpg?_nc_cat=106&_nc_oc=AQlDShZPwk1QENgY3CzLBCZRhZsgRkdXitt_G54Jzei6tIk7dQlOIvMqhFhcTN8gj8g&_nc_ht=scontent.fmvd4-1.fna&oh=18c419bcee679487afcc0243dce1bb7c&oe=5E606932',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=128682278495844&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FIA,
        model:"Strada",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70903578_128681841829221_6969016618844160000_n.jpg?_nc_cat=108&_nc_oc=AQneAIqqrZM27mJgUp14_ZP15icoJRItp2Ams_jrG1YfB2FG4Xb1m4dCn0ChOVha7YQ&_nc_ht=scontent.fmvd4-1.fna&oh=3a26fde86c6ac9b3b62af12dc09adac5&oe=5E58EE01',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=128681941829211&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"Accent Hatchback",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70682430_125518015478937_8673257262485078016_n.jpg?_nc_cat=102&_nc_oc=AQke5vxJ2CayFf557Wd0fzXTHHH7ticKBSBIbYeo-jlxTcZ4vOBjZJK6Ybv560mSJS8&_nc_ht=scontent.fmvd4-1.fna&oh=9c33ad02e74f2e3c0dabfc6c0109f49e&oe=5E2470DA',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=125518142145591&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"Frontier NP300 Nafta",
        price:11500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69854457_125510525479686_720428571461419008_n.jpg?_nc_cat=106&_nc_oc=AQmNyHtlWAUvQ9fGRDOkSv6IYPcTizENpjDusExw62IwsYwps0hshPRNvGMYgMZYFXs&_nc_ht=scontent.fmvd4-1.fna&oh=725b58570a62a973561d2516083cd791&oe=5E25B072',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=125510658813006&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"Bipper",
        price:7900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/70329059_125491592148246_2631319775548014592_n.jpg?_nc_cat=102&_nc_oc=AQmuZ45KATe6ECLj1RXpMZadCSpxQomrX86Q77LvfJ58TFmfHpb_gF80Uz5DpAqbz0M&_nc_ht=scontent.fmvd4-1.fna&oh=e114e5f357349ad21c0992c544092f70&oe=5E58D74A',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=125491675481571&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.BMW,
        model:"530d Diesel",
        price:19500,
        data: {
            km:"",
            year:"",
            fuel:"Diesel",
            equip:["Extrafull"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69685535_122959775734761_5198844572192473088_n.jpg?_nc_cat=100&_nc_oc=AQkK2kTq0q5QR-nWzmmGWcNDa5DR1O_2uWmerp5ljjt6Xxesa8bqikstgV543NOgRGM&_nc_ht=scontent.fmvd4-1.fna&oh=86a4dc988f598294b904b5a90c18a128&oe=5E23559C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=122959882401417&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.GEE,
        model:"Emgrand",
        price:9000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69038255_118943219469750_6812587450293026816_n.jpg?_nc_cat=100&_nc_oc=AQkl-ihptijI6CBarlE-T2xxDpNj_VAhnxMUg8KuFqTXTmn7PtDtFD9zDTi4WM7ER1M&_nc_ht=scontent.fmvd4-1.fna&oh=c8ec9ae5c68f0a6d709d00f37aacaa7f&oe=5E27C189',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118943272803078&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Saveiro G3",
        price:7900,
        data: {
            km:"",
            year:"",
            fuel:"Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69675620_118942422803163_2708856953286688768_n.jpg?_nc_cat=107&_nc_oc=AQmM7Ahr6KatkMI_wyIs-Rn6EMAUiqY0VlwB7Owr3IMsjubb7KEeScgy8oG5rzbHr0A&_nc_ht=scontent.fmvd4-1.fna&oh=8b6f9acb94f28ba6f65b638748fa240f&oe=5E197FE1',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118942482803157&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CIT,
        model:"ZX Vulcan",
        price:6500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69880044_118938192803586_712738776115314688_n.jpg?_nc_cat=103&_nc_oc=AQm6f51pVqC95sI7r_q6iWHAObajLlLwSyXOelBMjtvpAMIMcGY9dGKn-PpolBwUDUw&_nc_ht=scontent.fmvd4-1.fna&oh=e6b65cc13ff9f8e694ff05c475e05e74&oe=5E21C8E5',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118938262803579&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Escort MK3",
        price:3000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69635778_118937332803672_3676110376056913920_n.jpg?_nc_cat=108&_nc_oc=AQna2MqMMYlOW4hALd42VpShTIcrlDysAVSzcF9-Lq6Qm-u3rvD_som4ECotiDGjI0Q&_nc_ht=scontent.fmvd4-1.fna&oh=4fa72454f730d9edaed542d71c828d80&oe=5E188105',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118937409470331&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"Scoupe",
        price:6000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69318714_118936692803736_4388004396529614848_n.jpg?_nc_cat=104&_nc_oc=AQkUS3c6vKPkwxdzflJFuVzJC7wHncN_q-nRQ-NPewOe_NDmIRd6CQWjWZMP9SrjwI0&_nc_ht=scontent.fmvd4-1.fna&oh=e539b77f2b623f675237305094849190&oe=5E5330CB',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118936746137064&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Vento GLI",
        price:23500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68785497_110332176997521_3308429830847987712_n.jpg?_nc_cat=102&_nc_oc=AQnTE5-jZkHdytwaA47SeifqefDweHuLZdC_nAFWPBI2Bp2y08XGnBBqzYXCzbiUy1o&_nc_ht=scontent.fmvd4-1.fna&oh=2204defea97f12837b80c87f65e0cecb&oe=5E1EA644',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=110332296997509&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Ranger Limited 3.0 Diesel",
        price:14500,
        data: {
            km:"",
            year:"",
            fuel:"Full",
            equip:["Extrafull"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68724024_107734293923976_5303960198795231232_n.jpg?_nc_cat=107&_nc_oc=AQnVGoEvUuO8B7mBKWTFpoFRIlF6OI8VRy07mRn9KZg7xc13R-NfMSMqslIn4hVqc3E&_nc_ht=scontent.fmvd4-1.fna&oh=4941a3200a90fbeb1faf613724a8180b&oe=5E55900C',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=107734687257270&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Camaro RS",
        price:48900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68832639_107732350590837_3226455651244834816_n.jpg?_nc_cat=111&_nc_oc=AQkuS0D4QQqcOofIZ8OfQusSLZFvUjMKW5lIpmxSpuHVgUIk6bfqnGpFZFlz0wdRGcw&_nc_ht=scontent.fmvd4-1.fna&oh=4f4079014a6ec8a7016db6fc20e30918&oe=5E564D96',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=107733407257398&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Quantum Diesel",
        price:4500,
        data: {
            km:"",
            year:"",
            fuel:"Diesel",
            equip:["Full"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69309579_117548942942511_7544604955915583488_n.jpg?_nc_cat=108&_nc_oc=AQnepjo40D-C-ri1dE2X5ENHUPXSfrCyexiaknyk92ysNAOMmZ0IitaxHL7qAPL0zWM&_nc_ht=scontent.fmvd4-1.fna&oh=c054298b8a3fe3febab151a0729c23d1&oe=5E1E99DC',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=117549016275837&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"308",
        price:12000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69858617_118780632819342_3213964052397031424_n.jpg?_nc_cat=110&_nc_oc=AQkBpiODInwuDSynUnlUAuQozxJ4jupgIAUFEcwkrsyu6HDq0uPMfE08cBSSN_JEP3w&_nc_ht=scontent.fmvd4-1.fna&oh=304a15cd261e88402c01a12c2d340d4d&oe=5E552623',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118780646152674&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Ranger Limited 3.0 Diesel",
        price:13000,
        data: {
            km:"",
            year:"",
            fuel:"Fuel",
            equip:["Full"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69252846_117551452942260_6268575493738463232_n.jpg?_nc_cat=101&_nc_oc=AQnfyY6-GjGmGedkunlihFCz5vpk4l_7cbTdyDI6k_1JRGZR7LpT_cITlsnBwrDQ7hs&_nc_ht=scontent.fmvd4-1.fna&oh=e465cdfebb9c32c3f99487f6d1c59dab&oe=5E2518F3',
        fbLink: 'https://www.facebook.com/107603400603732/photos/a.107727857257953/117551449608927/?type=3&__tn__=-R'
    },
    {
        brand:brands.MIT,
        model:"L200 Sportero",
        price:19000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69249265_118878736142865_7413328709282693120_n.jpg?_nc_cat=103&_nc_oc=AQk6OeRuvBIuoRJKF6n5s4Gwg6zrBi7L9g0LUgD17Lgw6YVYrKZmHkIIkOCht0hD1GM&_nc_ht=scontent.fmvd4-1.fna&oh=b2a60f0f283fe3d3c568943e5b4c3c0d&oe=5E55F195',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118878769476195&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.BMW,
        model:"328i E36",
        price:15900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69504120_118879216142817_5521392772126343168_n.jpg?_nc_cat=102&_nc_oc=AQlpE00IA7ZNSQgRZ7GKQP4i3tk2lgr9O0Jj7lSf3WJ4zTg3DDybSZcPQgxcV8CX4tc&_nc_ht=scontent.fmvd4-1.fna&oh=af29d82c8a536b270e561456ce6c76e0&oe=5E5FF01A',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118879259476146&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Spark L",
        price:7500,
        data: {
            km:"",
            year:"2011",
            fuel: "Nafta",
            equip:["Semifull"],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69167067_118880886142650_790328077577093120_n.jpg?_nc_cat=108&_nc_oc=AQn0fMYR8kQagD5RFqUaOU-P92qFnK6NmQM6cbHQ5ws2bjEIwxKOUJvMBzdt8NnHiUs&_nc_ht=scontent.fmvd4-1.fna&oh=5ac9b59569e6f8b96fa65af24115a60a&oe=5E55FFF3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118880926142646&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"208 1.2 Fase II",
        price:12500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69016926_118911622806243_6810423607114596352_n.jpg?_nc_cat=107&_nc_oc=AQmDkaqphisZeJlz940OevNOAM8pNf38cMLa7OD3tmyy5L_W7SAYdjOVtG9nXwuNQ-w&_nc_ht=scontent.fmvd4-1.fna&oh=009de50dc1bf548b934857d600a93432&oe=5E6065D9',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118911656139573&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.TAT,
        model:"Ecoline",
        price:4800,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/68886327_118912126139526_667062945678622720_n.jpg?_nc_cat=109&_nc_oc=AQkyToFPyb9Zf7DI4kwF8KgaF0nKdnmkKKQVCDbmzoDDCY4Au7pppEC2ebZJ39qb9Fo&_nc_ht=scontent.fmvd4-1.fna&oh=638d09fd85c15c5a4f6141d7bcc78740&oe=5E26D58A',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118912152806190&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Taunus",
        price:4000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69406166_118912436139495_57372744370618368_n.jpg?_nc_cat=102&_nc_oc=AQmkE1tSAA5m9aYVWN7c6T7tprYGi8ndiBTPdMN4Sp7RVcEqX6t1GGviXEBeBVAv3Bk&_nc_ht=scontent.fmvd4-1.fna&oh=9c9a22456ed4c37cf0f22dac11e6c0fc&oe=5E62AE72',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118912479472824&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"3008",
        price:14900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69242060_118933822804023_6573456178196512768_n.jpg?_nc_cat=101&_nc_oc=AQkyun4ScvnlPOzXFFAyeXM50ALt-Dg0DXdhS9Fl_2mqRrLsEHgHk0m_3YnOzBLEC3U&_nc_ht=scontent.fmvd4-1.fna&oh=93a5c66d26555a2589c891bd90092392&oe=5E19D4B3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118933872804018&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.ALF,
        model:"146ti",
        price:7500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69280594_118934246137314_1883506337988476928_n.jpg?_nc_cat=101&_nc_oc=AQldipPNtFYVvdNIjAV-yTbQfdGDs93ETU_dG9Adbe5fSPxzP6Ix0ZNoleng3YhlX60&_nc_ht=scontent.fmvd4-1.fna&oh=b7437907eecbd1695a9ed5487e400f02&oe=5E573874',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118934336137305&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.BMW,
        model:"550i F18",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/69045703_118934786137260_1432196684967837696_n.jpg?_nc_cat=111&_nc_oc=AQnLR1NDS5XqAco1itA1npyLlVMn3_be_Q8MWkLcQ-9iTOuXp4IYy-dSxXdj1Y4gD3Q&_nc_ht=scontent.fmvd4-1.fna&oh=4c03afc9323fbadb8760efa43df0d613&oe=5E16C33E',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=118934829470589&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"H1 Diesel",
        price:17900,
        data: {
            km:"",
            year:"2009",
            fuel:"Diesel",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/72710532_144692700228135_1402326763677155328_n.jpg?_nc_cat=102&_nc_oc=AQn5KHNPQ89PvZun6D-ytaRJefn2ccEbG-Qunr_p-fRFSUdjZsKTvwxJulJmTrZ81xU&_nc_ht=scontent.fmvd4-1.fna&oh=ad5d7ec33b9ba1a92de203d7f2800053&oe=5E55FA5D',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144692863561452&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FAW,
        model:"Doble cabina",
        price:6500,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73342919_144691070228298_5038229129082699776_n.jpg?_nc_cat=101&_nc_oc=AQmcCAuf9kbchQ47UlYYCzmL581wGBFCoxwXWn_iRZ-nXhRAyIp30nw7B_ohPNqNT88&_nc_ht=scontent.fmvd4-1.fna&oh=223b52b4250a6872ea302e1245cb2c02&oe=5E1A2A12',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144691160228289&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.MIT,
        model:"Lancer GLXI",
        price:9000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75627553_144700680227337_2006675627691737088_n.jpg?_nc_cat=102&_nc_oc=AQmrQDj22N5KG0mJ_OVita5op-6xzmWcl_Ekh9XyMqE7QDGJmg5ShOZcuNI8dlNSWPc&_nc_ht=scontent.fmvd4-1.fna&oh=0d5474d55fa64c729145b8f14f486f02&oe=5E215500',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144700880227317&id=107603400603732&__xts__[0]=68.ARA1HPBEafDt0AKnz80YTJvgQIB6PGOn5oG4eiU2AMtcBCg-HQzN3dDGnyElUtb3oXh_JjdWseXddgRs4YuiTolDPEhKWKFILBQ6_69Rkkxa9zV43rFbVyIv2Ad5F_NxMUCS6m36ckiz3ldAZMCgLYBWlAnip2An44n-h-0D63oWBN2wzRZdBZigTW6Haf0M18TETvV83VfopOpWL8JmKHlBpBc5GacdQPSDjIymesACXTLfb8wNPdPYobtraPEAnKl6jxnBIViM7O02_sUjKO50J02yR5UUrtp-OODs3IBzcOpxr6yJrQuyMWsdtKa0b9c0HdhjMxawJsIZZl3B_BA&__tn__=-R'
    },
    {
        brand:brands.SUB,
        model:"Impreza Automatico",
        price:7000,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75462434_144699730227432_1788255443810779136_n.jpg?_nc_cat=107&_nc_oc=AQm95gnN5EdeLZYkG1wQawzukHAuMyVaLtflt9Kj_Xu52NxyPDCqZRLw21YWtbn2QPY&_nc_ht=scontent.fmvd4-1.fna&oh=7036251a244d6acca49544534b110daf&oe=5E5C3CB7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=144699750227430&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"NP300 Frontier",
        price:12900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/76689072_145839526780119_1768663233230536704_n.jpg?_nc_cat=110&_nc_oc=AQnoqM6Mzx5z4ubxdxUtUFU6-lrMnZ1Dfrz4KDD7JN6o4ZrfFKX1lKd5FfI3U2hR5QU&_nc_ht=scontent.fmvd4-1.fna&oh=ed7fef66b4017955791187f42ae1506e&oe=5E1B91F3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=145839710113434&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CIT,
        model:"Saxo Diesel",
        price:5500,
        data: {
            km:"",
            year:"",
            fuel:"Full",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/76769683_145766526787419_6108737486953906176_n.jpg?_nc_cat=111&_nc_oc=AQlHgTI_JiZzhi1caKBzo9vU1doeRE8ANOGft8Isz0BJ2hCoagTVTwetW-s0s9Sjdak&_nc_ht=scontent.fmvd4-1.fna&oh=9fe4ec83f7b5d27eb951ee82d3d8a01e&oe=5E52E170',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=145766656787406&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FIA,
        model:"Premio SL",
        price:4500,
        data: {
            km:"",
            year:"1992",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/73524657_146404806723591_7678493736665350144_n.jpg?_nc_cat=111&_nc_oc=AQm7_AjhxZ1SiiWtqRvft1poQU56y7OuqkFcKRSEf0KqVhuEgLPNySc0lAtR7VKxjzQ&_nc_ht=scontent.fmvd2-1.fna&oh=77e89609d2b1d28ad3094a68a85f3ca0&oe=5E4AA1CE',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=146404890056916&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.BMW,
        model:"328i",
        price:45900,
        data: {
            km:"",
            year:"2013",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/75380301_146460876717984_7404486913513488384_n.jpg?_nc_cat=107&_nc_oc=AQnAXVLnwjlcVG6vfmkxoMWvuJkqRZ4iPnroIvKPPuV08KNJcrwf8dXowGiAsx8_gWU&_nc_ht=scontent.fmvd2-1.fna&oh=e43b44545c46a603d83cad46608f5ed5&oe=5E1AE8B5',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=146460980051307&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.MAZ,
        model:"Tribute V6",
        price:10500,
        data: {
            km:"",
            year:"2001",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/74685212_147668766597195_3041472964584275968_n.jpg?_nc_cat=106&_nc_oc=AQnJSyPrzQq3e8vJx603H9NcED1AYYqHSjv16oosHge6pJ-wIOos7h3srrzv7PIjpQc&_nc_ht=scontent.fmvd4-1.fna&oh=84a99a68bc2ff8637ec8763e9bffd2bb&oe=5E5ECB02',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=147668839930521&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HON,
        model:"Civic EXS",
        price:11900,
        data: {
            km:"",
            year:"2009",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/74205733_147668619930543_2479109338623377408_n.jpg?_nc_cat=106&_nc_oc=AQlMmKcWpoNpL71iSyh1y_ZJ7WuKAuhYtdWqXSypzSoa5iQN21t1IN6BwYDXOBuiDJ8&_nc_ht=scontent.fmvd4-1.fna&oh=9cbfb850e51c1e8bcbaaa2514c29bb4a&oe=5E61EAEC',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=147668706597201&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Ranger XLT 3.2 Diesel",
        price:29500,
        data: {
            km:"",
            year:"2014",
            fuel:"Diesel",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75199760_147668436597228_8659066720603865088_n.jpg?_nc_cat=102&_nc_oc=AQmVK0dvA2PfvAxgTN5mFEObEDiBuufMOYp_i4qPZGZNMNQAMS8bfc5sI8gzqAr8Ajc&_nc_ht=scontent.fmvd4-1.fna&oh=980172be58488b11e077987e2f2a9d65&oe=5E4F56AB',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=147668489930556&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Montana",
        price:7000,
        data: {
            km:"",
            year:"2008",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75305233_147668099930595_1762719634148032512_n.jpg?_nc_cat=107&_nc_oc=AQkIIXedPs8e_1zGjqyLlcvWd7QR7ajlUt0uIcwp_dehKTQGRSgTsZYfnp6vAw-Oijw&_nc_ht=scontent.fmvd4-1.fna&oh=7a346830298712abec6cbe263f87f446&oe=5E5783B2',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=147668319930573&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"H1",
        price:10900,
        data: {
            km:"",
            year:"2007",
            fuel:"Diesel",
            equip:["Para 12 pasajeros"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75233815_147667969930608_2556839974573965312_n.jpg?_nc_cat=105&_nc_oc=AQnU3dMKL-DCSNJufMxdBdW2MdAiRg1r3TGnK9ZbXqZqPwhzMs6YhX5NvpXkIP_isGc&_nc_ht=scontent.fmvd4-1.fna&oh=575c90995066c64080522869a818a46a&oe=5E1800BA',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=147668053263933&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HON,
        model:"Civic",
        price:7000,
        data: {
            km:"",
            year:"1997",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/76648939_148286983202040_8843841590976839680_n.jpg?_nc_cat=108&_nc_oc=AQnTxyvzpbkmS2OBBTDDs_cVH4Dwo-gZM3-LJHltLg4ZD4QLrVnlyHq0Y63dxf12tq0&_nc_ht=scontent.fmvd4-1.fna&oh=1de06bc55cfb4d756737daf2f0f6eb08&oe=5E61E319',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=148287009868704&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"Partner",
        price:8000,
        data: {
            km:"",
            year:"2007",
            fuel:"Nafta",
            equip:["A/C","D/H", "Habilitada para 5 pasajeros"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75453574_148637449833660_1935451953093935104_n.jpg?_nc_cat=110&_nc_oc=AQmIQHkMuRdHlgJc0PSjw6dpj_COETrXQRg7r-XWyYa67yK08WpGXSqjjORbOMu4pn8&_nc_ht=scontent.fmvd4-1.fna&oh=a611662ce5caaf9e921c7cea8cca0509&oe=5E5A2E4E',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=148637539833651&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Meriva GL",
        price:7900,
        data: {
            km:"",
            year:"2008",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75196321_149282026435869_5845130536267284480_n.jpg?_nc_cat=101&_nc_oc=AQkBws_ZeLAMigjAFzPf2lXXenmAu4ZRlYv_rMGxRCuJO-vyTIqKOSZrwPkUMjcxTTU&_nc_ht=scontent.fmvd4-1.fna&oh=14a4f3c46b2f2a011d78ea47a6a4e466&oe=5E5A1161',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=149282089769196&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"NP300",
        price:31000,
        data: {
            km:"",
            year:"2016",
            fuel:"Diesel",
            equip:["A/C","D/H", "4x2"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/73333387_149398606424211_6064587134411472896_n.jpg?_nc_cat=106&_nc_oc=AQlGDZMr4LAaUuy_mAkGvzs0p2b0rWK1y6g6nISz8b8B1zp3oaAUZrS7nMSqNJVYmYk&_nc_ht=scontent.fmvd4-1.fna&oh=bb865b617428952dcc96fef02e0f5d98&oe=5E449F5B',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=149398703090868&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Gol G1",
        price:4200,
        data: {
            km:"",
            year:"1993",
            fuel:"Nafta",
            equip:["STD","1.8"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/75349021_149451376418934_4365850925152075776_n.jpg?_nc_cat=110&_nc_oc=AQkdLgcVj0esxffG7Mxtu5cA4BVdkiEWz87UT1lLwjtNyuCiGx5SeB2UNHFaYEwDgxU&_nc_ht=scontent.fmvd4-1.fna&oh=646beceadecd9e9862ab580866a6ad89&oe=5E3FCBD7',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=149451489752256&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Ka",
        price:4800,
        data: {
            km:"",
            year:"1998",
            fuel:"Nafta",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/s960x960/75462506_148200439877361_3748348002238988288_o.jpg?_nc_cat=103&_nc_oc=AQnGuVAkW5I_vhZtUHJTDjWL0jRtti5IqO2UvXpYk9fJxYZLSBzhlPIQ2oN5bXDbODA&_nc_ht=scontent.fmvd4-1.fna&oh=b25765799665846e31c013a05b926e91&oe=5E50067E',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=148200549877350&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FIA,
        model:"Palio",
        price:10500,
        data: {
            km:"",
            year:"2014",
            fuel:"Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/74451033_147898506574221_5301314722279194624_n.jpg?_nc_cat=108&_nc_oc=AQmrxQO2OJn4GK-nM7rV3IhIJpl0UQp0NSjngwHDso_JSmO8dBsCRydfpbCeNAs5AiQ&_nc_ht=scontent.fmvd4-1.fna&oh=ae5ac54f7a963a8d20dbc7dc33bf6139&oe=5E57D863',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=147898589907546&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"306 Break",
        price:6500,
        data: {
            km:"",
            year:"2001",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/75388234_152457662784972_3932010729485369344_n.jpg?_nc_cat=103&_nc_oc=AQmDyGuAuDORhD2gVNyC_o9ojLT_gQhjmg_-EKMS2wZhC1KqMHqHLbV8YwCQVeedYdI&_nc_ht=scontent.fmvd1-1.fna&oh=f44670a231e4dc54188b70152a59d10b&oe=5E55BA79',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=152457836118288&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"March",
        price:9900,
        data: {
            km:"",
            year:"2013",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/75439389_152099679487437_4466719816941568000_n.jpg?_nc_cat=109&_nc_eui2=AeFxCitIy7LyKpT8iKdgfpjnHzBWGZzQ5wF41KRu4KQjWE83mAa8WWs_dAlxRcWvRP2WEkc4Io1-m5KOEswWbqqafcYXE_kl6Al_TZPZMOf2ig&_nc_oc=AQmCOcPdSrPJBgDcR4Y8JeSYyOb5Wb43_ydYut7IGbIlSeB7FKlhvVqXWjnqqaxGMUc&_nc_ht=scontent.fmvd1-1.fna&oh=16c7cd385c38edacddedcf3876d48e0d&oe=5E59A410',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=152099772820761&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.ZXA,
        model:"Grand Tiger",
        price:8900,
        data: {
            km:"",
            year:"2011",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/75486124_151648509532554_2126252559503982592_n.jpg?_nc_cat=108&_nc_eui2=AeGJrqWBOt9rmliv6fE-85skf_NC78qrBI5NieL1BYeZvjViEzJcWQdyX89WJETzbE5kH_tY6ZuICiTCIUPivDXZNUGfBL0z1WaBc-eMB3tehQ&_nc_oc=AQlOQ15mn8FZrC8sT8w0hvxhvsHqiEQtowT_eWgnf7xraUYzR3x736VI7fzV8RhSSjk&_nc_ht=scontent.fmvd1-1.fna&oh=bca265b976b859fbe8e5063b9112590a&oe=5E4A7737',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=151648732865865&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FIA,
        model:"Uno Fire",
        price:4500,
        data: {
            km:"",
            year:"1995",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/72717710_150526252978113_7732887831021879296_n.jpg?_nc_cat=109&_nc_eui2=AeGV_iWO7SiiSGgkKj-jFJyqYsqVvPMMERq0gxHH_vmVRhrXPz2v0u3QwPPGd4XD8kCm2QjB0xdiNWPxc6dg_vtYzUX-8X3HhrCcA4RA8w-pxw&_nc_oc=AQn4VO-8gZyH8PsPexH9d4MgVdsWehPykrr3m0FbMmfSvvgrRCm-xbygYvkALLMhL8U&_nc_ht=scontent.fmvd1-1.fna&oh=1cb854c06201c4760bd16089fc71bc58&oe=5E8360B0',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=150526322978106&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.NIS,
        model:"X-Trail Automatica",
        price:14500,
        data: {
            km:"145000",
            year:"2008",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/78287920_154078272622911_331804150809493504_n.jpg?_nc_cat=107&_nc_ohc=VtH23hOnqpIAQnBjrxv3Hz8QTxjFoPqY7-du5g1yTwEeRwdaalWxWq6jg&_nc_ht=scontent.fmvd1-1.fna&oh=7931dce113e28870502fec3a9f4fd447&oe=5E8744F5',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=154078395956232&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Celta LT",
        price:8000,
        data: {
            km:"130000",
            year:"2013",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/73071764_153921919305213_6223548263493009408_n.jpg?_nc_cat=105&_nc_ohc=vOHIWkPCUR0AQmkTSCEIbVuT6R-bma2gHC03fKBmUvocgWGNqlCY6p8pw&_nc_ht=scontent.fmvd1-1.fna&oh=72a9a85384a07b8d1db2b3cc0228d235&oe=5E860444',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=153922125971859&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.SUZ,
        model:"Celerio Ga",
        price:10300,
        data: {
            km:"43000",
            year:"2017",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/77270475_153209952709743_4397760994563063808_n.jpg?_nc_cat=104&_nc_ohc=8hnkboTxtDUAQm6YORcCyzVo5y_SeY9DfSCj2-GqNhyWprRuDZHKuP_NQ&_nc_ht=scontent.fmvd1-1.fna&oh=cbc33ed46a848fc8e3a62cf49d03ebd0&oe=5E807294',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=153210052709733&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.KIA,
        model:"Abella",
        price:4000,
        data: {
            km:"",
            year:"1998",
            fuel: "Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/80718772_167406761290062_3153764983322443776_n.jpg?_nc_cat=103&_nc_eui2=AeEi7PAiDehUarU29OBjOspEK424a5K6Xc19C27d_Z6Xm1bdZOpkcAss8vorW1T5Fn4RZxzJwZQDugokiGdEC-CXQnOcD_ANd_gnUv9F8xaOZw&_nc_ohc=oixMMHv5TggAQnziU4U0qWlHtxVuPnYx6_3knb9z6xxvWUVIJMS9jNjRA&_nc_ht=scontent.fmvd1-1.fna&oh=7c1d3084b7fc52af63bb8566bb0a29b0&oe=5E9D90E2',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=167406777956727&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.FIA,
        model:"Panda",
        price:4000,
        data: {
            km:"",
            year:"1993",
            fuel: "Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/81540127_167406451290093_5193063357233496064_n.jpg?_nc_cat=111&_nc_eui2=AeGHnS0EtxnXM9jTTE5hvaTqsp-T3EZAWqkcykn1PY7Tfwsx2TD2ke2302I3xKtCqzlhVYmaI8Z8j0GTrUeqGr6mTFZS3dZJYrA3aMprkAHR4A&_nc_ohc=2FWBChuYR_oAQmK7uHqv0akDuMmShkrQ3U-2Hs87t0BGZJj7vB-IfQiAQ&_nc_ht=scontent.fmvd1-1.fna&oh=aada725c170999aa322a99f44a0c1b99&oe=5E9AA1F0',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=167406584623413&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Corsa PickUp Diesel",
        price:5500,
        data: {
            km:"",
            year:"1999",
            fuel: "Diesel",
            equip:["Std"],
        },
        sold: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/81616307_166666194697452_2511649870578712576_n.jpg?_nc_cat=101&_nc_ohc=wONP3S1OPDUAQmkkEptNVEvZmgii2WWRFcIpUhajs_AEMqVnnZtdc-jww&_nc_ht=scontent.fmvd1-1.fna&oh=e6b734e2157859d06d39fa500a740ecd&oe=5EAABDBA',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=166666374697434&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"Accent",
        price:4500,
        data: {
            km:"",
            year:"1995",
            fuel: "Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/81434931_165880971442641_1983443788810420224_n.jpg?_nc_cat=110&_nc_eui2=AeG-aWp_TzaX7mj88fMIVzo-aCCXbqeE06X6FfCmlXQi_-MMLgj1wN-TH2dP4m8EwWE8IAdd93eqXVUgvGOjCajBmPq-V4NyEAd4JEpixUiqVA&_nc_ohc=d2vFzyChBm4AQnDMBZGbB5Jv9Libx9NViPSEW5zRp7SAAKNB-VB_hyUdw&_nc_ht=scontent.fmvd2-1.fna&oh=d5b0c7f2c1ba55be198173bdfb807c56&oe=5EAB13E1',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=165881094775962&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HYU,
        model:"i10",
        price:8500,
        data: {
            km:"",
            year:"2009",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/79998473_164950471535691_4835111252252426240_n.jpg?_nc_cat=109&_nc_eui2=AeFIqDAkfuff5wTpWDGGRuwMJ2VK8NjctHOh5Qg6Ce-xZW9LB1rd2rlm_SUnWfLdltc_RJaURVRjC7beFEpgSl7GjiafiS25VIDTIUX9yPZLmw&_nc_ohc=m4JuqAi6jB0AQlgvmisUarFI7a_8d_j6xUPsSLmY-EJu51BvjD5K4pIeg&_nc_ht=scontent.fmvd2-1.fna&oh=6e9b87d91d36a7ab69f53f3bb2ffe207&oe=5E9EB1A8',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=164950704869001&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Spark",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/80112311_165039141526824_825179435081662464_n.jpg?_nc_cat=105&_nc_eui2=AeE59BiUWzaFQfGjfr-LClJJBoornP4nNvUj0byS0Oyx2bqfH8l_s05BvvKKjLVUCi3d_FIx1VKsyCTW2kJowA8tfvl_8iQaoFPv1HhCSmmW0w&_nc_ohc=sgcM4EeANE4AQmrElAGJte2K_CJoGik10tkHLJT9DGv1NTO_LWYTkHXSA&_nc_ht=scontent.fmvd2-1.fna&oh=b6e9de28f9500071ccfb7daebb213a22&oe=5E998E5D',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=165039261526812&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHR,
        model:"QQ",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/81159713_165039331526805_189713404158541824_n.jpg?_nc_cat=107&_nc_eui2=AeHdAmOMOQF-I7CQMQclOT3ckFPcU9L_F9IpV9UTxMt-z2GlWS1IOaVPmVVwdwHL7mpMJey3naIznzl3KnwgU2cTo0amyKXLBL6rr8pgig3QXA&_nc_ohc=6CUwPzlMeX4AQk7vaAZalYzYPxHbKnHRB7GCD0XiqWkPAF_Ahx4WmMuHw&_nc_ht=scontent.fmvd2-1.fna&oh=8ef8a75b04c28e85eb4c026d757fcf8e&oe=5E66CAA8',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=165039884860083&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.MIT,
        model:"L200",
        price:8900,
        data: {
            km:"",
            year:"1997",
            fuel: "Diesel",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/80030965_164950328202372_1047579644896739328_n.jpg?_nc_cat=106&_nc_eui2=AeEg96ktQA2Y14K6Syphv1RU8gd5QD5sbLMBLIHC7CEzKK3mTqFPczTlbCpn3SlliAxzNmHyl1qrqivnTdbgI6JpjhxqKgLycpiV5icP4kc4ug&_nc_ohc=ApmrpRuMGs4AQnFoD-Xd8M2MLDIJanKq82IGMBcm7lEj7TEC4ZxujayWA&_nc_ht=scontent.fmvd2-1.fna&oh=09704e857c9c7dc7f8e049540621da4d&oe=5EB40875',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=164950441535694&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.HON,
        model:"Ridgeline",
        price:29000,
        data: {
            km:"",
            year:"2014",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/80691889_164950188202386_3770926705443602432_n.jpg?_nc_cat=102&_nc_eui2=AeF-sWPhvgI3lzdvyn8LB973DZGwWloYcDf29-8VuW588lfE4HKsgrRpRfUwIcrYau4glr-RrHOoUKwTcAlDZ_9yH3i1aIAVjkmIh5PnE_ArpQ&_nc_ohc=YK2ZSjitgo0AQk1hqZJw0CH_PA-iW82hAC1jOVraE2lfd8VLCgFbDwZBQ&_nc_ht=scontent.fmvd2-1.fna&oh=76c2faef315fe47706827faa0314ae15&oe=5EAB19C3',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=164950274869044&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Corsa Classic",
        price:5500,
        data: {
            km:"",
            year:"1999",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/80405665_163671014996970_5244576065405321216_n.jpg?_nc_cat=102&_nc_eui2=AeF0-FbB8WDqziQKx6ahlmYPjBvFihr1O3MhWGWam3p3OQe8mtkreYKi2U_FX9n524-OA1_j7-LoK2lGIzo5hsHvHShY1huXdavTptBUnmR8XA&_nc_ohc=Kls6cxpJa-kAQlrnk5fa4BxDfcPeDM_904b8rWVK8onuy0HhDcLM3eFgw&_nc_ht=scontent.fmvd2-1.fna&oh=3ae51c1863cdc1492c517ed5206e051e&oe=5E9D2E62',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=163671181663620&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.KIN,
        model:"400cc",
        price:3500,
        data: {
            km:"989",
            year:"2010",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/s960x960/80239181_163242045039867_8260452244676149248_o.jpg?_nc_cat=102&_nc_eui2=AeF1A9CMLr0E2wCKqPAi4xTVi77cBzu-jLOtDpQxqO8km4H4VHqm4n8OnYb97MiOTk3Oe1auFJ_qBHKVKqvz4ixFArAcpC2Kr8lM5UE5lNsC2A&_nc_ohc=Ism6-b7MrJYAQk2E5b8vKloP4I2rXnFX2ml3AEDAfSe9CwKKhkl_NHqHQ&_nc_ht=scontent.fmvd2-1.fna&oh=7b22e2378f95f4b0100ea2d36cdf9aa9&oe=5EA1272D',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=163242141706524&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"206sw",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/79729038_162968168400588_3201920422933168128_n.jpg?_nc_cat=107&_nc_eui2=AeEgkvAHKyBLl17NnwrhMuky7NuiFUugnxsWt26blnx88nQJaa4EK0YhwCA1tgrDpxP0t0a5ESJ4xrgQjd2AMHfIiOE-aGAwCEBRYZW8El9khg&_nc_ohc=-F7kAgNQj_kAQkj0Hd37aYN5brA3Pcvv6SBGoOBCdZfRCfIUafVDxi0yQ&_nc_ht=scontent.fmvd2-1.fna&oh=5e9926a3d83f01a820aa2067ed592680&oe=5EAED639',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=162968265067245&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Saveiro G5",
        price:10500,
        data: {
            km:"137000",
            year:"2013",
            fuel: "Nafta",
            equip:[],
        },
        sold: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/80551973_162843461746392_6695110804733165568_n.jpg?_nc_cat=109&_nc_eui2=AeEtGltu4yjdaS0O-AMS9cdkpLblth2F2MPuOjylbH1hQ9beZP3EGXXAXtOautWGkUGqwz0EB6R44xPHRzYaOYlhkF0uOaC18bD2us6SF0tqNQ&_nc_ohc=59ps1EfOj34AQlZUzoGCsyduhMex8rpV_4vjn6ZHsBcMDDjXQbvZ2KIFQ&_nc_ht=scontent.fmvd2-1.fna&oh=af9b9294edc85a43ef8ab86a91e6c710&oe=5E97EC76',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=162843598413045&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"406",
        price:5500,
        data: {
            km:"",
            year:"",
            fuel: "Diesel",
            equip:["Full"],
        },
        sold: true,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/80272528_162630985100973_6376185474137980928_n.jpg?_nc_cat=100&_nc_eui2=AeFsT8BCdYZPcVKpMUgQ_37mD1fmNt4OFgEMZz9AsPzPR4HNlhy7_yOq2H970fwZBRXYTNeY-wb7P_jz9jBis1UhmjcWS2Aj3KzUL7IqHNa13g&_nc_ohc=RxosUpwl8p8AQkB0c77zY7iXbSmeEw5kckf7SZCBXkhHbnjBMHKg2QcZg&_nc_ht=scontent.fmvd2-1.fna&oh=1bb8c68c848b984cbc24bee2ef54e508&oe=5E91EC31',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=162631098434295&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.OPE,
        model:"Vectra",
        price:10000,
        data: {
            km:"270000",
            year:"2008",
            fuel: "Nafta",
            equip:["1.6","Extrafull", "8 airbags"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/p720x720/81105477_169428591087879_717916402140315648_o.jpg?_nc_cat=105&_nc_eui2=AeExKyIFpYQUPiyKWMb5cLHyhr9BhrbtixeFdrDaQsDKXQqI5rIJr_B0CSiMLM7bo6hCFFJSxDIC9cZVQ8Ayd-D6LA-wQ12eGZCxgb3tfOOIpw&_nc_ohc=AJ_WqxemuE4AQlLdqePXl15cg-heoKJVtxm23fD-Gmh0w1c-c5ypgFJuw&_nc_ht=scontent.fmvd2-1.fna&oh=d915f5b2455975ff4b278f8add41d318&oe=5EB0DF3B',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=169428784421193&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.BMW,
        model:"325i",
        price:28000,
        data: {
            km:"106000",
            year:"",
            fuel: "Nafta",
            equip:["Superfull"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-9/78850857_159288562101882_1478565684471398400_n.jpg?_nc_cat=102&_nc_eui2=AeHVSPHhFYBTjX0mBINkbX-9y2OGf6K6oqglWqL5LBodbjnd-1eOZiay_5M7J5o6b1eQ7vgy6pEf9YHtVX4KOzqLn8l9_7E6skupM01aPo2QOA&_nc_ohc=arO1H3uO1XoAQm8DZAfYSwf1XLOTINQowczzRo89S26FgQiUX_CJAShpQ&_nc_ht=scontent.fmvd2-1.fna&oh=db1b15e3cb50137ee7cf240b77f0e8af&oe=5E94E1E2',
        fbLink: 'https://www.facebook.com/permalink.php?story_fbid=159288712101867&id=107603400603732&__tn__=-R'
    },
    {
        brand:brands.CIT,
        model:"Saxo Diesel",
        price:4600,
        data: {
            km:"",
            year:"1999",
            fuel: "Diesel",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd4-1.fna.fbcdn.net/v/t1.0-9/82209662_171011600929578_9085839148153044992_n.jpg?_nc_cat=108&_nc_ohc=lhllHzbJd3QAQlSHWhBda__lfT4iYqmaXNkm3ZvmXWzzsed5WDjxD1FCg&_nc_ht=scontent.fmvd4-1.fna&oh=162540381c61554e1581b841995cc0e0&oe=5EB02DE9',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/171011650929573?__tn__=-R'
    },
    {
        brand:brands.LIF,
        model:"X7",
        price:15300,
        data: {
            km:"40000",
            year:"2018",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/82211044_172126257484779_2659296067232727040_n.jpg?_nc_cat=109&_nc_eui2=AeFPKbuPnPY7W31OHeD6V_fj7XIWbn5HC3sAg7fr0E_PDixfNEpZdNWnCdiIdQYOVqNetnxHluSSsBaYcavBYU9L_BCaO__OnaYDEu11fqTecA&_nc_ohc=08cuUXyvU68AX_X5iwF&_nc_ht=scontent.fmvd1-1.fna&oh=ed37a03b2ad62ffd0209699b97906977&oe=5ED01E6C',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/172126330818105?__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Celta",
        price:5900,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/82448965_172126427484762_8857301301222965248_n.jpg?_nc_cat=106&_nc_eui2=AeEOaJjPZk3Jy-2fuI-KNFJi15q6iHrFtQo9znSV8NqHZfh9Gvf8amw2KNjHP5b-0FB-P3y1N7ZXa8h7I5eb_KseaKjVb5se9Mw4jrYcEZbkJA&_nc_ohc=kr1B8fPLbTEAX9nm5lP&_nc_ht=scontent.fmvd1-1.fna&oh=d3c583bbfa481f1838dfe56568f77d08&oe=5ED250F1',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/172126447484760?__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"Corsa Classic",
        price:7000,
        data: {
            km:"",
            year:"2009",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/82904358_177669260263812_1664327589868601344_n.jpg?_nc_cat=105&_nc_ohc=AMO0ztOtob0AX_wP7ed&_nc_ht=scontent.fmvd1-1.fna&oh=2d09a0b242dc29376600725a920d8a15&oe=5EC7A5D1',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/177669343597137?__tn__=-R'
    },
    {
        brand:brands.VWN,
        model:"Bora 2.0",
        price:10900,
        data: {
            km:"",
            year:"2010",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/82790803_177669476930457_5759490249889677312_n.jpg?_nc_cat=106&_nc_eui2=AeH4tfgs781jnOqu17sKdMLRqxvSnhI6xfVNVzBgXULW1kf1ufvkaqQTbmIv-8WFu4a6G6gf2wPZwdqxMj_dmjpugr2lRNPM2LUstszTqz9Y6w&_nc_ohc=fduC7Q8-9gQAX8U7nX0&_nc_ht=scontent.fmvd1-1.fna&oh=7bfc5f5bedb1854e5f6965ec97b559f9&oe=5ECDCC5E',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/177669586930446?__tn__=-R'
    },
    {
        brand:brands.REN,
        model:"12",
        price:1800,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:["Std"],
        },
        sold: false,
        onSale: true,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-0/p480x480/82794514_172280064136065_4240792554213212160_o.jpg?_nc_cat=107&_nc_eui2=AeFUofrm5VN_3gaiRmz27cVrytr03xWAlp1HExuD1Z_eSO8ekIt66rr3ygUebSoqCsXtLjcKarsQ1yPLT2Xr3Ee1hUmQyrcZs48Qlxn_TdDZZg&_nc_ohc=pzvqKgZJARIAX8iC6io&_nc_ht=scontent.fmvd1-1.fna&_nc_tp=6&oh=3f0aac08051942aae182810b4859c542&oe=5E8D9F52',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/172280187469386?__tn__=-R'
    },
    {
        brand:brands.CHE,
        model:"c10",
        price:0,
        data: {
            km:"",
            year:"1980",
            fuel: "Diesel",
            equip:[],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/83488603_176194617077943_2477419226042728448_n.jpg?_nc_cat=106&_nc_eui2=AeHjNFLPAs7qzOaskVYBJ-UMU3pNGsMfmaBooy0aSQ_TqbnD76T5U33vZ2TG7MRcLqymi8xTb_RdVKhJaK9B4YwUE5Dwm1DfdhVZSsn00TSStQ&_nc_ohc=Or1o2-29lUQAX_f5noZ&_nc_ht=scontent.fmvd1-1.fna&oh=40f8c2dca9d784be3d633269d4e5bd2d&oe=5ED9A836',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/176194733744598?__tn__=-R'
    },
    {
        brand:brands.CIT,
        model:"C5",
        price:12900,
        data: {
            km:"",
            year:"2012",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/83822807_177670036930401_2071331519904874496_n.jpg?_nc_cat=106&_nc_eui2=AeE6hPGeMxgrlsXLEC1-droqxujdh1IzHsR2rEjql49aQK48SxLGM34UPb3Fhvg-1ugIOKM5BQ4hp83NtdHiACvo6sQv83MdOJUpoBM0oIidmw&_nc_ohc=FbLwm9dCQPEAX85jV8e&_nc_ht=scontent.fmvd1-1.fna&oh=c87fb57ab9c638b05561e44b853e3a1b&oe=5EC55534',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/177670183597053?__tn__=-R'
    },
    {
        brand:brands.PEU,
        model:"107",
        price:0,
        data: {
            km:"",
            year:"2009",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: true,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/82776697_178626576834747_472230756547035136_n.jpg?_nc_cat=109&_nc_eui2=AeEDXF5I55meyTSNSHZ-MRBI85r4cwD-YIFwIJ6RZznZ-VhFARZBmI8dWF2V46UQDja6qir8IFJQNSX81PQ1NAE437qyuHpP8XbcLwPHhBqlfg&_nc_ohc=oXvjyrKG9doAX8E5BtX&_nc_ht=scontent.fmvd1-1.fna&oh=8e4d25125c6c1177de1b590fd74b886b&oe=5EC99F72',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/178626760168062?__tn__=-R'
    },
    {
        brand:brands.FOR,
        model:"Ranger XLT 2.5",
        price:9500,
        data: {
            km:"",
            year:"1998",
            fuel: "Diesel",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/83266021_178626806834724_1645439191284187136_n.jpg?_nc_cat=111&_nc_eui2=AeGRB5sLzIwGxRmYWmlmVM-vsK3iZk2O4XuwVenlE9difLO3UFDGAncj_SUq8FL1NhZm5Ud-QsPbitB8B3yA7dOEyL_n20koH-WttPoNFJe3Xw&_nc_ohc=gTVSAihql34AX_1AuxL&_nc_ht=scontent.fmvd1-1.fna&oh=cfa5beea88b0dc21dd50c162293dd615&oe=5ECCA0AC',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/178626973501374?__tn__=-R'
    },

    ////////////////////////////////// 8/05/2020 /////////////////////////////////////////////
    {
        brand:brands.REN,
        model:"19",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/94257085_245504153480322_3067946395672510464_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeE4KGDeKEMMvAhuQN_PLmL0C501oPczibwLnTWg9zOJvFdJ0IaEWZuIl3VGo6ICaXGwxfyuV-e6k6oJEjNaiGsw&_nc_ohc=LFIJFXj1B5wAX__-dJv&_nc_ht=scontent.fmvd1-1.fna&oh=fccdada8dc3ac26bc846d0fa58b32a0e&oe=5EDA05CC',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/245504296813641'
    },
    {
        brand:brands.CHE,
        model:"Monza Classic",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/94460427_245348210162583_3443283325676945408_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeF_hyAcEMEob4yVc-b9EXXi-eMfSYhu4GH54x9JiG7gYVaMSBsBKwDP0Ui6VYBQ5SB2NKRZ2Qt0X5VNTjINOxlz&_nc_ohc=6SIZoaBpCR8AX-6VRJz&_nc_ht=scontent.fmvd1-1.fna&oh=a03dbc24945c7ae68e7769b6a558ea78&oe=5EDBA857',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/245348326829238'
    },
    {
        brand:brands.LIF,
        model:"520",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/93795259_243343897029681_1490213597123444736_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeHpYDQ5mKmEDVSJHhZFAspCGnQG-HWpaE4adAb4daloTvcj8tjKXs0sahD3W7sYh1ha-CGJyE-8tp_HL7GwQTcW&_nc_ohc=lEP4yd-4_XsAX8V_iKs&_nc_ht=scontent.fmvd1-1.fna&oh=80e281ca67b97df49360524eea38bed5&oe=5ED9DBCB',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/243344067029664'
    },
    {
        brand:brands.CHE,
        model:"Aveo",
        price:0,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:["Full"],
        },
        sold: false,
        onSale: false,
        img:'https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/94242372_243343727029698_4303918729399369728_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeFrNqzMedecp62yXDGpkFtIhNdGbFPt8pCE10ZsU-3ykO_10nAhNJQJNRPli3w3E12mx88bH7jRqgmh73JYrChv&_nc_ohc=DC0km_K0RTAAX83tCO5&_nc_ht=scontent.fmvd1-1.fna&oh=3e51f81f1386c4e7c1c9b4b37a2183fb&oe=5EDC7ABF',
        fbLink: 'https://www.facebook.com/autossantarosaok/posts/243343837029687'
    },
    /*{
        brand:"",
        model:"",
        price:,
        data: {
            km:"",
            year:"",
            fuel: "Nafta",
            equip:[],
        },
        sold: false,
        onSale: false,
        img:'',
        fbLink: ''
    },*/

];
export default vehicles;

