import { v4 as uuid4 } from "uuid"
import { IProduct } from "./types"

export const products: IProduct[] = [
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75',
    name: 'Apples',
    discountPrice: '$1.60',
    regularPrice: '$2.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2FCucumber.jpg&w=3840&q=75',
    name: 'Cucumber',
    discountPrice: '$2.50',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=3840&q=75',
    name: 'Dates',
    discountPrice: '$8.00',
    regularPrice: '$10.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F11%2FFrenchGreenBeans.jpg&w=3840&q=75',
    name: 'French Green Beans',
    discountPrice: '$1.20',
    regularPrice: '$1.50',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F12%2FGreenBeans.jpg&w=3840&q=75',
    name: 'Green Beans',
    discountPrice: '$4.00',
    regularPrice: '$5.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F13%2FGreenLimes.jpg&w=3840&q=75',
    name: 'Lime',
    discountPrice: '$1.50',
    regularPrice: '$2.00',
    offerPercent: '25%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&w=3840&q=75',
    name: 'Mango',
    discountPrice: '$2.50',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=3840&q=75',
    name: 'Pepper',
    discountPrice: '$5.00',
    regularPrice: '$6.00',
    offerPercent: '17%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F16%2Fpears.jpg&w=3840&q=75',
    name: 'Pears',
    discountPrice: '$3.50',
    regularPrice: '$4.00',
    offerPercent: '13%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F17%2FPeeled-Carrots.jpg&w=3840&q=75',
    name: 'Peeled Baby Carrot',
    discountPrice: '$2.20',
    regularPrice: '$2.50',
    offerPercent: '12%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F18%2FRedCherries.jpg&w=3840&q=75',
    name: 'Cherry',
    discountPrice: '$1.80',
    regularPrice: '$2.00',
    offerPercent: '10%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&w=3840&q=75',
    name: 'Strawberry',
    discountPrice: '$8.00',
    regularPrice: '$10.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&w=3840&q=75',
    name: 'Mix Vegetable Platter',
    discountPrice: '$3.20',
    regularPrice: '$4.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F21%2FYellow-Limes.jpg&w=3840&q=75',
    name: 'Lemon',
    discountPrice: '$1.20',
    regularPrice: '$1.50',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=3840&q=75',
    name: 'Signature Salmon',
    discountPrice: '$4.95',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F185%2Fswordfish_smniuv.jpg&w=3840&q=75',
    name: 'Swordfish Fillet',
    discountPrice: '$7.50',
    regularPrice: '$10.00',
    offerPercent: '25%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F186%2Fhalibut_jaz7ju.jpg&w=3840&q=75',
    name: 'Halibut Fillet',
    discountPrice: '$12.00',
    regularPrice: '$15.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F187%2FTilapiaFillet_a2urhk.jpg&w=3840&q=75',
    name: 'Tilapia Fillet',
    discountPrice: '$7.89',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F188%2Fbeef_xkxhnb.jpg&w=3840&q=75',
    name: 'Fresh Beef',
    discountPrice: '$6.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F190%2Fchicken_thigh_yrdfwh.jpg&w=3840&q=75',
    name: 'Chicken Thighs',
    discountPrice: '$7.89',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2Fchicken_brest_ribcxo.jpg&w=3840&q=75',
    name: 'Chicken Breast',
    discountPrice: '$9.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F192%2Fsteak_okxpjo.jpg&w=3840&q=75',
    name: 'Beef Steak',
    discountPrice: '$12.00',
    regularPrice: '$15.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F193%2Fbelmont_custard_cream.jpg&w=3840&q=75',
    name: 'Belmont Custard Cream',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2Fcrawford_digestives.jpg&w=3840&q=75',
    name: 'Crawford Digestives',
    discountPrice: '$6.50',
    regularPrice: '$8.00',
    offerPercent: '19%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2Fcrawford_shortie.jpg&w=3840&q=75',
    name: 'Crawford Shortie',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F198%2Fjulis_cheese_crackers.jpg&w=3840&q=75',
    name: 'Juli S Cheese Crackers',
    discountPrice: '$5.00',
    regularPrice: '$8.00',
    offerPercent: '38%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F199%2Fkhong_guan_orange_cream.jpg&w=3840&q=75',
    name: 'Khong Guan Orange Cream',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F200%2Fkhong_guan_premium_marie.jpg&w=3840&q=75',
    name: 'Khong Guan Premium Marie',
    discountPrice: '$6.00',
    regularPrice: '$8.00',
    offerPercent: '25%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F201%2Flotus_biscoff.jpg&w=3840&q=75',
    name: 'Lotus Biscoff',
    discountPrice: '$7.50',
    regularPrice: '$10.00',
    offerPercent: '25%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F202%2Fartiach_filipino.jpg&w=3840&q=75',
    name: 'Filipinos',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F204%2Fcadbury_zip.jpg&w=3840&q=75',
    name: 'Cadbury Zip',
    discountPrice: '$2.90',
    regularPrice: '$4.00',
    offerPercent: '28%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F206%2Fcloetta.jpg&w=3840&q=75',
    name: 'Cloetta Chocowoffle Crispy',
    discountPrice: '$2.50',
    regularPrice: '$3.00',
    offerPercent: '17%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F207%2Fcloetta_sprinkle.jpg&w=3840&q=75',
    name: 'Cloetta Sprinkle',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F208%2Fhersheys_kisses.jpg&w=3840&q=75',
    name: 'Hersheys Kisses',
    discountPrice: '$3.50',
    regularPrice: '$5.00',
    offerPercent: '30%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F209%2Fm%2526m_funsize.jpg&w=3840&q=75',
    name: 'M &amp; M Funsize',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F210%2Fnestle_butterfinger.jpg&w=3840&q=75',
    name: 'Nestle Butterfinger',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F211%2Fnestle_kitkat.jpg&w=3840&q=75',
    name: 'Nestle Kitkat',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F212%2Fsnikers_slice.jpg&w=3840&q=75',
    name: 'Snikers Slice',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=3840&q=75',
    name: 'Snikers Snack Size',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F214%2Fcottage_bbq.jpg&w=3840&q=75',
    name: 'Wise Cottage Fires Bbq',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F215%2Fcrisps-puzzle.jpg&w=3840&q=75',
    name: 'Puzzles Crips Ready Salted',
    discountPrice: '$0.60',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F216%2Fdoritos.jpg&w=3840&q=75',
    name: 'Doritos Tangy Cheese',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F217%2Flays_baked.jpg&w=3840&q=75',
    name: 'Lays Baked',
    discountPrice: '$1.50',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F218%2Flays_sea_salted.jpg&w=3840&q=75',
    name: 'Lays Sea Salted',
    discountPrice: '$1.20',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F219%2Flays-kettle-cooked.jpg&w=3840&q=75',
    name: 'Lays Kettle Cooked',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F220%2Flays-sour-cream.jpg&w=3840&q=75',
    name: 'Lays Sour Cream',
    discountPrice: '$1.50',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F221%2Fnims_apple_fruit.jpg&w=3840&q=75',
    name: 'Nims Apple Crisp',
    discountPrice: '$1.50',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F222%2FReady-Salted-Crisps.jpg&w=3840&q=75',
    name: 'Snack Rite Ready Saled',
    discountPrice: '$3.00',
    regularPrice: '$5.00',
    offerPercent: '40%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F223%2FRoysters_6pk.jpg&w=3840&q=75',
    name: 'Roysters Bubbled Crips',
    discountPrice: '$4.20',
    regularPrice: '$5.00',
    offerPercent: '16%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=3840&q=75',
    name: 'Snackrite Cheese Onion',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F225%2Ftayto_cheese_onion.jpg&w=3840&q=75',
    name: 'Tayto Cheese Onion',
    discountPrice: '$1.75',
    regularPrice: '$2.80',
    offerPercent: '37%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F226%2Ftayto_pickled_onion.jpg&w=3840&q=75',
    name: 'Tayto Pickled Onion',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F227%2Fwalkers_cheese_onion.jpg&w=3840&q=75',
    name: 'Walkers Cheese Onion',
    discountPrice: '$2.50',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F228%2Fcintan_chicken.jpg&w=3840&q=75',
    name: 'Cintan Chicken Noodles',
    discountPrice: '$4.00',
    regularPrice: '$5.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F229%2Findomie_special_chicken.jpg&w=3840&q=75',
    name: 'Indomie Chicken Noodles',
    discountPrice: '$2.50',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F230%2Fkame_stir_fry.jpg&w=3840&q=75',
    name: 'Kame H Okkein Stir Fry Noodles',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F231%2Fkoka_curry.jpg&w=3840&q=75',
    name: 'Koka Curry Noodles',
    discountPrice: '$4.00',
    regularPrice: '$6.00',
    offerPercent: '33%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F232%2Fmaggi_bbq.jpg&w=3840&q=75',
    name: 'Maggi Bbq Noodles',
    discountPrice: '$6.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F233%2Fmaggi_beef.jpg&w=3840&q=75',
    name: 'Maggi Beef Noodles',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F234%2Fmaggi_biriyani.jpg&w=3840&q=75',
    name: 'Maggi Biriyani Noodles',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F235%2Fmaggi_chicken.jpg&w=3840&q=75',
    name: 'Maggi Chicken Noodles',
    discountPrice: '$10.00',
    regularPrice: '$12.00',
    offerPercent: '17%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fbadia_pinenuts.jpg&w=3840&q=75',
    name: 'Badia Pine Nuts',
    discountPrice: '$10.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F237%2Fcacao_cashew.jpg&w=3840&q=75',
    name: 'Cacao Cashew Nuts',
    discountPrice: '$8.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F238%2Ffisher_peanut.jpg&w=3840&q=75',
    name: 'Fisher Peanuts Ready Salted',
    discountPrice: '$12.00',
    regularPrice: '$16.00',
    offerPercent: '25%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F241%2Fivory_cashewnut.jpg&w=3840&q=75',
    name: 'Ivory Cashew Nuts',
    discountPrice: '$5.50',
    regularPrice: '$7.50',
    offerPercent: '27%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F242%2Fjaybee_whole_cashewnut.jpg&w=3840&q=75',
    name: 'Jaybees Whole Cashew Nuts',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F243%2Fkirkland_mixed_nuts.jpg&w=3840&q=75',
    name: 'Kirkland Mixed Nuts',
    discountPrice: '$15.00',
    regularPrice: '$22.00',
    offerPercent: '32%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F244%2Fnatural_cashewnut.jpg&w=3840&q=75',
    name: 'Natural Nuts',
    discountPrice: '$7.50',
    regularPrice: '$10.00',
    offerPercent: '25%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F245%2Fplanter_cashewnut.jpg&w=3840&q=75',
    name: 'Planter Cashewnut',
    discountPrice: '$10.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F246%2Fplanters_honey_roasted.jpg&w=3840&q=75',
    name: 'Planter Honey Roasted',
    discountPrice: '$12.00',
    regularPrice: '$15.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F247%2Fbambino_macaroni.jpg&w=3840&q=75',
    name: 'Bambino Macaroni',
    discountPrice: '$12.00',
    regularPrice: '$15.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F248%2Fbambino_premium_pasta.jpg&w=3840&q=75',
    name: 'Bambino Premium Pasta',
    discountPrice: '$14.00',
    regularPrice: '$18.00',
    offerPercent: '22%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F249%2Fbatchelors_pasta_sauce.jpg&w=3840&q=75',
    name: 'Batchelors Pasta N Sauce Cheese And Broccoli',
    discountPrice: '$8.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F250%2Fborges-pasta.jpg&w=3840&q=75',
    name: 'Borges Pasta',
    discountPrice: '$12.00',
    regularPrice: '$15.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F253%2Fknorr_pastaria.jpg&w=3840&q=75',
    name: 'Knorr Pastaria',
    discountPrice: '$12.00',
    regularPrice: '$15.00',
    offerPercent: '20%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F254%2Fallegro_bbq_sauce.jpg&w=3840&q=75',
    name: 'Allegro Bbq Sauce',
    discountPrice: '$10.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F255%2Fasain_zing_chili.jpg&w=3840&q=75',
    name: 'Asin Zing Chili Sauce',
    discountPrice: '$8.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F256%2Fcrunch_hot_chili_sauce.jpg&w=3840&q=75',
    name: 'Crunch Hot Chili Sauce',
    discountPrice: '$6.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F257%2Ffelix_chili_sauce.jpg&w=3840&q=75',
    name: 'Felix Chili Sauce',
    discountPrice: '$6.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F258%2Fheinz_chili_sauce.jpg&w=3840&q=75',
    name: 'Heinz Chili Sauce',
    discountPrice: '$7.20',
    regularPrice: '$8.00',
    offerPercent: '10%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F259%2Fkosmos_bbq.jpg&w=3840&q=75',
    name: 'Kosmos Bbq Sauce',
    discountPrice: '$6.80',
    regularPrice: '$8.00',
    offerPercent: '15%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F260%2Ftaco_bell_diablo_sauce.jpg&w=3840&q=75',
    name: 'Taco Bell Diablo Sauce',
    discountPrice: '$5.59',
    regularPrice: '$8.00',
    offerPercent: '30%'
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F261%2Fbak_kuh_teh.jpg&w=3840&q=75',
    name: 'Traditional Bak Kut Teh Soup',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F262%2Fchings_mixvegsoup.jpg&w=3840&q=75',
    name: 'Chings Mix Vegetable Soup',
    discountPrice: '$3.49',
    regularPrice: '$5.00',
    offerPercent: '30%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F263%2Fdashi_chicken_corn.jpg&w=3840&q=75',
    name: 'Dashi Chicken Corn Soup',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F264%2Fknorr_thai_vegetable.jpg&w=3840&q=75',
    name: 'Knorr Thai Vegetable Soup',
    discountPrice: '$2.29',
    regularPrice: '$2.99',
    offerPercent: '23%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F265%2Frempah_sup.jpg&w=3840&q=75',
    name: 'Rempah Sup Soup Mix',
    discountPrice: '$2.22',
    regularPrice: '$3.00',
    offerPercent: '26%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F266%2Fgrain_free.jpg&w=3840&q=75',
    name: 'Avo Derm Grain Free',
    discountPrice: '$25.59',
    regularPrice: '$30.00',
    offerPercent: '15%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F267%2Fhills_science_diet.jpg&w=3840&q=75',
    name: 'Hills Science Diet',
    discountPrice: '$25.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F268%2Finstinct_the_raw.jpg&w=3840&q=75',
    name: 'Instinct Ultimate Protien',
    discountPrice: '$18.00',
    regularPrice: '$24.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fnatural_balance.jpg&w=3840&q=75',
    name: 'Natural Balance L I D',
    discountPrice: '$14.00',
    regularPrice: '$20.00',
    offerPercent: '30%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F270%2Fprescription_diet.jpg&w=3840&q=75',
    name: 'Hills Urinary Care',
    discountPrice: '$16.00',
    regularPrice: '$20.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F271%2Fpro_diet.jpg&w=3840&q=75',
    name: 'Pro Diet Complete Balance',
    discountPrice: '$18.00',
    regularPrice: '$25.00',
    offerPercent: '28%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F272%2Fpurina_pro_plan.jpg&w=3840&q=75',
    name: 'Purina Pro Plan Veterinary Diets',
    discountPrice: '$25.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F277%2Fdog_food_blue_wilderness.jpg&w=3840&q=75',
    name: 'Blue Wilderness Chicken Recepie',
    discountPrice: '$18.00',
    regularPrice: '$25.00',
    offerPercent: '28%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F278%2Fdog_food_zenith.jpg&w=3840&q=75',
    name: 'Zenith Lamb Brown Rice',
    discountPrice: '$32.00',
    regularPrice: '$40.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F281%2Fair_freshner_acana_ozmo.jpg&w=3840&q=75',
    name: 'Ozmo Air Fabric Freshner',
    discountPrice: '$15.00',
    regularPrice: '$20.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F289%2Fcleaning_supply_astonish.jpg&w=3840&q=75',
    name: 'Astonish Oven Power Spray',
    discountPrice: '$15.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F290%2Fcleaning_supply_bona.jpg&w=3840&q=75',
    name: 'Bona Hardwood Floor Cleaner',
    discountPrice: '$10.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F293%2Fcleaning_supply_method.jpg&w=3840&q=75',
    name: 'Method All Purpose Cleaner',
    discountPrice: '$15.00',
    regularPrice: '$20.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F294%2Fcleaning_supply_bio.jpg&w=3840&q=75',
    name: 'Bio Toilet Cleaner',
    discountPrice: '$7.00',
    regularPrice: '$10.00',
    offerPercent: '30%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F298%2Flaundry_products_tide.jpg&w=3840&q=75',
    name: 'Tide Downy',
    discountPrice: '$22.00',
    regularPrice: '$30.00',
    offerPercent: '27%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F301%2Flaundry_products_purex.jpg&w=3840&q=75',
    name: 'Purex Oxi',
    discountPrice: '$22.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F302%2Flaundry_products_persil.jpg&w=3840&q=75',
    name: 'Persil Power Gel',
    discountPrice: '$30.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F862%2FDaz-2.png&w=3840&q=75',
    name: 'Daz Bright &amp; Compact',
    discountPrice: '$25.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F305%2Fbutter_barney.jpg&w=3840&q=75',
    name: 'Barney Butter',
    discountPrice: '$8.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F306%2Fbutter_kirkland.jpg&w=3840&q=75',
    name: 'Kirkland Signature',
    discountPrice: '$8.25',
    regularPrice: '$9.00',
    offerPercent: '8%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F308%2Fbutter_nikki%2527s.jpg&w=3840&q=75',
    name: 'Nikki S Coconut Butter',
    discountPrice: '$7.59',
    regularPrice: '$10.00',
    offerPercent: '24%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F309%2Fbutter_tru_nut.jpg&w=3840&q=75',
    name: 'Tru Nut Powdered Peanut Butter',
    discountPrice: '$8.00',
    regularPrice: '$10.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F310%2Fbutter_whole_earth.jpg&w=3840&q=75',
    name: 'Whole Earth Crunchy Peanut Butter',
    discountPrice: '$6.49',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F311%2Fegg_cavanagh.jpg&w=3840&q=75',
    name: 'Cavanagh Free Range Eggs',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F312%2Fegg_clarenece_court.jpg&w=3840&q=75',
    name: 'Clarence Court 6 Free Range Eggs',
    discountPrice: '$1.59',
    regularPrice: '$2.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F314%2Fegg_morrisons.jpg&w=3840&q=75',
    name: 'Morrisons 6 Medium Free Range Golden Yolk Eggs',
    discountPrice: '$3.59',
    regularPrice: '$4.00',
    offerPercent: '10%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F315%2Fegg_happy_egg_organic.jpg&w=3840&q=75',
    name: 'Happy Egg Organic',
    discountPrice: '$3.49',
    regularPrice: '$4.00',
    offerPercent: '13%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F316%2Fegg_cp.jpg&w=3840&q=75',
    name: 'Cp Omega',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F317%2Fmilk_arla_lacto_free.jpg&w=3840&q=75',
    name: 'Arla Lacto Free Semi Skimmed Milk',
    discountPrice: '$4.59',
    regularPrice: '$5.00',
    offerPercent: '8%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F318%2Fmilk_arla_low_fat1.5.jpg&w=3840&q=75',
    name: 'Arla All Natural Milk Goodness Low Fat',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F319%2Fmilk_f%2526n_magnolia.jpg&w=3840&q=75',
    name: 'Magnolia Fresh Milk',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2Fmilk_lactaid.jpg&w=3840&q=75',
    name: 'Lactaid',
    discountPrice: '$4.29',
    regularPrice: '$5.00',
    offerPercent: '14%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F322%2Fmilk_living_planet.jpg&w=3840&q=75',
    name: 'Living Planet Organic Dairy Milk',
    discountPrice: '$3.89',
    regularPrice: '$5.00',
    offerPercent: '22%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F323%2Fmilk_cream_nammilk.jpg&w=3840&q=75',
    name: 'Nammilk Greek Style',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F324%2Fyogourt_astro_balkan.jpg&w=3840&q=75',
    name: 'Astro Original',
    discountPrice: '$3.29',
    regularPrice: '$4.00',
    offerPercent: '18%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F325%2Fyogourt_astro_bio_best.jpg&w=3840&q=75',
    name: 'Astro Bio Best',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F327%2Fyogourt_dannon_vanilla.jpg&w=3840&q=75',
    name: 'Dannon Vanilla',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F328%2Fyogourt_chobani_vanilla.jpg&w=3840&q=75',
    name: 'Chonani Vanilla Blended',
    discountPrice: '$4.49',
    regularPrice: '$6.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F329%2Foil_clover_valley.jpg&w=3840&q=75',
    name: 'Clover Valley Vegetable Oil',
    discountPrice: '$6.59',
    regularPrice: '$8.00',
    offerPercent: '18%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F330%2Foil_san_lucas.jpg&w=3840&q=75',
    name: 'San Lucas Corn Oil',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F331%2Foil_daisy.jpg&w=3840&q=75',
    name: 'Daisy Corn Oil',
    discountPrice: '$8.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F332%2Foil_goya.jpg&w=3840&q=75',
    name: 'Goya Extra Virgin Olive Oil',
    discountPrice: '$7.99',
    regularPrice: '$10.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F333%2Foil_natural.jpg&w=3840&q=75',
    name: 'Naturel Premium Sunflower Oil',
    discountPrice: '$7.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F334%2Foil_1_2_3_vegitable.jpg&w=3840&q=75',
    name: '1 2 3 Vegetable Oil',
    discountPrice: '$3.89',
    regularPrice: '$5.00',
    offerPercent: '22%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F338%2Findia_gate_basmati_rice.jpg&w=3840&q=75',
    name: 'India Gate Basmati Rice',
    discountPrice: '$6.00',
    regularPrice: '$8.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F345%2Ftasteology_chili_salt.jpg&w=3840&q=75',
    name: 'Tasteology Chili Salt',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F346%2Ftate_sugar.jpg&w=3840&q=75',
    name: 'Tate Lyle White Sugar',
    discountPrice: '$3.59',
    regularPrice: '$5.00',
    offerPercent: '28%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F348%2Fthe_pantry_icing_Sugar.jpg&w=3840&q=75',
    name: 'The Pantry Icing Sugar',
    discountPrice: '$8.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F357%2Ffibre1_crunchy_original.jpg&w=3840&q=75',
    name: 'Fibre 1 Crunchy Original',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  /* {{
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…uaranted_fiber_one_honey_clusters.jpg&w=3840&q=75',
    name: 'Fiber One',
    discountPrice: '$3.00',
    regularPrice: '$4.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…made_with_whole_grain_corn_flakes.jpg&w=3840&q=75',
    name: 'Nestle Corn Flakes',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…1%2Fpost_honey_comb_cereal_12.5oz.jpg&w=3840&q=75',
    name: 'Post Honey Comb',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…m%2F364%2Fchivers_mixed_fruit_jam.jpg&w=3840&q=75',
    name: 'Chivers Mixed Fruit Jam',
    discountPrice: '$4.59',
    regularPrice: '$6.00',
    offerPercent: '24%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2F365%2Fred_jacket_raspberry_jam.jpg&w=3840&q=75',
    name: 'Red Jacket Raspberry Jam',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…t-1.amazonaws.com%2F366%2FGin_Jam.jpg&w=3840&q=75',
    name: 'Gin Jam',
    discountPrice: '$3.59',
    regularPrice: '$6.00',
    offerPercent: '40%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…naws.com%2F369%2Fjavarama_classic.jpg&w=3840&q=75',
    name: 'Javarama Cafe Coffee',
    discountPrice: '$3.00',
    regularPrice: '$4.00',
    offerPercent: '25%'
  },
  { id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…com%2F370%2Fstarbucks_house_blend.jpg&w=3840&q=75',
    name: 'Starbucks House Blend',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…m%2F371%2Fstarbucks_vanilla_latte.jpg&w=3840&q=75',
    name: 'Starbucks Vanilla Latte',
    discountPrice: '$4.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…offee_alternative_almond_amaretto.jpg&w=3840&q=75',
    name: 'Teeccino Herbal Coffee Alternative',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…st-1.amazonaws.com%2F373%2Fdragon.jpg&w=3840&q=75',
    name: 'Dragon Energy',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…t-1.amazonaws.com%2F374%2FMonster.jpg&w=3840&q=75',
    name: 'Monster Energy',
    discountPrice: '$1.59',
    regularPrice: '$2.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…ast-1.amazonaws.com%2F375%2FQuake.jpg&w=3840&q=75',
    name: 'Quake Energy',
    discountPrice: '$1.50',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…-1.amazonaws.com%2F376%2Fred_bull.jpg&w=3840&q=75',
    name: 'Red Bull Energy Drink',
    discountPrice: '$2.00',
    regularPrice: '$2.50',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…77%2Ficeland_tropical_juice_drink.jpg&w=3840&q=75',
    name: 'Iceland Tropical Juice Drink',
    discountPrice: '$2.50',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…ws.com%2F378%2Fminute_maid_orange.jpg&w=3840&q=75',
    name: 'Minute Maid Orange',
    discountPrice: '$2.22',
    regularPrice: '$3.00',
    offerPercent: '26%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…s.com%2F379%2Fnongmo_simply_apple.jpg&w=3840&q=75',
    name: 'Nongmo Simple Apple',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2F380%2Ftropicana_orange_no_pulp.jpg&w=3840&q=75',
    name: 'Tropicana Orange',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…onaws.com%2F381%2Ftropicana_apple.jpg&w=3840&q=75',
    name: 'Tropicana Apple',
    discountPrice: '$2.50',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image….com%2F382%2F7up_lemon_lime_355ml.jpg&w=3840&q=75',
    name: '7 Up Can',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…onaws.com%2F383%2Fcoke_diet_355ml.jpg&w=3840&q=75',
    name: 'Diet Coke',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…zonaws.com%2F384%2Fdr_pepper_diet.jpg&w=3840&q=75',
    name: 'Dr Pepper Diet',
    discountPrice: '$1.00',
    regularPrice: '$1.40',
    offerPercent: '29%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…om%2F385%2FFanta_orange_can_250ml.jpg&w=3840&q=75',
    name: 'Fanta',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…aws.com%2F386%2Fmountain_dew_diet.jpg&w=3840&q=75',
    name: 'Diet Mountain Dew',
    discountPrice: '$1.75',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…zonaws.com%2F387%2Fcoca_cola_zero.jpg&w=3840&q=75',
    name: 'Coca Cola Zero',
    discountPrice: '$1.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…om%2F388%2Fava_juice_Detox_Matcha.jpg&w=3840&q=75',
    name: 'Ava Juice Macha Tea',
    discountPrice: '$3.50',
    regularPrice: '$5.00',
    offerPercent: '30%'
  },
  
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…2F389%2Fimperial_tea_longjing_tea.jpg&w=3840&q=75',
    name: 'Imperial Long Jing Tea',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…90%2Fcrystal_light_lemon_iced_tea.jpg&w=3840&q=75',
    name: 'Crystal Light Lemon Iced Tea',
    discountPrice: '$3.50',
    regularPrice: '$5.00',
    offerPercent: '30%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2F391%2Fboh_3in1_instant_tea_mix.jpg&w=3840&q=75',
    name: 'Boh Instant Tea Mix',
    discountPrice: '$4.00',
    regularPrice: '$5.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…aws.com%2F392%2Fluzianne_iced_tea.jpg&w=3840&q=75',
    name: 'Luzianne Iced Tea',
    discountPrice: '$5.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…F393%2Fattitude_night_bubble_bath.jpg&w=3840&q=75',
    name: 'Attitude Bubble Bath',
    discountPrice: '$16.00',
    regularPrice: '$20.00',
    offerPercent: '20%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…s.com%2F395%2Faveeno_baby_shampoo.jpg&w=3840&q=75',
    name: 'Aveeno Baby Shampoo',
    discountPrice: '$15.00',
    regularPrice: '$20.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2F396%2Fmoisturizing_hair_bath_g.jpg&w=3840&q=75',
    name: 'Way Moisturizing Hair Bath',
    discountPrice: '$16.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…s.com%2F397%2Fneutrogena_Body_Oil.jpg&w=3840&q=75',
    name: 'Neutrogena Body Oil',
    discountPrice: '$20.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…zonaws.com%2F398%2Feo_body_lotion.jpg&w=3840&q=75',
    name: 'Eo Body Lotion',
    discountPrice: '$15.00',
    regularPrice: '$20.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…Fgnc_aloe_vera_moisturizing_cream.jpg&w=3840&q=75',
    name: 'Gnc Aloe Vera Cream',
    discountPrice: '$20.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2F400%2Floreal_paris_age_perfect.jpg&w=3840&q=75',
    name: 'Loreal Age Perfect Cream',
    discountPrice: '$15.00',
    regularPrice: '$20.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…aso_shiseido_mega_hydrating_cream.jpg&w=3840&q=75',
    name: 'Wasp Shiseido Cream',
    discountPrice: '$14.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…nc_women%2527s_progesterone_cream.jpg&w=3840&q=75',
    name: 'Gnc Women S Progesterone Cream',
    discountPrice: '$20.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2Ftype_A_ashley_graham_deodorant.jpg&w=3840&q=75',
    name: 'Type A Deodorant',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…onaws.com%2F404%2Fvichy_deodorant.jpg&w=3840&q=75',
    name: 'Vichy Deodorant',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…s_baldini_bio_deo_sauge_et_orange.jpg&w=3840&q=75',
    name: 'Baldini Deo',
    discountPrice: '$2.00',
    regularPrice: '$3.00',
    offerPercent: '33%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…naws.com%2F406%2Fspadet_Deodorant.jpg&w=3840&q=75',
    name: 'Spadet Deodorant',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…ws.com%2F407%2Fthe_post_deodorant.jpg&w=3840&q=75',
    name: 'The Post Deodorant',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2Fabsolute_plus_Meat_Dental_Set_.jpg&w=3840&q=75',
    name: 'Absolute Plus Meat Dental Set',
    discountPrice: '$7.50',
    regularPrice: '$10.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…entek_professional_oral_care_kit1.jpg&w=3840&q=75',
    name: 'Dentek Oral Care Kit',
    discountPrice: '$10.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…F410%2Fgum_oral_care_cleaning_kit.jpg&w=3840&q=75',
    name: 'Gum Oral Care Cleaning Kit',
    discountPrice: '$15.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…com%2F411%2Fface_republic_Sun_gel.jpg&w=3840&q=75',
    name: 'Face Replublic Sun Gel',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…naws.com%2F412%2Ffrei_ol_urea2in1.jpg&w=3840&q=75',
    name: 'Frei Ol',
    discountPrice: '$1.50',
    regularPrice: '$2.00',
    offerPercent: '25%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…s.com%2F413%2Fgarnier_pure_active.jpg&w=3840&q=75',
    name: 'Garnier Pure Active',
    discountPrice: '$2.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…com%2F414%2Fnuage_men_facial_wash.jpg&w=3840&q=75',
    name: 'Nuace Men Facial Wash',
    discountPrice: '$3.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…shaving_co._natural_shaving_cream.jpg&w=3840&q=75',
    name: 'Pacific Natural Shaving Cream',
    discountPrice: '$4.00',
    regularPrice: '$6.00',
    offerPercent: '33%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…Longmarket_Barber_Aftershave_Balm.jpg&w=3840&q=75',
    name: 'Longmarket Barber Aftershave Balm',
    discountPrice: '$6.00',
    regularPrice: '',
    offerPercent: ''
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…F417%2Fhuman_nature_shaving_cream.jpg&w=3840&q=75',
    name: 'Human Nature Shaving Cream',
    discountPrice: '$4.00',
    regularPrice: '$6.00',
    offerPercent: '33%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…%2Fespa_men_dual_action_shave_mud.jpg&w=3840&q=75',
    name: 'Espa Men Dual Action',
    discountPrice: '$3.50',
    regularPrice: '$6.00',
    offerPercent: '42%'
  },
  {
    id: uuid4(),
    img: 'https://shop-pickbazar-rest.vercel.app/_next/image…aws.com%2F419%2Fnair_hair_remover.jpg&w=3840&q=75',
    name: 'Nair Hair Removal Cream',
    discountPrice: '$5.00',
    regularPrice: '$8.00',
    offerPercent: '38%'
  } */
]
