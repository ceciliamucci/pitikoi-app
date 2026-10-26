// Fisher–Yates: mezcla una copia, sin cambiar el array original.
export function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Se llama al entrar o reiniciar, nunca al responder o avanzar.
export function prepareAttempt(questions) {
  return shuffle(questions).map((question) => {
    // Phrasal usa answer; en Idioms la correcta está primera en los datos.
    const options = shuffle(question.options.map((option, index) => ({
      ...option,
      isCorrect: index === (question.answer ?? 0),
    })));
    return { ...question, options, answer: options.findIndex((option) => option.isCorrect) };
  });
}
