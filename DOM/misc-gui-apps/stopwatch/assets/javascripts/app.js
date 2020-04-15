class Timer {
  constructor($hours, $minutes, $seconds, $centiseconds) {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.centiseconds = 0;
    this.running = false;
    this.intervalId = null;
    this.$hours = $hours;
    this.$minutes = $minutes;
    this.$seconds = $seconds;
    this.$centiseconds = $centiseconds;

    this.$hours.html('00');
    this.$minutes.html('00');
    this.$seconds.html('00');
    this.$centiseconds.html('00');
  }

  start() {
    this.running = true;
    this.intervalId = setInterval(this._incrementCentiseconds.bind(this), 10);
  }

  stop() {
    clearInterval(this.intervalId);
    this.running = false;
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.centiseconds = 0;

    this.$hours.html('00');
    this.$minutes.html('00');
    this.$seconds.html('00');
    this.$centiseconds.html('00');
  }

  _incrementCentiseconds() {
    this.centiseconds += 1;
    this.$centiseconds.html(this.centiseconds.toString().padStart(2, '0'));
    if (this.centiseconds < 100) return;

    this.centiseconds = 0;
    this.$centiseconds.html('00');
    this._incrementSeconds();
  }

  _incrementSeconds() {
    this.seconds += 1;
    this.$seconds.html(this.seconds.toString().padStart(2, '0'));
    if (this.seconds < 60) return;

    this.seconds = 0;
    this.$seconds.html('00');
    this._incrementMinutes();
  }

  _incrementMinutes() {
    this.minutes += 1;
    this.$minutes.html(this.minutes.toString().padStart(2, '0'));
    if (this.minutes < 60) return;

    this.minutes = 0;
    this.$minutes.html('00');
    this.hours += 1;
    this.$hours.html(this.hours.toString().padStart(2, '0'));
  }
}

$(() => {
  const $hours = $('#hours');
  const $minutes = $('#minutes');
  const $seconds = $('#seconds');
  const $centiseconds = $('#centiseconds');
  const $startStop = $('#start-stop');
  const $reset = $('#reset');
  const timer = new Timer($hours, $minutes, $seconds, $centiseconds);

  $startStop.on('click', () => {
    if (timer.running) {
      timer.stop();
      $startStop.html('Start');
    } else {
      timer.start();
      $startStop.html('Stop');
    }
  });

  $reset.on('click', () => {
    timer.reset();
    $startStop.html('Start');
  });
});
