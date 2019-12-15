export default function singleMovie() {
    const API_KEY = '8367b1854dccedcfc9001204de735470'
    const n = Math.floor(Math.random() * 10)

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${n}`

    fetch(url)
        .then(data => data.json())
            .then(data => {
                const results = data.results
            })
}