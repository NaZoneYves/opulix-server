const dotenv = require("dotenv");
const Hotel = require("../models/Hotel");

const hotelData = [
  {
    _id: "6311a54a4a642f0142349086",
    name: "HANOI ROYAL PALACE HOTEL 2",
    title: "HANOI ROYAL PALACE HOTEL 2",
    type: "hotel",
    city: "Ha Noi",
    address: "Hang Da, 95 Hang Bong Street, Old Quarter, Hanoi, Vietnam",
    distance: "10",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Fe76962680bcc984f7b0876da6ac5caa8.jpg?alt=media&token=f4fe570e-703f-47be-8510-65fea3bf73ed",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F0a77da6e3c4f95e95bd84f5dbaeb2a74.jpg?alt=media&token=14e08975-1878-472b-92be-e4af91fa45bf",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F25517748837ba92fcb96c176f627d498.jpg?alt=media&token=5d9c6054-332a-4804-8606-e484fb8ba412",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F57474c14e32152ea509c39adaaf3f781.jpg?alt=media&token=98f2ad6b-c527-491a-a5ef-57dc2d21401a",
    ],
    desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Old Quarter, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Old Quarter. Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.",
    rating: 4,
    featured: true,
    cheapestPrice: 150,
    rooms: ["6310dd998cfecfd90b30ca28"],
  },
  {
    _id: "6311a9c64a642f01423490bf",
    name: "La Sinfonia del Rey Hotel and Spa",
    title: "La Sinfonia del Rey Hotel and Spa",
    type: "hotel",
    city: "Ha Noi",
    address: "Hang Dau, Hoan Kiem District, Hanoi, Vietnam",
    distance: "200",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F70c9f415d4bbc7d2d86b492d46e5aa68.jpg?alt=media&token=e83f0e06-6e4c-4a3b-8601-72b39d311bdd",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F95c472f9e927d2f62293cb721818e6ad.jpg?alt=media&token=07986b5c-5beb-4d75-b675-8742898c65e2",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F202714c15017a85fdcc8ab6674605f94.jpg?alt=media&token=0006b638-5f5d-453c-9395-03f8a66bce0e",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Ff6c5faa6f6fa8696a113fdefc0d259f8.jpg?alt=media&token=ba65ed65-cf31-4a6c-855d-ed3f9a0d1c21",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Ff20208fb8f2fadcbeb9c246761aa6aab.jpg?alt=media&token=67d9c3b7-5780-4be4-8d48-2eb5e0f056fc",
    ],
    desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Hoan Kiem District, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Old Quarter. Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and hot tub on-site.",
    rating: 3,
    featured: true,
    cheapestPrice: 600,
    rooms: [
      "6310dd998cfecfd90b30ca28",
      "6310e01a8cfecfd90b30ca30",
      "6311b2a24a642f01423490d6",
      "6311b3944a642f01423490df",
      "6311b47b4a642f01423490f4",
    ],
  },
  {
    _id: "6311bd07f2fce6ea18172fa3",
    name: "May De Ville Legend Hotel & Spa",
    title: "May De Ville Legend Hotel & Spa",
    type: "hotel",
    city: "Ha Noi",
    address:
      "23-25 Nguyen Sieu, Hang Buom, Hoan Kiem, Old Quarter, Hanoi, Vietnam",
    distance: "445",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Fhotel_1655368450.jpg?alt=media&token=88688564-3d0e-46b0-99e9-ffb611ce4751",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Fhotel_1659323584.jpg?alt=media&token=90a324ce-ecba-4780-8475-101b68383df3",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Fhotel_1661758629.jpg?alt=media&token=da797e05-b960-4034-9f07-34280b926d1b",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2Fhotel_1661758721.jpg?alt=media&token=b96a7990-901c-4412-8823-fc23b7891735",
    ],
    desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Old Quarter, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Old Quarter. Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.",
    rating: 4,
    featured: false,
    cheapestPrice: 325,
    rooms: ["6311be30f2fce6ea18172fa8", "6311be52f2fce6ea18172faf"],
  },
  {
    _id: "6311bf37f2fce6ea18172fb6",
    name: "Alagon Saigon Hotel & Spa",
    title: "Alagon Saigon Hotel & Spa",
    type: "hotel",
    city: "Ho Chi Minh",
    address:
      "289-291 Ly Tu Trong Street, Ben Thanh Ward, District 1, District 1, Ho Chi Minh City, Vietnam",
    distance: "640",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F342349110.jpg?alt=media&token=c35e7d13-a672-48d4-ae0d-30cfc632aff0",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F342349064.jpg?alt=media&token=e0d554e5-5624-43fe-bed2-e55d4ef05eb7",
      "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FNJS301%2FAssignment_Image%2FAssignment_02%2F342349111.jpg?alt=media&token=afa36329-c2f7-43bf-a82d-d54b46fdc244",
    ],
    desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in District 1, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous War Remnants Museum. Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.",
    rating: 5,
    featured: true,
    cheapestPrice: 350,
    rooms: ["6311c083f2fce6ea18172fba", "6311c0a8f2fce6ea18172fc3"],
  },

  {
    _id: "6650aa11123456789abcdef0",
    name: "THE LUXE CENTRAL HOTEL",
    title: "THE LUXE CENTRAL HOTEL",
    type: "hotel",
    city: "Ho Chi Minh City",
    address: "123 Nguyen Hue Street, District 1",
    distance: "100",
    photos: [
      "https://source.unsplash.com/800x600/?hotel,luxury",
      "https://source.unsplash.com/800x600/?hotel,room",
    ],
    desc: "Modern hotel located in the heart of Saigon. Offers pool, gym, and rooftop bar.",
    rating: 4,
    featured: true,
    cheapestPrice: 180,
    rooms: ["6650ab9987654321abcdef12"], // cần tạo room tương ứng
  },

  {
    _id: "6650aa2223456789abcdef01",
    name: "VIETNAM COZY HOMESTAY",
    title: "VIETNAM COZY HOMESTAY",
    type: "homestay",
    city: "Da Nang",
    address: "5 Tran Phu Street, Hai Chau District",
    distance: "300",
    photos: [
      "https://source.unsplash.com/800x600/?homestay",
      "https://source.unsplash.com/800x600/?beach,homestay",
    ],
    desc: "A friendly homestay close to the beach and local markets.",
    rating: 3,
    featured: false,
    cheapestPrice: 100,
    rooms: ["6650ab2234567890abcdef22"], // cần tạo room tương ứng
  },
];

dotenv.config();

const seedHotel = async () => {
  try {
    await Hotel.deleteMany();
    await Hotel.insertMany(hotelData);

    console.log("Seeding hotel successful");
  } catch (error) {
    console.error("Seeding hotel failed - ", error);
  }
};

module.exports = seedHotel;
