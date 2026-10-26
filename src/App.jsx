import React, { useState } from 'react';
import Access from './pages/Access.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Account from './pages/Account.jsx';
import RegistrationSuccess from './pages/RegistrationSuccess.jsx';
import koiLogo from './assets/pitikoi-logo.png';
import IrregularVerbs from './pages/IrregularVerbs.jsx';
import VerbList from './pages/VerbList.jsx';
import Flashcards from './pages/Flashcards.jsx';
import VerbQuiz from './pages/VerbQuiz.jsx';
import PhrasalVerbs from './pages/PhrasalVerbs.jsx';
import PhrasalVerbList from './pages/PhrasalVerbList.jsx';
import ChooseTheMeaning from './pages/ChooseTheMeaning.jsx';
import CompleteTheSentence from './pages/CompleteTheSentence.jsx';

import IdiomsExpressions from './pages/IdiomsExpressions.jsx';
import IdiomsList from './pages/IdiomsList.jsx';
import GuessTheMeaning from './pages/GuessTheMeaning.jsx';
import YourTurn from './pages/YourTurn.jsx';

// Solo demo, credenciales pal frontend solo para testear
const demoAccount = { username: 'admin', password: '1234', name: 'Admin' };

export default function App() {
  const [page, setPage] = useState('access');
  const [accounts, setAccounts] = useState([demoAccount]);
  const [user, setUser] = useState(null);
  const activityTitles = {
    irregular: 'Irregular Verbs', list: 'Verb list', flashcards: 'Flashcards', quiz: 'Quiz',
    idioms: 'Idioms & Expressions', 'idioms-list': 'Idioms & Expressions List',
    'idioms-meaning': 'Decode It', 'idioms-your-turn': 'Your Turn',
    phrasal: 'Phrasal Verbs', 'phrasal-list': 'Phrasal Verbs List',
    'phrasal-meaning': 'Choose the Meaning', 'phrasal-sentence': 'Complete the Sentence',
  };
  const isPractice = Boolean(activityTitles[page]);
  const practiceParent = page === 'irregular' || page === 'phrasal' || page === 'idioms'
    ? 'home' : page.startsWith('idioms-') ? 'idioms' : page.startsWith('phrasal-') ? 'phrasal' : 'irregular';

  function navigate(nextPage) {
    setPage(nextPage);
    window.scrollTo(0, 0);
  }

  function login(username, password) {
    const account = accounts.find((item) => item.username === username && item.password === password);
    if (!account) return 'Incorrect email, username or password.';
    setUser({ name: account.name });
    navigate('account');
    return '';
  }

  function register(email, password) {
    if (accounts.some((item) => item.username === email)) return 'This email already has an account. Please log in.';
    const account = { username: email, password, name: email.split('@')[0] };
    // Accounts are kept only in memory and disappear on refresh.
    setAccounts([...accounts, account]);
    setUser({ name: account.name });
    navigate('success');
    return '';
  }

  return (
    <div className={`screen ${page}-screen ${isPractice ? 'practice-screen' : ''}`}>
      <div className="page-container">
        {isPractice && (
          <nav className="activity-nav" aria-label="Practice navigation">
            <button className="nav-button" onClick={() => navigate(practiceParent)}>← Back</button>
            <span>{activityTitles[page]}</span>
          </nav>
        )}
        {page !== 'access' && page !== 'home' && !isPractice && (
          <nav className="top-nav" aria-label="Main navigation">
            <button className="nav-button" onClick={() => navigate('home')}>Home</button>
          </nav>
        )}
        {page === 'access' && <Access onGoHome={() => navigate('home')} onLogin={() => navigate('login')} onRegister={() => navigate('register')} />}
        {page === 'home' && <Home onGoAccount={() => navigate(user ? 'account' : 'login')} onGoIrregular={() => navigate('irregular')} onGoPhrasal={() => navigate('phrasal')} onGoIdioms={() => navigate('idioms')} />}
        {page === 'idioms' && <IdiomsExpressions onChoose={navigate} />}
        {page === 'idioms-list' && <IdiomsList />}
        {page === 'idioms-meaning' && <GuessTheMeaning />}
        {page === 'idioms-your-turn' && <YourTurn onBack={() => navigate('idioms')} />}
        {page === 'phrasal' && <PhrasalVerbs onChoose={navigate} />}
        {page === 'phrasal-list' && <PhrasalVerbList />}
        {page === 'phrasal-meaning' && <ChooseTheMeaning />}
        {page === 'phrasal-sentence' && <CompleteTheSentence />}
        {page === 'irregular' && <IrregularVerbs onChoose={navigate} />}
        {page === 'list' && <VerbList />}
        {page === 'flashcards' && <Flashcards />}
        {page === 'quiz' && <VerbQuiz />}
        {page === 'login' && <Login onLogin={login} onRegister={() => navigate('register')} />}
        {page === 'register' && <Register onRegister={register} onLogin={() => navigate('login')} />}
        {page === 'success' && user && <RegistrationSuccess onGoAccount={() => navigate('account')} />}
        {page === 'account' && user && <Account user={user} onGoPractice={() => navigate('home')} onLogout={() => { setUser(null); navigate('login'); }} />}
      </div>
      <div className="koi-decoration" aria-hidden="true"><img src={koiLogo} alt="" /></div>
    </div>
  );
}
