/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> } 
*/


exports.seed = async function(knex) {
 // Deletes ALL existing entries
 await knex('doctors').del()
 await knex('doctors').insert([
   {
     id: 1,
     name: "Sheila Mary Brereton",
     cpso_number: 55999,
     specialty: "General and Family Practice",
     practice_name: "Credit Valley Hospital",
     address_street: "2300 Eglinton Ave W Suite 205",
     address_city: "Mississauga",
      address_province: "ON",
      address_postal_code: "L5N 2V8",
     phone_number: "(905)820-8144",
     status: "Not Accepting New Patients",
     latitude: 43.692810,
     longitude: -79.463910,
   },
   {
     id: 2,
     name: "Mustafa Abdulhusein",
     cpso_number: 82287,
     specialty: "General and Family Practice",
     practice_name: "Doctors R Us",
     address_street: "205 Van Kirk Drive Suite 12",
     address_city: "Brampton",
     address_province: "ON",
     address_postal_code: "L7A 3V4",
     phone_number: "(905) 495-2254",
     status: "Accepting New Patients",
     latitude: 43.710070,
     longitude: -79.810770,
   },
   {
     id: 3,
     name: "Abhinn Aggarwal",
     cpso_number: 135461,
     specialty: "General and Family Practice",
     practice_name: "Dundas Neyagawa Medical Centre and Walk-In Clinic",
     address_street: "479 Dundas St W",
     address_city: "Oakville",
     address_province: "ON",
     address_postal_code: "L6M 1L9",
     phone_number: "(905) 257-5779",
     status: "Accepting New Patients",
     latitude: 43.466860,
     longitude: -79.744270,
   },
   {
     id: 4,
     name: "Anjali Aggarwal",
     cpso_number: 79163,
     specialty: "Obstetrics and Gynecology",
     practice_name: "Don Valley Medical Center",
     address_street:"855 Broadview Avenue Suite 301",
     address_city: "Toronto",
     address_province: "ON",
     address_postal_code: "M4K 3Z1",
     phone_number: "(416) 901-5496",
     status: "Accepting New Patients",
     latitude: 43.679610,
     longitude: -79.357860,
   },
   {
     id: 5,
     name: "Puja Aggarwal",
     cpso_number: 117672,
     specialty: "General and Family Practice",
     practice_name: "Northpoint Family Medicine",
     address_street: "2 Dewside Dr",
     address_city: "Brampton",
     address_province: "ON",
     address_postal_code: "L6R 3Y5",
     phone_number: "(905) 792-0074",
     status: "Not Accepting New Patients",
     latitude: 43.757050,
     longitude: -79.762060,
   },
   {
     id: 6,
     name: "Amrita Kaur Dhanoa",
     cpso_number: 142226,
     specialty: "General and Family Practice",
     practice_name: "Healthpoint Family Medicine and Wal",
     address_street: "8405 Financial Dr Unit 7",
     address_city: "Brampton",
     address_province: "ON",
     address_postal_code: "L6Y 1M1",
     phone_number: "(905) 846 2299",
     status: "Accepting New Patients",
     latitude: 43.635688,
     longitude: -79.790189,
   },
   {
     id: 7,
     name: "Dubravka M Dodig",
     cpso_number: 83993,
     specialty: "Neurology",
     practice_name: "Toronto Western Hospital",
     address_street: "399 Bathurst Street, Fell Pavillion, 4th Floor, Room 435",
     address_city: "Toronto",
     address_province: "ON",
     address_postal_code: "M5T 2S8",
     phone_number: "(437) 836-3158",
     status: "Accepting New Patients",
     latitude: 43.653490,
     longitude: -79.405829,
   },
   {
     id: 8,
     name: "Amy Catherine Lau",
     cpso_number: 100470,
     specialty: "General and Family Practice",
     practice_name: "North Markham Medical Center",
     address_street: "9980 Kennedy Road Suite C9",
     address_city: "Markham",
     address_province: "ON",
     address_postal_code: "L6C 0M4",
     phone_number: "(905) 888-7099",
     status: "Accepting New Patients",
     latitude: 43.8965531,
     longitude: -79.319835,
   },
   {
     id: 9,
     name: "Ching See Lau",
     cpso_number: 124176,
     specialty: "Pediatrics",
     practice_name: "The Hospital for Sick Children",
     address_street: "555 University Ave",
     address_city: "Toronto",
     address_province: "ON",
     address_postal_code: "M5G 1X8",
     phone_number: "(416) 813-7500",
     status: "Not Accepting New Patients",
     latitude: 43.657770,
     longitude: -79.386486,
   },
   {
     id: 10,
     name: "Johnny Tak-Choy Lau",
     cpso_number: 68115,
     specialty: "Surgery",
     practice_name: "Toronto Western Hospital",
     address_street: "399 Bathurst Street",
     address_city: "Toronto",
     address_province: "ON",
     address_postal_code: "M5T 2S8",
     phone_number: "(416) 603-6292",
     status: "Not Accepting New Patients",
     latitude: 43.653300,
     longitude: -79.405877,
   },
   {
    id: 11,
    name: "Kimberly Debra Lazare",
    cpso_number: 98120,
    specialty: "General and Family Practice",
    practice_name: "North York General Hospital",
    address_street: "4001 Leslie Street",
    address_city: "Toronto",
    address_province: "ON",
    address_postal_code: "M2K 1E1",
    phone_number: "416-756-6980",
    status: "Accepting New Patients",
    latitude: 43.769367,
    longitude: -79.362872,
  },
  {
    id: 12,
    name: "Ahmed Ibrahim Hassan",
    cpso_number: 75029,
    specialty: "General and Family Practice",
    practice_name: "Doctors Clinic Mississauga",
    address_street: "100 Queensway W",
    address_city: "Mississauga",
    address_province: "ON",
    address_postal_code: "L5B 1B8",
    phone_number: "(905) 848-7100",
    status: "Accepting New Patients",
    latitude: 43.571687,
    longitude: -79.608593,
  },
  {
    id: 13,
    name: "Nirosha Balasingam",
    cpso_number: 108931,
    specialty: "General and Family Practice",
    practice_name: "Dox Medical",
    address_street: "2683 Lawrence Avenue East Suite 5",
    address_city: "Scarborough",
    address_province: "ON",
    address_postal_code: "M1P 2S2",
    phone_number: "(416) 299-0710",
    status: "Not Accepting New Patients",
    latitude: 43.751937,
    longitude: -79.261409,
  },
  {
    id: 14,
    name: "Chui Lian Looi-Lyons",
    cpso_number: 61231,
    specialty: "Surgery",
    practice_name: "Trillium Health Centre",
    address_street: "100 Queensway West",
    address_city: "Mississauga",
    address_province: "ON",
    address_postal_code: "L5B 1B8",
    phone_number: "(905) 848-7628",
    status: "Not Accepting New Patients",
    latitude: 43.571749,
    longitude:  -79.608502,
  },
  {
    id: 15,
    name: "Tatyana Selyanina",
    cpso_number: 99682,
    specialty: "General and Family Practice",
    practice_name: "Kingsbridge Medical Centre",
    address_street: "33 City Centre Dr Suite 111",
    address_city: "Mississauga",
    address_province: "ON",
    address_postal_code: "L5B 2N5",
    phone_number: "(905) 507-1111",
    status: "Not Accepting New Patients",
    latitude: 43.594797,
    longitude:  -79.638742,
  },

 ]);
};

