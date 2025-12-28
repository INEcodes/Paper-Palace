export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Classic Notebook',
    price: 4.99,
    description: 'A5 ruled notebook with 120 pages, perfect for notes and journaling.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
  },
  {
    id: 'p2',
    name: 'Gel Pens (Set of 6)',
    price: 6.5,
    description: 'Smooth-writing gel pens in assorted colors.',
    image: 'https://images.unsplash.com/photo-1580910051070-8b3b3b1f6b3e?w=800&q=80',
  },
  {
    id: 'p3',
    name: 'Wooden Pencil Pack',
    price: 3.25,
    description: 'Set of 12 HB pencils with erasers.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    id: 'p4',
    name: 'Sticky Notes',
    price: 2.99,
    description: 'Bright sticky notes for reminders and bookmarks.',
    image: 'https://images.unsplash.com/photo-1582574823427-6c6f8f0b5b0c?w=800&q=80',
  },
  {
    id: 'p5',
    name: 'Mechanical Pencil',
    price: 8.0,
    description: '0.5mm mechanical pencil with cushion grip.',
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf0706b9?w=800&q=80',
  },
  {
    id: 'p6',
    name: 'Desk Organizer',
    price: 12.0,
    description: 'Keep pens and stationery tidy with this small organizer.',
    image: 'https://images.unsplash.com/photo-1580894908361-1a8b7b60d6f6?w=800&q=80',
  },
];
