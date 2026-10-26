# PITIKOI - Stage 2

React with JavaScript/JSX and normal CSS. No extra dependencies were added for the forms.

## Run in VS Code

Open this folder, open Terminal > New Terminal, then run:

```
npm.cmd install
npm.cmd run dev
```

Open the Local URL printed by Vite. Stop with Ctrl+C. Use npm without .cmd on other operating systems.

## Try the prototype

- Login with username `admin` and password `1234` to open Account directly.
- Create Account accepts an email and password and opens Registration successful.
- Go to Account shows the new account. Its display name comes from the part before @ in the email.
- Log Out lets you log in again with that registered email during the same session.
- Duplicate emails are rejected, ignoring capitalization.
- Home opens the categories; Go Practice also opens those categories.
- Account from Home opens Login when logged out, or Account when logged in.
- Forgot your password only explains that recovery is not implemented.

This is a frontend demonstration, not secure authentication. Use made-up credentials. Registered accounts and the current session live only in React state: refreshing clears them. The admin demo account is always available. No passwords are saved to localStorage or sent to a server.

## Files

- src/main.jsx starts React and loads CSS.
- src/App.jsx contains the hardcoded demo account, temporary accounts, login/register functions, current user and screen navigation.
- src/pages/Access.jsx is the original Welcome to the pond landing screen.
- src/pages/Login.jsx contains the login form and validation feedback.
- src/pages/Register.jsx contains the registration form.
- src/pages/RegistrationSuccess.jsx confirms registration.
- src/pages/Account.jsx displays the user's name, static 0% progress and Koi Fish.
- src/pages/Home.jsx maps the categories array into cards.
- src/components/CategoryCard.jsx displays title and description props.
- src/styles.css controls colors, responsive layout and the fish fixed in the screen corner.
- src/assets contains the original logo and supplied koi, octopus and whale illustrations. Only koi is used for the current creature; the others are prepared for later.
- index.html contains the HTML entry point and title.
- package.json defines dependencies and commands; package-lock.json records installed versions.
- .gitignore excludes dependencies and generated output.

## Future stages

Real authentication, persistence, password recovery, idiom activities, progress calculations and tier selection remain unimplemented. Progress is an empty 0% bar; Koi Fish is a fixed starting illustration. No backend or database has been added.

## Build

Run `npm.cmd run build` to generate dist.

## Stage 3: Irregular Verbs

Home > Irregular Verbs now opens List, Flashcards and Quiz. Phrasal Verbs is available in Stage 4; Idioms is available in Stage 5.

- src/data/irregularVerbs.js holds 104 verbs (all 102 from the supplied reference, plus bite and blow), Spanish meanings and verb-specific quiz distractors. shuffle returns a mixed copy; createQuestions chooses the distinct past/participle answers and four shuffled options.
- src/pages/IrregularVerbs.jsx is the activity menu.
- src/pages/VerbList.jsx filters all forms and meanings as you type.
- src/pages/Flashcards.jsx holds the shuffled deck, current card, reveal state and known count. The flip animation is normal CSS and respects reduced-motion preferences.
- src/pages/VerbQuiz.jsx holds a shuffled round, selected options, feedback, score and streak. Know requires knew + known; teach requires taught once. Be groups was/were into one option.
- CategoryCard accepts an optional onClick prop, making the whole card clickable when an activity exists.
- Both practice activities end with a summary and a restart button. Back returns to the activity menu. Leaving an activity resets its round.
- These counters are session-only and do not update Account progress or tiers yet.




## Stage 4: Phrasal Verbs

Home > Phrasal Verbs opens three activities, using the existing mint/lavender palette and orange buttons.

- src/data/phrasalVerbs.js: 35 expressions. Each entry has an id, verb, senses (English meaning, Spanish translation, natural example) and a tip. Break down includes three senses.
- src/data/phrasalVerbQuestions.js: 12 meaning questions and 12 sentence questions, with all 12 active in each activity. verbId links each question to shared tips. answer is the correct option index (starting at 0); incorrect options each have their own feedback.
- src/pages/PhrasalVerbs.jsx: menu using CategoryCard.
- src/pages/PhrasalVerbList.jsx: searchable vocabulary cards.
- src/pages/ChooseTheMeaning.jsx: highlighted expressions in context, four meaning choices, immediate feedback and Next.
- src/pages/CompleteTheSentence.jsx: mostly mini conversations plus a scenario. Tap an expression to place it in the gap; change the choice before Check answer. No drag-and-drop.
- src/components/PhrasalFeedback.jsx: a small shared feedback display, including why a wrong interpretation does not fit and a tip from the vocabulary file.
- src/App.jsx: screen navigation and each activity's Back destination.
- src/styles.css: context cards, conversation bubbles and responsive wrapping.

Both exercises display Question n / 12. activeMeaningQuestions and activeSentenceQuestions reference the full approved banks. Local state tracks the question, answer and score. A completed round shows results and Try again. Leaving the exercise or refreshing resets it. These scores do not update Account or tiers.

No libraries, backend, storage, authentication changes or persistent progress were added.


## Stage 5: Idioms & Expressions

Home opens List, Decode It and Your Turn.

- src/data/idiomsExpressions.js: 25 expressions, meanings, examples and shared tips.
- src/data/idiomsQuestions.js: Decode It's 12 approved questions, with three options each. The old situationQuestions bank is retained but is no longer displayed.
- src/pages/GuessTheMeaning.jsx: displays Decode It; context, meaning choices and immediate feedback.
- src/data/yourTurnQuestions.js: exactly six approved conversations. The correct option is first in the source, as in Decode It.
- src/pages/YourTurn.jsx replaces ChooseTheSituation.jsx. Tap a bubble to reply. Incorrect answers show their own feedback and allow retrying. Only a correct answer reveals the full reply, explanation, shared tip and Next. Completion offers Try again and Back to menu.
- src/components/IdiomFeedback.jsx: Decode It feedback and shared tips.
- src/utils/shuffle.js: Fisher–Yates copies arrays. prepareAttempt shuffles all questions and their options once at entry/restart, retaining each option's feedback and correct-answer marker. The generated attempt lives in useState and stays fixed on selection, retries and Next.
- Irregular Verbs re-exports the same shuffle function it used before; Flashcards and Quiz behavior is unchanged.
- Counters: 12 questions in each Phrasal activity and Decode It; 6 in Your Turn. These are local session counters, with no persistent progress or tiers.
- App.jsx connects navigation; styles.css contains the mint/lavender conversation bubbles and feedback cloud. No new dependencies.

### Manual checks

1. Home > Phrasal Verbs > Choose the Meaning: complete 12 questions; check feedback and Try again.
2. Home > Phrasal Verbs > Complete the Sentence: select an option, Check answer, then Next through 12 questions.
3. Home > Idioms and Expressions > Decode It: 12 questions, three options, result and Try again.
4. Home > Idioms and Expressions > Your Turn: try a wrong answer first. Bubbles must stay in place and the full reply must remain hidden. Answer correctly to reveal it, then finish six questions. Test Try again and Back to menu.
5. In all four activities, entering again or restarting prepares a new shuffle. Next never reshuffles. A random order may occasionally match an earlier one.
