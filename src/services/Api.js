export function ApiAll() {
  return fetch("https://sessionize.com/api/v2/v2/mz1j3hwl/view/All")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}
export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/v2/mz1j3hwl/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}

export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/v2/mz1j3hwl/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}

export function ApiGrid() {
  return fetch("https://sessionize.com/api/v2/v2/mz1j3hwl/view/GridSmart")
    .then((data) => data.json())
    .catch((err) => {
      // console.log(err);
    });
}
