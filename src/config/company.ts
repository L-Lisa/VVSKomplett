export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export const COMPANY: CompanyInfo = {
  name: 'Komplett VVS i Sthlm AB',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '+46 70-123 45 67',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'info@komplettvvs.se',
  address: 'Stockholm, Sverige'
};
