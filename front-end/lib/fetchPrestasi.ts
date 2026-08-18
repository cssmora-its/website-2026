// lib/fetchPrestasi.ts
import { Prestasi } from '@/components/prestasi/prestasiData';

// Fungsi untuk mengubah link sharing Drive biasa menjadi link gambar langsung (direct link)
function convertDriveLink(url?: string): string {
  if (!url) return '';
  // Cek apakah url adalah link google drive
  const driveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(driveRegex);
  
  if (match && match[1]) {
    // Gunakan format endpoint thumbnail Google Drive (lebih handal dari uc?export=view yang kini sering diblokir)
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }
  
  return url;
}

export async function getPrestasiData(): Promise<Prestasi[]> {
  const apiUrl = process.env.NEXT_PUBLIC_PRESTASI_API_URL;

  if (!apiUrl) {
    console.warn('Warning: NEXT_PUBLIC_PRESTASI_API_URL is not defined in environment variables.');
    return [];
  }

  try {
    // Gunakan ISR: revalidate setiap 3600 detik (1 jam)
    // Di production, cache selama 1 jam. Di development, jangan cache agar perubahan langsung terlihat.
    const fetchOptions: RequestInit = process.env.NODE_ENV === 'development'
      ? { cache: 'no-store' }
      : { next: { revalidate: 3600 } };
      
    const response = await fetch(apiUrl, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Konversi semua link drive menjadi direct link
    const formattedData = data.map((item: any) => ({
      ...item,
      thumbnail: convertDriveLink(item.thumbnail),
      image: convertDriveLink(item.image),
    }));

    return formattedData as Prestasi[];
  } catch (error) {
    console.error('Error fetching prestasi data:', error);
    return [];
  }
}
