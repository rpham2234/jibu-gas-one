'use client';

import React from 'react'
import {useEffect} from 'react';
import ContactInfo from '@/components/countries/uganda/contact/contactinfo';
import ContactForm from '@/components/countries/uganda/contact/contactForm';
import {info} from '../info'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
  useEffect(() => {
    emailjs.init(publicKey); // your public key
  }, []);

  return (
    <div>
        {/* Header and contact Info */}
        <ContactInfo telephone={info.telephone} address={info.address} twitter={info.twitter}  />
        <ContactForm />
    </div>
  );
}
