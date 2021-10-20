import PricePlan1 from './PricingSVGs/PricePlan1.svg'
import PricePlan2 from  './PricingSVGs/PricePlan2.svg'
import PricePlan3 from './PricingSVGs/PricePlan3.svg'
import PricePlan4 from './PricingSVGs/PricePlan4.svg'

export const Plans=[
    {
       Title:"Basic",
       Image: PricePlan1,
       Details:[
          {
              Text:"Weekly Stake MAG",
              IsIncluded:true,
          },
          {
            Text:"Weekly investment updates",
            IsIncluded:false,
        },
        {
            Text:"Technicals analysis on coins",
            IsIncluded:false,
        },
        {
            Text:"Swing trades",
            IsIncluded:false,
        },
        {
            Text:"Monthly  Crypto Gem ",
            IsIncluded:false,
        }, 
       ],
       Price:{
        Tag:"$1",
        BgColor:"#008B8B",
        BtnColor:"#29AB87"
    }
    },
    {
        Title:"Investor",
        Image: PricePlan2,
        Details:[
            {
                Text:"Weekly Stake MAG",
                IsIncluded:true,
            },
            {
              Text:"Weekly investment updates",
              IsIncluded:true,
          },
          {
              Text:"Technicals analysis on coins",
              IsIncluded:false,
          },
          {
              Text:"Swing trades",
              IsIncluded:false,
          },
          {
              Text:"Monthly  Crypto Gem ",
              IsIncluded:false,
          }, 
         ],
         Price:{
            Tag:"$5",
            BgColor:"#F0E68C",
            BtnColor:"#FFC72C"
        }
     },
     {
        Title:"Swing Trader",
        Image: PricePlan3,
        Details:[
            {
                Text:"Weekly Stake MAG",
                IsIncluded:true,
            },
            {
              Text:"Weekly investment updates",
              IsIncluded:true,
          },
          {
              Text:"Technicals analysis on coins",
              IsIncluded:true,
          },
          {
              Text:"Swing trades",
              IsIncluded:false,
          },
          {
              Text:"Monthly  Crypto Gem ",
              IsIncluded:false,
          }, 
         ],
         Price:{
            Tag:"$20",
            BgColor:"#00FFFF",
            BtnColor:"#7CB9E8"
        }
     },
     {
        Title:"Day Trader",
        Image: PricePlan4,
        Details:[
            {
                Text:"Weekly Stake MAG",
                IsIncluded:true,
            },
            {
              Text:"Weekly investment updates",
              IsIncluded:true,
          },
          {
              Text:"Technicals analysis on coins",
              IsIncluded:true,
          },
          {
              Text:"Swing trades",
              IsIncluded:true,
          },
          {
              Text:"Monthly  Crypto Gem ",
              IsIncluded:true,
          }, 
         ],
        Price:{
            Tag:"$30",
            BgColor:"#fd5c63",
            BtnColor:"#E52B50"
        }
     },

]