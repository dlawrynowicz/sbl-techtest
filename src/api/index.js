const endpointUrl = process.env.REACT_APP_API_URL;

export const fetchCards = async () => fetch(endpointUrl);
