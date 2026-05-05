// utils/seed.js — Seed sample data into CosmosDB via Prisma
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({ log: ['error'] });

async function seed() {
  console.log('🌱 Seeding AyuSutra Local SQLite database...\n');

  // ── Blood Banks ────────────────────────────────────
  const bloodBanks = [
    { name: 'Rajiv Gandhi Govt. Blood Bank', address: 'Jayanagar, Bengaluru', phone: '08026564236', timings: '24×7', lat: 12.9283, lng: 77.5826 },
    { name: 'Manipal Hospital Blood Bank', address: 'Old Airport Rd, Bengaluru', phone: '08025023456', timings: '24×7', lat: 12.9672, lng: 77.6482 },
    { name: 'Karnataka Blood Bank', address: 'Shivajinagar, Bengaluru', phone: '08022268888', timings: '8AM–8PM', lat: 12.9895, lng: 77.5946 },
  ];

  for (const bb of bloodBanks) {
    await prisma.bloodBank.create({ data: bb }).catch(() => {});
  }
  console.log(`  ✅ ${bloodBanks.length} blood banks seeded`);

  // ── Diagnostic Centres ─────────────────────────────
  const diagnostics = [
    { name: 'Thyrocare', address: 'MG Road, Bengaluru', phone: '9999222111', testsAvailable: ['CBC','Thyroid','Liver'], rating: 4.2, timings: '7AM–9PM', homeCollection: true, lat: 12.9756, lng: 77.6072 },
    { name: 'Vijaya Diagnostics', address: 'Indiranagar, Bengaluru', phone: '08041155555', testsAvailable: ['MRI','CT Scan'], rating: 4.5, timings: '8AM–8PM', homeCollection: false, lat: 12.9784, lng: 77.6408 },
  ];

  for (const d of diagnostics) {
    await prisma.diagnostic.create({ data: d }).catch(() => {});
  }
  console.log(`  ✅ ${diagnostics.length} diagnostic centres seeded`);

  // ── Sample Hospitals ───────────────────
  const hospitals = [
    { name: 'Victoria Hospital', district: 'Bengaluru', address: 'Fort Rd, Bengaluru', phone: '080-26701150', type: 'Government', lat: 12.9594, lng: 77.5737, specialities: ['CARDIOLOGY','GENERAL MEDICINE'], schemesSupported: ['Ayushman Bharat'], isVerified: true, source: 'csv' },
    { name: 'Jayadeva Cardiology', district: 'Bengaluru', address: 'Jayanagar, Bengaluru', phone: '080-22977800', type: 'Government', lat: 12.9273, lng: 77.5827, specialities: ['CARDIOLOGY'], schemesSupported: ['Ayushman Bharat'], isVerified: true, source: 'csv' },
  ];

  for (const h of hospitals) {
    await prisma.hospital.create({ data: h }).catch(() => {});
  }
  console.log(`  ✅ ${hospitals.length} sample hospitals seeded`);

  console.log('\n🎉 Seeding complete!\n');
  await prisma.$disconnect();
}

seed().catch(err => {
  console.error('❌ Seed error:', err);
  prisma.$disconnect();
  process.exit(1);
});
