// Cada opcion tiene su propio feedback asi que aunque le erres todavia te enseña algo
// La respuesta es en la posicion zero de la opcion correcta
export const meaningQuestions = [
  {
    verbId: 'figure-out', situation: 'Your friend texts you...',
    before: 'I finally ', phrase: 'figured out', after: " why my laptop wasn't charging. The cable was loose.",
    answer: 1, explanation: 'The loose cable was the explanation. Your friend understood the problem after investigating it.',
    options: [
      { text: 'Found out where to buy a charger', feedback: "There's no shopping here: the friend has identified why the laptop wasn't charging." },
      { text: 'Understood what the problem was' },
      { text: 'Stopped trying to fix the laptop', feedback: 'Finally and the explanation about the cable tell us the problem was solved, not abandoned.' },
      { text: 'Asked someone else to repair it', feedback: "The message describes understanding the cause, not asking someone for a repair." },
    ],
  },
  {
    verbId: 'find-out', situation: 'A coworker catches you before you leave...',
    before: 'I just ', phrase: 'found out', after: " tomorrow's meeting is online. No need to come in.",
    answer: 2, explanation: 'Your coworker has learned a new fact about the meeting.',
    options: [
      { text: 'Decided to move the meeting online', feedback: 'Learning about the change is different from making the decision to change it.' },
      { text: 'Solved a problem with the meeting link', feedback: 'No technical problem is mentioned. The new information is that the meeting will be online.' },
      { text: 'Learned that the meeting will be online' },
      { text: 'Started looking for an online meeting', feedback: 'Just found out tells us the information has already been discovered; the search is not just starting.' },
    ],
  },
  {
    verbId: 'get-in', situation: 'Your friend pulls up in a taxi...',
    before: 'Quick, ', phrase: 'get in', after: "! I'll move my bag so you can sit here.",
    answer: 0, explanation: 'Your friend is inviting you into the taxi. We normally get in a car or taxi.',
    options: [
      { text: 'Enter the taxi' },
      { text: 'Leave the taxi', feedback: 'Moving the bag to make room invites you inside, not out.' },
      { text: 'Wait for another taxi', feedback: 'The friend is making a seat available in this taxi, not suggesting another one.' },
      { text: 'Put your bag in the boot', feedback: 'The bag is being moved to make room for you to sit; the invitation is for you to enter.' },
    ],
  },
  {
    verbId: 'get-on', situation: "You're at a bus stop with a friend...",
    before: "This one's ours. Let's ", phrase: 'get on', after: ' before the doors close.',
    answer: 3, explanation: 'The open doors and the bus stop tell us they are boarding a bus.',
    options: [
      { text: 'Get along with the driver', feedback: 'Get on can refer to a relationship, but the closing doors make this about boarding.' },
      { text: 'Leave the bus', feedback: "They're at the stop and the bus has arrived. They want to enter, not leave." },
      { text: 'Wait for the next bus', feedback: "This one's ours means the correct bus is already here." },
      { text: 'Board the bus' },
    ],
  },
  {
    verbId: 'deal-with', situation: 'A colleague sees an upset customer...',
    before: "I'll ", phrase: 'deal with', after: ' the complaint. Let me call her and sort this out.',
    answer: 1, explanation: 'Calling the customer to sort things out is an active attempt to handle the complaint.',
    options: [
      { text: 'Ignore the complaint until it goes away', feedback: 'Let me call her shows the colleague intends to act, not ignore the issue.' },
      { text: 'Handle the complaint and try to resolve it' },
      { text: 'Tolerate the complaint without doing anything', feedback: 'Put up with emphasizes tolerating. Here the phone call shows active handling.' },
      { text: 'Make a complaint about the customer', feedback: 'The colleague is responding to an existing complaint, not making a new one.' },
    ],
  },
  {
    verbId: 'put-up-with', situation: 'Your roommate has barely slept...',
    before: "I can't ", phrase: 'put up with', after: " that drilling anymore. It's been going on all morning.",
    answer: 2, explanation: 'The roommate has reached their limit: they cannot tolerate the noise any longer.',
    options: [
      { text: 'Work out where the noise is coming from', feedback: "They already identify drilling. The issue is tolerating it, not finding its source." },
      { text: 'Get the drilling to stop', feedback: 'Stopping the drilling would change the situation. Put up with describes tolerating it while it continues.' },
      { text: 'Tolerate the drilling any longer' },
      { text: 'Postpone the drilling until later', feedback: 'Postponing would change when it happens. The roommate is describing their limit for tolerating the ongoing noise.' },
    ],
  },
  {
    verbId: 'break-down', situation: 'A friend calls from the roadside...',
    before: 'My car ', phrase: 'broke down', after: ". I'm waiting for a tow truck.",
    answer: 0, explanation: 'A tow truck is needed because the car has stopped working.',
    options: [
      { text: 'Stopped working because of a problem' },
      { text: 'Ran out of fuel', feedback: "Running out of fuel can also leave you stranded, but 'broke down' normally means the vehicle stopped working because of a fault or problem, not simply because the fuel ran out." },
      { text: 'Was switched off deliberately', feedback: 'Turning off a working car would not normally require a tow truck.' },
      { text: 'Was driven to the wrong address', feedback: "The message is about a faulty car, not a navigation mistake." },
    ],
  },
  {
    verbId: 'break-down', situation: 'Someone is helping you understand a bill...',
    before: "It's a bit confusing. Let me ", phrase: 'break it down', after: ' for you: rent first, then the extra charges.',
    answer: 3, explanation: 'The speaker separates the bill into parts to make it easier to understand.',
    options: [
      { text: 'Split the payment between several people', feedback: 'The speaker is separating types of charges to explain them, not deciding who pays each share.' },
      { text: 'Become too upset to continue', feedback: 'Listing rent and extra charges shows an explanation, not an emotional breakdown.' },
      { text: 'Reduce the amount you have to pay', feedback: 'Explaining the charges does not mean changing or reducing them.' },
      { text: 'Explain it in smaller, clearer parts' },
    ],
  },
  {
    verbId: 'pick-up', situation: "You're making plans for a night out...",
    before: "I'll ", phrase: 'pick you up', after: " at eight. Wait outside your building and I'll drive us there.",
    answer: 1, explanation: 'Your friend will collect you in a car before you travel together.',
    options: [
      { text: 'Leave you at your destination', feedback: 'That would be drop you off. Here the drive together starts at your building.' },
      { text: 'Collect you and give you a ride' },
      { text: 'Arrange a taxi for you', feedback: 'The speaker says they will drive, so they are offering to collect you themselves, not book another driver.' },
      { text: 'Meet you inside the restaurant', feedback: 'The meeting point is outside your building, before going to the destination.' },
    ],
  },
  {
    verbId: 'end-up', situation: "You're talking about last night...",
    before: 'We only went out for a coffee, but we ', phrase: 'ended up', after: ' staying out until two.',
    answer: 0, explanation: 'A quick coffee turned into a much longer evening. Staying out was the final, unexpected outcome.',
    options: [
      { text: 'Eventually stayed out much later than planned' },
      { text: 'Stopped going out altogether', feedback: 'They stayed out until two, so the evening continued rather than being abandoned.' },
      { text: 'Arrived at the café at two', feedback: 'Until two tells us when their evening finished, not when they arrived.' },
      { text: 'Made a plan to stay out before leaving', feedback: 'Only went out for a coffee suggests the late night was not the original plan.' },
    ],
  },
  {
    verbId: 'bring-up', situation: 'A friend warns you before dinner...',
    before: "Please don't ", phrase: 'bring up', after: " the breakup. She doesn't want to talk about it tonight.",
    answer: 2, explanation: 'The friend asks you not to introduce the breakup as a topic of conversation.',
    options: [
      { text: 'Invite the ex to dinner', feedback: 'The request concerns what to talk about, not who to invite.' },
      { text: 'Help her forget the breakup', feedback: 'Bring up means mention a topic; it does not mean help someone forget it.' },
      { text: 'Start talking about the breakup' },
      { text: 'Cancel dinner because of the breakup', feedback: 'Dinner is still happening. The friend is setting a boundary about conversation.' },
    ],
  },
  {
    verbId: 'work-out', situation: 'A friend tells you about their new routine...',
    before: 'I ', phrase: 'work out', after: " at the gym before work. It helps me wake up.",
    answer: 3, explanation: 'The gym and daily routine tell us work out means exercise here.',
    options: [
      { text: 'Calculate how much the gym costs', feedback: 'Work out can mean calculate, but this sentence describes an activity done at the gym.' },
      { text: 'Solve a problem with the gym schedule', feedback: "There's no scheduling problem in the sentence; it's a regular exercise routine." },
      { text: 'Do office work at the gym', feedback: 'Before work separates the gym activity from the job.' },
      { text: 'Exercise at the gym' },
    ],
  },
];

export const sentenceQuestions = [
  {
    verbId: 'put-up-with', situation: 'A noisy neighbour', answer: 1,
    dialogue: [
      { speaker: 'Mia', text: 'Is your neighbour still playing drums at midnight?' },
      { speaker: 'Sam', text: "Every night. I can't ___ that noise anymore." },
    ],
    explanation: 'Sam is talking about tolerating an ongoing annoyance. Put up with fits that frustration.',
    options: [
      { text: 'keep up with', feedback: 'Keep up with is about matching a pace or staying informed. Sam is describing noise they can no longer tolerate.' },
      { text: 'put up with' },
      { text: 'turn off', feedback: 'Turn off would mean stop a device. Sam cannot switch off a neighbour playing drums; the complaint is about tolerating the noise.' },
    ],
  },
  {
    verbId: 'end-up', situation: 'Catching up after a date', answer: 0,
    dialogue: [
      { speaker: 'Alex', text: 'How was your date?' },
      { speaker: 'Jo', text: 'Really good. We ___ talking until three in the morning.' },
    ],
    explanation: 'Ended up + -ing describes what eventually happened, often beyond the original plan.',
    options: [
      { text: 'ended up' },
      { text: 'gave up', feedback: 'Give up talking means stop talking. Until three describes how long the conversation continued.' },
      { text: 'showed up', feedback: 'Show up means arrive. Here Jo is describing how the evening developed, not their arrival.' },
    ],
  },
  {
    verbId: 'get-in', situation: 'Outside the station', answer: 2,
    dialogue: [
      { speaker: 'Nina', text: 'Is that our taxi?' },
      { speaker: 'Leo', text: "Yep. Let's ___ the car. The driver's waiting." },
    ],
    explanation: 'For a car or taxi, the usual expression is get in. For a bus, train or plane, use get on.',
    options: [
      { text: 'get on', feedback: 'Get on is normally used for buses, trains and planes. Here they are entering a car.' },
      { text: 'get out of', feedback: 'Get out of means leave the car. They are still outside, ready to enter.' },
      { text: 'get in' },
    ],
  },
  {
    verbId: 'get-off', situation: 'On the bus', answer: 1,
    dialogue: [
      { speaker: 'Ben', text: 'Is the café near here?' },
      { speaker: 'Ana', text: 'Yeah. We should ___ the bus at the next stop.' },
    ],
    explanation: 'They are already on the bus and need to leave it: get off the bus.',
    options: [
      { text: 'get out of', feedback: 'For this kind of transport, we normally say get off the bus. Get out of is usual for a car or taxi.' },
      { text: 'get off' },
      { text: 'get on', feedback: 'They are already on the bus; get on would mean board it.' },
    ],
  },
  {
    verbId: 'figure-out', situation: 'A stubborn phone', answer: 0,
    dialogue: [
      { speaker: 'Jay', text: "My phone won't connect to the Wi-Fi." },
      { speaker: 'Kim', text: "Give it here. Let's ___ what's wrong." },
    ],
    explanation: 'They want to understand the cause of a problem, so figure out fits.',
    options: [
      { text: 'figure out' },
      { text: 'look after', feedback: 'Look after means take care of someone or something, not understand what is wrong.' },
      { text: 'turn off', feedback: "You can turn off a phone, but you cannot turn off what's wrong. The blank introduces a problem to understand." },
    ],
  },
  {
    verbId: 'find-out', situation: 'Making weekend plans', answer: 2,
    dialogue: [
      { speaker: 'Ella', text: 'Is the shop open on Sunday?' },
      { speaker: 'Max', text: "No idea. I'll call them and ___." },
    ],
    explanation: 'Calling the shop lets Max discover a fact. Find out fits learning new information.',
    options: [
      { text: 'show up', feedback: 'Show up means arrive. Max says he will call, not go to the shop.' },
      { text: 'give up', feedback: 'Give up means stop trying. Calling is an attempt to get the answer.' },
      { text: 'find out' },
    ],
  },
  {
    verbId: 'deal-with', situation: 'A busy lunch shift', answer: 0,
    dialogue: [
      { speaker: 'Rae', text: "This customer's been charged twice." },
      { speaker: 'Dan', text: "I'll ___ the problem. Can you send me the receipt so I can arrange a refund?" },
    ],
    explanation: 'Dan is taking action to resolve the problem. Deal with means handle it.',
    options: [
      { text: 'deal with' },
      { text: 'put up with', feedback: 'Put up with would mean tolerate the problem. Arranging a refund shows active handling, not accepting it.' },
      { text: 'bring up', feedback: 'Bring up means mention a topic. The problem has already been raised; Dan now plans to resolve it.' },
    ],
  },
  {
    verbId: 'break-down', situation: 'Late for work', answer: 2,
    scenario: "You're halfway to work when the engine stops. Your car ___, so you call for roadside assistance.",
    explanation: 'Broke down describes a mechanical failure. The stopped engine and call for help provide the clues.',
    options: [
      { text: 'showed up', feedback: 'Showed up would mean arrived or appeared. The engine stopping and the call for assistance point to a failure.' },
      { text: 'went back', feedback: 'Went back would describe returning somewhere. The car has stopped on the way, not returned.' },
      { text: 'broke down' },
    ],
  },
  {
    verbId: 'drop-off', situation: 'Leaving a bag for later', answer: 1,
    dialogue: [
      { speaker: 'Oli', text: 'Do you want me to take that bag with me?' },
      { speaker: 'Zoe', text: "Yeah, could you ___ at reception? I'll grab it later." },
    ],
    explanation: 'Zoe wants Oli to leave the bag at reception so she can collect it later. With a pronoun, say drop it off.',
    options: [
      { text: 'pick it up', feedback: 'Pick it up would mean collect the bag from reception. Oli is being asked to take it there and leave it.' },
      { text: 'drop it off' },
      { text: 'look after it', feedback: 'Look after it would ask Oli to care for the bag. Zoe is asking him to deliver it and leave it for her to collect later.' },
    ],
  },
  {
    verbId: 'run-out-of', situation: 'Breakfast at home', answer: 0,
    dialogue: [
      { speaker: 'Liv', text: 'Coffee?' },
      { speaker: 'Ash', text: "Yes, please. But we've ___ milk, so I'll have mine black." },
    ],
    explanation: 'There is no milk left. Run out of connects directly to the thing that has been used up.',
    options: [
      { text: 'run out of' },
      { text: 'looked after', feedback: 'Looked after means cared for. It does not explain why there is no milk for the coffee.' },
      { text: 'come up with', feedback: 'Come up with usually introduces an idea or solution, not an empty supply of milk.' },
    ],
  },
  {
    verbId: 'come-up-with', situation: 'Planning a birthday', answer: 2,
    dialogue: [
      { speaker: 'Tess', text: "Dinner there is way too expensive." },
      { speaker: 'Mo', text: "Let's ___ a cheaper plan. What about a picnic?" },
    ],
    explanation: 'The speakers are thinking of a new plan, not discovering an existing fact.',
    options: [
      { text: 'run out of', feedback: 'Run out of means have none left. Here they want to invent a plan.' },
      { text: 'get off', feedback: 'Get off can mean leave a bus or train; it does not mean think of an idea.' },
      { text: 'come up with' },
    ],
  },
  {
    verbId: 'look-up', situation: 'Reading a message', answer: 1,
    dialogue: [
      { speaker: 'Noah', text: "What does 'overwhelmed' mean?" },
      { speaker: 'Ivy', text: "I'm not sure. Let's ___ in a dictionary." },
    ],
    explanation: 'Look up means consult a reference source. The pronoun it goes between look and up.',
    options: [
      { text: 'figure it out', feedback: 'Figure it out means reach an understanding by thinking. In a dictionary points to consulting a reference source, so look it up is the natural expression here.' },
      { text: 'look it up' },
      { text: 'point it out', feedback: 'Point it out means draw attention to the word. They need to check its meaning, not just show where it is.' },
    ],
  },
];

// Both approved banks are available in full.
export const activeMeaningQuestions = meaningQuestions;
export const activeSentenceQuestions = sentenceQuestions;
