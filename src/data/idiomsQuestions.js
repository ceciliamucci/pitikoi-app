// La respuesta correcta siempre va primera en options (o sea posicion 0 del array).
// Arrancamos con guess the meaning, se unifico con idiomschoosethesituash en la misma file porque van con la misma logica de opciones
export const guessMeaningQuestions = [
  {
    "id": "G01",
    "whale": "Have you heard from Leo lately?",
    "expressionId": "L19",
    "explanation": "The long silence and sudden call suggest there was no warning. \"Out of the blue\" means unexpectedly.",
    "options": [
      {
        "text": "He called unexpectedly."
      },
      {
        "text": "He called because he was feeling sad.",
        "feedback": "Blue can describe sadness, but nothing here tells us how Leo felt. The expression describes the unexpected call."
      },
      {
        "text": "He called at a time they had agreed on.",
        "feedback": "There is no planned call; the speaker emphasizes the surprise after years without contact."
      }
    ],
    "context": "\"I hadn't heard from Leo in three years. Then he called me out of the blue yesterday to ask how I was.\""
  },
  {
    "id": "G02",
    "whale": "How did you manage to pay for university?",
    "expressionId": "L01",
    "explanation": "The scholarship made studying possible, so it was genuinely important. There is no sarcastic tone here.",
    "options": [
      {
        "text": "It was something very important."
      },
      {
        "text": "It was a particularly good financial offer.",
        "feedback": "Deal can mean an agreement, but this sentence explains the scholarship's importance, not the quality of a financial offer."
      },
      {
        "text": "It was a small benefit that barely mattered.",
        "feedback": "The speaker could not have studied without it, so it was not a minor benefit."
      }
    ],
    "context": "\"Getting that scholarship was a big deal for me. Without it, I couldn't have afforded to study.\""
  },
  {
    "id": "G03",
    "whale": "How did your match against the champions go?",
    "expressionId": "L06",
    "explanation": "A close score and a hard-fought match show strong competition. You do not need to win to give someone a run for their money.",
    "options": [
      {
        "text": "We made it difficult for them to win."
      },
      {
        "text": "We paid them to play against us.",
        "feedback": "This is about competition, not a payment."
      },
      {
        "text": "We beat them by a large margin.",
        "feedback": "The speaker explicitly says their team lost."
      }
    ],
    "context": "\"We lost 3–2, but the champions had to fight for every point. We really gave them a run for their money.\""
  },
  {
    "id": "G04",
    "whale": "How come you know everyone at this guitar club?",
    "expressionId": "L07",
    "explanation": "The speaker has returned to the original club in a new role after a long journey.",
    "options": [
      {
        "text": "I've returned to a place connected to where my journey began."
      },
      {
        "text": "I've repeated the same lesson without improving.",
        "feedback": "The speaker has changed from beginner to teacher, not stayed at the same level."
      },
      {
        "text": "I've finally finished every course the club offers.",
        "feedback": "There is no claim about completing all the club's courses. The key is returning to the beginning in a changed situation."
      }
    ],
    "context": "\"I used to come to this club for my first guitar lessons. Twenty years later, I'm back here teaching beginners. I've come full circle.\""
  },
  {
    "id": "G05",
    "whale": "I was so nervous during that demo. How do you think it went?",
    "expressionId": "L09",
    "explanation": "Brilliant and the client's enthusiastic response show outstanding performance, not just an acceptable result.",
    "options": [
      {
        "text": "You did an excellent job."
      },
      {
        "text": "You took a risk that went badly.",
        "feedback": "The client was convinced, so the outcome was positive."
      },
      {
        "text": "You completed the minimum that was required.",
        "feedback": "This praise is much stronger than saying the basic requirements were met."
      }
    ],
    "context": "\"Your demo was brilliant. Even the client who was unsure wants to sign up now. You knocked it out of the park.\""
  },
  {
    "id": "G06",
    "expressionId": "L10",
    "explanation": "The reply accepts the friend's reason and suggests meeting another time.",
    "options": [
      {
        "text": "The speaker accepts the reason for staying home."
      },
      {
        "text": "The speaker is asking for a better excuse.",
        "feedback": "Get some sleep shows acceptance, not a demand for a stronger excuse."
      },
      {
        "text": "The speaker insists that the friend come out anyway.",
        "feedback": "We'll catch up another time respects the decision to stay home."
      }
    ],
    "context": "\"'I'm not coming out. I've got an early shift.' 'Fair enough. Get some sleep — we'll catch up another time.'\""
  },
  {
    "id": "G07",
    "expressionId": "L13",
    "explanation": "The speaker leaves room for a positive possibility without promising it.",
    "options": [
      {
        "text": "There is still a chance, despite the uncertainty."
      },
      {
        "text": "The application is guaranteed to succeed.",
        "feedback": "Might signals possibility, not certainty."
      },
      {
        "text": "There is no point applying without experience.",
        "feedback": "Apply anyway is encouragement to try, not advice to give up."
      }
    ],
    "context": "\"'They'll probably choose someone with more experience.' 'Maybe. Apply anyway. You never know — they might love your ideas.'\""
  },
  {
    "id": "G08",
    "whale": "Are you going to take the bigger flat?",
    "expressionId": "L16",
    "explanation": "The speaker weighs different factors, then states the priority that matters most.",
    "options": [
      {
        "text": "The speaker is identifying what matters most overall."
      },
      {
        "text": "The speaker can only view the flat in the evening.",
        "feedback": "The phrase introduces a conclusion, not an appointment time."
      },
      {
        "text": "The speaker has decided that size is the only important factor.",
        "feedback": "The speaker explicitly values being near friends more than having a bigger flat."
      }
    ],
    "context": "\"That flat's bigger, but it's miles from everyone I know. At the end of the day, being near my friends matters more to me.\""
  },
  {
    "id": "G09",
    "whale": "Hey, how come I keep seeing you around your brother's neighbourhood?",
    "expressionId": "L17",
    "explanation": "The speaker is staying there now and expects to leave when the repairs are finished.",
    "options": [
      {
        "text": "The arrangement is temporary."
      },
      {
        "text": "The speaker has moved in permanently.",
        "feedback": "I'll move back shows the arrangement is not permanent."
      },
      {
        "text": "The speaker has not moved in yet.",
        "feedback": "I'm staying says the arrangement is already happening."
      }
    ],
    "context": "\"My flat's being repaired, so I'm staying with my brother for the time being. I'll move back when it's ready.\""
  },
  {
    "id": "G10",
    "expressionId": "L20",
    "explanation": "The correction reverses who taught whom.",
    "options": [
      {
        "text": "The roles were reversed: the dad was the teacher."
      },
      {
        "text": "They both learned from the same person.",
        "feedback": "The dad taught the speaker; no shared teacher is mentioned."
      },
      {
        "text": "They changed the order of the recipes.",
        "feedback": "The reversal concerns the people and their roles, not recipe order."
      }
    ],
    "context": "\"'Did you teach your dad to cook?' 'Actually, it was the other way around. He taught me everything.'\""
  },
  {
    "id": "G11",
    "expressionId": "L21",
    "explanation": "The boss's reaction creates a practical difficulty. The phrase does not say the conversation is impossible.",
    "options": [
      {
        "text": "The suggestion sounds simple but would be difficult to carry out."
      },
      {
        "text": "The advice is completely impossible to follow.",
        "feedback": "Difficult is not the same as impossible; the expression questions how easy the advice is to follow."
      },
      {
        "text": "Speaking to the boss will be easier than expected.",
        "feedback": "The speaker expects difficulty, not an unexpectedly easy conversation."
      }
    ],
    "context": "\"'Just tell your boss you've got too much work.' 'Easier said than done. She gets annoyed whenever anyone says no.'\""
  },
  {
    "id": "G12",
    "whale": "How's that new racing game going?",
    "expressionId": "L24",
    "explanation": "Fewer mistakes after practice show growing familiarity with the controls.",
    "options": [
      {
        "text": "The speaker is learning how to play through practice."
      },
      {
        "text": "The speaker understands the rules but has made no progress.",
        "feedback": "Finishing a lap without crashing is clear progress."
      },
      {
        "text": "The speaker is already the best player.",
        "feedback": "Improvement does not imply complete mastery or being better than everyone else."
      }
    ],
    "context": "\"I kept missing the turns in this game yesterday. Now I can finish a lap without crashing. I'm getting the hang of it.\""
  }
];

export const situationQuestions = [
  {
    "id": "S01",
    "expressionId": "L04",
    "explanation": "The job is already in progress, and the speaker is reporting a positive experience up to now.",
    "options": [
      {
        "text": "You're two weeks into a new job. A friend asks how it's going, and things have been fine."
      },
      {
        "text": "Your course finished yesterday. A friend asks whether you passed the final exam.",
        "feedback": "The course has ended. This calls for the final result rather than an update on something ongoing."
      },
      {
        "text": "You start a new job next month. A friend asks what you expect it to be like.",
        "feedback": "The job has not started, so there is no experience so far to report."
      }
    ],
    "reply": "\"So far, so good. The team's been really helpful.\""
  },
  {
    "id": "S02",
    "expressionId": "L11",
    "explanation": "The speaker admits responsibility for their own small mistake.",
    "options": [
      {
        "text": "You realize you sent a friend the wrong address. You want to own up to the mix-up."
      },
      {
        "text": "Your friend sent you the wrong address and apologizes. You want to reassure them that it's okay.",
        "feedback": "The mistake belongs to the friend. A reassuring reply such as no worries would fit better."
      },
      {
        "text": "Your friend asks which address is correct, and you're certain you sent the right one.",
        "feedback": "There is no mistake to admit in this situation."
      }
    ],
    "reply": "\"My bad — I sent you the old one.\""
  },
  {
    "id": "S03",
    "expressionId": "L05",
    "explanation": "The hotel restaurant is a fallback after the preferable options have been ruled out.",
    "options": [
      {
        "text": "Every nearby restaurant is closed and there's nothing to cook. You consider the expensive hotel restaurant only because nothing else is available."
      },
      {
        "text": "You choose your favourite restaurant first because you know you'll enjoy it.",
        "feedback": "A favourite first choice is not a last resort."
      },
      {
        "text": "You have several equally good dinner options left and choose one without any particular preference.",
        "feedback": "Randomly choosing between equally good options does not make one a fallback after alternatives fail."
      }
    ],
    "reply": "\"We could eat at the hotel as a last resort.\""
  },
  {
    "id": "S04",
    "expressionId": "L08",
    "explanation": "The question is both unexpected and disconnected from the dinner conversation.",
    "options": [
      {
        "text": "During a chat about dinner plans, someone suddenly asks whether you believe in ghosts. You react to the unrelated question."
      },
      {
        "text": "During a chat about dinner plans, someone asks whether you prefer pasta or pizza.",
        "feedback": "This question follows naturally from the topic; it is not an unexpected change of direction."
      },
      {
        "text": "You ask a friend to explain the dinner booking and they answer the exact question you asked.",
        "feedback": "A directly relevant answer to your own question does not have the surprise or oddness expressed here."
      }
    ],
    "reply": "\"That question came out of left field.\"",
    "tipNote": "Out of the blue can overlap; this scene highlights the unrelated topic."
  },
  {
    "id": "S05",
    "expressionId": "L03",
    "explanation": "An immediate practical need makes as soon as possible appropriate.",
    "options": [
      {
        "text": "Your taxi is waiting and you need the building number now. You ask your friend to send it quickly."
      },
      {
        "text": "You ask someone to send a photo whenever they happen to remember, with no hurry.",
        "feedback": "ASAP introduces urgency that the relaxed request does not have."
      },
      {
        "text": "You need a document next Friday and want to make the deadline clear.",
        "feedback": "ASAP means as soon as possible; it does not specify a deadline. Saying next Friday makes the deadline clear."
      }
    ],
    "reply": "\"Could you send me the building number ASAP? The taxi's here.\""
  },
  {
    "id": "S06",
    "expressionId": "L12",
    "explanation": "The speaker accepts a minor apology and reassures the friend.",
    "options": [
      {
        "text": "Your friend apologizes for arriving two minutes late. It hasn't caused a problem, and you want to reassure them."
      },
      {
        "text": "You caused a small mistake and want to admit that it was your fault.",
        "feedback": "My bad would admit responsibility. No worries normally reassures someone rather than owning your mistake."
      },
      {
        "text": "Your friend tells you they're really worried about a family problem. You want to show that you understand how they feel.",
        "feedback": "'No worries' can sometimes sound too casual or dismissive here. A more empathetic response would better match the speaker's intention."
      }
    ],
    "reply": "\"No worries. We've only just got here.\""
  },
  {
    "id": "S07",
    "expressionId": "L14",
    "explanation": "The speaker accepts an unchangeable fact while still considering what to do next.",
    "options": [
      {
        "text": "The last train has left and it cannot be brought back. You accept the situation and start looking for another way home."
      },
      {
        "text": "Your booking has a typo that the agent can fix immediately. You want to ask the agent to correct it.",
        "feedback": "The stated goal is to correct a fixable problem. This resigned response would not make that request."
      },
      {
        "text": "You are choosing between two available trains and want to explain why one is better.",
        "feedback": "Comparing available choices is different from accepting a fact that cannot be changed."
      }
    ],
    "reply": "\"It is what it is. Let's see if there's a bus.\""
  },
  {
    "id": "S08",
    "expressionId": "L15",
    "explanation": "This introduces a candid, informal opinion, especially one that may surprise the listeners.",
    "options": [
      {
        "text": "Your friends disliked a film, but you want to casually admit you enjoyed it."
      },
      {
        "text": "You are giving evidence in a formal statement and need to acknowledge that an earlier statement was false.",
        "feedback": "This casual expression is not an appropriate substitute for a clear, formal correction of a false statement."
      },
      {
        "text": "You have not seen the film and want to avoid giving any opinion about it.",
        "feedback": "It normally introduces an opinion or admission; it does not communicate that you have no view to offer."
      }
    ],
    "reply": "\"Not gonna lie, I actually loved it.\""
  },
  {
    "id": "S09",
    "expressionId": "L18",
    "explanation": "Both people share the relevant understanding of the plan.",
    "options": [
      {
        "text": "You confirm with a teammate that you both understand who is doing what and when it is due."
      },
      {
        "text": "You and a teammate disagree about the deadline and have not resolved it.",
        "feedback": "The unresolved disagreement means they are not yet on the same page about the deadline."
      },
      {
        "text": "You and a teammate are working on unrelated tasks and do not know each other's plans.",
        "feedback": "Simply working at the same time does not establish shared understanding."
      }
    ],
    "reply": "\"Great, we're on the same page. I'll send my part by Thursday.\""
  },
  {
    "id": "S10",
    "expressionId": "L22",
    "explanation": "A small precaution now could prevent regret later.",
    "options": [
      {
        "text": "Before editing a file, you save a backup even though you do not expect anything to go wrong."
      },
      {
        "text": "You have already lost the only copy of a file and want to apologize for deleting it.",
        "feedback": "The phrase justifies taking a precaution; it is not itself an apology for a loss that has already happened."
      },
      {
        "text": "You decide not to make a backup because you are certain nothing can go wrong.",
        "feedback": "Skipping the precaution expresses the opposite approach."
      }
    ],
    "reply": "\"I'll save a copy first. Better safe than sorry.\""
  },
  {
    "id": "S11",
    "expressionId": "L23",
    "explanation": "The speaker willingly accepts flexibility instead of controlling every detail.",
    "options": [
      {
        "text": "You're on a relaxed day out with friends and are happy to adapt as the group's plans change."
      },
      {
        "text": "You insist that everyone follow your timetable exactly, even though the group wants to change it.",
        "feedback": "Insisting on a fixed timetable is the opposite of adapting to the group."
      },
      {
        "text": "Your friends suggest changing the plan to something you don't feel comfortable doing.",
        "feedback": "Going with the flow suggests willing flexibility. It doesn't mean ignoring your own boundaries or discomfort."
      }
    ],
    "reply": "\"I'm happy to go with the flow. Let's see what everyone feels like doing.\""
  },
  {
    "id": "S12",
    "expressionId": "L25",
    "explanation": "The speaker proposes ending the current session rather than abandoning the activity permanently.",
    "options": [
      {
        "text": "You've been practising for hours, you're tired, and you suggest stopping now and continuing tomorrow."
      },
      {
        "text": "You have just started studying and want to propose working for several more hours.",
        "feedback": "This expression would stop the session, not extend it."
      },
      {
        "text": "You want to quit your course permanently and explain that you will never return.",
        "feedback": "Call it a day does not by itself clearly communicate permanently leaving a course. In this exercise it means stopping for now."
      }
    ],
    "reply": "\"Let's call it a day. We can finish this tomorrow.\""
  }
];

// El banco situationQuestions se conserva como contenido anterior; Your Turn usa su propio archivo.
