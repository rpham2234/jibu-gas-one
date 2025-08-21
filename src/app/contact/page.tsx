'use client';


import React from 'react';
import ContactInfo from '@/components/countries/uganda/contact/contactinfo';
import ContactForm from '@/components/countries/uganda/contact/contactForm';
import {info} from '../info'

export default function Contact() {
  return (
    <div>
        {/* Header and contact Info */}
        <ContactInfo telephone={info.telephone} address={info.address} person={info.person} twitter={info.twitter} cell={info.cell} />
        <ContactForm />
    </div>
  );
}
