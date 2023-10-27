export function ApiAll() {
  return fetch("https://sessionize.com/api/v2/cv0lyaxs/view/All")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}
export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/cv0lyaxs/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}

export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/cv0lyaxs/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}

export function ApiGrid() {
  return fetch("https://sessionize.com/api/v2/cv0lyaxs/view/GridSmart")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}
