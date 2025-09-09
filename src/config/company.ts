export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  openingHours: string[];
}

export const COMPANY: CompanyInfo = {
  name: 'Komplett VVS i Sthlm AB',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '+468-000000',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'info@komplettvvs.se',
  address: 'Stockholm, Sverige',
  openingHours: [
    'Mån–Fre: 08:00–17:00',
    'Lör: 09:00–15:00',
    'Sön: Stängt'
  ]
};
