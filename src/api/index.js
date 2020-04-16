const endpointUrl = process.env.REACT_APP_API_URL;

const defaultResponse = { data: [], error: null };
const defaultErrorMessage = "Something went wrong";

const errorResponse = (response, cb = () => defaultErrorMessage) => {
  return Object.assign({}, defaultResponse, {
    error: cb(response)
  });
};

export const fetchCards = async () => {
  const response = await fetch(endpointUrl);

  // check http client response
  if (response.status >= 300) {
    return errorResponse(response);
  }

  const body = await response.json();

  // check API response - seems like we have custom format to return status code even http client status was 200,
  // double check to make sure - use returned message if avaiable
  if (typeof body.status === "undefined" || body.status >= 300) {
    return errorResponse(body, body => body.message || defaultErrorMessage);
  }

  return Object.assign({}, defaultResponse, { data: body.items || [] });
};
