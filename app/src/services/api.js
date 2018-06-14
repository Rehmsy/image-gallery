const URL = 'http://localhost:3000/api';
const IMAGES_URL = `${URL}/images`;
const ALBUMS_URL = `${URL}/albums`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => { 
    throw err.message; 
  });
}

export function getImages() {
  return fetch(IMAGES_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addImage(image) {
  return fetch(IMAGES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  })
    .then(responseHandler);
}

export function addAlbum(album) {
  return fetch(ALBUMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album)
  })
    .then(responseHandler);
}

export function getAlbums() {
  return fetch(ALBUMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getAlbum(id) {
  return fetch(`${ALBUMS_URL}/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getStats() {
  return fetch(`${ALBUMS_URL}/stats`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}