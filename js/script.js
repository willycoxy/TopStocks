
  function time () {
    fetch("http://worldtimeapi.org/api/ip%22")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const time = data.datetime
      console.log(data.datetime);
      document.querySelector(".timeDisplay").innerHTML = `Time: ${time}`;
    });
  };
  time ()

  function timezone () {
    fetch("http://worldtimeapi.org/api/ip%22")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const timezone = data.timezone
      console.log(data.timezone);
      document.querySelector(".timeZone").innerHTML = `Timezone: ${timezone}`;
    });
  };
  timezone ()
  




