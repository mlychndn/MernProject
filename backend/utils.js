exports.apiCall = async (url) => {
  try {
    const authorizationToken = `Bearer ${process.env.TMDB_ACCESS_TOKEN}`;
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: authorizationToken,
      },
    });

    const jsonData = await data.json();

    return jsonData;
  } catch (error) {
    return error.message;
  }
};
