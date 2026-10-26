// Textos aprobados. La opción correcta siempre va primera.
export const yourTurnQuestions = [
  {
    "id": "YT01",
    "expressionId": "L12",
    "message": "Sorry I'm a little late! I thought we were meeting at seven.",
    "reply": "No worries! I've only just got here anyway.",
    "explanation": "\"No worries\" is a casual way to reassure someone that a small mistake or inconvenience isn't a problem.",
    "options": [
      {
        "text": "No worries"
      },
      {
        "text": "My bad",
        "feedback": "\"My bad\" means admitting your own mistake. Here, the other person is apologizing, and you're reassuring them."
      },
      {
        "text": "A last resort",
        "feedback": "\"A last resort\" describes an option used when other choices aren't available. It doesn't fit this apology."
      }
    ]
  },
  {
    "id": "YT02",
    "expressionId": "L11",
    "message": "Hey, I'm at the address you sent me, but there's nothing here!",
    "reply": "My bad! I sent you the old address. I'll send the right one now.",
    "explanation": "\"My bad\" is an informal way to admit responsibility for your own mistake.",
    "options": [
      {
        "text": "My bad"
      },
      {
        "text": "Fair enough",
        "feedback": "\"Fair enough\" accepts someone's explanation or decision. Here, you need to acknowledge your own mistake."
      },
      {
        "text": "So far, so good",
        "feedback": "\"So far, so good\" describes a situation that's been going well up to now. It doesn't acknowledge sending the wrong address."
      }
    ]
  },
  {
    "id": "YT03",
    "expressionId": "L04",
    "message": "Hey! How's the new job going? Are you settling in?",
    "reply": "So far, so good! Everyone's been really helpful.",
    "explanation": "\"So far, so good\" means things have been going well up to this point. It's especially natural when talking about an experience that's still in progress.",
    "options": [
      {
        "text": "So far, so good"
      },
      {
        "text": "It is what it is",
        "feedback": "This often expresses resignation or acceptance of something you can't change. It doesn't communicate the positive update intended here."
      },
      {
        "text": "Call it a day",
        "feedback": "\"Call it a day\" means stop an activity or session. It doesn't answer how the new job is going."
      }
    ]
  },
  {
    "id": "YT04",
    "expressionId": "L05",
    "message": "Every restaurant around here is closed, and we've got nothing to cook. What should we do?",
    "reply": "We could try the hotel restaurant as a last resort.",
    "explanation": "\"A last resort\" is an option you consider when better alternatives aren't available. The hotel restaurant is a fallback, not the first choice.",
    "options": [
      {
        "text": "A last resort"
      },
      {
        "text": "Go with the flow",
        "feedback": "This means being flexible as things develop. It could describe an attitude toward changing plans, but it doesn't express the fallback option intended in this response."
      },
      {
        "text": "Knock it out of the park",
        "feedback": "This means doing something extremely well. It doesn't describe choosing an alternative when other options have failed."
      }
    ]
  },
  {
    "id": "YT05",
    "expressionId": "L08",
    "message": "We were talking about dinner and then Jake suddenly asked if we believed in ghosts!",
    "reply": "Wow, that really came out of left field!",
    "explanation": "\"Out of left field\" describes something unexpected, often strange or unrelated to the conversation. Jake's question was a sudden change of topic.",
    "options": [
      {
        "text": "Come out of left field"
      },
      {
        "text": "On the same page",
        "feedback": "This means sharing an understanding or agreement. It doesn't describe the unexpected question."
      },
      {
        "text": "Make sense",
        "feedback": "\"Make sense\" describes something understandable or logical. Here, the speaker is reacting to how unexpected the question was."
      }
    ]
  },
  {
    "id": "YT06",
    "expressionId": "L03",
    "message": "My taxi's here! Can you send me the building number?",
    "reply": "Sure! I'll send it ASAP.",
    "explanation": "\"ASAP\" means \"as soon as possible\". It communicates urgency without specifying an exact deadline.",
    "options": [
      {
        "text": "ASAP"
      },
      {
        "text": "For the time being",
        "feedback": "This means temporarily or for now. It doesn't communicate how quickly you'll send the number."
      },
      {
        "text": "Better safe than sorry",
        "feedback": "This expression justifies taking a precaution to avoid problems. Here, the other person needs information urgently."
      }
    ]
  },
  {
    id: 'YT07',
    expressionId: 'L14',
    message: "They won't refund our tickets, and there's no way to change the date. I'm so annoyed.",
    reply: "Yeah, it is what it is. Let's see if someone else can use them.",
    explanation: '“It is what it is” expresses acceptance of a situation you can\'t change. Here, you acknowledge the problem and move on to what you can still do.',
    options: [
      { text: 'It is what it is' },
      { text: 'So far, so good', feedback: '“So far, so good” gives a positive update about something still in progress. Here, the decision is final and disappointing.' },
      { text: 'Better safe than sorry', feedback: 'This expression supports taking a precaution. Here, you\'re responding to something that has already happened.' },
    ],
  },
  {
    id: 'YT08',
    expressionId: 'L15',
    message: "Be honest—what did you think of the restaurant? Everyone keeps saying it's amazing.",
    reply: "Not gonna lie, I thought it was pretty average. The food wasn't worth the price.",
    explanation: '“Not gonna lie” introduces an honest opinion, often one that might be unexpected or a little critical. It fits the request for an honest answer.',
    options: [
      { text: 'Not gonna lie' },
      { text: 'No worries', feedback: '“No worries” can reassure someone or respond to an apology or thanks. Your friend is asking for your opinion.' },
      { text: 'On the same page', feedback: 'This means sharing an understanding or agreeing. Here, you\'re introducing your own opinion, which differs from what others have said.' },
    ],
  },
  {
    id: 'YT09',
    expressionId: 'L18',
    message: "Just checking: I'll make the slides, you'll present, and we'll both answer questions. Is that what you had in mind?",
    reply: "Yep, we're on the same page. That's exactly what I had in mind.",
    explanation: '“On the same page” means sharing the same understanding. Here, you\'re confirming that you both understand the plan in the same way.',
    options: [
      { text: 'On the same page' },
      { text: 'Go with the flow', feedback: 'This means being flexible as things develop. Here, you\'re confirming a specific plan rather than deciding to adapt along the way.' },
      { text: 'So far, so good', feedback: 'This describes how something has been going up to now. Your friend is checking the plan before you carry it out.' },
    ],
  },
  {
    id: 'YT10',
    expressionId: 'L22',
    message: "The forecast says it probably won't rain. Are you really taking an umbrella?",
    reply: "Yeah, better safe than sorry. I don't want to get soaked on the way home.",
    explanation: '“Better safe than sorry” explains why you\'re taking a precaution, even though the problem might not happen.',
    options: [
      { text: 'Better safe than sorry' },
      { text: 'A last resort', feedback: 'A last resort is an option you use when other choices aren\'t available. Taking the umbrella is a precaution you\'re choosing in advance.' },
      { text: 'It is what it is', feedback: 'This expresses acceptance of something you can\'t change. Here, you can still prepare for possible rain.' },
    ],
  },
  {
    id: 'YT11',
    expressionId: 'L23',
    message: "We haven't booked anything for Saturday. Are you okay with just seeing what everyone feels like doing?",
    reply: "Yeah, let's go with the flow. I'm happy to decide when we get there.",
    explanation: '“Go with the flow” means being willing to adapt as things develop instead of sticking to a fixed plan. Here, you\'re comfortable keeping the plans open.',
    options: [
      { text: 'Go with the flow' },
      { text: 'Call it a day', feedback: 'This means stopping an activity or work session. Here, you\'re deciding how to approach a day that hasn\'t started yet.' },
      { text: 'A last resort', feedback: 'This describes a fallback when better options aren\'t available. Here, keeping the plans open is a choice you\'re happy with.' },
    ],
  },
  {
    id: 'YT12',
    expressionId: 'L25',
    message: "We've been working on this for hours. I'm exhausted, and I keep making the same mistakes. Can we finish tomorrow?",
    reply: "Yeah, let's call it a day. We'll finish the rest tomorrow.",
    explanation: '“Call it a day” means deciding to stop working on something for now. You don\'t have to finish everything before you can use it.',
    options: [
      { text: 'Call it a day' },
      { text: 'Go with the flow', feedback: 'This describes a flexible attitude. Here, you\'re specifically agreeing to stop working for today.' },
      { text: 'ASAP', feedback: 'This means “as soon as possible” and emphasizes urgency. Here, you\'re agreeing to take a break and continue tomorrow.' },
    ],
  },
];
