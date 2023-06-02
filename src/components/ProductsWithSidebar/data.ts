import { v4 as uuid4 } from "uuid";
import { CiApple } from 'react-icons/ci'
import { TbMeat } from 'react-icons/tb'
import { BsCupHot } from 'react-icons/bs'
import { BiBowlRice, BiDish, BiGlobeAlt } from 'react-icons/bi'
import { FaAirFreshener } from 'react-icons/fa'
import { GiWaterBottle, GiRiceCooker, GiWineGlass } from 'react-icons/gi'

import { ISidebar } from "./types";

export const sidebarData: ISidebar[] = [
  {
    id: uuid4(),
    parentText: 'Fruits & Vegetables',
    icon: CiApple,
    childText: ['Fruits', 'Vegetables'],
  },
  {
    id: uuid4(),
    parentText: 'Meat & Fish',
    icon: TbMeat,
    childText: ['Fresh Fish', 'Meat'],
  },
  {
    id: uuid4(),
    parentText: 'Snacks',
    icon: BsCupHot,
    childText: ['Nuts & Biscuits', 'Chocolates', 'Crisps', 'Noodles & Pasta', 'Sauce', 'Soup'],
  },
  {
    id: uuid4(),
    parentText: 'Pet Care',
    icon: BiBowlRice,
    childText: ['Cat Food', 'Dog Food', 'Accessories'],
  },
  {
    id: uuid4(),
    parentText: 'Home & Cleaning',
    icon: FaAirFreshener,
    childText: ['Air Freshner', 'Cleaning Products', 'Kitchen Accessories', 'Laundry'],
  },
  {
    id: uuid4(),
    parentText: 'Dairy',
    icon: GiWaterBottle,
    childText: ['Milk', 'Butter', 'Egg', 'Yogurt'],
  },
  {
    id: uuid4(),
    parentText: 'Cooking',
    icon: GiRiceCooker,
    childText: ['Oil', 'Rice', 'Salt & Sugar', 'Spices'],
  },
  {
    id: uuid4(),
    parentText: 'Breakfast',
    icon: BiDish,
    childText: ['Bread', 'Cereal', 'Jam'],
  },
  {
    id: uuid4(),
    parentText: 'Beverage',
    icon: GiWineGlass,
    childText: ['Coffee', 'Energy Drinks', 'Juice', 'Fizzy Drinks', 'Tea'],
  },
  {
    id: uuid4(),
    parentText: 'Health & Beauty',
    icon: BiGlobeAlt,
    childText: ['Bath', 'Cream', 'Deodorant', 'Face Care', 'Oral Care', 'Shaving Needs'],
  },
]
