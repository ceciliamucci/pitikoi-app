import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Access from './pages/Access.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Account from './pages/Account.jsx';
import RegistrationSuccess from './pages/RegistrationSuccess.jsx';
import koiLogo from './assets/pitikoi-logo.png';
import koiOutline from './assets/koi-outline.png';
import octopusOutline from './assets/octopus-outline.png';
import whaleOutline from './assets/whale-outline.png';
import SoundToggle from './components/SoundToggle.jsx';
import { playSound, readMuted, setSoundMuted, stopSound, stopBubbles } from './audio.js';
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
  const [muted, setMuted] = useState(readMuted);
  useEffect(() => {
    const quiet = () => stopSound();
    const hide = () => { if (document.hidden) stopSound(); };
    window.addEventListener('blur', quiet);
    document.addEventListener('visibilitychange', hide);
    return () => { stopSound(); window.removeEventListener('blur', quiet); document.removeEventListener('visibilitychange', hide); };
  }, []);

  function toggleSound() {
    setSoundMuted(!muted);
    setMuted(!muted);
  }


  const [accounts, setAccounts] = useState([demoAccount]);
  const [user, setUser] = useState(null);
  const activityTitles = {
    irregular: 'Irregular Verbs', list: 'Verb list', flashcards: 'Flashcards', quiz: 'Quiz',
    idioms: 'Idioms & Expressions', 'idioms-list': 'Idioms & Expressions List',
    'idioms-meaning': 'Decode It', 'idioms-your-turn': 'Your Turn',
    phrasal: 'Phrasal Verbs', 'phrasal-list': 'Phrasal Verbs List',
    'phrasal-meaning': 'Choose the Meaning', 'phrasal-sentence': 'Complete the Sentence',
  };
  const validPages = ['access', 'home', 'login', 'register', 'account', 'success', ...Object.keys(activityTitles)];
  function readPage() {
    const requested = window.location.hash.slice(1);
    return validPages.includes(requested) ? requested : 'access';
  }
  const [page, setPage] = useState(() => {
    const requested = readPage();
    return ['account', 'success'].includes(requested) ? 'login' : requested;
  });
  const [visited, setVisited] = useState([page]);
  const currentPage = useRef(page);
  const historyIndex = useRef(0);
  const scrollPositions = useRef({});

  function showPage(nextPage) {
    scrollPositions.current[currentPage.current] = window.scrollY;
    currentPage.current = nextPage;
    setVisited(pages => pages.includes(nextPage) ? pages : [...pages, nextPage]);
    setPage(nextPage);
  }

  useEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    if (history.state?.pitikoi) {
      historyIndex.current = history.state.index;
      history.replaceState({ pitikoi: true, page, index: historyIndex.current }, '', '#' + page);
    } else {
      // Un enlace directo a una actividad también tiene una pantalla interna a la que volver.
      history.replaceState({ pitikoi: true, page: 'access', index: 0 }, '', '#access');
      if (page !== 'access') {
        historyIndex.current = 1;
        history.pushState({ pitikoi: true, page, index: 1 }, '', '#' + page);
      }
    }
    return () => { history.scrollRestoration = previousRestoration; };
  }, []);

  useEffect(() => {
    function onPop(event) {
      stopSound();
      let nextPage = readPage();
      if (!user && ['account', 'success'].includes(nextPage)) nextPage = 'login';
      historyIndex.current = event.state?.pitikoi ? event.state.index : historyIndex.current + 1;
      history.replaceState({ pitikoi: true, page: nextPage, index: historyIndex.current }, '', '#' + nextPage);
      showPage(nextPage);
    }
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [user]);

  useLayoutEffect(() => {
    window.scrollTo(0, scrollPositions.current[page] || 0);
  }, [page]);

  function goBack() {
    if (historyIndex.current > 0) history.back();
    else navigate(practiceParent);
  }

  const isPractice = Boolean(activityTitles[page]);
  const category = !isPractice ? '' : page.startsWith('phrasal') ? 'phrasal'
    : page.startsWith('idioms') ? 'idioms' : 'irregular';
  const practiceParent = page === 'irregular' || page === 'phrasal' || page === 'idioms'
    ? 'home' : page.startsWith('idioms-') ? 'idioms' : page.startsWith('phrasal-') ? 'phrasal' : 'irregular';

  const decoration = category === 'phrasal' ? octopusOutline : category === 'idioms' ? whaleOutline : koiOutline;

  function navigate(nextPage, sound) {
    if (nextPage === currentPage.current || !validPages.includes(nextPage)) return;
    stopBubbles();
    if (sound) playSound(sound);
    historyIndex.current += 1;
    history.pushState({ pitikoi: true, page: nextPage, index: historyIndex.current }, '', '#' + nextPage);
    showPage(nextPage);
  }

  function login(username, password) {
    const account = accounts.find((item) => item.username === username && item.password === password);
    if (!account) return 'Incorrect email, username or password.';
    setUser({ name: account.name });
    navigate('account', 'next');
    return '';
  }

  function register(email, password) {
    if (accounts.some((item) => item.username === email)) return 'This email already has an account. Please log in.';
    const account = { username: email, password, name: email.split('@')[0] };
    // Accounts are kept only in memory and disappear on refresh.
    setAccounts([...accounts, account]);
    setUser({ name: account.name });
    navigate('success', 'next');
    return '';
  }

  return (
    <div className={`screen ${page}-screen ${isPractice ? 'practice-screen' : ''}`} data-category={category || undefined}>
      <div className="page-container">
        {isPractice && (
          <nav className="activity-nav" aria-label="Practice navigation">
            <button className="nav-button" onClick={goBack}>← Back</button>
            <span>{activityTitles[page]}</span>
            <SoundToggle key={page} muted={muted} onToggle={toggleSound} />
          </nav>
        )}
        {!isPractice && <div className="general-sound"><SoundToggle key={page} muted={muted} onToggle={toggleSound} /></div>}
        {page !== 'access' && page !== 'home' && !isPractice && (
          <nav className="top-nav" aria-label="Main navigation">
            <button className="nav-button" onClick={() => navigate('home')}>Home</button>
          </nav>
        )}
        {page === 'access' && <Access onGoHome={() => navigate('home')} onLogin={() => navigate('login', 'next')} onRegister={() => navigate('register', 'next')} />}
        {page === 'home' && <Home onGoAccount={() => navigate(user ? 'account' : 'login', 'next')} onGoIrregular={() => navigate('irregular', 'next')} onGoPhrasal={() => navigate('phrasal', 'next')} onGoIdioms={() => navigate('idioms', 'next')} />}
        {page === 'idioms' && <IdiomsExpressions onChoose={(page) => navigate(page, 'activity')} />}
        {visited.includes('idioms-list') && <div hidden={page !== 'idioms-list'} className="activity-session"><IdiomsList /></div>}
        {visited.includes('idioms-meaning') && <div hidden={page !== 'idioms-meaning'} className="activity-session"><GuessTheMeaning active={page === 'idioms-meaning'} /></div>}
        {visited.includes('idioms-your-turn') && <div hidden={page !== 'idioms-your-turn'} className="activity-session"><YourTurn onBack={() => navigate('idioms')} /></div>}
        {page === 'phrasal' && <PhrasalVerbs onChoose={(page) => navigate(page, 'activity')} />}
        {visited.includes('phrasal-list') && <div hidden={page !== 'phrasal-list'} className="activity-session"><PhrasalVerbList /></div>}
        {visited.includes('phrasal-meaning') && <div hidden={page !== 'phrasal-meaning'} className="activity-session"><ChooseTheMeaning /></div>}
        {visited.includes('phrasal-sentence') && <div hidden={page !== 'phrasal-sentence'} className="activity-session"><CompleteTheSentence active={page === 'phrasal-sentence'} /></div>}
        {page === 'irregular' && <IrregularVerbs onChoose={(page) => navigate(page, 'activity')} />}
        {visited.includes('list') && <div hidden={page !== 'list'} className="activity-session"><VerbList /></div>}
        {visited.includes('flashcards') && <div hidden={page !== 'flashcards'} className="activity-session"><Flashcards /></div>}
        {visited.includes('quiz') && <div hidden={page !== 'quiz'} className="activity-session"><VerbQuiz /></div>}
        {page === 'login' && <Login onLogin={login} onRegister={() => navigate('register', 'next')} />}
        {page === 'register' && <Register onRegister={register} onLogin={() => navigate('login')} />}
        {page === 'success' && user && <RegistrationSuccess onGoAccount={() => navigate('account', 'next')} />}
        {page === 'account' && user && <Account user={user} onGoPractice={() => navigate('home', 'next')} onLogout={() => { setUser(null); navigate('login'); }} />}
      </div>
      <div className={`koi-decoration ${isPractice ? 'creature-decoration' : ''}`} aria-hidden="true">
        <img src={isPractice ? decoration : koiLogo} alt="" />
      </div>
    </div>
  );
}
