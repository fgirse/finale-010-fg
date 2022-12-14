/* eslint-disable prettier/prettier */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import images from 'next/image'

const biereA = [
  {
    title: 'Ganter Pils',
    price: '3.90 Euro',
    tags: 'Fass | 40cl',
  },
  {
    title: 'Astra Pils',
    price: '3.90 Euro',
    tags: 'Flasche | 33cl',
  },
  {
    title: 'Flensburger Pils',
    price: '3.90 Euro',
    tags: 'Flasche | 33cl',
  },
]

const biereB = [
  {
    title: 'Ganter Hefeweizen',
    price: '4.90 Euro',
    tags: 'Fass | 50 cl',
  },
  {
    title: 'Ganter Radler',
    price: '4.20 Euro',
    tags: 'Fass | 50 cl',
  },
  {
    title: 'Ganter Radler',
    price: '4.20 Euro',
    tags: 'Fass | 50 cl',
  },
]

const weineA = [
  {
    title: 'Spätburgunder trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen | Batzenberg | Weingut Heienmann | 2dl',
  },
  {
    title: 'Pinot noir trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen | Batzenberg | Weingut Heienmann | 2dl',
  },
  {
    title: 'Blauburgunder trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen-| Batzenberg | Weingut Heienmann | 2dl',
  },

  {
    title: 'Spätburgunder Barrique',
    price: '6.90 Euro',
    tags: 'Scherzingen-| Batzenberg | Weingut Heienmann | 2dl',
  },
]

const weineB = [
  {
    title: 'Gutedel trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen | Batzenberg | Weingut Heienmann | 2dl',
  },
  {
    title: 'Müller-Thurgau trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen | Batzenberg | Weingut Heienmann | 2dl',
  },
  {
    title: 'Weissburgunder trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen | Batzenberg | Weingut Heienmann | 2dl',
  },
  {
    title: 'Grauburgunder trocken',
    price: '6.90 Euro',
    tags: 'Scherzingen | Batzenberg | Weingut Heienmann | 2dl',
  },
]

const cocktailsA = [
  {
    title: 'Aperol Sprtiz',
    price: '6.90 Euro',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '6.60 Euro',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
]

const cocktailsB = [
  {
    title: 'Aperol Sprtiz',
    price: '6.90 Euro',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Martini Bianco',
    price: '6.60 Euro',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Martini Rosso',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Martini DRy',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Bloody Mary',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
]

const awards = [
  {
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
]

export default { biereA, biereB, weineA, weineB, cocktailsA, cocktailsB, awards }
