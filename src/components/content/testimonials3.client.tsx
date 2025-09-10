"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import type { Testimonials3Props } from './testimonials3';

const Testimonials3Lazy = dynamic(() => import('./testimonials3').then(m => m.Testimonials3), { ssr: false, loading: () => null });

export function Testimonials3Client(props: Testimonials3Props) {
  return <Testimonials3Lazy {...props} />;
}
