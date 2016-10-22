const HTTP = {
  get(url, callback) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        callback(request.responseText);
      }
    };

    request.open('GET', url, true);
    request.send(null);
  }
};

export default HTTP;
