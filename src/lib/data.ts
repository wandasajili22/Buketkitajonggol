export type Category = 'Wisuda' | 'Ulang Tahun' | 'Wedding' | 'Snack' | 'Money' | 'Custom';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Sweet Graduation Pink',
    price: 150000,
    category: 'Wisuda',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800',
    description: 'Buket pink lembut dengan bunga mawar segar, cocok untuk hadiah kelulusan orang tersayang.',
    isPopular: true,
  },
  {
    id: 'p2',
    name: 'Elegant Red Rose',
    price: 350000,
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800',
    description: 'Rangkaian mawar merah premium yang elegan untuk hari pernikahan yang tak terlupakan.',
    isPopular: true,
  },
  {
    id: 'p3',
    name: 'Birthday Sunflowers',
    price: 200000,
    category: 'Ulang Tahun',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800',
    description: 'Bunga matahari cerah yang melambangkan kebahagiaan dan keceriaan ulang tahun.',
  },
  {
    id: 'p4',
    name: 'Choco Delight Bouquet',
    price: 125000,
    category: 'Snack',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    description: 'Paduan snack cokelat favorit dalam satu buket manis nan menggemaskan.',
  },
  {
    id: 'p5',
    name: 'Golden Fortune Money Bouquet',
    price: 500000,
    category: 'Money',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800',
    description: 'Buket uang asli dengan hiasan bunga kering (harga belum termasuk nominal uang).',
    isPopular: true,
  },
  {
    id: 'p6',
    name: 'Rustic Dried Flowers',
    price: 180000,
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    description: 'Rangkaian bunga kering tahan lama dengan gaya rustic yang estetik.',
  },
  {
    id: 'p7',
    name: 'Soft Pink Peonies',
    price: 450000,
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800',
    description: 'Peony import premium berwarna pink soft untuk momen spesial.',
  },
  {
    id: 'p8',
    name: 'Snack Tower Custom',
    price: 250000,
    category: 'Snack',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    description: 'Snack tower bertingkat dengan request warna pita dan ragam jajanan.',
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Amanda Sari",
    role: "Customer",
    text: "Buket wisudanya cantik banget! Bunga masih segar dan wanginya tahan lama. Packagingnya juga premium banget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bima Putra",
    role: "Customer",
    text: "Pesan buket bunga plus uang untuk ulang tahun ibu. Respon admin cepat, pengiriman aman. Ibu saya sangat senang!",
    rating: 5,
  },
  {
    id: 3,
    name: "Citra Kirana",
    role: "Customer Wedding",
    text: "Bunga hand bouquet untuk wedding aku dibuat persis seperti request. Super elegan dan fotogenik!",
    rating: 5,
  }
];
