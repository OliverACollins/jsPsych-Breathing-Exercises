// instructions
const instructions_711_short = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>7-11 Breathing Instructions</b></h2>
        <p>7-11 breathing is a simple, easy-to-remember exercise used to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 7 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>EXHALE</b> for 11 seconds <b>through your mouth</b></ul>
        <p>You have selected to practice 7-11 breathing for <b>2 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/711_representation.png", alt="one cycle of 7-11 breathing", width = 1000
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

const instructions_711_med = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>7-11 Breathing Instructions</b></h2>
        <p>7-11 breathing is a simple, easy-to-remember exercise used to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 7 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>EXHALE</b> for 11 seconds <b>through your mouth</b></ul>
        <p>You have selected to practice 7-11 breathing for <b>5 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/711_representation.png", alt="one cycle of 7-11 breathing", width = 1000
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

const instructions_711_long = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>7-11 Breathing Instructions</b></h2>
        <p>7-11 breathing is a simple, easy-to-remember exercise used to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 7 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>EXHALE</b> for 11 seconds <b>through your mouth</b></ul>
        <p>You have selected to practice 7-11 breathing for <b>10 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/711_representation.png", alt="one cycle of 7-11 breathing", width = 1000
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

const instructions_711_longer = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>7-11 Breathing Instructions</b></h2>
        <p>7-11 breathing is a simple, easy-to-remember exercise used to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 7 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>EXHALE</b> for 11 seconds <b>through your mouth</b></ul>
        <p>You have selected to practice 7-11 breathing for <b>20 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/711_representation.png", alt="one cycle of 7-11 breathing", width = 1000
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}


// ---- trial loop ----
// fixation with countdown (5s)
const fixation_711 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style = "font-size:500%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">+</div>

    <div id="countdown" style="
      font-size: 50px;
      position: fixed;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">
      5
    </div>
  `,
  choices: "NO_KEYS",
  trial_duration: 5000,

  on_start: function () {
    document.body.style.backgroundColor = "white"
    document.body.style.cursor = "none"

    let count = 5
    let countdownInterval = setInterval(() => {
      count--
      if (count > 0) {
        const el = document.getElementById("countdown")
        if (el) el.innerText = count
      } else {
        clearInterval(countdownInterval)
      }
    }, 1000)
  },

  on_finish: function () {
    document.body.style.backgroundColor = "white"
  }
}


// inhale + countdown (7s)
const inhale_711 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style = "font-size:300%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">
      <b>Inhale (nose)</b>
    </div>

    <div id="countdown" style="
      font-size: 50px;
      position: fixed;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">
      7
    </div>
  `,
  choices: "NO_KEYS",
  trial_duration: 7000,

  on_start: function () {
    document.body.style.backgroundColor = "white"
    document.body.style.cursor = "none"

    let count = 7
    let countdownInterval = setInterval(() => {
      count--
      if (count > 0) {
        const el = document.getElementById("countdown")
        if (el) el.innerText = count
      } else {
        clearInterval(countdownInterval)
      }
    }, 1000)
  },

  on_finish: function () {
    document.body.style.backgroundColor = "white"
  }
}

// exhale + countdown (11s)
const exhale_711 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style = "font-size:300%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">
      <b>Exhale (mouth)</b>
    </div>

    <div id="countdown" style="
      font-size: 50px;
      position: fixed;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">
      11
    </div>
  `,
  choices: "NO_KEYS",
  trial_duration: 11000,

  on_start: function () {
    document.body.style.backgroundColor = "white"
    document.body.style.cursor = "none"

    let count = 11
    let countdownInterval = setInterval(() => {
      count--
      if (count > 0) {
        const el = document.getElementById("countdown")
        if (el) el.innerText = count
      } else {
        clearInterval(countdownInterval)
      }
    }, 1000)
  },

  on_finish: function () {
    document.body.style.backgroundColor = "white"
  }
}


// practice trial loop sequence (1 cycle w/o fixation = 18 seconds)
const practice_711 = {
    timeline: [fixation_711, inhale_711, exhale_711],
    repetitions: 1,
}


// screen before experimental trials
const instructions2_711 = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the breathing exercise"],
    on_start:() => {
      document.body.style.cursor = "default";
    },

    stimulus:`
    <div style = "max-width: 1500px; margin: 0 auto;">
    <h2><b>Before We Start</b></h2>
        <h3>To ensure you benefit from this exercise, you <b>must</b> do the following:</h3>
          <ul>- Sit upright, resting your shoulders. Ensure you are sitting comfortably</ul>
          <ul>- Place your tongue towards the roof of your mouth, behind your front teeth. Your tongue should remain in this general area for the entirety of the exercise</ul>
          <ul>- You should aim to inhale and exhale FULLY</ul>
          <ul>- When exhaling, make sure to purse your lips. This should create a "whoosh" sound as you breathe out</ul>
        <p>In the exercise, as shown in the demonstration, you will see a <b>5-4-3-2-1 countdown sequence</b> before the first 7-11 cycle. <b>Over this 5-second period, you should exhale fully to clear your lungs.</b> This countdown will <b>not</b> be included before the subsequent cycles: once the first cycle has finished, 
          the next cycle will immediately follow - starting with "<b>Inhale (nose)</b>" - until all cycles have been completed.</p>
        <p>Press the button when you are ready to start the breathing exercise.</p>
    </div>`
}


// experiment trial loop sequence - different durations
const procedure_711_short = {
    timeline: [inhale_711, exhale_711],
    repetitions: 7, // 126 seconds ("2 minutes")
}

const procedure_711_med = {
    timeline: [inhale_711, exhale_711],
    repetitions: 17, // 306 seconds ("5 minutes")
}

const procedure_711_long = {
    timeline: [inhale_711, exhale_711],
    repetitions: 34, // 612 seconds ("10 minutes")
}

const procedure_711_longer = {
    timeline: [inhale_711, exhale_711],
    repetitions: 68, // 1,224 seconds ("20 minutes")
}


// end of task
const finish_711 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<h3><b>You have now finished the 7-11 breathing exercise.</b></h3>",
    choices: ["Return to selection menu"],
    data: {
        task: "finish_711"
    },
    on_finish: function (data) {
        jsPsych.data.addProperties({
        return_to_menu: data.response === 0
        });
    }
};