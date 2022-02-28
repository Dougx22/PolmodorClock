window.onload = function () {
  
  let seconds = 00
  let tens = 00
  let appendSeconds = document.getElementById('seconds')
  let appendTens = document.getElementById('tens')
  let buttonStart = document.getElementById('btn-start')
  let buttonStop = document.getElementById('btn-stop')
  let buttonReset = document.getElementById('btn-reset')
  let interval
  const sound = document.getElementById('sound')
  let pattern1 = document.getElementById('option1')
  let pattern2 = document.getElementById('option2')
  let pattern3 = document.getElementById('option3')
  let timeBreak = document.getElementById('timeBreak')
  let minutesBreak = document.getElementById('minutesBreak')
  let minutesSave = document.getElementById('minutesSave')

  buttonStart.onclick = function start() {
    clearInterval(interval)
    startTimer()
    interval = setInterval(startTimer, 1000)
  }

  buttonStop.onclick = function stop() {
    clearInterval(interval)
  }

  buttonReset.onclick = function reset() {
    clearInterval(interval)
    tens = '00'
    seconds = '00'

    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
  }

  function startTimer() {
    tens++

    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens
    }
    if (tens > 9) {
      appendTens.innerHTML = tens
    }
    if (tens > 59) {
      console.log('seconds')
      seconds++
      appendSeconds.innerHTML = '0' + seconds
      tens = 0
      appendTens.innerHTML = '0' + 0
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds
      startCheck()
    }
  }

  function startCheck() {
    if (pattern1.checked && seconds === 10) {
      pattern()
      restart()
      showMinutes(1, 5)
    }

    if (pattern2.checked && seconds === 40) {
      pattern()
      restart()
      showMinutes(1, 8)
    }

    if (pattern3.checked && seconds === 50) {
      pattern()
      restart()
      showMinutes(1, 10)
    }
  }

  function pattern() {
    clearInterval(interval)
    sound.play()
    timeBreak.hidden = false
    setTimeout(function () {
      timeBreak.hidden = true
    }, 5.0 * 1000)
  }

  function showMinutes(minS, minB) {
    minutesSave.innerHTML = minS
    minutesBreak.innerHTML = minB
  }

  function restart() {
    startInterval()
    interval = setInterval(startInterval, 1000)
  }

  function startInterval() {
    tens++

    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens
    }
    if (tens > 9) {
      appendTens.innerHTML = tens
    }
    if (tens > 59) {
      console.log('seconds')
      seconds++
      appendSeconds.innerHTML = '0' + seconds
      tens = 0
      appendTens.innerHTML = '0' + 0
    }
    if (seconds >= 9) {
      appendSeconds.innerHTML = seconds
      if (pattern1.checked && seconds === 31) {
        pattern()
      }

      if (pattern2.checked && seconds === 49) {
        pattern()
      }

      if (pattern3.checked && seconds === 59) {
        pattern()
      }
    }
  }
}
