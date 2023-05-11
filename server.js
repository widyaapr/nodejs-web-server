const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  const { method, url } = request;

  if (url === '/') {
    // TODO 2: logika respons bila url bernilai '/'
  } else if (url === '/about') {
    // TODO 3: logika respons bila url bernilai '/about'
  } else {
    response.end('<h1>Halaman Tidak Ditemukan</h1>');
  }

  /** Kode komentar disembunyikan agar lebih ringkas */
};
