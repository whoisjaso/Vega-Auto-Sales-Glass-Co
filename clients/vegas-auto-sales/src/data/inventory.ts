export type BodyStyle = 'Coupe' | 'Sedan' | 'SUV' | 'Truck';

export interface Vehicle {
  slug: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  mileage: number;
  body: BodyStyle;
  exterior: string;
  /** Hex used to tint the studio silhouette until real photos are uploaded. */
  paint: string;
  interior: string;
  engine: string;
  transmission: string;
  drivetrain: string;
  stock: string;
  highlights: string[];
  photos?: string[];
  featured?: boolean;
}

/**
 * SAMPLE INVENTORY — placeholder units for design review only.
 * Replace with the live feed from the admin dashboard before launch.
 */
export const sampleInventory: Vehicle[] = [
  {
    slug: '2017-porsche-macan-s',
    year: 2017, make: 'Porsche', model: 'Macan', trim: 'S',
    price: 27950, mileage: 68410, body: 'SUV',
    exterior: 'Carrara White', paint: '#e9e6df', interior: 'Black Leather',
    engine: '3.0L Twin-Turbo V6', transmission: '7-Speed PDK', drivetrain: 'AWD', stock: 'V1701',
    highlights: ['Panoramic roof', 'Bose surround sound', 'Heated sport seats', 'Clean title'],
    featured: true,
  },
  {
    slug: '2016-mercedes-benz-c300',
    year: 2016, make: 'Mercedes-Benz', model: 'C 300', trim: 'Sport',
    price: 15900, mileage: 81230, body: 'Sedan',
    exterior: 'Obsidian Black', paint: '#16171a', interior: 'Silk Beige',
    engine: '2.0L Turbo I4', transmission: '7-Speed Automatic', drivetrain: 'RWD', stock: 'V1602',
    highlights: ['Premium package', 'Backup camera', 'Keyless start', 'Burl walnut trim'],
    featured: true,
  },
  {
    slug: '2018-bmw-x5-xdrive35i',
    year: 2018, make: 'BMW', model: 'X5', trim: 'xDrive35i',
    price: 24500, mileage: 74980, body: 'SUV',
    exterior: 'Carbon Black', paint: '#1d2330', interior: 'Cognac Dakota Leather',
    engine: '3.0L Turbo I6', transmission: '8-Speed Automatic', drivetrain: 'AWD', stock: 'V1803',
    highlights: ['Third-row seating', 'Navigation', 'Power liftgate', 'Heated seats'],
    featured: true,
  },
  {
    slug: '2015-porsche-911-carrera',
    year: 2015, make: 'Porsche', model: '911', trim: 'Carrera',
    price: 61900, mileage: 42100, body: 'Coupe',
    exterior: 'Guards Red', paint: '#b3121b', interior: 'Black Leather',
    engine: '3.4L Flat-Six', transmission: '7-Speed PDK', drivetrain: 'RWD', stock: 'V1504',
    highlights: ['Sport Chrono', 'Sport exhaust', '20" Carrera S wheels', 'Service records'],
    featured: true,
  },
  {
    slug: '2017-lexus-rx-350',
    year: 2017, make: 'Lexus', model: 'RX 350',
    price: 23900, mileage: 88450, body: 'SUV',
    exterior: 'Atomic Silver', paint: '#a7abb1', interior: 'Parchment',
    engine: '3.5L V6', transmission: '8-Speed Automatic', drivetrain: 'FWD', stock: 'V1705',
    highlights: ['One owner', 'Blind spot monitor', 'Ventilated seats', 'Sunroof'],
  },
  {
    slug: '2016-ford-f-150-lariat',
    year: 2016, make: 'Ford', model: 'F-150', trim: 'Lariat SuperCrew',
    price: 22750, mileage: 96320, body: 'Truck',
    exterior: 'Magnetic Gray', paint: '#4b4f55', interior: 'Black Leather',
    engine: '3.5L EcoBoost V6', transmission: '6-Speed Automatic', drivetrain: '4WD', stock: 'V1606',
    highlights: ['Tow package', 'Bed liner', 'Remote start', 'Heated & cooled seats'],
  },
  {
    slug: '2014-land-rover-range-rover-sport',
    year: 2014, make: 'Land Rover', model: 'Range Rover Sport', trim: 'HSE',
    price: 21900, mileage: 91200, body: 'SUV',
    exterior: 'Santorini Black', paint: '#101214', interior: 'Almond Leather',
    engine: '3.0L Supercharged V6', transmission: '8-Speed Automatic', drivetrain: '4WD', stock: 'V1407',
    highlights: ['Terrain Response', 'Meridian audio', 'Panoramic roof', 'Air suspension'],
  },
  {
    slug: '2015-chevrolet-silverado-ltz',
    year: 2015, make: 'Chevrolet', model: 'Silverado 1500', trim: 'LTZ Crew Cab',
    price: 19995, mileage: 112450, body: 'Truck',
    exterior: 'Summit White', paint: '#eeeeea', interior: 'Jet Black',
    engine: '5.3L V8', transmission: '6-Speed Automatic', drivetrain: '4WD', stock: 'V1508',
    highlights: ['Z71 package', 'Bose audio', 'Trailering package', 'Running boards'],
  },
  {
    slug: '2017-audi-a4-premium-plus',
    year: 2017, make: 'Audi', model: 'A4', trim: 'Premium Plus',
    price: 16450, mileage: 70890, body: 'Sedan',
    exterior: 'Navarra Blue', paint: '#1f3a6b', interior: 'Rock Gray',
    engine: '2.0L TFSI I4', transmission: '7-Speed S tronic', drivetrain: 'quattro AWD', stock: 'V1709',
    highlights: ['Virtual cockpit', 'Bang & Olufsen', 'LED headlights', 'Heated seats'],
  },
  {
    slug: '2018-toyota-camry-se',
    year: 2018, make: 'Toyota', model: 'Camry', trim: 'SE',
    price: 14250, mileage: 79300, body: 'Sedan',
    exterior: 'Celestial Silver', paint: '#b9bcc0', interior: 'Ash',
    engine: '2.5L I4', transmission: '8-Speed Automatic', drivetrain: 'FWD', stock: 'V1810',
    highlights: ['Toyota Safety Sense', 'Apple CarPlay', 'Sport-tuned suspension', 'Great on fuel'],
  },
  {
    slug: '2016-mercedes-benz-e350-coupe',
    year: 2016, make: 'Mercedes-Benz', model: 'E 350', trim: 'Coupe',
    price: 18900, mileage: 69870, body: 'Coupe',
    exterior: 'Diamond White', paint: '#f1efe9', interior: 'Red/Black Leather',
    engine: '3.5L V6', transmission: '7-Speed Automatic', drivetrain: 'RWD', stock: 'V1611',
    highlights: ['Pillarless hardtop', 'Harman Kardon', 'Panorama roof', 'AMG wheels'],
  },
  {
    slug: '2017-ram-1500-laramie',
    year: 2017, make: 'Ram', model: '1500', trim: 'Laramie Crew Cab',
    price: 23400, mileage: 99750, body: 'Truck',
    exterior: 'Granite Crystal', paint: '#3b3e42', interior: 'Canyon Brown',
    engine: '5.7L HEMI V8', transmission: '8-Speed Automatic', drivetrain: '4WD', stock: 'V1712',
    highlights: ['RamBox cargo', 'Uconnect 8.4"', 'Heated steering wheel', 'Tow hitch'],
  },
];

export function vehicleTitle(v: Vehicle): string {
  return `${v.year} ${v.make} ${v.model}${v.trim ? ` ${v.trim}` : ''}`;
}

export const currency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export const miles = (n: number) => `${n.toLocaleString('en-US')} mi`;

/** Rough monthly payment for display only. */
export function estimatePayment(price: number, down = 0.15, apr = 0.129, months = 48): number {
  const principal = price * (1 - down);
  const r = apr / 12;
  return Math.round((principal * r) / (1 - Math.pow(1 + r, -months)));
}
