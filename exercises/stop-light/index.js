function turnOffLights() {
    // change background color of stop light to red
    let offLights = $('.bulb');
    offLights.css('background-color', 'black');
}
// turn on stop function
function turnOnStopLight() {
    // change background color of stop light to red
    turnOffLights();
    let stopLight=$('#stopLight');
    stopLight.css('background-color', 'red');
}

// turn on slow function
function turnOnSlowLight() {
// change background color of slow light to yellow
    turnOffLights();
    let slowLight = $('#slowLight');
    slowLight.css('background-color', 'yellow');
}

// turn on go function
function turnOnGoLight() {
    // change background color of go light to green
    turnOffLights();
    let goLight = $('#goLight');
    goLight.css('background-color', 'green');
}

// set stop light click event
$('#stopButton').on('click', turnOnStopLight);
// set slow light click event
$('#slowButton').on('click', turnOnSlowLight);
// set go light click event
$('#goButton').on('click', turnOnGoLight);
