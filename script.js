// ==========================================
// ONISHI TYPING PRO - Core Logic
// ==========================================

// --- キーボードレイアウト定義 ---
const KEYBOARD_LAYOUT = [
    // 1段目 (QWERTY: Q-P段)
    [
        { onishi: 'q', qwerty: 'q', finger: 'l5' },
        { onishi: 'l', qwerty: 'w', finger: 'l4' },
        { onishi: 'u', qwerty: 'e', finger: 'l3' },
        { onishi: ',', qwerty: 'r', finger: 'l2' },
        { onishi: '.', qwerty: 't', finger: 'l2' },
        { onishi: 'f', qwerty: 'y', finger: 'r2' },
        { onishi: 'w', qwerty: 'u', finger: 'r2' },
        { onishi: 'r', qwerty: 'i', finger: 'r3' },
        { onishi: 'y', qwerty: 'o', finger: 'r4' },
        { onishi: 'p', qwerty: 'p', finger: 'r5' },
    ],
    // 2段目 (QWERTY: A-L段, ホームポジション)
    [
        { onishi: 'e', qwerty: 'a', finger: 'l5', home: true },
        { onishi: 'i', qwerty: 's', finger: 'l4', home: true },
        { onishi: 'a', qwerty: 'd', finger: 'l3', home: true },
        { onishi: 'o', qwerty: 'f', finger: 'l2', home: true },
        { onishi: '-', qwerty: 'g', finger: 'l2' },
        { onishi: 'k', qwerty: 'h', finger: 'r2' },
        { onishi: 't', qwerty: 'j', finger: 'r2', home: true },
        { onishi: 'n', qwerty: 'k', finger: 'r3', home: true },
        { onishi: 's', qwerty: 'l', finger: 'r4', home: true },
        { onishi: 'h', qwerty: ';', finger: 'r5', home: true },
    ],
    // 3段目 (QWERTY: Z-?段)
    [
        { onishi: 'z', qwerty: 'z', finger: 'l5' },
        { onishi: 'x', qwerty: 'x', finger: 'l4' },
        { onishi: 'c', qwerty: 'c', finger: 'l3' },
        { onishi: 'v', qwerty: 'v', finger: 'l2' },
        { onishi: ';', qwerty: 'b', finger: 'l2' },
        { onishi: 'g', qwerty: 'n', finger: 'r2' },
        { onishi: 'd', qwerty: 'm', finger: 'r2' },
        { onishi: 'm', qwerty: ',', finger: 'r3' },
        { onishi: 'j', qwerty: '.', finger: 'r4' },
        { onishi: 'b', qwerty: '/', finger: 'r5' },
    ]
];

// --- 仮想大西配列キー変換テーブル ---
// QWERTY物理キー入力を大西配列の仮想キーにマッピング
const QWERTY_TO_ONISHI = {
    'q': 'q', 'w': 'l', 'e': 'u', 'r': ',', 't': '.', 'y': 'f', 'u': 'w', 'i': 'r', 'o': 'y', 'p': 'p',
    'a': 'e', 's': 'i', 'd': 'a', 'f': 'o', 'g': '-', 'h': 'k', 'j': 't', 'k': 'n', 'l': 's', ';': 'h',
    'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': ';', 'n': 'g', 'm': 'd', ',': 'm', '.': 'j', '/': 'b',
    // Shiftキー押下時のマッピング
    'Q': 'q', 'W': 'l', 'E': 'u', 'R': ',', 'T': '.', 'Y': 'f', 'U': 'w', 'I': 'r', 'O': 'y', 'P': 'p',
    'A': 'e', 'S': 'i', 'D': 'a', 'F': 'o', 'G': '-', 'H': 'k', 'J': 't', 'K': 'n', 'L': 's', ':': 'h',
    'Z': 'z', 'X': 'x', 'C': 'c', 'V': 'v', 'B': ';', 'N': 'g', 'M': 'd', '<': 'm', '>': 'j', '?': 'b',
    // 日本語テンキーや長音符の対応
    '-': '-', '_': '-'
};

// --- 大西配列からQWERTY物理キーへの逆変換テーブル (自動生成) ---
const ONISHI_TO_QWERTY = {};
for (let key in QWERTY_TO_ONISHI) {
    ONISHI_TO_QWERTY[QWERTY_TO_ONISHI[key]] = key;
}

// --- 仮想Eucalyn配列キー変換テーブル ---
const QWERTY_TO_EUCALYN = {
    'q': 'q', 'w': 'w', 'e': ',', 'r': '.', 't': 'p', 'y': 'f', 'u': 'm', 'i': 'g', 'o': 'y', 'p': 'b',
    'a': 'a', 's': 'o', 'd': 'e', 'f': 'i', 'g': 'u', 'h': 'd', 'j': 'h', 'k': 't', 'l': 'n', ';': 's',
    'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': ';', 'n': 'k', 'm': 'r', ',': 'l', '.': 'j', '/': '-',
    'Q': 'q', 'W': 'w', 'E': ',', 'R': '.', 'T': 'p', 'Y': 'f', 'U': 'm', 'I': 'g', 'O': 'y', 'P': 'b',
    'A': 'a', 'S': 'o', 'D': 'e', 'F': 'i', 'G': 'u', 'H': 'd', 'J': 'h', 'K': 't', 'L': 'n', ':': 's',
    'Z': 'z', 'X': 'x', 'C': 'c', 'V': 'v', 'B': ';', 'N': 'k', 'M': 'r', '<': 'l', '>': 'j', '?': '-'
};
const EUCALYN_TO_QWERTY = {};
for (let key in QWERTY_TO_EUCALYN) {
    EUCALYN_TO_QWERTY[QWERTY_TO_EUCALYN[key]] = key;
}

// --- レッスン定義 ---
const LESSONS = [
    {
        id: 1,
        title: "レッスン 1: ホームポジション (E I A O T N S H)",
        desc: "左手ホームポジション「E I A O」と右手ホームポジション「T N S H」を練習します。<br>まずはキーボードの最も基本となる指の位置を覚えましょう。",
        keys: "E I A O T N S H",
        words: [
            { jp: "あお", ro: "ao" },
            { jp: "いい", ro: "ii" },
            { jp: "いと", ro: "ito" },
            { jp: "おと", ro: "oto" },
            { jp: "あね", ro: "ane" },
            { jp: "しお", ro: "sio" },
            { jp: "て", ro: "te" },
            { jp: "した", ro: "sita" },
            { jp: "しな", ro: "sina" },
            { jp: "おにいさん", ro: "oniisan" },
            { jp: "あした", ro: "asita" },
            { jp: "あさ", ro: "asa" },
            { jp: "いいえ", ro: "iie" },
            { jp: "ねえ", ro: "nee" },
            { jp: "ねえさん", ro: "neesan" },
            { jp: "たね", ro: "tane" },
            { jp: "てん", ro: "ten" },
            { jp: "そと", ro: "soto" },
            { jp: "たいした", ro: "taisita" },
            { jp: "しんしん", ro: "sinsin" },
            { jp: "さんねん", ro: "sannen" },
            { jp: "ねっと", ro: "netto" },
            { jp: "そせい", ro: "sosei" },
            { jp: "しせい", ro: "sisei" },
            { jp: "その", ro: "sono" },
            { jp: "あの", ro: "ano" },
            { jp: "たい", ro: "tai" },
            { jp: "てんねん", ro: "tennen" },
            { jp: "ねんね", ro: "nenne" },
            { jp: "おそい", ro: "osoi" },
            { jp: "おせち", ro: "oseti" },
            { jp: "さとし", ro: "satosi" },
            { jp: "ちとせ", ro: "titose" },
            { jp: "とち", ro: "toti" },
            { jp: "なし", ro: "nasi" },
            { jp: "にし", ro: "nisi" },
            { jp: "にせ", ro: "nise" },
            { jp: "のせ", ro: "nose" },
            { jp: "したて", ro: "sitate" },
            { jp: "とし", ro: "tosi" },
            { jp: "ひ", ro: "hi" },
            { jp: "はて", ro: "hate" },
            { jp: "ひと", ro: "hito" },
            { jp: "ほし", ro: "hosi" },
            { jp: "へそ", ro: "heso" },
            { jp: "あはは", ro: "ahaha" },
            { jp: "はし", ro: "hasi" },
            { jp: "ひさし", ro: "hisasi" },
            { jp: "ひねて", ro: "hinete" },
            { jp: "ねね", ro: "nene" },
            { jp: "あし", ro: "asi" },
            { jp: "いし", ro: "isi" },
            { jp: "てんてん", ro: "tenten" },
            { jp: "さん", ro: "san" },
            { jp: "しん", ro: "sin" },
            { jp: "はん", ro: "han" },
            { jp: "せん", ro: "sen" },
            { jp: "てんし", ro: "tensi" },
            { jp: "はんしん", ro: "hansin" },
            { jp: "てんせん", ro: "tensen" }
        ]
    },
    {
        id: 2,
        title: "レッスン 2: 中央・上段の頻出キー (U - K)",
        desc: "母音「U」、伸ばし棒「-」、そして子音「K」を練習します。<br>これによって、多くの基本フレーズが打てるようになります。",
        keys: "U - K",
        words: [
            { jp: "うえ", ro: "ue" },
            { jp: "うた", ro: "uta" },
            { jp: "きく", ro: "kiku" },
            { jp: "ねこ", ro: "neko" },
            { jp: "いーと", ro: "i-to" },
            { jp: "こうてい", ro: "koutei" },
            { jp: "すうてき", ro: "suuteki" },
            { jp: "あくしゅ", ro: "akushu" },
            { jp: "きおん", ro: "kion" },
            { jp: "すいか", ro: "suika" },
            { jp: "つくえ", ro: "tukue" },
            { jp: "にく", ro: "niku" },
            { jp: "すけーと", ro: "suke-to" },
            { jp: "けいかく", ro: "keikaku" },
            { jp: "けいこ", ro: "keiko" },
            { jp: "こうねん", ro: "kounen" },
            { jp: "きかん", ro: "kikan" },
            { jp: "かんこく", ro: "kankoku" },
            { jp: "かう", ro: "kau" },
            { jp: "かく", ro: "kaku" },
            { jp: "いけ", ro: "ike" },
            { jp: "こえ", ro: "koe" },
            { jp: "くうき", ro: "kuuki" },
            { jp: "けこん", ro: "kekon" },
            { jp: "かん", ro: "kan" },
            { jp: "こん", ro: "kon" },
            { jp: "くん", ro: "kun" },
            { jp: "けん", ro: "ken" },
            { jp: "すう", ro: "suu" },
            { jp: "すね", ro: "sune" },
            { jp: "すそ", ro: "suso" },
            { jp: "すし", ro: "susi" },
            { jp: "つち", ro: "tuti" },
            { jp: "てつ", ro: "tetu" },
            { jp: "いぬ", ro: "inu" },
            { jp: "ぬの", ro: "nuno" },
            { jp: "ねつ", ro: "netu" },
            { jp: "ぬし", ro: "nusi" },
            { jp: "うそ", ro: "uso" },
            { jp: "うし", ro: "usi" },
            { jp: "うち", ro: "uti" },
            { jp: "うね", ro: "une" },
            { jp: "あく", ro: "aku" },
            { jp: "いか", ro: "ika" },
            { jp: "おか", ro: "oka" },
            { jp: "かお", ro: "kao" },
            { jp: "かつ", ro: "katu" },
            { jp: "きた", ro: "kita" },
            { jp: "けさ", ro: "kesa" },
            { jp: "こて", ro: "kote" },
            { jp: "こと", ro: "koto" },
            { jp: "しき", ro: "siki" },
            { jp: "せき", ro: "seki" },
            { jp: "そこ", ro: "soko" },
            { jp: "つき", ro: "tuki" },
            { jp: "てき", ro: "teki" },
            { jp: "とき", ro: "toki" },
            { jp: "ぬけ", ro: "nuke" },
            { jp: "のこ", ro: "noko" },
            { jp: "はく", ro: "haku" },
            { jp: "ひく", ro: "hiku" },
            { jp: "ふく", ro: "huku" },
            { jp: "ほく", ro: "hoku" },
            { jp: "ほう", ro: "hou" },
            { jp: "ふね", ro: "hune" }
        ]
    },
    {
        id: 3,
        title: "レッスン 3: 上段の完成 (Q L , . F W R Y P)",
        desc: "上段の追加キーを練習します。日本語文で重要な読点「,」と句点「.」の位置に加え、<br>「R」「Y」「W」などの配置をマスターしましょう。",
        keys: "Q L , . F W R Y P",
        words: [
            { jp: "わたし", ro: "watasi" },
            { jp: "よる", ro: "yoru" },
            { jp: "ゆき", ro: "yuki" },
            { jp: "らりるれろ", ro: "rarirurero" },
            { jp: "ふるい", ro: "furui" },
            { jp: "よわい", ro: "yowai" },
            { jp: "よゆう", ro: "yoyuu" },
            { jp: "これ、それ。", ro: "kore,sore." },
            { jp: "ぷりん", ro: "purin" },
            { jp: "わらい", ro: "warai" },
            { jp: "きょねん", ro: "kyonen" },
            { jp: "しゃしん", ro: "syasin" },
            { jp: "ゆらい", ro: "yurai" },
            { jp: "よてい", ro: "yotei" },
            { jp: "かれ", ro: "kare" },
            { jp: "よる、そしてあさ。", ro: "yoru,sositeasa." },
            { jp: "はる", ro: "haru" },
            { jp: "あき", ro: "aki" },
            { jp: "ふゆ", ro: "fuyu" },
            { jp: "なつ", ro: "natu" },
            { jp: "ふね", ro: "fune" },
            { jp: "ろく", ro: "roku" },
            { jp: "かわ", ro: "kawa" },
            { jp: "ゆや", ro: "yuya" },
            { jp: "より", ro: "yori" },
            { jp: "りす", ro: "risu" },
            { jp: "さる", ro: "saru" },
            { jp: "とり", ro: "tori" },
            { jp: "わに", ro: "wani" },
            { jp: "りあ", ro: "ria" },
            { jp: "あらい", ro: "arai" },
            { jp: "わるい", ro: "warui" },
            { jp: "ひろい", ro: "hiroi" },
            { jp: "きいろい", ro: "kiiroi" },
            { jp: "しろい", ro: "siroi" },
            { jp: "くろい", ro: "kuroi" },
            { jp: "かるい", ro: "karui" },
            { jp: "はやい", ro: "hayai" },
            { jp: "やすい", ro: "yasui" },
            { jp: "ゆるい", ro: "yurui" },
            { jp: "ふかい", ro: "hukai" },
            { jp: "きれい", ro: "kirei" },
            { jp: "いらすと", ro: "irasuto" },
            { jp: "すぷーん", ro: "supu-n" },
            { jp: "こっぷ", ro: "koppu" },
            { jp: "らっぱ", ro: "rappa" },
            { jp: "あっぷる", ro: "appuru" },
            { jp: "よっと", ro: "yotto" }
        ]
    },
    {
        id: 4,
        title: "レッスン 4: 下段のキー (Z X C V ; G D M J B)",
        desc: "下段のキーを練習します。コピー＆ペーストなどでよく使われるショートカットキー<br>（Z, X, C, V）がQWERTY配列のまま維持されている点にも注目してください。",
        keys: "Z X C V ; G D M J B",
        words: [
            { jp: "がくせい", ro: "gakusei" },
            { jp: "じどうしゃ", ro: "jidousya" },
            { jp: "びよういん", ro: "biyouin" },
            { jp: "まど", ro: "mado" },
            { jp: "みかん", ro: "mikan" },
            { jp: "ぜんぶ", ro: "zenbu" },
            { jp: "こぴー", ro: "kopi-" },
            { jp: "じゃがいも", ro: "jagaimo" },
            { jp: "だいどころ", ro: "daidokoro" },
            { jp: "じかん", ro: "jikan" },
            { jp: "めがね", ro: "megane" },
            { jp: "かぞく", ro: "kazoku" },
            { jp: "たべもの", ro: "tabemono" },
            { jp: "でんしゃ", ro: "densya" },
            { jp: "じゅんび", ro: "junbi" },
            { jp: "びでお", ro: "bideo" },
            { jp: "まんが", ro: "manga" },
            { jp: "ばんごう", ro: "bangou" },
            { jp: "えんぴつ", ro: "enpitu" },
            { jp: "かばん", ro: "kaban" },
            { jp: "さいふ", ro: "saihu" },
            { jp: "けいたいでんわ", ro: "keitaidenwa" },
            { jp: "しんぶん", ro: "sinbun" },
            { jp: "ざっし", ro: "zassi" },
            { jp: "じてんしゃ", ro: "jitensya" },
            { jp: "ひこうき", ro: "hikouki" },
            { jp: "きょうしつ", ro: "kyousitu" },
            { jp: "しょくどう", ro: "syokudou" },
            { jp: "としょかん", ro: "tosyokan" },
            { jp: "びじゅつかん", ro: "bijutukan" },
            { jp: "どうぶつえん", ro: "doubutuen" },
            { jp: "ゆうえんち", ro: "yuuenci" },
            { jp: "がっこう", ro: "gakkou" },
            { jp: "びょういん", ro: "byouin" },
            { jp: "ぎんこう", ro: "ginkou" },
            { jp: "ゆうびんきょく", ro: "yuubinkyoku" },
            { jp: "でんき", ro: "denki" }
        ]
    },
    {
        id: 5,
        title: "レッスン 5: 総合練習（すべてのジャンル）",
        desc: "日常会話、ことわざ、IT、地理、文学のすべてのカテゴリ（全400語以上）から、すべての文章がランダムに出題されます。<br>大西配列のタッチタイピング完全マスターを目指しましょう！",
        keys: "すべてのキー",
        category: "all",
        words: []
    }
];

// --- 日本語ローマ字対応マップ ---
const ROMAJI_MAP = {
    'あ': ['a'], 'い': ['i', 'yi'], 'う': ['u', 'wu'], 'え': ['e', 'ye'], 'お': ['o'],
    'か': ['ka'], 'き': ['ki'], 'く': ['ku'], 'け': ['ke'], 'こ': ['ko'],
    'さ': ['sa'], 'し': ['si', 'shi'], 'す': ['su'], 'せ': ['se'], 'そ': ['so'],
    'た': ['ta'], 'ち': ['ti', 'chi'], 'つ': ['tu', 'tsu'], 'て': ['te'], 'と': ['to'],
    'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
    'は': ['ha'], 'ひ': ['hi'], 'ふ': ['hu', 'fu'], 'へ': ['he'], 'ほ': ['ho'],
    'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
    'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
    'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
    'わ': ['wa'], 'を': ['wo', 'o'], 'ん': ['n', 'nn'],
    'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
    'ざ': ['za'], 'じ': ['zi', 'ji'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
    'だ': ['da'], 'ぢ': ['di', 'ji'], 'づ': ['du'], 'で': ['de'], 'ど': ['do'],
    'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
    'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
    
    // 拗音
    'きゃ': ['kya'], 'きゅ': ['kyu'], 'きょ': ['kyo'],
    'しゃ': ['sya', 'sha'], 'しゅ': ['syu', 'shu'], 'しょ': ['syo', 'sho'],
    'ちゃ': ['tya', 'cha'], 'ちゅ': ['tyu', 'chu'], 'ちょ': ['tyo', 'cho'],
    'にゃ': ['nya'], 'にゅ': ['nyu'], 'にょ': ['nyo'],
    'ひゃ': ['hya'], 'ひゅ': ['hyu'], 'ひょ': ['hyo'],
    'みゃ': ['mya'], 'みゅ': ['myu'], 'みょ': ['myo'],
    'りゃ': ['rya'], 'りゅ': ['ryu'], 'りょ': ['ryo'],
    'ぎゃ': ['gya'], 'ぎゅ': ['gyu'], 'ぎょ': ['gyo'],
    'じゃ': ['zya', 'ja', 'jya'], 'じゅ': ['zyu', 'ju', 'jyu'], 'じょ': ['zyo', 'jo', 'jyo'],
    'ぢゃ': ['dya'], 'ぢゅ': ['dyu'], 'ぢょ': ['dyo'],
    'びゃ': ['bya'], 'びゅ': ['byu'], 'びょ': ['byo'],
    'ぴゃ': ['pya'], 'ぴゅ': ['pyu'], 'ぴょ': ['pyo'],
    
    // 外来語用拗音
    'うぇ': ['we'], 'うぃ': ['wi'], 'うぉ': ['wo'],
    'ふぁ': ['fa'], 'ふぃ': ['fi'], 'ふぇ': ['fe'], 'ふぉ': ['fo'],
    'でぃ': ['di', 'dhi'], 'でゅ': ['dyu', 'dhyu'],
    'てぃ': ['ti', 'thi'], 'てゅ': ['tyu', 'thyu'],
    'じぇ': ['je', 'zye'], 'ちぇ': ['ce', 'tye'], 'しぇ': ['se', 'sye'],
    'つぁ': ['tsa'], 'つぃ': ['tsi'], 'つぇ': ['tse'], 'つぉ': ['tso'],
    'うぁ': ['wa'],
    'ゔ': ['vu'], 'ゔぁ': ['va'], 'ゔぃ': ['vi'], 'ゔぇ': ['ve'], 'ゔぉ': ['vo'],
    
    // 単体小書き文字 (フォールバック用)
    'ぁ': ['la', 'xa'], 'ぃ': ['li', 'xi'], 'ぅ': ['lu', 'xu'], 'ぇ': ['le', 'xe'], 'ぉ': ['lo', 'xo'],
    'ゃ': ['lya', 'xya'], 'ゅ': ['lyu', 'xyu'], 'ょ': ['lyo', 'xyo'],
    
    // 記号・特殊音
    'っ': ['ltu', 'ltsu', 'xtu'],
    'ー': ['-'],
    '。': ['.'], '、': [','],
    '？': ['?'], '！': ['!']
};

// ひらがなから全ての有効なローマ字配列を生成する関数
function getRomajiPaths(hiragana) {
    let paths = [''];
    let i = 0;
    
    while (i < hiragana.length) {
        let matchedLen = 0;
        let candidates = [];
        
        // 2文字の判定 (拗音や促音)
        if (i + 1 < hiragana.length) {
            const twoChars = hiragana.substring(i, i + 2);
            if (ROMAJI_MAP[twoChars]) {
                candidates = ROMAJI_MAP[twoChars];
                matchedLen = 2;
            } else if (hiragana[i] === 'っ') {
                // 促音の次が2文字の拗音（例：っしゃ、っちゃ）の場合
                if (i + 2 < hiragana.length) {
                    const nextTwoChars = hiragana.substring(i + 1, i + 3);
                    if (ROMAJI_MAP[nextTwoChars]) {
                        const nextCandidates = ROMAJI_MAP[nextTwoChars];
                        candidates = nextCandidates.map(c => c[0] + c);
                        matchedLen = 3;
                    }
                }
                // そうでなければ通常の1文字の促音
                if (matchedLen === 0) {
                    const nextChar = hiragana[i + 1];
                    const nextCandidates = ROMAJI_MAP[nextChar];
                    if (nextCandidates && nextCandidates.length > 0) {
                        candidates = nextCandidates.map(c => c[0] + c);
                        matchedLen = 2;
                    }
                }
            }
        }
        
        // 1文字の判定
        if (matchedLen === 0) {
            const oneChar = hiragana[i];
            candidates = ROMAJI_MAP[oneChar] || [oneChar];
            matchedLen = 1;

            // 「ん」の特別な処理：
            // 1. 次の文字があ行・な行・や行の場合、'n'を除外して'nn'のみにする
            // 2. 次の文字がない（文末・単語末の「ん」）場合も、'n'を除外して'nn'のみにする
            if (oneChar === 'ん') {
                if (i + 1 < hiragana.length) {
                    const nextChar = hiragana[i + 1];
                    if (/[あいうえおなにぬねのやゆよぁぃぅぇぉゃゅょ]/.test(nextChar)) {
                        candidates = ['nn'];
                    }
                } else {
                    candidates = ['nn'];
                }
            }
        }
        
        const nextPaths = [];
        paths.forEach(p => {
            candidates.forEach(c => {
                nextPaths.push(p + c);
            });
        });
        paths = nextPaths;
        i += matchedLen;
    }
    return paths;
}

// --- ゲーム状態変数 ---
let activeLesson = LESSONS[0];
let currentWordIndex = 0;
let targetWords = [];
let correctTypes = 0;
let incorrectTypes = 0;
let score = 0;
let timeLeft = 60;
let totalTime = 60;
let timerInterval = null;
let isPlaying = false;

// 1文制限時間用の変数
let timerMode = "total"; // "total" または "word-soyo" など
let wordTimeLimit = 0;
let wordTimeLeft = 0;

// 複数パターン判定用の変数
let inputBuffer = "";
let romajiPaths = [];
let displayRomaji = "";

// 同時押し・かな配列用の変数
let pressedKeys = {};
function isKanaMode(layout) {
    return ['sim-nicola', 'os-nicola', 'sim-naginata', 'os-naginata', 'sim-shingeta', 'sim-asuka'].includes(layout);
}

// --- DOM 要素の取得 ---
const lessonListContainer = document.getElementById('lesson-list');
const startLessonTitle = document.getElementById('start-lesson-title');
const startLessonDesc = document.getElementById('start-lesson-desc');
const btnStart = document.getElementById('btn-start');
const btnExit = document.getElementById('btn-exit');
const btnRetry = document.getElementById('btn-retry');
const btnNextLesson = document.getElementById('btn-next-lesson');
const btnGoTop = document.getElementById('btn-go-top');

const screenStart = document.getElementById('screen-start');
const screenPlay = document.getElementById('screen-play');
const screenResult = document.getElementById('screen-result');

const displayTime = document.getElementById('display-time');
const displayScore = document.getElementById('display-score');
const displayAccuracy = document.getElementById('display-accuracy');
const timerProgress = document.getElementById('timer-progress');

const targetJapanese = document.getElementById('target-japanese');
const targetRomaji = document.getElementById('target-romaji');
const onishiKeyboard = document.getElementById('onishi-keyboard');

const inputModeToggle = document.getElementById('input-mode-toggle'); // 念のため残すか、または完全に置き換え
const layoutSelect = document.getElementById('layout-select');
const timeSelect = document.getElementById('time-select');
const modeSelect = document.getElementById('mode-select');

// 1文制限時間UI
const wordProgressContainer = document.getElementById('word-progress-container');
const wordProgressBar = document.getElementById('word-progress-bar');

// ランキングUI
const newRecordBadge = document.getElementById('new-record-badge');
const rankingModeName = document.getElementById('ranking-mode-name');
const rankingList = document.getElementById('ranking-list');

// --- 辞書データ保持用 ---
let wordsData = null;

// フォールバック用の最小限の単語データ（CORSエラー等でJSONが読み込めない場合に使用）
const FALLBACK_WORDS = {
    daily: [
        { jp: "おーにしはいれつ", ro: "o-nisihairetu" },
        { jp: "こんにちは。", ro: "konnitiha." },
        { jp: "ありがとう。", ro: "arigatou." },
        { jp: "きょうはいいおてんきですね。", ro: "kyouhaiiotenkidesune." }
    ],
    proverbs: [
        { jp: "いしのうえにもさんねん。", ro: "isinoueimosannen." },
        { jp: "いそがばまわれ。", ro: "isogabamaware." }
    ],
    it_business: [
        { jp: "たっちたいぴんぐのれんしゅう。", ro: "tattitaipingunorensyuu." },
        { jp: "ぱそこんをつかう。", ro: "pasokonwocukau." }
    ],
    geography: [
        { jp: "とうきょうと", ro: "toukyouto" },
        { jp: "おおさかふ", ro: "oosakahou" }
    ],
    literature: [
        { jp: "むかしむかし、あるところに。", ro: "mukasimukasi,arutokoroni." },
        { jp: "わがはいはねこである。", ro: "wagahaihanecodearu." }
    ]
};

// JSON データの非同期読み込み
async function loadWordsData() {
    try {
        const response = await fetch('words.json');
        wordsData = await response.json();
        
        // 各レッスンに単語データを流し込む
        LESSONS.forEach(lesson => {
            if (lesson.category) {
                if (lesson.category === 'all') {
                    lesson.words = [];
                    Object.keys(wordsData).forEach(cat => {
                        if (Array.isArray(wordsData[cat])) {
                            lesson.words.push(...wordsData[cat]);
                        }
                    });
                } else if (wordsData[lesson.category]) {
                    lesson.words = wordsData[lesson.category];
                }
            }
        });
    } catch (error) {
        console.warn('辞書ファイルの読み込みに失敗したため、内蔵フォールバック辞書を使用します (CORS制限などの可能性があります):', error);
        
        // フォールバックデータを適用
        LESSONS.forEach(lesson => {
            if (lesson.category) {
                if (lesson.category === 'all') {
                    lesson.words = [];
                    Object.keys(FALLBACK_WORDS).forEach(cat => {
                        if (Array.isArray(FALLBACK_WORDS[cat])) {
                            lesson.words.push(...FALLBACK_WORDS[cat]);
                        }
                    });
                } else if (FALLBACK_WORDS[lesson.category]) {
                    lesson.words = FALLBACK_WORDS[lesson.category];
                }
            }
        });
    }
}

// --- 初期化処理 ---
window.addEventListener('DOMContentLoaded', () => {
    generateKeyboard();
    
    // 辞書ロード後にレッスンリストを生成
    loadWordsData().then(() => {
        generateLessonList();
        selectLesson(1); // デフォルトでレッスン1を選択
    });

    // イベントリスナー登録
    btnStart.addEventListener('click', startGame);
    btnExit.addEventListener('click', stopGame);
    btnRetry.addEventListener('click', () => {
        selectLesson(activeLesson.id);
        startGame();
    });
    btnNextLesson.addEventListener('click', () => {
        const nextId = activeLesson.id + 1;
        if (nextId <= LESSONS.length) {
            selectLesson(nextId);
            startGame();
        } else {
            selectLesson(1); // 戻る
        }
    });
    btnGoTop.addEventListener('click', () => {
        showScreen('start');
    });

    // キーボードの物理打鍵ハンドラ
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 配列選択の変更イベント
    if (layoutSelect) {
        layoutSelect.addEventListener('change', generateKeyboard);
    }
});

// --- UI操作 ---
function showScreen(screen) {
    screenStart.classList.remove('active');
    screenPlay.classList.remove('active');
    screenResult.classList.remove('active');

    if (screen === 'start') {
        screenStart.classList.add('active');
    } else if (screen === 'play') {
        screenPlay.classList.add('active');
    } else if (screen === 'result') {
        screenResult.classList.add('active');
    }
}

// レッスン選択リスト生成
function generateLessonList() {
    lessonListContainer.innerHTML = '';
    LESSONS.forEach(lesson => {
        const btn = document.createElement('button');
        btn.className = `btn-lesson ${lesson.id === activeLesson.id ? 'active' : ''}`;
        btn.id = `btn-lesson-${lesson.id}`;
        btn.innerHTML = `
            <span class="lesson-num">LESSON 0${lesson.id}</span>
            <span class="lesson-name">${lesson.title.split(': ')[1]}</span>
            <span class="lesson-keys">対象キー: ${lesson.keys}</span>
        `;
        btn.addEventListener('click', () => {
            if (!isPlaying) {
                selectLesson(lesson.id);
            }
        });
        lessonListContainer.appendChild(btn);
    });
}

// レッスン選択
function selectLesson(id) {
    const lesson = LESSONS.find(l => l.id === id);
    if (!lesson) return;
    
    activeLesson = lesson;
    
    // サイドバーのハイライト更新
    document.querySelectorAll('.btn-lesson').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-lesson-${id}`);
    if (activeBtn) activeBtn.classList.add('active');

    // スタート画面のテキスト更新
    startLessonTitle.textContent = lesson.title;
    startLessonDesc.innerHTML = lesson.desc;

    // 次のレッスンボタン制御
    if (id === LESSONS.length) {
        btnNextLesson.textContent = '最初に戻る';
    } else {
        btnNextLesson.textContent = '次のレッスンへ';
    }
}

// キーボードの生成
function generateKeyboard() {
    onishiKeyboard.innerHTML = '';
    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    const isKana = isKanaMode(layout);

    if (isKana) {
        // --- かな系同時打鍵キーボードの生成 ---
        const cleanId = layout.replace('sim-', '').replace('os-', '');
        const kanaLayout = KANA_LAYOUTS[cleanId];
        if (!kanaLayout) return;

        // シフト状態の検出
        const isLeftShiftActive = pressedKeys['IntlMuhenkan'] || pressedKeys['Lang2'] || pressedKeys['Tab'];
        const isRightShiftActive = pressedKeys['IntlHenkan'] || pressedKeys['Lang1'] || pressedKeys['Space'];

        kanaLayout.keys.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'key-row';
            row.forEach(keyInfo => {
                const keyId = `key-${keyInfo.qwerty}`;
                let isHome = keyInfo.home ? 'home-pos' : '';
                
                // シフトキーが押されている間、そのマッピング文字を大きく中央に表示する
                let displayCharBig = keyInfo.normal;
                let activeClass = "";
                
                if (isLeftShiftActive) {
                    displayCharBig = keyInfo.left;
                    activeClass = "shift-left-active";
                } else if (isRightShiftActive) {
                    displayCharBig = keyInfo.right;
                    activeClass = "shift-right-active";
                }

                // サブ文字表示（左シフト文字と右シフト文字を左右下に小さく表示）
                const displayCharSmallLeft = keyInfo.left;
                const displayCharSmallRight = keyInfo.right;

                rowDiv.innerHTML += `
                    <div class="key ${isHome} ${activeClass}" id="${keyId}" data-qwerty="${keyInfo.qwerty}" data-finger="${keyInfo.finger}">
                        <span class="key-char-onishi">${displayCharBig}</span>
                        <div class="key-kana-sub">
                            <span class="sub-left">${displayCharSmallLeft}</span>
                            <span class="sub-right">${displayCharSmallRight}</span>
                        </div>
                    </div>
                `;
            });
            onishiKeyboard.appendChild(rowDiv);
        });
    } else {
        // --- アルファベット系キーボードの生成 ---
        let cleanId = 'qwerty';
        if (layout === 'virtual-onishi' || layout === 'os-onishi') {
            cleanId = 'onishi';
        } else if (layout === 'virtual-eucalyn' || layout === 'os-eucalyn') {
            cleanId = 'eucalyn';
        }
        
        const alphabetLayout = ALPHABET_LAYOUTS[cleanId];
        if (!alphabetLayout) return;

        // QWERTYガイドの表示判定
        const isPracticeQwerty = (layout === 'qwerty' || layout === 'os-qwerty');

        alphabetLayout.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'key-row';
            row.forEach(keyInfo => {
                const keyId = `key-${keyInfo.qwerty}`;
                let isHome = keyInfo.home ? 'home-pos' : '';
                
                let displayCharBig = isPracticeQwerty ? keyInfo.qwerty.toUpperCase() : keyInfo.char.toUpperCase();
                let displayCharSmall = isPracticeQwerty ? '' : keyInfo.qwerty.toUpperCase();
                
                rowDiv.innerHTML += `
                    <div class="key ${isHome}" id="${keyId}" data-qwerty="${keyInfo.qwerty}" data-finger="${keyInfo.finger}">
                        <span class="key-char-onishi">${displayCharBig}</span>
                        <span class="key-char-qwerty">${displayCharSmall}</span>
                    </div>
                `;
            });
            onishiKeyboard.appendChild(rowDiv);
        });
    }
}

// --- タイピングゲーム制御 ---
function startGame() {
    isPlaying = true;
    correctTypes = 0;
    incorrectTypes = 0;
    score = 0;
    currentWordIndex = 0;
    inputBuffer = "";
    romajiPaths = [];
    displayRomaji = "";

    // モード設定
    timerMode = modeSelect.value;

    // 時間設定
    totalTime = parseInt(timeSelect.value);
    timeLeft = totalTime;

    // 1文制限時間UIの表示/非表示
    if (timerMode !== 'total') {
        wordProgressContainer.style.display = 'block';
        wordProgressBar.style.width = '100%';
    } else {
        wordProgressContainer.style.display = 'none';
    }

    // 単語シャッフル & 生成
    targetWords = [...activeLesson.words];
    shuffleArray(targetWords);

    showScreen('play');
    updateStatusBar();
    setupNextWord();

    // タイマースタート (100ms間隔)
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 100);
}

function stopGame() {
    isPlaying = false;
    if (timerInterval) clearInterval(timerInterval);
    clearHighlights();
    showScreen('start');
}

function finishGame() {
    isPlaying = false;
    if (timerInterval) clearInterval(timerInterval);
    clearHighlights();

    // 結果計算
    const accuracy = correctTypes + incorrectTypes > 0 
        ? ((correctTypes / (correctTypes + incorrectTypes)) * 100).toFixed(1)
        : '100.0';

    const duration = totalTime - timeLeft;
    const timeSpentMin = duration > 0 ? duration / 60 : 1/60;
    const kpm = Math.round(correctTypes / timeSpentMin);

    // スコア計算: (正解打鍵数 * 10) - (ミス数 * 5)
    score = Math.max(0, (correctTypes * 10) - (incorrectTypes * 5));

    // ランク判定
    let rank = 'C';
    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    
    // レイアウト名ごとの接頭辞
    const LAYOUT_PREFIXES = {
        'qwerty': 'QWERTY',
        'os-qwerty': 'QWERTY',
        'virtual-onishi': '大西配列',
        'os-onishi': '大西配列',
        'virtual-eucalyn': 'Eucalyn',
        'os-eucalyn': 'Eucalyn',
        'sim-nicola': '親指シフト',
        'os-nicola': '親指シフト',
        'sim-naginata': '薙刀式',
        'os-naginata': '薙刀式',
        'sim-shingeta': '新下駄配列',
        'sim-asuka': '飛鳥配列'
    };
    const prefix = LAYOUT_PREFIXES[layout] || 'タイピング';
    let rankName = `${prefix}のビギナー`;

    // 1分換算の正規化スコアでランク判定
    const timeFactor = totalTime / 60;
    const normalizedScore = score / timeFactor;
    
    if (normalizedScore >= 2000 && accuracy >= 95) {
        rank = 'S';
        rankName = `${prefix}の神`;
    } else if (normalizedScore >= 1200 && accuracy >= 92) {
        rank = 'A';
        rankName = `${prefix}のマスター`;
    } else if (normalizedScore >= 600 && accuracy >= 88) {
        rank = 'B';
        rankName = `${prefix}の修業中`;
    }

    // 結果画面UIの更新
    document.getElementById('result-rank-badge').textContent = rank;
    document.getElementById('result-rank-name').textContent = rankName;
    document.getElementById('res-score').textContent = score.toLocaleString();
    document.getElementById('res-kpm').textContent = kpm;
    document.getElementById('res-accuracy').textContent = accuracy + '%';
    document.getElementById('res-misses').textContent = incorrectTypes;

    // --- 自己ベスト保存とランキング表示 ---
    const recordId = 'rec_' + Date.now();
    const record = {
        id: recordId,
        lessonId: activeLesson.id,
        lessonTitle: activeLesson.title,
        timerMode: timerMode,
        layout: layout, // 配列モードを追加
        score: score,
        kpm: kpm,
        accuracy: parseFloat(accuracy),
        date: new Date().toLocaleString()
    };

    let records = JSON.parse(localStorage.getItem('onishi_typing_records')) || [];
    
    // 同一レッスン・同一モード・同一配列設定の最高スコアを事前に計算
    const previousModeRecords = records.filter(r => 
        r.lessonId === activeLesson.id && 
        r.timerMode === timerMode &&
        (r.layout === layout || (!r.layout && layout === 'virtual-onishi'))
    );
    const previousBest = previousModeRecords.length > 0 
        ? Math.max(...previousModeRecords.map(r => r.score)) 
        : 0;

    // 新しいレコードを追加して保存
    records.push(record);
    try {
        localStorage.setItem('onishi_typing_records', JSON.stringify(records));
    } catch (e) {
        console.error('Failed to save record to localStorage:', e);
    }

    // 自己ベスト更新判定 (過去の最高スコアを上回る、かつスコアが0より大きい)
    const isNewBest = score > previousBest && score > 0;

    if (isNewBest) {
        newRecordBadge.style.display = 'inline-block';
    } else {
        newRecordBadge.style.display = 'none';
    }

    // ランキングの日本語モード名マッピング
    const MODE_NAMES = {
        'total': '全体タイマー',
        'word-soyo': '微風（そよかぜ）',
        'word-nagi': '凪（なぎ）',
        'word-haya': '疾風（はやて）',
        'word-reppu': '烈風（れっぷう）',
        'word-raiko': '雷光（らいこう）'
    };
    const LAYOUT_NAMES = {
        'virtual-onishi': '大西配列(仮想)',
        'os-onishi': '大西配列(OS)',
        'qwerty': '普通配列(QWERTY)',
        'os-qwerty': '普通配列(OS大西)',
        'virtual-eucalyn': 'Eucalyn(仮想)',
        'os-eucalyn': 'Eucalyn(OS)',
        'sim-nicola': '親指シフト(仮想)',
        'os-nicola': '親指シフト(OS)',
        'sim-naginata': '薙刀式(仮想)',
        'os-naginata': '薙刀式(OS)',
        'sim-shingeta': '新下駄配列(仮想)',
        'sim-asuka': '飛鳥配列(仮想)'
    };
    rankingModeName.textContent = `${activeLesson.title} [${LAYOUT_NAMES[layout] || layout} / ${MODE_NAMES[timerMode] || timerMode}]`;

    // 同一レッスン・モード・配列の全記録を抽出し、スコア順にソートしてTOP 5を作成
    const currentModeRecords = records.filter(r => 
        r.lessonId === activeLesson.id && 
        r.timerMode === timerMode &&
        (r.layout === layout || (!r.layout && layout === 'virtual-onishi'))
    );
    const top5 = currentModeRecords.sort((a, b) => b.score - a.score).slice(0, 5);
    
    rankingList.innerHTML = '';
    top5.forEach((rec, idx) => {
        const tr = document.createElement('tr');
        if (rec.id === recordId) {
            tr.className = 'current-play-row';
        }
        
        tr.innerHTML = `
            <td><strong>${idx + 1}位</strong></td>
            <td>${rec.score.toLocaleString()}</td>
            <td>${rec.kpm} KPM</td>
            <td>${rec.accuracy}%</td>
            <td>${rec.date}</td>
        `;
        rankingList.appendChild(tr);
    });

    showScreen('result');
}

// 次のワードの表示設定
function setupNextWord() {
    if (currentWordIndex >= targetWords.length) {
        // 単語リストが終わったら再シャッフルしてループ
        shuffleArray(targetWords);
        currentWordIndex = 0;
    }

    const word = targetWords[currentWordIndex];
    targetJapanese.textContent = word.jp;
    
    // 動的に全ローマ字パターンを生成
    romajiPaths = getRomajiPaths(word.jp);
    
    // デフォルトのローマ字（最初の候補）を選択
    displayRomaji = romajiPaths[0];
    inputBuffer = "";
    
    // 1文制限時間の動的計算
    if (timerMode !== 'total') {
        let timePerChar = 0.4;
        let baseBuffer = 1.0;

        if (timerMode === 'word-soyo') {
            timePerChar = 0.8;
            baseBuffer = 2.0;
        } else if (timerMode === 'word-nagi') {
            timePerChar = 0.6;
            baseBuffer = 1.5;
        } else if (timerMode === 'word-haya') {
            timePerChar = 0.4;
            baseBuffer = 1.0;
        } else if (timerMode === 'word-reppu') {
            timePerChar = 0.25;
            baseBuffer = 0.7;
        } else if (timerMode === 'word-raiko') {
            timePerChar = 0.15;
            baseBuffer = 0.4;
        }

        const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
        const isKana = isKanaMode(layout);
        const charLen = isKana ? word.jp.length : displayRomaji.length;

        wordTimeLimit = (charLen * timePerChar) + baseBuffer;
        wordTimeLeft = wordTimeLimit;
        wordProgressBar.style.width = '100%';
    }
    
    // ローマ字/かなを分割して span 化して描画
    renderRomajiSpans();
    updateHighlights();
}

// ローマ字・かな表示の再描画
function renderRomajiSpans() {
    targetRomaji.innerHTML = '';
    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    const isKana = isKanaMode(layout);
    
    const word = targetWords[currentWordIndex];
    const displayText = isKana ? word.jp : displayRomaji;
    const len = inputBuffer.length;
    
    for (let i = 0; i < displayText.length; i++) {
        const span = document.createElement('span');
        span.textContent = displayText[i];
        
        if (i < len) {
            span.className = 'char-typed';
        } else if (i === len) {
            span.className = 'char-current';
        } else {
            span.className = 'char-remaining';
        }
        
        targetRomaji.appendChild(span);
    }

    // かなモード時の補助情報として、次に打つキーの組み合わせをテキスト表示
    if (isKana && len < displayText.length) {
        showKanaKeyGuide(displayText[len]);
    }
}

// タイミングスタッツのリアルタイム更新
function updateStatusBar() {
    displayScore.textContent = String(score).padStart(4, '0');
    
    const accuracy = correctTypes + incorrectTypes > 0 
        ? Math.round((correctTypes / (correctTypes + incorrectTypes)) * 100)
        : 100;
    displayAccuracy.textContent = accuracy + '%';

    // 残り時間の表示フォーマット (切り上げ表示)
    const displaySeconds = Math.ceil(timeLeft);
    const min = String(Math.floor(displaySeconds / 60)).padStart(2, '0');
    const sec = String(displaySeconds % 60).padStart(2, '0');
    displayTime.textContent = `${min}:${sec}`;

    // プログレスバー
    const pct = (timeLeft / totalTime) * 100;
    timerProgress.style.width = pct + '%';
}

function updateTimer() {
    // 100msごとに呼び出されるため、0.1秒ずつ減算
    timeLeft = Math.max(0, timeLeft - 0.1);
    
    if (timerMode !== 'total') {
        wordTimeLeft = Math.max(0, wordTimeLeft - 0.1);
        
        // 1文制限時間バーの更新
        const wordPct = (wordTimeLeft / wordTimeLimit) * 100;
        wordProgressBar.style.width = wordPct + '%';
        
        // 1文制限時間切れの場合の処理
        if (wordTimeLeft <= 0) {
            const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
            const isKana = isKanaMode(layout);
            const word = targetWords[currentWordIndex];
            const targetLen = isKana ? word.jp.length : displayRomaji.length;
            const unescapedLen = targetLen - inputBuffer.length;
            incorrectTypes += Math.max(1, unescapedLen);
            score = Math.max(0, score - 5); // 1文スキップのペナルティ

            currentWordIndex++;
            setupNextWord();
        }
    }
    
    if (timeLeft <= 0) {
        timeLeft = 0;
        updateStatusBar();
        finishGame();
    } else {
        updateStatusBar();
    }
}

// --- 打鍵イベントハンドラ ---
function handleKeyDown(e) {
    if (!isPlaying) return;
    
    // pressedKeys に登録
    pressedKeys[e.code] = Date.now();

    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    const isThumbKey = ['IntlMuhenkan', 'Lang2', 'Tab', 'IntlHenkan', 'Lang1', 'Space'].includes(e.code);
    if (isThumbKey && isKanaMode(layout)) {
        generateKeyboard();
    }

    // 特殊制御キーは無視
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key === 'Escape') {
        stopGame();
        return;
    }

    // 対象の入力キーを取得 (1文字のみに絞る、ただしかなモード時のスペースキーはシフト専用とするため文字入力としては除外)
    if (e.key.length !== 1) return;
    if (e.key === ' ' && isKanaMode(layout)) return;

    e.preventDefault(); // デフォルトブラウザキーイベント無効化
    
    let typedChar = e.key;

    // キー配列モードに応じて入力を処理
    if (layout === 'virtual-onishi') {
        typedChar = QWERTY_TO_ONISHI[typedChar] || typedChar;
    } else if (layout === 'os-qwerty') {
        typedChar = ONISHI_TO_QWERTY[typedChar] || typedChar;
    } else if (layout === 'virtual-eucalyn') {
        typedChar = QWERTY_TO_EUCALYN[typedChar] || typedChar;
    } else if (layout.startsWith('sim-') && isKanaMode(layout)) {
        typedChar = getTypedKana(e, layout);
    }

    // QWERTY物理キーコードに対応するキーを沈めるアニメーション用
    const qwertyPhysicalKey = e.key.toLowerCase();
    let targetPhysicalId = `key-${qwertyPhysicalKey}`;
    const isPcOnishi = (layout === 'os-onishi' || layout === 'os-qwerty' || layout === 'os-eucalyn' || layout === 'os-nicola' || layout === 'os-naginata');
    if (isPcOnishi) {
        const keyInfo = findKeyInfoByOnishi(e.key) || findKeyInfoByKana(e.key, layout);
        if (keyInfo) targetPhysicalId = `key-${keyInfo.qwerty}`;
    }
    
    const keyEl = document.getElementById(targetPhysicalId);
    if (keyEl) {
        keyEl.classList.add('pressed');
    }

    // 現在打つべきローマ字/かなとパターンを取得
    const word = targetWords[currentWordIndex];
    const isKana = isKanaMode(layout);

    if (isKana) {
        // --- かな配列のタイピング判定 ---
        if (!typedChar) return;
        
        const targetChar = word.jp[inputBuffer.length];
        
        if (typedChar === targetChar) {
            // 正解
            correctTypes++;
            score += 10;
            inputBuffer = inputBuffer + typedChar;
            
            // 単語クリア判定
            if (inputBuffer.length >= word.jp.length) {
                currentWordIndex++;
                renderRomajiSpans(); // 完了状態を描画
                setTimeout(setupNextWord, 50);
            } else {
                renderRomajiSpans();
                updateHighlights();
            }
        } else {
            // ミス
            incorrectTypes++;
            score = Math.max(0, score - 5); // 減点
            
            // 現在の入力箇所をエラー表示にする
            const spans = targetRomaji.querySelectorAll('span');
            const currentSpan = spans[inputBuffer.length];
            if (currentSpan) {
                currentSpan.className = 'char-current char-error';
                setTimeout(() => {
                    if (isPlaying && currentSpan && inputBuffer.length < word.jp.length) {
                        currentSpan.classList.remove('char-error');
                    }
                }, 150);
            }
        }
    } else {
        // --- ローマ字配列のタイピング判定 ---
        const testBuffer = inputBuffer + typedChar.toLowerCase();
        
        // testBuffer がいずれかの romajiPaths のプレフィックスになっているかチェック
        const matchedPath = romajiPaths.find(path => path.toLowerCase().startsWith(testBuffer));
        
        if (matchedPath) {
            // 正解
            correctTypes++;
            score += 10;
            inputBuffer = testBuffer;
            
            // もし現在表示中の displayRomaji が testBuffer に一致しなくなったら、一致する他の候補に切り替える
            if (!displayRomaji.toLowerCase().startsWith(inputBuffer.toLowerCase())) {
                displayRomaji = matchedPath;
            }
            
            // 単語クリア判定
            if (inputBuffer.length >= displayRomaji.length) {
                currentWordIndex++;
                renderRomajiSpans(); // 完了状態を描画
                setTimeout(setupNextWord, 50);
            } else {
                renderRomajiSpans();
                updateHighlights();
            }
        } else {
            // ミス
            incorrectTypes++;
            score = Math.max(0, score - 5); // 減点
            
            // 現在의入力箇所をエラー表示にする
            const spans = targetRomaji.querySelectorAll('span');
            const currentSpan = spans[inputBuffer.length];
            if (currentSpan) {
                currentSpan.className = 'char-current char-error';
                setTimeout(() => {
                    if (isPlaying && currentSpan && inputBuffer.length < displayRomaji.length) {
                        currentSpan.classList.remove('char-error');
                    }
                }, 150);
            }
        }
    }

    updateStatusBar();
}

function handleKeyUp(e) {
    if (!isPlaying) return;
    
    // pressedKeys からキーを削除
    delete pressedKeys[e.code];

    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    const isThumbKey = ['IntlMuhenkan', 'Lang2', 'Tab', 'IntlHenkan', 'Lang1', 'Space'].includes(e.code);
    if (isThumbKey && isKanaMode(layout)) {
        generateKeyboard();
    }
    
    // pressed クラスを除去
    const isPcOnishi = (layout === 'os-onishi' || layout === 'os-qwerty' || layout === 'os-eucalyn' || layout === 'os-nicola' || layout === 'os-naginata');
    let targetPhysicalId = `key-${e.key.toLowerCase()}`;
    if (isPcOnishi) {
        const keyInfo = findKeyInfoByOnishi(e.key);
        if (keyInfo) targetPhysicalId = `key-${keyInfo.qwerty}`;
    }

    const keyEl = document.getElementById(targetPhysicalId);
    if (keyEl) {
        keyEl.classList.remove('pressed');
    }
}

// --- ガイドハイライト制御 ---
function clearHighlights() {
    // すべてのキーボードハイライトを消す
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('highlight-blue', 'highlight-purple');
    });

    // すべての指ガイドハイライトを消す
    document.querySelectorAll('.finger').forEach(finger => {
        finger.classList.remove('active-blue', 'active-purple');
    });
}

function updateHighlights() {
    clearHighlights();

    if (!isPlaying) return;

    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    const isKana = isKanaMode(layout);
    const word = targetWords[currentWordIndex];

    let keyInfo = null;

    if (isKana) {
        // --- かな配列のガイド ---
        const nextChar = word.jp[inputBuffer.length];
        if (!nextChar) return;
        keyInfo = findKeyInfoByKana(nextChar, layout);
    } else {
        // --- アルファベット配列のガイド ---
        const nextChar = displayRomaji[inputBuffer.length]?.toLowerCase();
        if (!nextChar) return;

        const isPracticeQwerty = (layout === 'qwerty' || layout === 'os-qwerty');
        if (isPracticeQwerty) {
            keyInfo = findKeyInfoByQwerty(nextChar);
        } else {
            keyInfo = findKeyInfoByAlphabet(nextChar, layout);
        }
    }

    if (!keyInfo) return;

    // ハイライトするQWERTYキーのID
    const targetKeyId = `key-${keyInfo.qwerty}`;
    const keyEl = document.getElementById(targetKeyId);
    
    // 指に対応したハイライトクラス設定
    const isLeftHand = keyInfo.finger.startsWith('l');
    const colorClass = isLeftHand ? 'blue' : 'purple';

    // キーを光らせる
    if (keyEl) {
        keyEl.classList.add(`highlight-${colorClass}`);
    }

    // 指を光らせる
    const fingerId = `finger-${keyInfo.finger}`;
    const fingerEl = document.getElementById(fingerId);
    if (fingerEl) {
        fingerEl.classList.add(`active-${colorClass}`);
    }
}

// --- ヘルパー関数 ---
function findKeyInfoByQwerty(char) {
    char = char.toLowerCase();
    for (let r = 0; r < KEYBOARD_LAYOUT.length; r++) {
        const row = KEYBOARD_LAYOUT[r];
        for (let k = 0; k < row.length; k++) {
            if (row[k].qwerty === char) {
                return row[k];
            }
        }
    }
    // QWERTY固有の特殊記号対応
    if (char === '-') return { qwerty: '-', finger: 'r5' };
    if (char === ';') return { qwerty: ';', finger: 'r5' };
    if (char === ',') return { qwerty: ',', finger: 'r3' };
    if (char === '.') return { qwerty: '.', finger: 'r4' };
    return null;
}

function findKeyInfoByOnishi(char) {
    char = char.toLowerCase();
    for (let r = 0; r < KEYBOARD_LAYOUT.length; r++) {
        const row = KEYBOARD_LAYOUT[r];
        for (let k = 0; k < row.length; k++) {
            if (row[k].onishi === char) {
                return row[k];
            }
        }
    }
    // 特殊文字の対応
    if (char === '-') return { qwerty: 'g', finger: 'l2' };
    if (char === ';') return { qwerty: 'b', finger: 'l2' };
    return null;
}

// シャッフル用 (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- かな同時打鍵シミュレータ用ヘルパー関数 ---
function getTypedKana(e, layoutId) {
    const cleanId = layoutId.replace('sim-', '').replace('os-', '');
    const layout = KANA_LAYOUTS[cleanId];
    if (!layout) return null;

    const qwertyKey = e.key.toLowerCase();
    
    // QWERTY物理キー情報から該当キーを探す
    let targetKeyInfo = null;
    for (let r = 0; r < layout.keys.length; r++) {
        const row = layout.keys[r];
        const found = row.find(k => k.qwerty === qwertyKey);
        if (found) {
            targetKeyInfo = found;
            break;
        }
    }
    if (!targetKeyInfo) return null;

    // シフトキーの状態をチェック
    // 左親指キー: IntlMuhenkan (Win無変換), Lang2 (Mac英数), Tab (代替)
    const isLeftShiftActive = pressedKeys['IntlMuhenkan'] || pressedKeys['Lang2'] || pressedKeys['Tab'];
    
    // 右親指キー: IntlHenkan (Win変換), Lang1 (Macかな), Space (スペース、薙刀式などで多用)
    const isRightShiftActive = pressedKeys['IntlHenkan'] || pressedKeys['Lang1'] || pressedKeys['Space'];

    if (isLeftShiftActive) {
        return targetKeyInfo.left;
    } else if (isRightShiftActive) {
        return targetKeyInfo.right;
    } else {
        return targetKeyInfo.normal;
    }
}

function findKeyInfoByKana(char, layoutId) {
    const cleanId = layoutId.replace('os-', '').replace('sim-', '');
    const layout = KANA_LAYOUTS[cleanId];
    if (!layout) return null;

    for (let r = 0; r < layout.keys.length; r++) {
        const row = layout.keys[r];
        for (let k = 0; k < row.length; k++) {
            const keyInfo = row[k];
            if (keyInfo.normal === char || keyInfo.left === char || keyInfo.right === char) {
                return keyInfo;
            }
        }
    }
    return null;
}

function showKanaKeyGuide(kanaChar) {
    if (!kanaChar) return;
    
    // ガイド情報の削除（既存のツールチップがあれば消す）
    const oldTooltip = targetRomaji.querySelector('.kana-guide-tooltip');
    if (oldTooltip) oldTooltip.remove();

    const layout = layoutSelect ? layoutSelect.value : 'virtual-onishi';
    const guideText = getKanaKeyGuideText(layout, kanaChar);
    
    const guideDiv = document.createElement('div');
    guideDiv.className = 'kana-guide-tooltip';
    guideDiv.textContent = `ガイド: ${guideText}`;
    targetRomaji.appendChild(guideDiv);
}

function getKanaKeyGuideText(layoutId, char) {
    if (!char) return "";
    const cleanId = layoutId.replace('sim-', '').replace('os-', '');
    const layout = KANA_LAYOUTS[cleanId];
    if (!layout) return "";

    for (let r = 0; r < layout.keys.length; r++) {
        const row = layout.keys[r];
        for (let k = 0; k < row.length; k++) {
            const keyInfo = row[k];
            if (keyInfo.normal === char) {
                return `[${keyInfo.qwerty.toUpperCase()}] キー`;
            } else if (keyInfo.left === char) {
                return `[無変換/英数] ＋ [${keyInfo.qwerty.toUpperCase()}]`;
            } else if (keyInfo.right === char) {
                const shiftKeyName = (cleanId === 'naginata') ? 'スペース' : '変換/かな';
                return `[${shiftKeyName}] ＋ [${keyInfo.qwerty.toUpperCase()}]`;
            }
        }
    }
    return "定義なし";
}

function findKeyInfoByAlphabet(char, layoutId) {
    char = char.toLowerCase();
    let cleanId = 'qwerty';
    if (layoutId.includes('onishi')) cleanId = 'onishi';
    else if (layoutId.includes('eucalyn')) cleanId = 'eucalyn';
    
    const layout = ALPHABET_LAYOUTS[cleanId];
    if (!layout) return null;

    for (let r = 0; r < layout.length; r++) {
        const row = layout[r];
        for (let k = 0; k < row.length; k++) {
            if (row[k].char === char) {
                return row[k];
            }
        }
    }
    // 特殊記号の対応 (QWERTYでの位置)
    if (char === '-') return { qwerty: '-', finger: 'r5' };
    if (char === ';') return { qwerty: ';', finger: 'r5' };
    if (char === ',') return { qwerty: ',', finger: 'r3' };
    if (char === '.') return { qwerty: '.', finger: 'r4' };
    return null;
}
