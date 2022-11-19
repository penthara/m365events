export function ApiAll() {
  return fetch("https://sessionize.com/api/v2/8gznf17f/view/All")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/8gznf17f/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/8gznf17f/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function ApiGrid() {
  return fetch("https://sessionize.com/api/v2/8gznf17f/view/GridSmart")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
