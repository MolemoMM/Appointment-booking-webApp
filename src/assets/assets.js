import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import makeup from './makeup.svg'
import homepage2 from './homepage2.jpg'
import S from './S.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import make from './make.jpg'
import bridal2 from './bridal2.jpg'
import basic_installation from './basic_installation.jpg'
import lashes2 from './lashes2.jpg'
import ombre from './ombre.jpg'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import makeup2 from './makeup2.svg'
import wig from './wig.svg'
import hair from './hair.svg'
import eyelashes from './eyelashes.svg'
import brows from './brows.svg'
import facial_treatment from './facial_treatment.svg'
import body from './body.svg'
import bridal from './bridal.jpg'
import dramatic from './dramatic.jpg'
import natural_makeup from './natural_makeup.jpg'
import bridal_hairstyle from './bridal_hairstyle.jpg'
import eyebrow from './eyebrow.jpg'
import book from './book.png'
import hair2 from './hair2.svg'
import bridal_look from './bridal_look.jpg'
import tint_lamination from './tint_lamination.jpg'
import sibongile from './sibongile.jpg'




export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    S,
    bridal,
    bridal_look,
    hair2,
    dramatic,
    lashes2,
    basic_installation,
    bridal2,
    natural_makeup,
    bridal_hairstyle,
    eyebrow,
    tint_lamination,
    sibongile,
    makeup2,
    book,
    wig,
    hair,
    eyelashes,
    brows,
    facial_treatment,
    body,
    logo,
    makeup,
    make,
    homepage2,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const servicesData = [
    {
        service: 'Make-Up',
        image: makeup2
    },
    {
        service: 'Eyelashes',
        image: eyelashes
    },
    {
        service: 'Wig broker',
        image: wig
    },
    {
        service: 'Eyebrows',
        image: brows
    },
    {
        service: 'Hair Installation',
        image: hair2
    },
    {
        service: 'Facial Treatment',
        image: facial_treatment
    },
  
]

export const service = [
    {
        _id: 'Make-Up',
        name: 'Dramatic Look',
        image: dramatic,
        Service: 'Make-Up',
        duration: '3-4 hours',
        price: 'R550',
    },
    {
        _id: 'Make-Up',
        name: 'Natural Look',
        image: natural_makeup,
        Service: 'Make-Up',
        duration: '2-3 hours',
        price: 'R500',
    },
    {
        _id: 'Hair Installation',
        name: 'Bridal Hairstyle',
        image: bridal_hairstyle,
        Service: 'Hair Installation',
        duration: '1-2 hours',
        price: 'R550-R650',
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'Make-Up',
        name: 'Bridesmaid Look',
        image: bridal,
        Service: 'Make-Up',
        duration: '3-4 hours',
        price: 'R550',
    },
    {
        _id: 'EyeBrows',
        name: 'ombre',
        image: eyebrow,
        Service: 'Eyebrows',
        duration: '2-3 hours',
        price: 'R950',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'Eyelashes',
        name: 'Eyelash Installation',
        image: lashes2,
        Service: 'Eyelashes',
        duration: '1-2 hours',
        price: 'R200',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'Hair Installation',
        name: 'Basic Installation',
        image: basic_installation,
        Service: 'Hair Installation',
        duration: '1-2 hours',
        price: 'R350',
    },
    {
        _id: 'Eyebrows',
        name: 'Tint and Lamination',
        image: tint_lamination,
        Service: 'Eyebrows',
        duration: '1-1.5 hours',
        price: '300',
    },
    {
        _id: 'Make-Up',
        name: 'Bridal Look',
        image: bridal_look,
        Service: 'Make-Up',
        duration: '3-4 hours',
        price: 'R650',
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: make,
        Service: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        Service: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]