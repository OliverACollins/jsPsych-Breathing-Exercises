// instructions - 4 cycles
const instructions_4cycles_478 = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>4-7-8 Breathing Instructions</b></h2>
        <p>Based on ancient mindful breathing practices, the "4-7-8" breathing exercise is a popular technique used to slow down the activity of the nervous system. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 4 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>HOLD</b> your breath for 7 seconds</ul>
          <ul>3.) <b>EXHALE</b> for 8 seconds <b>through your mouth</b></ul>
        <p>You have selected to practice this exercise over <b>4</b> <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/478_representation.png", alt="one cycle of 4-7-8", width = 900
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

// instructions - 8 cycles
const instructions_8cycles_478 = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>4-7-8 Breathing Exercise Instructions</b></h2>
        <p>Based on ancient mindful breathing practices, the "4-7-8" breathing exercise is a popular technique used to slow down the activity of the nervous system. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 4 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>HOLD</b> your breath for 7 seconds</ul>
          <ul>3.) <b>EXHALE</b> for 8 seconds <b>through your mouth</b></ul>
        <p>You have selected to practice this exercise over <b>8</b> <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/478_representation.png", alt="one cycle of 4-7-8", width = 900
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

// ---- trial loop ----
// fixation + countdown (5s)
const fixation_478 = {
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

// inhale + countdown (4s)
const inhale_478 = {
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
      4
    </div>
  `,
  choices: "NO_KEYS",
  trial_duration: 4000,

  on_start: function () {
    document.body.style.backgroundColor = "white"
    document.body.style.cursor = "none"

    let count = 4
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

// hold + countdown (7s)
const hold_478 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style = "font-size:300%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    ">
      <b>Hold</b>
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

// exhale + countdown (8s)
const exhale_478 = {
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
      8
    </div>
  `,
  choices: "NO_KEYS",
  trial_duration: 8000,

  on_start: function () {
    document.body.style.backgroundColor = "white"
    document.body.style.cursor = "none"

    let count = 8
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

// practice trial loop sequence (1 cycle)
const practice_478 = {
    timeline: [fixation_478, inhale_478, hold_478, exhale_478],
    repetitions: 1,
}


// screen before experimental trials
const instructions2_478 = {
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
        <p>In the exercise, as shown in the demonstration, you will see a <b>5-4-3-2-1 countdown sequence</b> before the first 4-7-8 cycle. <b>Over this 5-second period, you should exhale fully to clear your lungs.</b> This countdown will <b>not</b> be included before the subsequent cycles: once the first cycle has finished, 
          the next cycle will immediately follow - starting with "<b>Inhale (nose)</b>" - until all cycles have been completed.</p>
        <p>Press the button when you are ready to start the breathing exercise.</p>
    </div>`
}


// experiment trial loop sequence (4 cycles)
const procedure_4_cycles_478 = {
    timeline: [inhale_478, hold_478, exhale_478],
    repetitions: 4,
}


// experiment trial loop sequence (8 cycles)
const procedure_8_cycles_478 = {
    timeline: [inhale_478, hold_478, exhale_478],
    repetitions: 8,
}


// end of task
const finish_478 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<h3><b>You have now finished the 4-7-8 breathing exercise.</b></h3>",
    choices: ["Return to selection menu"],
    data: {
        task: "finish_478"
    },
    on_finish: function (data) {
        jsPsych.data.addProperties({
        return_to_menu: data.response === 0
        });
    }
};