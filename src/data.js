const products = [
  {
    id: 1,
    title: 'Patman',
    description: 'Figura coleccionable Batman',
    previusPrice: 2000,
    price: 1000,
    pictureUrl: 'https://m.media-amazon.com/images/I/91qZMeKOe6L._AC_SL1500_.jpg',
    pictureUrl1: 'https://http2.mlstatic.com/D_NQ_NP_833853-MLA41926264383_052020-O.webp',
    pictureUrl2:
      'https://images-na.ssl-images-amazon.com/images/I/51lEneKemmL.__AC_SX300_SY300_QL70_ML2_.jpg',
    categoryId: 'heroes',
    stock: 5,
  },
  {
    id: 2,
    title: 'Batman',
    description: 'Figura coleccionable Batman',
    previusPrice: 5000,
    price: 2000,
    pictureUrl: 'https://m.media-amazon.com/images/I/51-YA02eELL._AC_SX679_.jpg',
    pictureUrl1: 'https://www.paturros.es/wp-content/uploads/2021/08/tubbz-batman-300x300.jpg',
    pictureUrl2: 'https://www.paturros.es/wp-content/uploads/2021/08/pato-goma-batman.jpg',
    pictureUrl3:
      'https://www.paturros.es/wp-content/uploads/2021/08/patito-goma-batman-300x300.jpg',
    categoryId: 'heroes',
    stock: 6,
  },
  {
    id: 3,
    title: 'Marty',
    description: 'Figura coleccionable Back to The Future',
    previusPrice: 6000,
    price: 3000,
    pictureUrl: 'https://m.media-amazon.com/images/I/614IsaGCWGL._AC_SX679_.jpg',
    pictureUrl1: 'https://www.paturros.es/wp-content/uploads/2021/01/tubbz-marty-mcfly-300x300.jpg',
    pictureUrl2:
      'https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-marty-mcfly-300x300.jpg',
    pictureUrl3:
      'https://www.paturros.es/wp-content/uploads/2021/01/patito-goma-marty-mcfly-300x300.jpg',
    categoryId: 'otros',
    stock: 6,
  },
  {
    id: 4,
    title: 'Aquack Man',
    description: 'Figura coleccionable Liga de la justicia',
    previusPrice: 8000,
    price: 4000,
    pictureUrl: 'https://m.media-amazon.com/images/I/7190m2QYxnL._AC_SX679_.jpg',
    pictureUrl1: 'https://www.paturros.es/wp-content/uploads/2021/02/tubbz-aquaman.jpg',
    pictureUrl2: 'https://www.paturros.es/wp-content/uploads/2021/02/pato-goma-aquaman.jpg',
    pictureUrl3:
      'https://www.paturros.es/wp-content/uploads/2021/02/comprar-patito-goma-aquaman-300x300.jpg',
    categoryId: 'heroes',
    stock: 8,
  },
  {
    id: 5,
    title: 'tiburon Asesino',
    description: 'Figura coleccionable tiburon',
    previusPrice: 2000,
    price: 1000,
    pictureUrl:
      'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2083/18597/Bruce-Jaws-TUBBZ-5__92938.1649505737.jpg?c=2',
    categoryId: 'otros',
    stock: 3,
  },
  {
    id: 6,
    title: 'Robin',
    description: 'Figura coleccionable Batman',
    previusPrice: 5000,
    price: 2000,
    pictureUrl:
      'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1690/15349/Tubbz-DC-Robin-NS-01__88329.1626875986.jpg?c=2',
    categoryId: 'heroes',
    stock: 10,
  },
  {
    id: 7,
    title: 'PeaceMaker',
    description: 'Figura coleccionable Suicide Squad',
    previusPrice: 6000,
    price: 3000,
    pictureUrl:
      'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2128/19126/peacemaker-suicide-squad-tubbz-wb-3_800x.progressive.jpg__59495.1648838242.jpg?c=2',
    categoryId: 'heroes',
    stock: 5,
  },
  {
    id: 8,
    title: 'Harley Quinn',
    description: 'Figura coleccionable Suicide Squad',
    previusPrice: 8000,
    price: 4000,
    pictureUrl:
      'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2121/19086/Harley-Quinn-Suicide-Squad-TUBBZ-WB-1__17978.1648156358.jpg?c=2',
    categoryId: 'villanos',
    stock: 6,
  },
  {
    id: 9,
    title: 'Beatlejuice ',
    description: 'Figura coleccionable Beatlejuice',
    previusPrice: 6000,
    price: 3000,
    pictureUrl:
      'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/1863/16389/Betelgeuse-Bloodbath-TUBBZ-NS-03__58909.1632855015.jpg?c=2',
    categoryId: 'otros',
    stock: 7,
  },
  {
    id: 10,
    title: 'Chucky',
    description: 'Figura coleccionable Chucky',
    previusPrice: 8000,
    price: 4000,
    pictureUrl:
      'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2087/18632/Chucky-Horror-TUBBZ-1__79441.1646446074.jpg?c=2',
    categoryId: 'otros',
    stock: 2,
  },
];

export const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProductsBycategoryId = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productsFilters = products.filter((product) => product.categoryId === categoryId);

      resolve(productsFilters);
    }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productById = products.find((p) => p.id === id);
      console.log('producto by id', productById);
      resolve(productById);
    }, 2000);
  });
};
