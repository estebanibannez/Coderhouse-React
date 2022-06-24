import { collection, getDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './components/Firebase/firebaseConfig';
// const products = [
//   {
//     id: 1,
//     title: 'Patman',
//     description: 'Figura coleccionable Batman',
//     previusPrice: 18000,
//     price: 16000,
//     pictureUrl: 'https://m.media-amazon.com/images/I/91qZMeKOe6L._AC_SL1500_.jpg',
//     pictureUrl1: 'https://http2.mlstatic.com/D_NQ_NP_833853-MLA41926264383_052020-O.webp',
//     pictureUrl2:
//       'https://images-na.ssl-images-amazon.com/images/I/51lEneKemmL.__AC_SX300_SY300_QL70_ML2_.jpg',
//     pictureUrl3:
//       'https://lafrikileria.com/40639-thickbox_default/patito-de-goma-batman-dc-comics.jpg',
//     categoryId: 'patos',
//     stock: 5,
//   },
//   {
//     id: 2,
//     title: 'Batman',
//     description: 'Figura coleccionable Batman',
//     previusPrice: 22000,
//     price: 20000,
//     pictureUrl: 'https://m.media-amazon.com/images/I/51-YA02eELL._AC_SX679_.jpg',
//     pictureUrl1: 'https://www.paturros.es/wp-content/uploads/2021/08/tubbz-batman-300x300.jpg',
//     pictureUrl2: 'https://www.paturros.es/wp-content/uploads/2021/08/pato-goma-batman.jpg',
//     pictureUrl3:
//       'https://www.paturros.es/wp-content/uploads/2021/08/patito-goma-batman-300x300.jpg',
//     categoryId: 'patos',
//     stock: 6,
//   },
//   {
//     id: 3,
//     title: 'Marty',
//     description: 'Figura coleccionable Back to The Future',
//     previusPrice: 16000,
//     price: 13000,
//     pictureUrl: 'https://www.paturros.es/wp-content/uploads/2021/01/tubbz-marty-mcfly-300x300.jpg',
//     pictureUrl1: 'https://m.media-amazon.com/images/I/614IsaGCWGL._AC_SX679_.jpg',
//     pictureUrl2:
//       'https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-marty-mcfly-300x300.jpg',
//     pictureUrl3:
//       'https://www.paturros.es/wp-content/uploads/2021/01/patito-goma-marty-mcfly-300x300.jpg',
//     categoryId: 'patos',
//     stock: 6,
//   },
//   {
//     id: 4,
//     title: 'Doctor Strange Diorama',
//     description: 'Doctor Strange Diamond Gallery Diorama en el Multiverso de la Locura',
//     previusPrice: 65000,
//     price: 60000,
//     pictureUrl:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2007/4389/DoctorStrange2_Gallery_4-min__02401.1654190381.jpg?c=1?imbypass=on',
//     pictureUrl1:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2007/4389/DoctorStrange2_Gallery_4-min__02401.1654190381.jpg?c=1?imbypass=on',
//     pictureUrl2:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2007/4391/DoctorStrange2_Gallery_3-min__80464.1654190381.jpg?c=1?imbypass=on',
//     pictureUrl3:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2007/4393/DoctorStrange2_Gallery_5-min__93527.1654190381.jpg?c=1?imbypass=on',
//     categoryId: 'diaromas',
//     stock: 2,
//   },
//   {
//     id: 5,
//     title: 'Miles Morales Gallery Diorama',
//     description: 'Miles Morales Gallery Diorama',
//     previusPrice: 65000,
//     price: 60000,
//     pictureUrl:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/1709/3571/MILES_GALLERY_1__76965.1633719949.jpg?c=1?imbypass=on',
//     pictureUrl1:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/1709/3573/MILES_GALLERY_2__45327.1633719949.jpg?c=1?imbypass=on',
//     pictureUrl2:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/1709/3577/MILES_GALLERY_7__03651.1633719949.jpg?c=1?imbypass=on',
//     pictureUrl3:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/1709/3574/MILES_GALLERY_9__20799.1633719949.jpg?c=1?imbypass=on',
//     categoryId: 'diaromas',
//     stock: 3,
//   },
//   {
//     id: 6,
//     title: 'Visión Galería Diorama',
//     description: 'Visión Galería Diorama',
//     previusPrice: 72000,
//     price: 60000,
//     pictureUrl: 'https://i.ebayimg.com/images/g/px0AAOSwseliA9Vk/s-l500.jpg ',
//     pictureUrl1:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/1607/2713/MarvelGalleryVision2__47643.1641933212.jpg?c=1?imbypass=on',
//     pictureUrl2: 'https://i.ebayimg.com/images/g/GgQAAOSwx0diA9Vh/s-l500.jpg',
//     pictureUrl3:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/1607/2714/MarvelGalleryVision__32970.1641933212.JPG?c=1?imbypass=on',
//     categoryId: 'diaromas',
//     stock: 4,
//   },
//   {
//     id: 7,
//     title: 'PeaceMaker',
//     description: 'Figura coleccionable Suicide Squad',
//     previusPrice: 16000,
//     price: 13000,
//     pictureUrl:
//       'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2128/19126/peacemaker-suicide-squad-tubbz-wb-3_800x.progressive.jpg__59495.1648838242.jpg?c=2',
//     categoryId: 'patos',
//     stock: 5,
//   },
//   {
//     id: 8,
//     title: 'Diaroma Hulk',
//     description: 'Diorama de la galería de lujo de Hulk (inmortal)',
//     previusPrice: 125000,
//     price: 118000,
//     pictureUrl:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2034/4456/Marvel_Hulk_Gallery_01__30684.1654190301.jpg?c=1?imbypass=on',
//     pictureUrl1:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2034/4459/Marvel_Hulk_Gallery_16__66856.1654190301.jpg?c=1?imbypass=on',
//     pictureUrl2:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2034/4457/Marvel_Hulk_Gallery_22__94619.1654190301.jpg?c=1?imbypass=on',
//     pictureUrl3:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2034/4455/Marvel_Hulk_Gallery_27__27134.1654190301.jpg?c=1?imbypass=on',
//     categoryId: 'diaromas',
//     stock: 6,
//   },
//   {
//     id: 9,
//     title: 'Bruja Escarlata Diorama',
//     description: 'WandaVision - Galería de la Bruja Escarlata Diorama',
//     previusPrice: 80000,
//     price: 75000,
//     pictureUrl:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2102/4679/Marvel_ScarletWitch_Gallery_01__73202.1654190355.jpg?c=1?imbypass=on',
//     pictureUrl1:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2102/4677/Marvel_ScarletWitch_Gallery_05__81236.1654190355.jpg?c=1?imbypass=on',
//     pictureUrl2:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2102/4682/Marvel_ScarletWitch_Gallery_08__96102.1654190355.jpg?c=1?imbypass=on',
//     pictureUrl3:
//       'https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2102/4680/Marvel_ScarletWitch_Gallery_10__01451.1654190355.jpg?c=1?imbypass=on',
//     categoryId: 'diaromas',
//     stock: 7,
//   },
//   {
//     id: 10,
//     title: 'Aquack Man',
//     description: 'Figura coleccionable Liga de la justicia',
//     previusPrice: 18000,
//     price: 15000,
//     pictureUrl: 'https://m.media-amazon.com/images/I/7190m2QYxnL._AC_SX679_.jpg',
//     pictureUrl1: 'https://www.paturros.es/wp-content/uploads/2021/02/tubbz-aquaman.jpg',
//     pictureUrl2: 'https://www.paturros.es/wp-content/uploads/2021/02/pato-goma-aquaman.jpg',
//     pictureUrl3:
//       'https://www.paturros.es/wp-content/uploads/2021/02/comprar-patito-goma-aquaman-300x300.jpg',
//     categoryId: 'patos',
//     stock: 8,
//   },
//   {
//     id: 11,
//     title: 'Raiden Gallery Diorama',
//     description: 'Figura Mortal Kombat Raiden Gallery Diorama',
//     previusPrice: 75000,
//     price: 60000,
//     pictureUrl: 'https://pbs.twimg.com/media/E5Ja_1QWUAMoUhH?format=jpg&name=large',
//     pictureUrl1: 'https://http2.mlstatic.com/D_NQ_NP_681904-MLC50254723773_062022-O.webp',
//     pictureUrl2: 'https://pbs.twimg.com/media/E5Ja_1wWEAUeUqb?format=jpg&name=large',
//     pictureUrl3:
//       'https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/d/s/dstdec202070-mortal-kombat-raiden-gallery-10-inch-pvc-diorama-statue-popcultcha-03.jpg',
//     categoryId: 'diaromas',
//     stock: 2,
//   },
//   {
//     id: 12,
//     title: 'Robin',
//     description: 'Figura coleccionable Batman',
//     previusPrice: 15000,
//     price: 12000,
//     pictureUrl:
//       'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1690/15349/Tubbz-DC-Robin-NS-01__88329.1626875986.jpg?c=2',
//     categoryId: 'patos',
//     stock: 10,
//   },
// ];

// ========= hardcoded
// export const getProducts = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(products);
//   }, 500);
// });

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, 'products'));

  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

// ========= hardcoded
// export const getProductsBycategoryId = (categoryId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const productsFilters = products.filter((product) => product.categoryId === categoryId);

//       resolve(productsFilters);
//     }, 500);
//   });
// };

export const getProductsBycategoryId = async (categoryId) => {
  const q = query(collection(db, 'products'), where('categoryId', '==', categoryId));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

// ========= hardcoded
// export const getItem = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const productById = products.find((p) => p.id === id);
//       resolve(productById);
//     }, 500);
//   });
// };

export const getItem = async (id) => {
  const querySnapshot = await getDoc(doc(db, 'products', id));
  return querySnapshot.data();
};
