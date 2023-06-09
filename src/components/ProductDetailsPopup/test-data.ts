import { v4 as uuid4 } from "uuid"
import { IProduct } from "./types"

export const products: IProduct[] = [
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
