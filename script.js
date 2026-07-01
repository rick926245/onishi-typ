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
            { jp: "しせい", ro: "sisei" }
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
            { jp: "かんこく", ro: "kankoku" }
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
            { jp: "ぷれぜんと", ro: "purezento" },
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
            { jp: "ろく", ro: "roku" }
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
            { jp: "ばんごう", ro: "bangou" }
        ]
    },
    {
        id: 5,
        title: "レッスン 5: 総合練習（短文）",
        desc: "これまでに学んだすべてのキーを使って、日本語の短い日常文をタイピングします。<br>両手交互打鍵の打ちやすさ、指への負担の少なさを実感してみましょう！",
        keys: "すべてのキー",
        words: [
            { jp: "おーにしはいれつ", ro: "o-nisihairetu" },
            { jp: "こんにちは。", ro: "konnitiha." },
            { jp: "ありがとう。", ro: "arigatou." },
            { jp: "たっちたいぴんぐのれんしゅう。", ro: "tattitaipingunorensyuu." },
            { jp: "きょうはいいおてんきですね。", ro: "kyouhaiiotenkidesune." },
            { jp: "ごはんをたべます。", ro: "gohannotabemasu." },
            { jp: "ぱそこんをつかう。", ro: "pasokonwocukau." },
            { jp: "にほんごがすきです。", ro: "nihongogasukidesu." }
        ]
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
                const nextChar = hiragana[i + 1];
                const nextCandidates = ROMAJI_MAP[nextChar];
                if (nextCandidates && nextCandidates.length > 0) {
                    candidates = nextCandidates.map(c => c[0] + c);
                    matchedLen = 2;
                }
            }
        }
        
        // 1文字の判定
        if (matchedLen === 0) {
            const oneChar = hiragana[i];
            candidates = ROMAJI_MAP[oneChar] || [oneChar];
            matchedLen = 1;
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

// 複数パターン判定用の変数
let inputBuffer = "";
let romajiPaths = [];
let displayRomaji = "";

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

const inputModeToggle = document.getElementById('input-mode-toggle');
const timeSelect = document.getElementById('time-select');

// --- 初期化処理 ---
window.addEventListener('DOMContentLoaded', () => {
    generateLessonList();
    generateKeyboard();
    selectLesson(1); // デフォルトでレッスン1を選択

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
    KEYBOARD_LAYOUT.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'key-row';
        row.forEach(keyInfo => {
            // QWERTY文字に対応したIDを付与
            const keyId = `key-${keyInfo.qwerty}`;
            
            let isHome = keyInfo.home ? 'home-pos' : '';
            
            rowDiv.innerHTML += `
                <div class="key ${isHome}" id="${keyId}" data-onishi="${keyInfo.onishi}" data-qwerty="${keyInfo.qwerty}" data-finger="${keyInfo.finger}">
                    <span class="key-char-onishi">${keyInfo.onishi.toUpperCase()}</span>
                    <span class="key-char-qwerty">${keyInfo.qwerty.toUpperCase()}</span>
                </div>
            `;
        });
        onishiKeyboard.appendChild(rowDiv);
    });
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

    // 時間設定
    totalTime = parseInt(timeSelect.value);
    timeLeft = totalTime;

    // 単語シャッフル & 生成
    targetWords = [...activeLesson.words];
    shuffleArray(targetWords);

    showScreen('play');
    updateStatusBar();
    setupNextWord();

    // タイマースタート
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
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
    let rankName = '大西配列のビギナー';
    
    if (score >= 2000 && accuracy >= 95) {
        rank = 'S';
        rankName = '大西配列の神';
    } else if (score >= 1200 && accuracy >= 92) {
        rank = 'A';
        rankName = '大西配列のマスター';
    } else if (score >= 600 && accuracy >= 88) {
        rank = 'B';
        rankName = '大西配列の修業中';
    }

    // 結果画面UIの更新
    document.getElementById('result-rank-badge').textContent = rank;
    document.getElementById('result-rank-name').textContent = rankName;
    document.getElementById('res-score').textContent = score.toLocaleString();
    document.getElementById('res-kpm').textContent = kpm;
    document.getElementById('res-accuracy').textContent = accuracy + '%';
    document.getElementById('res-misses').textContent = incorrectTypes;

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
    
    // ローマ字を分割して span 化して描画
    renderRomajiSpans();
    updateHighlights();
}

// ローマ字表示の再描画
function renderRomajiSpans() {
    targetRomaji.innerHTML = '';
    const len = inputBuffer.length;
    
    for (let i = 0; i < displayRomaji.length; i++) {
        const span = document.createElement('span');
        span.textContent = displayRomaji[i];
        
        if (i < len) {
            span.className = 'char-typed';
        } else if (i === len) {
            span.className = 'char-current';
        } else {
            span.className = 'char-remaining';
        }
        
        targetRomaji.appendChild(span);
    }
}

// タイミングスタッツのリアルタイム更新
function updateStatusBar() {
    displayScore.textContent = String(score).padStart(4, '0');
    
    const accuracy = correctTypes + incorrectTypes > 0 
        ? Math.round((correctTypes / (correctTypes + incorrectTypes)) * 100)
        : 100;
    displayAccuracy.textContent = accuracy + '%';

    // 残り時間の表示フォーマット
    const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const sec = String(timeLeft % 60).padStart(2, '0');
    displayTime.textContent = `${min}:${sec}`;

    // プログレスバー
    const pct = (timeLeft / totalTime) * 100;
    timerProgress.style.width = pct + '%';
}

function updateTimer() {
    timeLeft--;
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
    
    // 特殊制御キーは無視
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key === 'Escape') {
        stopGame();
        return;
    }

    // 対象の入力キーを取得 (1文字のみに絞る)
    if (e.key.length !== 1) return;

    e.preventDefault(); // デフォルトブラウザキーイベント無効化
    
    let typedChar = e.key;

    // 仮想大西配列モードがONの場合、QWERTY物理入力を大西仮想キーにマッピング
    const virtualModeOn = inputModeToggle.checked;
    if (virtualModeOn) {
        typedChar = QWERTY_TO_ONISHI[typedChar] || typedChar;
    }

    // QWERTY物理キーコードに対応するキーを沈めるアニメーション用
    const qwertyPhysicalKey = e.key.toLowerCase();
    let targetPhysicalId = `key-${qwertyPhysicalKey}`;
    if (!virtualModeOn) {
        const keyInfo = findKeyInfoByOnishi(typedChar);
        if (keyInfo) targetPhysicalId = `key-${keyInfo.qwerty}`;
    }
    
    const keyEl = document.getElementById(targetPhysicalId);
    if (keyEl) {
        keyEl.classList.add('pressed');
    }

    // 現在打つべきローマ字とパターンを取得
    const word = targetWords[currentWordIndex];
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
        
        // 現在の入力箇所をエラー表示にする
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

    updateStatusBar();
}

function handleKeyUp(e) {
    if (!isPlaying) return;
    
    // pressed クラスを除去
    const virtualModeOn = inputModeToggle.checked;
    let targetPhysicalId = `key-${e.key.toLowerCase()}`;
    if (!virtualModeOn) {
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

    // 次に入力すべき文字を取得
    const nextChar = displayRomaji[inputBuffer.length]?.toLowerCase();
    if (!nextChar) return;

    // 入力文字に対応する大西キー情報を取得
    const keyInfo = findKeyInfoByOnishi(nextChar);
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
