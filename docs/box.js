// instructions
const instructions_box_short = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>Box Breathing Instructions</b></h2>
        <p>Also known as "square breathing", box breathing is notably used by individuals with inherently stressful occupations to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 4 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>HOLD</b> your breath for 4 seconds</ul>
          <ul>3.) <b>EXHALE</b> for 4 seconds <b>through your mouth</b></ul>
          <ul>4.) <b>HOLD</b> your breath for 4 seconds</ul>
        <p>You have selected to practice box breathing for <b>2 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/box_representation.png", alt="one cycle of box breathing", width = 900
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

const instructions_box_med = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>Box Breathing Instructions</b></h2>
        <p>Also known as "square breathing", box breathing is notably used by individuals with inherently stressful occupations to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 4 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>HOLD</b> your breath for 4 seconds</ul>
          <ul>3.) <b>EXHALE</b> for 4 seconds <b>through your mouth</b></ul>
          <ul>4.) <b>HOLD</b> your breath for 4 seconds</ul>
        <p>You have selected to practice box breathing for <b>5 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/box_representation.png", alt="one cycle of box breathing", width = 900
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

const instructions_box_long = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>Box Breathing Instructions</b></h2>
        <p>Also known as "square breathing", box breathing is notably used by individuals with inherently stressful occupations to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 4 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>HOLD</b> your breath for 4 seconds</ul>
          <ul>3.) <b>EXHALE</b> for 4 seconds <b>through your mouth</b></ul>
          <ul>4.) <b>HOLD</b> your breath for 4 seconds</ul>
        <p>You have selected to practice box breathing for <b>10 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/box_representation.png", alt="one cycle of box breathing", width = 900
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}

const instructions_box_longer = {
    type: jsPsychHtmlButtonResponse,
    choices: ["Start the demonstration"],

    stimulus:`
    <h2><b>Box Breathing Instructions</b></h2>
        <p>Also known as "square breathing", box breathing is notably used by individuals with inherently stressful occupations to reduce nervous system activity. One cycle of this technique consists of the following:</p>
          <ul>1.) <b>INHALE</b> for 4 seconds <b>through your nostrils</b></ul>
          <ul>2.) <b>HOLD</b> your breath for 4 seconds</ul>
          <ul>3.) <b>EXHALE</b> for 4 seconds <b>through your mouth</b></ul>
          <ul>4.) <b>HOLD</b> your breath for 4 seconds</ul>
        <p>You have selected to practice box breathing for <b>20 minutes</b>, consisting of <i>consecutive</i> cycles.
        <h3>In this exercise, here is what each cycle will look like:</h3>
        <figure>
          <img src="media/box_representation.png", alt="one cycle of box breathing", width = 900
        </figure>
        <p>When you are ready, press the button to view a demonstration of <b>the first cycle</b> of this breathing technique. You do <b>not</b> need to perform the exercise at this time.</p>
    `
}


// ---- trial loop ----
// fixation with countdown (5s)
const fixation_box = {
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
const inhale_box = {
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


// hold + countdown (4s)
const hold_box = {
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


// exhale + countdown (4s)
const exhale_box = {
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


// practice trial loop sequence (1 cycle w/o fixation = 16 seconds)
const practice_box = {
    timeline: [fixation_box, inhale_box, hold_box, exhale_box, hold_box],
    repetitions: 1,
}


// screen before experimental trials
const instructions2_box = {
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
        <p>In the exercise, as shown in the demonstration, you will see a <b>5-4-3-2-1 countdown sequence</b> before the first box breathing cycle. <b>Over this 5-second period, you should exhale fully to clear your lungs.</b> This countdown will <b>not</b> be included before the subsequent cycles: once the first cycle has finished, 
          the next cycle will immediately follow - starting with "<b>Inhale (nose)</b>" - until all cycles have been completed.</p>
        <p>Press the button when you are ready to start the breathing exercise.</p>
    </div>`
}


// experiment trial loop sequence - different durations
const procedure_box_short = {
    timeline: [inhale_box, hold_box, exhale_box, hold_box],
    repetitions: 8, // 128 seconds ("2 minutes")
}

const procedure_box_med = {
    timeline: [inhale_box, hold_box, exhale_box, hold_box],
    repetitions: 19, // 304 seconds ("5 minutes")
}

const procedure_box_long = {
    timeline: [inhale_box, hold_box, exhale_box, hold_box],
    repetitions: 38, // 608 seconds ("10 minutes")
}

const procedure_box_longer = {
    timeline: [inhale_box, hold_box, exhale_box, hold_box],
    repetitions: 76, // 1,216 seconds ("20 minutes")
}


// end of task
const finish_box = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<h3><b>You have now finished the box breathing exercise.</b></h3>",
    choices: ["Return to selection menu"],
    data: {
        task: "finish_box"
    },
    on_finish: function (data) {
        jsPsych.data.addProperties({
        return_to_menu: data.response === 0
        });
    }
};