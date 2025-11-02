import { Question } from '../types/survey';

export const questions: Question[] = [
  {
    id: 1,
    type: 'yesnomaybe',
    question: {
      en: "Good morning, traveler of thoughts. Before the world rushes in — tell me, when you wake and see your messages waiting… does it fill you with warmth, with weight, or with nothing at all?",
      fr: "Bonjour, voyageur de pensées. Avant que le monde ne se précipite — dites-moi, quand vous vous réveillez et voyez vos messages en attente… cela vous remplit-il de chaleur, de poids, ou de rien du tout?",
      ar: "صباح الخير، مسافر الأفكار. قبل أن يندفع العالم - خبرني، عندما تستيقظ وترى رسائلك في الانتظار... هل يملأك بالدفء أم بالثقل أم بلا شيء على الإطلاق؟"
    },
    options: [
      {
        value: 'warmth',
        label: {
          en: 'Warmth',
          fr: 'Chaleur',
          ar: 'دفء'
        }
      },
      {
        value: 'weight',
        label: {
          en: 'Weight',
          fr: 'Poids',
          ar: 'ثقل'
        }
      },
      {
        value: 'nothing',
        label: {
          en: 'Nothing at all',
          fr: 'Rien du tout',
          ar: 'لا شيء على الإطلاق'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'yesno',
    question: {
      en: "Hmm, I see. Sometimes, mornings whisper more than they say. When your day begins, do your thoughts flow like calm rivers… or flutter like bright birds, one chasing another, never still?",
      fr: "Hmm, je comprends. Parfois, les matins chuchotent plus qu'ils ne le disent. Quand votre journée commence, vos pensées coulent-elles comme des rivières calmes… ou volettent-elles comme des oiseaux brillants, l'un chassant l'autre, jamais immobiles?",
      ar: "آه، أفهم. في بعض الأحيان، الصباحات تهمس أكثر مما تقول. عندما يبدأ يومك، هل تتدفق أفكارك مثل الأنهار الهادئة... أم ترفرف مثل الطيور الساطعة، الواحد يطارد الآخر، لا تسكن أبدًا؟"
    }
  },
  {
    id: 3,
    type: 'multiple',
    question: {
      en: "Beautiful honesty. Some mornings, your energy feels like?",
      fr: "Honnêteté magnifique. Certains matins, votre énergie ressemble à?",
      ar: "صراحة جميلة. في بعض الصباحات، تشعر طاقتك وكأنها؟"
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
      fr: "Vous vous arrêtez devant le miroir. Vos émotions vous saluent-elles là — ou semblent-elles se cacher derrière vos yeux, attendant que vous les trouviez?",
      ar: "تتوقف أمام المرآة. هل تحييك مشاعرك هناك - أم يبدو أنها تختبئ خلف عينيك، في انتظار أن تجدها؟"
    }
  },
  {
    id: 5,
    type: 'yesno',
    question: {
      en: "Let's walk into your day. When someone speaks of something that doesn't move your heart — can your mind still stay present, or does it quietly wander away?",
      fr: "Marchons dans votre journée. Quand quelqu'un parle de quelque chose qui ne touche pas votre cœur — votre esprit peut-il rester présent, ou s'éloigne-t-il tranquillement?",
      ar: "دعنا نخطو في يومك. عندما يتحدث شخص ما عن شيء لا يحرك قلبك - هل يمكن لعقلك أن يبقى حاضرًا، أم أنه يتجول بهدوء؟"
    }
  },
  {
    id: 6,
    type: 'yesno',
    question: {
      en: "A spark of inspiration comes — sudden, vivid. Do you follow it instantly, or do you breathe and let it rest a while?",
      fr: "Une étincelle d'inspiration arrive — soudaine, vive. La suivez-vous instantanément, ou respirez-vous et la laissez-vous reposer un moment?",
      ar: "تأتي شرارة إلهام - مفاجئة، حية. هل تتبعها على الفور، أم تتنفس وتدعها تستريح قليلاً؟"
    }
  },
  {
    id: 7,
    type: 'yesno',
    question: {
      en: "You walk outside. A stranger looks your way. Do you think nothing of it… or feel as though their gaze carries meaning?",
      fr: "Vous sortez dehors. Un étranger regarde dans votre direction. N'y pensez-vous rien… ou sentez-vous que leur regard porte un sens?",
      ar: "تخرج للخارج. ينظر إليك شخص غريب. هل لا تفكر في الأمر... أم تشعر كما لو أن نظرتهم تحمل معنى؟"
    }
  },
  {
    id: 8,
    type: 'yesno',
    question: {
      en: "Evening draws near. When silence surrounds you, does your mind rest like still water… or does it ripple with endless thought?",
      fr: "Le soir approche. Quand le silence vous entoure, votre esprit se repose-t-il comme une eau calme… ou ondule-t-il de pensées infinies?",
      ar: "يقترب المساء. عندما يحيط بك الصمت، هل يستريح عقلك مثل المياه الساكنة... أم يتموج بأفكار لا تنتهي؟"
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
      en: "Tell me, traveler — do your moods ever shift quickly? Moments of fire followed by stillness… or sudden storms after sunshine?",
      fr: "Dites-moi, voyageur — vos humeurs changent-elles rapidement? Des moments de feu suivis de calme… ou des tempêtes soudaines après le soleil?",
      ar: "خبرني أيها المسافر - هل تتغير مزاجك بسرعة؟ لحظات من النار تليها السكون... أم عواصف مفاجئة بعد أشعة الشمس؟"
    }
  },
  {
    id: 12,
    type: 'yesno',
    question: {
      en: "And within, do you sometimes feel your mind is too full — voices, ideas, echoes blending all at once?",
      fr: "Et en vous, sentez-vous parfois que votre esprit est trop plein — des voix, des idées, des échos se mélangeant tous à la fois?",
      ar: "وفي أعماقك، هل تشعر أحيانًا أن عقلك ممتلئ جدًا - أصوات، أفكار، أصداء تمتزج كلها في آن واحد؟"
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
      en: "Last one, my friend. When you speak your truth, do others easily understand you — or do you feel your words come from a different melody altogether?",
      fr: "La dernière, mon ami. Quand vous dites votre vérité, les autres vous comprennent-ils facilement — ou sentez-vous que vos paroles viennent d'une mélodie entièrement différente?",
      ar: "الأخيرة يا صديقي. عندما تقول حقيقتك، هل يفهمك الآخرون بسهولة - أم أنك تشعر أن كلماتك تأتي من لحن مختلف تمامًا؟"
    }
  }
];
