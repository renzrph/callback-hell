const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  // will only fire if we get an okay response which is 200
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  // setting up the request or initializing
  request.open("GET", resource); // 1st argument (type of request), 2nd argument (where to send the request)
  // sending the request
  request.send();
};

// err then data (convention)
getTodos("todos/luigi.json", (err, data) => {
  console.log(data);
  getTodos("todos/mario.json", (err, data) => {
    console.log(data);
    getTodos("todos/shaun.json", (err, data) => {
      console.log(data);
    });
  });
});
