const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c2847ee5ae5ffca9842280e6f3078881',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig