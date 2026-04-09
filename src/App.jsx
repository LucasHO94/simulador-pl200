import React, { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Menu, X, RotateCcw, AlertCircle, Lightbulb, BookOpen, Target } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, onSnapshot } from 'firebase/firestore';

// Chamando o seu novo arquivo de questões!
import { questionsData } from './questions';

// ==========================================
// CONFIGURAÇÃO FIREBASE E AUTENTICAÇÃO
// ==========================================
let firebaseConfig = null;
try {
  if (typeof __firebase_config !== 'undefined' && __firebase_config) {
    firebaseConfig = JSON.parse(__firebase_config);
  }
} catch (e) {
  console.warn("Configuração do Firebase não encontrada.");
}

const isFirebaseConfigured = firebaseConfig && Object.keys(firebaseConfig).length > 0;
const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
const auth = isFirebaseConfigured ? getAuth(app) : null;
const db = isFirebaseConfigured ? getFirestore(app) : null;
const appId = typeof __app_id !== 'undefined' ? __app_id : 'simulador-pl200';

export default function SimuladorPL200() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const currentQuestion = questionsData[currentQuestionIndex];

  // 1. Inicializar Autenticação e Buscar Progresso Local
  useEffect(() => {
    // Definimos um usuário local fixo, pois removemos a dependência do Firebase
    setUser({ uid: 'usuario_local' });
    
    // Carrega o progresso salvo na memória do navegador (localStorage)
    const savedProgress = localStorage.getItem('simulador_pl200_progress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Erro ao ler progresso do cache local", e);
      }
    }
    
    setLoading(false);
  }, []);

  // Ao mudar de questão, verifica se ela já foi respondida para restaurar o estado
  useEffect(() => {
    const answeredData = progress[currentQuestion.id];
    if (answeredData) {
      setSelectedOption(answeredData.selectedOption);
      setShowExplanation(true);
    } else {
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }, [currentQuestionIndex, progress, currentQuestion.id]);

  const handleOptionSelect = (index) => {
    if (showExplanation) return; // Bloqueia mudança se já respondeu
    setSelectedOption(index);
  };

  const handleVerify = async () => {
    if (selectedOption === null || !user) return;

    setShowExplanation(true);
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Atualiza Progresso Localmente (Estado e LocalStorage)
    const newProgress = {
      ...progress,
      [currentQuestion.id]: {
        selectedOption,
        isCorrect
      }
    };
    setProgress(newProgress);
    localStorage.setItem('simulador_pl200_progress', JSON.stringify(newProgress));
  };

  const handleResetProgress = async () => {
    if (!user || !window.confirm("Tem certeza que deseja apagar todo o seu progresso? Isso não afetará os outros membros da equipe.")) return;

    setProgress({});
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    localStorage.removeItem('simulador_pl200_progress');
  };

  // Cálculos de estatísticas
  const stats = useMemo(() => {
    const answeredKeys = Object.keys(progress);
    const totalAnswered = answeredKeys.length;
    const correctAnswers = answeredKeys.filter(key => progress[key].isCorrect).length;
    const percentage = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    return { totalAnswered, correctAnswers, percentage };
  }, [progress]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-slate-50 text-slate-600 font-medium">Carregando simulador...</div>;
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">

      {/* SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-blue-600 text-white">
          <h1 className="font-bold text-lg">PL-200 Simulator</h1>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex justify-between text-sm mb-2 text-slate-600">
            <span>Progresso: {stats.totalAnswered} / {questionsData.length}</span>
            <span className="font-bold text-blue-600">{stats.percentage}% Acerto</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(stats.totalAnswered / questionsData.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {questionsData.map((q, idx) => {
            const isAnswered = progress[q.id];
            const isCorrect = isAnswered?.isCorrect;
            const isCurrent = currentQuestionIndex === idx;

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentQuestionIndex(idx);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors ${isCurrent ? 'bg-blue-50 border border-blue-200' : 'hover:bg-slate-100 border border-transparent'}`}
              >
                <span className={`text-sm font-medium ${isCurrent ? 'text-blue-700' : 'text-slate-700'}`}>
                  Questão {idx + 1}
                </span>
                {isAnswered && (
                  isCorrect ? <CheckCircle2 size={16} className="text-emerald-500" /> : <XCircle size={16} className="text-red-500" />
                )}
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleResetProgress}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-medium"
          >
            <RotateCcw size={16} />
            Resetar Progresso
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200">
          <button onClick={() => setSidebarOpen(true)} className="text-slate-600">
            <Menu size={24} />
          </button>
          <span className="font-bold text-slate-800">Questão {currentQuestionIndex + 1}</span>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-3xl mx-auto">

            {/* NOVO: Título Principal do Simulado */}
            <div className="mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-extrabold text-slate-800 flex items-center gap-2">
                <Target className="text-blue-600" size={28} />
                Simulado para a PL-200
              </h2>
              <p className="text-slate-500 mt-1 ml-9">Microsoft Power Platform Functional Consultant</p>
            </div>

            {/* Header da Questão */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                Questão {currentQuestionIndex + 1} de {questionsData.length}
              </span>
              <div className="text-lg text-slate-800 whitespace-pre-wrap leading-relaxed">
                {currentQuestion.text}
              </div>
            </div>

            {/* Opções */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectAnswer = currentQuestion.correctAnswer === idx;

                let optionClasses = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 ";

                if (!showExplanation) {
                  optionClasses += isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50";
                } else {
                  if (isCorrectAnswer) {
                    optionClasses += "border-emerald-500 bg-emerald-50";
                  } else if (isSelected && !isCorrectAnswer) {
                    optionClasses += "border-red-500 bg-red-50";
                  } else {
                    optionClasses += "border-slate-200 bg-white opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={showExplanation}
                    className={optionClasses}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${!showExplanation && isSelected ? "border-blue-500" :
                      showExplanation && isCorrectAnswer ? "border-emerald-500 bg-emerald-500" :
                        showExplanation && isSelected ? "border-red-500 bg-red-500" :
                          "border-slate-300"
                      }`}>
                      {showExplanation && isCorrectAnswer && <CheckCircle2 size={14} className="text-white" />}
                      {showExplanation && isSelected && !isCorrectAnswer && <X size={14} className="text-white" />}
                      {!showExplanation && isSelected && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
                    </div>
                    <span className={`text-base ${showExplanation && isCorrectAnswer ? 'font-medium text-emerald-900' : 'text-slate-700'}`}>
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Ações / Explicação */}
            {!showExplanation ? (
              <button
                onClick={handleVerify}
                disabled={selectedOption === null}
                className={`py-3 px-8 rounded-xl font-bold text-white shadow-sm transition-all ${selectedOption !== null
                  ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-md translate-y-0'
                  : 'bg-slate-300 cursor-not-allowed'
                  }`}
              >
                Verificar Resposta
              </button>
            ) : (
              <div className="animate-fade-in-up">
                {/* Banner de Resultado */}
                <div className={`p-4 rounded-xl mb-6 flex items-center gap-3 font-bold text-lg ${selectedOption === currentQuestion.correctAnswer
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <><CheckCircle2 size={24} /> Resposta Correta!</>
                  ) : (
                    <><XCircle size={24} /> Resposta Incorreta</>
                  )}
                </div>

                {/* Bloco de Explicação Detalhada */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                    <BookOpen className="text-blue-600" size={20} />
                    <h3 className="font-bold text-slate-800 text-lg">Explicação Detalhada</h3>
                  </div>

                  <div className="p-6 space-y-6 text-slate-700">

                    {currentQuestion.explanation.intro && (
                      <p className="text-lg leading-relaxed">{currentQuestion.explanation.intro}</p>
                    )}

                    {currentQuestion.explanation.papoReto && (
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
                          <Target size={18} /> Traduzindo para o "Papo Reto"
                        </h4>
                        <p className="whitespace-pre-wrap">{currentQuestion.explanation.papoReto}</p>
                      </div>
                    )}

                    {currentQuestion.explanation.puloDoGato && (
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <Lightbulb className="text-amber-500" size={20} /> O Pulo do Gato (Por que essa é a certa?)
                        </h4>
                        <p>{currentQuestion.explanation.puloDoGato}</p>
                      </div>
                    )}

                    {currentQuestion.explanation.cascasDeBanana && currentQuestion.explanation.cascasDeBanana.length > 0 && (
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                          <AlertCircle className="text-red-500" size={20} /> Cascas de Banana (Por que as outras estão erradas?)
                        </h4>
                        <ul className="space-y-3">
                          {currentQuestion.explanation.cascasDeBanana.map((casca, i) => {
                            const [boldPart, ...rest] = casca.split(':');
                            return (
                              <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <X size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                                <span>
                                  {rest.length > 0 ? (
                                    <><strong>{boldPart.replace(/\*\*/g, '')}:</strong>{rest.join(':')}</>
                                  ) : (
                                    casca
                                  )}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}

                    {currentQuestion.explanation.dicaOuro && (
                      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mt-6">
                        <h4 className="font-bold text-amber-800 mb-1">🏆 Dica de Ouro para a prova:</h4>
                        <p className="text-amber-900 font-medium">{currentQuestion.explanation.dicaOuro}</p>
                      </div>
                    )}

                  </div>
                </div>

                {/* Botões de Navegação Inferiores */}
                <div className="mt-8 flex justify-between items-center pb-10">
                  <button
                    onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 disabled:opacity-30 transition-colors font-medium"
                  >
                    <ChevronLeft size={20} /> Anterior
                  </button>

                  {currentQuestionIndex < questionsData.length - 1 ? (
                    <button
                      onClick={() => {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2 py-3 px-6 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-colors"
                    >
                      Próxima Questão <ChevronRight size={20} />
                    </button>
                  ) : (
                    <span className="text-emerald-600 font-bold flex items-center gap-2">
                      <CheckCircle2 /> Você chegou ao fim!
                    </span>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}