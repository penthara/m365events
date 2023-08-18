export function ApiAll() {
  return fetch("https://sessionize.com/api/v2/ybx73zxv/view/All")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}
export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/ybx73zxv/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}

export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/ybx73zxv/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}

export function ApiGrid() {
  return fetch("https://sessionize.com/api/v2/ybx73zxv/view/GridSmart")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}
