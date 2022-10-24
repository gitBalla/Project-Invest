//swap if necessary for development changes to api, swap back before pull request

export function GetApi(context) {
  const api = `https://devfund-api.azurewebsites.net/api/${context}`;
  return api;
  //http://localhost:1337/api/ & https://devfund-api.azurewebsites.net/api/
}