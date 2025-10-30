import { Question } from '../types/survey';

export const questions: Question[] = [
  {
    id: 1,
    type: 'yesnomaybe',
    question: {
      en: "When you wake and see your messages waiting… does it fill you with warmth, with weight, or with nothing at all?",
      fr: "Quand vous vous réveillez et voyez vos messages en attente… cela vous remplit-il de chaleur, de poids, ou de rien du tout?",
      ar: "عندما تستيقظ وترى رسائلك في انتظارك... هل تملؤك بالدفء، بالثقل، أم بلا شيء على الإطلاق؟"
    },
    options: [
      {
        value: 'yes',
        label: {
          en: 'Warmth',
          fr: 'Chaleur',
          ar: 'دفء'
        }
      },
      {
        value: 'no',
        label: {
          en: 'Weight',
          fr: 'Poids',
          ar: 'ثقل'
        }
      },
      {
        value: 'unsure',
        label: {
          en: 'Nothing at all',
          fr: 'Rien du tout',
          ar: 'لا شيء'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'yesno',
    question: {
      en: "When your day begins, do your thoughts flow like calm rivers… or flutter like bright birds, one chasing another, never still?",
      fr: "Quand votre journée commence, vos pensées coulent-elles comme des rivières calmes… ou volettent-elles comme des oiseaux brillants, l'un chassant l'autre, jamais immobiles?",
      ar: "عندما يبدأ يومك، هل تتدفق أفكارك كأنهار هادئة... أم ترفرف كطيور مشرقة، واحد يطارد الآخر، لا يسكن أبدًا؟"
    }
  },
  {
    id: 3,
    type: 'multiple',
    question: {
      en: "Some mornings, your energy feels like?",
      fr: "Certains matins, votre énergie ressemble à?",
      ar: "في بعض الصباحات، تشعر طاقتك وكأنها؟"
    },
    options: [
      {
        value: 'rocket',
        label: {
          en: 'A rocket ready to launch',
          fr: 'Une fusée prête à décoller',
          ar: 'صاروخ جاهز للانطلاق'
        }
      },
      {
        value: 'steady',
        label: {
          en: 'Steady as sunlight',
          fr: 'Stable comme la lumière du soleil',
          ar: 'ثابتة كأشعة الشمس'
        }
      },
      {
        value: 'fog',
        label: {
          en: 'Wrapped in fog',
          fr: 'Enveloppée de brouillard',
          ar: 'ملفوفة بالضباب'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'yesno',
    question: {
      en: "You pause before the mirror. Do your emotions greet you there — or do they seem to hide behind your eyes, waiting for you to find them?",
      fr: "Vous vous arrêtez devant le miroir. Vos émotions vous saluent-elles — ou semblent-elles se cacher derrière vos yeux, attendant que vous les trouviez?",
      ar: "تتوقف أمام المرآة. هل تحييك مشاعرك هناك - أم يبدو أنها تختبئ خلف عينيك، في انتظار أن تجدها؟"
    }
  },
  {
    id: 5,
    type: 'yesno',
    question: {
      en: "When someone speaks of something that doesn't move your heart — can your mind still stay present, or does it quietly wander away?",
      fr: "Quand quelqu'un parle de quelque chose qui ne touche pas votre cœur — votre esprit peut-il rester présent, ou s'éloigne-t-il tranquillement?",
      ar: "عندما يتحدث شخص ما عن شيء لا يحرك قلبك - هل يمكن لعقلك أن يبقى حاضرًا، أم أنه يتجول بهدوء؟"
    }
  },
  {
    id: 6,
    type: 'yesno',
    question: {
      en: "A spark of inspiration comes — sudden, vivid. Do you follow it instantly, or do you breathe and let it rest a while?",
      fr: "Une étincelle d'inspiration vient — soudaine, vive. La suivez-vous instantanément, ou respirez-vous et la laissez-vous reposer un moment?",
      ar: "تأتي شرارة إلهام - مفاجئة، حية. هل تتبعها فورًا، أم تتنفس وتدعها تستريح قليلاً؟"
    }
  },
  {
    id: 7,
    type: 'yesno',
    question: {
      en: "You walk outside. A stranger looks your way. Do you think nothing of it… or feel as though their gaze carries meaning?",
      fr: "Vous sortez. Un étranger regarde dans votre direction. N'y pensez-vous rien… ou sentez-vous que leur regard porte un sens?",
      ar: "تخرج للخارج. ينظر إليك شخص غريب. هل لا تفكر في الأمر... أم تشعر كما لو أن نظرتهم تحمل معنى؟"
    }
  },
  {
    id: 8,
    type: 'yesno',
    question: {
      en: "Evening draws near. When silence surrounds you, does your mind rest like still water… or does it ripple with endless thought?",
      fr: "Le soir approche. Quand le silence vous entoure, votre esprit se repose-t-il comme une eau calme… ou ondule-t-il de pensées infinies?",
      ar: "يقترب المساء. عندما يحيط بك الصمت، هل يستريح عقلك كماء ساكن... أم يتموج بأفكار لا تنتهي؟"
    }
  },
  {
    id: 9,
    type: 'yesno',
    question: {
      en: "A friend hasn't replied. Do you trust their silence… or does your heart begin to write stories to fill the quiet?",
      fr: "Un ami n'a pas répondu. Faites-vous confiance à leur silence… ou votre cœur commence-t-il à écrire des histoires pour remplir le calme?",
      ar: "لم يرد صديق. هل تثق في صمته... أم أن قلبك يبدأ في كتابة قصص لملء الهدوء؟"
    }
  },
  {
    id: 10,
    type: 'yesno',
    question: {
      en: "When night comes — do your thoughts fade softly into dreams… or keep running, like stars refusing to dim?",
      fr: "Quand la nuit vient — vos pensées s'estompent-elles doucement dans les rêves… ou continuent-elles à courir, comme des étoiles refusant de s'éteindre?",
      ar: "عندما يأتي الليل - هل تتلاشى أفكارك بلطف في الأحلام... أم تستمر في الجري، مثل النجوم التي ترفض أن تخبو؟"
    }
  },
  {
    id: 11,
    type: 'yesno',
    question: {
      en: "Do your moods ever shift quickly? Moments of fire followed by stillness… or sudden storms after sunshine?",
      fr: "Vos humeurs changent-elles rapidement? Des moments de feu suivis de calme… ou des tempêtes soudaines après le soleil?",
      ar: "هل تتغير مزاجك بسرعة؟ لحظات من النار تليها السكون... أم عواصف مفاجئة بعد أشعة الشمس؟"
    }
  },
  {
    id: 12,
    type: 'yesno',
    question: {
      en: "Do you sometimes feel your mind is too full — voices, ideas, echoes blending all at once?",
      fr: "Sentez-vous parfois que votre esprit est trop plein — des voix, des idées, des échos se mélangeant tous à la fois?",
      ar: "هل تشعر أحيانًا أن عقلك ممتلئ جدًا - أصوات، أفكار، أصداء تمتزج كلها في آن واحد؟"
    }
  },
  {
    id: 13,
    type: 'yesno',
    question: {
      en: "Do you ever look at the world and think, something feels… unreal — as though life moves behind a thin glass?",
      fr: "Regardez-vous parfois le monde et pensez-vous, quelque chose semble… irréel — comme si la vie se déplaçait derrière un verre mince?",
      ar: "هل تنظر إلى العالم أحيانًا وتفكر، شيء ما يبدو... غير حقيقي - كما لو أن الحياة تتحرك خلف زجاج رقيق؟"
    }
  },
  {
    id: 14,
    type: 'yesno',
    question: {
      en: "When you speak your truth, do others easily understand you — or do you feel your words come from a different melody altogether?",
      fr: "Quand vous dites votre vérité, les autres vous comprennent-ils facilement — ou sentez-vous que vos mots viennent d'une mélodie différente?",
      ar: "عندما تقول حقيقتك، هل يفهمك الآخرون بسهولة - أم أنك تشعر أن كلماتك تأتي من لحن مختلف تمامًا؟"
    }
  }
];
