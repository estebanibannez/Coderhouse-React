export const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        title: 'Patman',
        description: 'Figura coleccionable Batman',
        previusPrice: 200,
        price: 100,
        pictureUrl: 'https://m.media-amazon.com/images/I/91qZMeKOe6L._AC_SL1500_.jpg',
      },
      {
        id: 2,
        title: 'Pat! Man!',
        description: 'Figura coleccionable Batman',
        previusPrice: 500,
        price: 200,
        pictureUrl: 'https://m.media-amazon.com/images/I/51-YA02eELL._AC_SX679_.jpg',
      },
      {
        id: 3,
        title: 'Marty Patfly',
        description: 'Figura coleccionable Back to The Future',
        previusPrice: 600,
        price: 300,
        pictureUrl: 'https://m.media-amazon.com/images/I/614IsaGCWGL._AC_SX679_.jpg',
      },
      {
        id: 4,
        title: 'Aquack Man',
        description: 'Figura coleccionable Liga de la justicia',
        previusPrice: 800,
        price: 400,
        pictureUrl: 'https://m.media-amazon.com/images/I/7190m2QYxnL._AC_SX679_.jpg',
      },
      {
        id: 5,
        title: 'Patiburon Asesino',
        description: 'Figura coleccionable tiburon',
        previusPrice: 200,
        price: 100,
        pictureUrl:
          'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2083/18597/Bruce-Jaws-TUBBZ-5__92938.1649505737.jpg?c=2',
      },
      {
        id: 6,
        title: 'Robin Pato!',
        description: 'Figura coleccionable Batman',
        previusPrice: 500,
        price: 200,
        pictureUrl:
          'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1690/15349/Tubbz-DC-Robin-NS-01__88329.1626875986.jpg?c=2',
      },
      {
        id: 7,
        title: 'PeaceMaker',
        description: 'Figura coleccionable Suicide Squad',
        previusPrice: 600,
        price: 300,
        pictureUrl:
          'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2128/19126/peacemaker-suicide-squad-tubbz-wb-3_800x.progressive.jpg__59495.1648838242.jpg?c=2',
      },
      {
        id: 8,
        title: 'Harley Quinn',
        description: 'Figura coleccionable Suicide Squad',
        previusPrice: 800,
        price: 400,
        pictureUrl:
          'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2121/19086/Harley-Quinn-Suicide-Squad-TUBBZ-WB-1__17978.1648156358.jpg?c=2',
      },
      {
        id: 9,
        title: 'Beatlejuice ',
        description: 'Figura coleccionable Beatlejuice',
        previusPrice: 600,
        price: 300,
        pictureUrl:
          'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/1863/16389/Betelgeuse-Bloodbath-TUBBZ-NS-03__58909.1632855015.jpg?c=2',
      },
      {
        id: 10,
        title: 'Chucky',
        description: 'Figura coleccionable Chucky',
        previusPrice: 800,
        price: 400,
        pictureUrl:
          'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/2087/18632/Chucky-Horror-TUBBZ-1__79441.1646446074.jpg?c=2',
      },
    ]);
  }, 2000);
});
