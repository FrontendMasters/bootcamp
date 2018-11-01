var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e) {
  e.preventDefault();
  sendData();
});

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendData() {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];

  urlEncodedDataPairs.push(
    encodeURIComponent("name") +
      "=" +
      encodeURIComponent(form.querySelector("[name='name']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("send_to") +
      "=" +
      encodeURIComponent(form.querySelector("[name='send_to']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("email") +
      "=" +
      encodeURIComponent(form.querySelector("[name='email']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("phone") +
      "=" +
      encodeURIComponent(form.querySelector("[name='phone']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("date") +
      "=" +
      encodeURIComponent(form.querySelector("[name='date']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("qty") +
      "=" +
      encodeURIComponent(form.querySelector("[name='qty']").value)
  );

  // radio buttons
  let radio = document.getElementsByName("ufotype");
  for (var i = 0, length = radio.length; i < length; i++) {
    if (radio[i].checked) {
      urlEncodedDataPairs.push(
        encodeURIComponent("ufotype") + "=" + encodeURIComponent(radio[i].value)
      );
    }
  }

  // dropdown menu
  var dropdown = form.querySelector("[name='abtype']");
  urlEncodedDataPairs.push(
    encodeURIComponent("abtype") +
      "=" +
      encodeURIComponent(dropdown.options[dropdown.selectedIndex].text)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("comments") +
      "=" +
      encodeURIComponent(form.querySelector("[name='comments']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("subscribe") +
      "=" +
      encodeURIComponent(form.querySelector("[name='subscribe']").checked)
  );

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  XHR.addEventListener("load", function(event) {
    if (XHR.readyState === XHR.DONE) {
      if (XHR.status === 200) {
        alert("Your order has been received! Check your email.");
      } else {
        alert("Oh oh! We have a problem! " + XHR.responseText + ".");
      }
    }
  });

  // Define what happens in case of error
  XHR.addEventListener("error", function(event) {
    // This is normally a timeout or connection error.
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open(form.getAttribute("method"), form.getAttribute("action"));

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Finally, send our data.
  XHR.send(urlEncodedData);
}
