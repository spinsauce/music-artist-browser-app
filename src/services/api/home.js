export const requestAlbumList = async (id = '') => {

    let response = await fetch(`http://localhost:3004/albums/${id}`)
    let data = await response.json()
    return data
}

export const requestArtistList = async (id = '') => {
    let response = await fetch(`http://localhost:3004/artists/${id}`)
    let data = await response.json()
    return data
}