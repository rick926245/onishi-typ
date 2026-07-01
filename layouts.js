// ==========================================
// ONISHI TYPING PRO - Keyboard Layouts Database
// ==========================================

// --- アルファベット系配列のレイアウト定義 ---
const ALPHABET_LAYOUTS = {
    'qwerty': [
        [
            { char: 'q', qwerty: 'q', finger: 'l5' },
            { char: 'w', qwerty: 'w', finger: 'l4' },
            { char: 'e', qwerty: 'e', finger: 'l3' },
            { char: 'r', qwerty: 'r', finger: 'l2' },
            { char: 't', qwerty: 't', finger: 'l2' },
            { char: 'y', qwerty: 'y', finger: 'r2' },
            { char: 'u', qwerty: 'u', finger: 'r2' },
            { char: 'i', qwerty: 'i', finger: 'r3' },
            { char: 'o', qwerty: 'o', finger: 'r4' },
            { char: 'p', qwerty: 'p', finger: 'r5' }
        ],
        [
            { char: 'a', qwerty: 'a', finger: 'l5', home: true },
            { char: 's', qwerty: 's', finger: 'l4', home: true },
            { char: 'd', qwerty: 'd', finger: 'l3', home: true },
            { char: 'f', qwerty: 'f', finger: 'l2', home: true },
            { char: 'g', qwerty: 'g', finger: 'l2' },
            { char: 'h', qwerty: 'h', finger: 'r2' },
            { char: 'j', qwerty: 'j', finger: 'r2', home: true },
            { char: 'k', qwerty: 'k', finger: 'r3', home: true },
            { char: 'l', qwerty: 'l', finger: 'r4', home: true },
            { char: ';', qwerty: ';', finger: 'r5', home: true }
        ],
        [
            { char: 'z', qwerty: 'z', finger: 'l5' },
            { char: 'x', qwerty: 'x', finger: 'l4' },
            { char: 'c', qwerty: 'c', finger: 'l3' },
            { char: 'v', qwerty: 'v', finger: 'l2' },
            { char: 'b', qwerty: 'b', finger: 'l2' },
            { char: 'n', qwerty: 'n', finger: 'r2' },
            { char: 'm', qwerty: 'm', finger: 'r2' },
            { char: ',', qwerty: ',', finger: 'r3' },
            { char: '.', qwerty: '.', finger: 'r4' },
            { char: '/', qwerty: '/', finger: 'r5' }
        ]
    ],
    'onishi': [
        [
            { char: 'q', qwerty: 'q', finger: 'l5' },
            { char: 'l', qwerty: 'w', finger: 'l4' },
            { char: 'u', qwerty: 'e', finger: 'l3' },
            { char: ',', qwerty: 'r', finger: 'l2' },
            { char: '.', qwerty: 't', finger: 'l2' },
            { char: 'f', qwerty: 'y', finger: 'r2' },
            { char: 'w', qwerty: 'u', finger: 'r2' },
            { char: 'r', qwerty: 'i', finger: 'r3' },
            { char: 'y', qwerty: 'o', finger: 'r4' },
            { char: 'p', qwerty: 'p', finger: 'r5' }
        ],
        [
            { char: 'e', qwerty: 'a', finger: 'l5', home: true },
            { char: 'i', qwerty: 's', finger: 'l4', home: true },
            { char: 'a', qwerty: 'd', finger: 'l3', home: true },
            { char: 'o', qwerty: 'f', finger: 'l2', home: true },
            { char: '-', qwerty: 'g', finger: 'l2' },
            { char: 'k', qwerty: 'h', finger: 'r2' },
            { char: 't', qwerty: 'j', finger: 'r2', home: true },
            { char: 'n', qwerty: 'k', finger: 'r3', home: true },
            { char: 's', qwerty: 'l', finger: 'r4', home: true },
            { char: 'h', qwerty: ';', finger: 'r5', home: true }
        ],
        [
            { char: 'z', qwerty: 'z', finger: 'l5' },
            { char: 'x', qwerty: 'x', finger: 'l4' },
            { char: 'c', qwerty: 'c', finger: 'l3' },
            { char: 'v', qwerty: 'v', finger: 'l2' },
            { char: ';', qwerty: 'b', finger: 'l2' },
            { char: 'g', qwerty: 'n', finger: 'r2' },
            { char: 'd', qwerty: 'm', finger: 'r2' },
            { char: 'm', qwerty: ',', finger: 'r3' },
            { char: 'j', qwerty: '.', finger: 'r4' },
            { char: 'b', qwerty: '/', finger: 'r5' }
        ]
    ],
    'eucalyn': [
        [
            { char: 'q', qwerty: 'q', finger: 'l5' },
            { char: 'w', qwerty: 'w', finger: 'l4' },
            { char: ',', qwerty: 'e', finger: 'l3' },
            { char: '.', qwerty: 'r', finger: 'l2' },
            { char: 'p', qwerty: 't', finger: 'l2' },
            { char: 'f', qwerty: 'y', finger: 'r2' },
            { char: 'm', qwerty: 'u', finger: 'r2' },
            { char: 'g', qwerty: 'i', finger: 'r3' },
            { char: 'y', qwerty: 'o', finger: 'r4' },
            { char: 'b', qwerty: 'p', finger: 'r5' }
        ],
        [
            { char: 'a', qwerty: 'a', finger: 'l5', home: true },
            { char: 'o', qwerty: 's', finger: 'l4', home: true },
            { char: 'e', qwerty: 'd', finger: 'l3', home: true },
            { char: 'i', qwerty: 'f', finger: 'l2', home: true },
            { char: 'u', qwerty: 'g', finger: 'l2' },
            { char: 'd', qwerty: 'h', finger: 'r2' },
            { char: 'h', qwerty: 'j', finger: 'r2', home: true },
            { char: 't', qwerty: 'k', finger: 'r3', home: true },
            { char: 'n', qwerty: 'l', finger: 'r4', home: true },
            { char: 's', qwerty: ';', finger: 'r5', home: true }
        ],
        [
            { char: 'z', qwerty: 'z', finger: 'l5' },
            { char: 'x', qwerty: 'x', finger: 'l4' },
            { char: 'c', qwerty: 'c', finger: 'l3' },
            { char: 'v', qwerty: 'v', finger: 'l2' },
            { char: ';', qwerty: 'b', finger: 'l2' },
            { char: 'k', qwerty: 'n', finger: 'r2' },
            { char: 'r', qwerty: 'm', finger: 'r2' },
            { char: 'l', qwerty: ',', finger: 'r3' },
            { char: 'j', qwerty: '.', finger: 'r4' },
            { char: '-', qwerty: '/', finger: 'r5' }
        ]
    ]
};

// --- かな系同時打鍵配列のレイアウト定義 ---
const KANA_LAYOUTS = {
    // 親指シフト (NICOLA)
    'nicola': {
        name: '親指シフト (NICOLA)',
        keys: [
            [
                { qwerty: 'q', normal: '。', left: 'ぁ', right: '（', finger: 'l5' },
                { qwerty: 'w', normal: 'か', left: 'え', right: 'が', finger: 'l4' },
                { qwerty: 'e', normal: 'た', left: 'り', right: 'だ', finger: 'l3' },
                { qwerty: 'r', normal: 'こ', left: 'ゃ', right: 'ご', finger: 'l2' },
                { qwerty: 't', normal: 'さ', left: 'れ', right: 'ざ', finger: 'l2' },
                { qwerty: 'y', normal: 'ら', left: 'ぱ', right: 'ぇ', finger: 'r2' },
                { qwerty: 'u', normal: 'ち', left: 'ぢ', right: 'ゃ', finger: 'r2' },
                { qwerty: 'i', normal: 'く', left: 'ぐ', right: 'ゅ', finger: 'r3' },
                { qwerty: 'o', normal: 'つ', left: 'づ', right: 'ょ', finger: 'r4' },
                { qwerty: 'p', normal: '，', left: 'ぴ', right: '゛', finger: 'r5' },
                { qwerty: '@', normal: '、', left: '＠', right: '゜', finger: 'r5' }
            ],
            [
                { qwerty: 'a', normal: 'う', left: 'を', right: 'ぁ', finger: 'l5', home: true },
                { qwerty: 's', normal: 'し', left: 'あ', right: 'じ', finger: 'l4', home: true },
                { qwerty: 'd', normal: 'て', left: 'な', right: 'で', finger: 'l3', home: true },
                { qwerty: 'f', normal: 'け', left: 'ゅ', right: 'げ', finger: 'l2', home: true },
                { qwerty: 'g', normal: 'せ', left: 'も', right: 'ぜ', finger: 'l2' },
                { qwerty: 'h', normal: 'は', left: 'ば', right: 'よ', finger: 'r2' },
                { qwerty: 'j', normal: 'と', left: 'ど', right: 'に', finger: 'r2', home: true },
                { qwerty: 'k', normal: 'き', left: 'ぎ', right: 'る', finger: 'r3', home: true },
                { qwerty: 'l', normal: 'い', left: 'ぽ', right: 'ま', finger: 'r4', home: true },
                { qwerty: ';', normal: 'ん', left: '；', right: 'ぇ', finger: 'r5', home: true },
                { qwerty: ':', normal: '：', left: '：', right: '＝', finger: 'r5', home: true }
            ],
            [
                { qwerty: 'z', normal: '．', left: 'ぅ', right: 'っ', finger: 'l5' },
                { qwerty: 'x', normal: 'ひ', left: 'ー', right: 'び', finger: 'l4' },
                { qwerty: 'c', normal: 'す', left: 'ろ', right: 'ず', finger: 'l3' },
                { qwerty: 'v', normal: 'ふ', left: 'や', right: 'ぶ', finger: 'l2' },
                { qwerty: 'b', normal: 'へ', left: 'ぃ', right: 'べ', finger: 'l2' },
                { qwerty: 'n', normal: 'め', left: 'ぷ', right: 'ぬ', finger: 'r2' },
                { qwerty: 'm', normal: 'そ', left: 'ぞ', right: 'ゆ', finger: 'r2' },
                { qwerty: ',', normal: 'ね', left: 'ぺ', right: 'む', finger: 'r3' },
                { qwerty: '.', normal: 'ほ', left: 'ぼ', right: 'わ', finger: 'r4' },
                { qwerty: '/', normal: '・', left: '、', right: 'ぉ', finger: 'r5' }
            ]
        ]
    },
    // 薙刀式 (Naginata v15ベース)
    'naginata': {
        name: '薙刀式',
        keys: [
            [
                { qwerty: 'q', normal: '（', left: '（', right: '（', finger: 'l5' },
                { qwerty: 'w', normal: 'て', left: 'で', right: 'て', finger: 'l4' },
                { qwerty: 'e', normal: 'け', left: 'げ', right: 'け', finger: 'l3' },
                { qwerty: 'r', normal: 'せ', left: 'ぜ', right: 'せ', finger: 'l2' },
                { qwerty: 't', normal: 'は', left: 'ば', right: 'ぱ', finger: 'l2' },
                { qwerty: 'y', normal: 'ら', left: 'ぱ', right: 'ら', finger: 'r2' },
                { qwerty: 'u', normal: 'の', left: 'の', right: 'の', finger: 'r2' },
                { qwerty: 'i', normal: 'く', left: 'く', right: 'ぐ', finger: 'r3' },
                { qwerty: 'o', normal: 'つ', left: 'つ', right: 'づ', finger: 'r4' },
                { qwerty: 'p', normal: '，', left: '，', right: '，', finger: 'r5' }
            ],
            [
                { qwerty: 'a', normal: 'し', left: 'じ', right: 'し', finger: 'l5', home: true },
                { qwerty: 's', normal: 'と', left: 'ど', right: 'と', finger: 'l4', home: true },
                { qwerty: 'd', normal: 'た', left: 'だ', right: 'た', finger: 'l3', home: true },
                { qwerty: 'f', normal: 'か', left: 'が', right: 'か', finger: 'l2', home: true },
                { qwerty: 'g', normal: 'ん', left: 'ん', right: 'ん', finger: 'l2' },
                { qwerty: 'h', normal: 'は', left: 'ば', right: 'ぱ', finger: 'r2' },
                { qwerty: 'j', normal: 'に', left: 'に', right: 'ぢ', finger: 'r2', home: true },
                { qwerty: 'k', normal: 'い', left: 'い', right: 'い', finger: 'r3', home: true },
                { qwerty: 'l', normal: 'る', left: 'る', right: 'る', finger: 'r4', home: true },
                { qwerty: ';', normal: '、', left: '、', right: '、', finger: 'r5', home: true }
            ],
            [
                { qwerty: 'z', normal: 'つ', left: 'づ', right: 'つ', finger: 'l5' },
                { qwerty: 'x', normal: 'さ', left: 'ざ', right: 'さ', finger: 'l4' },
                { qwerty: 'c', normal: 'う', left: 'う', right: 'う', finger: 'l3' },
                { qwerty: 'v', normal: 'ひ', left: 'び', right: 'ひ', finger: 'l2' },
                { qwerty: 'b', normal: 'す', left: 'ず', right: 'す', finger: 'l2' },
                { qwerty: 'n', normal: 'む', left: 'む', right: 'む', finger: 'r2' },
                { qwerty: 'm', normal: 'め', left: 'め', right: 'め', finger: 'r2' },
                { qwerty: ',', normal: 'そ', left: 'そ', right: 'ぞ', finger: 'r3' },
                { qwerty: '.', normal: 'ね', left: 'ね', right: 'ね', finger: 'r4' },
                { qwerty: '/', normal: 'ほ', left: 'ほ', right: 'ぼ', finger: 'r5' }
            ]
        ]
    },
    // 新下駄配列 (中中/薬薬同時押し等をベースに親指シフト風にマッピングを整理)
    'shingeta': {
        name: '新下駄配列',
        keys: [
            [
                { qwerty: 'q', normal: '、', left: 'ゐ', right: 'ゑ', finger: 'l5' },
                { qwerty: 'w', normal: 'た', left: 'だ', right: 'え', finger: 'l4' },
                { qwerty: 'e', normal: 'こ', left: 'ご', right: 'り', finger: 'l3' },
                { qwerty: 'r', normal: 'さ', left: 'ざ', right: 'れ', finger: 'l2' },
                { qwerty: 't', normal: 'ら', left: 'ら', right: 'よ', finger: 'l2' },
                { qwerty: 'y', normal: 'ん', left: 'ゃ', right: 'ぱ', finger: 'r2' },
                { qwerty: 'u', normal: 'い', left: 'い', right: 'ゅ', finger: 'r2' },
                { qwerty: 'i', normal: 'う', left: 'う', right: 'ょ', finger: 'r3' },
                { qwerty: 'o', normal: 'の', left: 'の', right: 'を', finger: 'r4' },
                { qwerty: 'p', normal: 'お', left: 'お', right: 'ぉ', finger: 'r5' }
            ],
            [
                { qwerty: 'a', normal: 'る', left: 'る', right: 'を', finger: 'l5', home: true },
                { qwerty: 's', normal: 'し', left: 'じ', right: 'あ', finger: 'l4', home: true },
                { qwerty: 'd', normal: 'て', left: 'で', right: 'な', finger: 'l3', home: true },
                { qwerty: 'f', normal: 'け', left: 'げ', right: 'ょ', finger: 'l2', home: true },
                { qwerty: 'g', normal: 'せ', left: 'ぜ', right: 'ぇ', finger: 'l2' },
                { qwerty: 'h', normal: 'く', left: 'ぐ', right: 'は', finger: 'r2' },
                { qwerty: 'j', normal: 'つ', left: 'づ', right: 'に', finger: 'r2', home: true },
                { qwerty: 'k', normal: 'か', left: 'が', right: 'る', finger: 'r3', home: true },
                { qwerty: 'l', normal: 'な', left: 'な', right: 'ま', finger: 'r4', home: true },
                { qwerty: ';', normal: 'と', left: 'ど', right: 'わ', finger: 'r5', home: true }
            ],
            [
                { qwerty: 'z', normal: '？', left: '？', right: '！', finger: 'l5' },
                { qwerty: 'x', normal: 'ひ', left: 'び', right: 'お', finger: 'l4' },
                { qwerty: 'c', normal: 'す', left: 'ず', right: 'む', finger: 'l3' },
                { qwerty: 'v', normal: 'は', left: 'ば', right: 'わ', finger: 'l2' },
                { qwerty: 'b', normal: 'き', left: 'ぎ', right: 'ょ', finger: 'l2' },
                { qwerty: 'n', normal: 'っ', left: 'っ', right: 'ぬ', finger: 'r2' },
                { qwerty: 'm', normal: 'に', left: 'に', right: 'ゆ', finger: 'r2' },
                { qwerty: ',', normal: 'ち', left: 'ぢ', right: 'む', finger: 'r3' },
                { qwerty: '.', normal: 'ら', left: 'ら', right: 'わ', finger: 'r4' },
                { qwerty: '/', normal: '・', left: '、', right: 'ぉ', finger: 'r5' }
            ]
        ]
    },
    // 飛鳥配列 (左右親指シフトによるかな配列)
    'asuka': {
        name: '飛鳥配列',
        keys: [
            [
                { qwerty: 'q', normal: '、', left: 'ぁ', right: '（', finger: 'l5' },
                { qwerty: 'w', normal: 'て', left: 'で', right: 'え', finger: 'l4' },
                { qwerty: 'e', normal: 'た', left: 'だ', right: 'り', finger: 'l3' },
                { qwerty: 'r', normal: 'こ', left: 'ご', right: 'ゃ', finger: 'l2' },
                { qwerty: 't', normal: 'さ', left: 'ざ', right: 'れ', finger: 'l2' },
                { qwerty: 'y', normal: 'よ', left: 'ょ', right: 'ぱ', finger: 'r2' },
                { qwerty: 'u', normal: 'に', left: 'に', right: 'り', finger: 'r2' },
                { qwerty: 'i', normal: 'る', left: 'る', right: 'る', finger: 'r3' },
                { qwerty: 'o', normal: 'ま', left: 'ま', right: 'み', finger: 'r4' },
                { qwerty: 'p', normal: 'え', left: 'ぇ', right: 'ぴ', finger: 'r5' }
            ],
            [
                { qwerty: 'a', normal: 'う', left: 'を', right: 'お', finger: 'l5', home: true },
                { qwerty: 's', normal: 'し', left: 'じ', right: 'あ', finger: 'l4', home: true },
                { qwerty: 'd', normal: 'け', left: 'げ', right: 'な', finger: 'l3', home: true },
                { qwerty: 'f', normal: 'は', left: 'ば', right: 'の', finger: 'l2', home: true },
                { qwerty: 'g', normal: 'せ', left: 'ぜ', right: 'も', finger: 'l2' },
                { qwerty: 'h', normal: 'ら', left: 'ら', right: 'よ', finger: 'r2' },
                { qwerty: 'j', normal: 'と', left: 'ど', right: 'に', finger: 'r2', home: true },
                { qwerty: 'k', normal: 'き', left: 'ぎ', right: 'る', finger: 'r3', home: true },
                { qwerty: 'l', normal: 'い', left: 'い', right: 'ま', finger: 'r4', home: true },
                { qwerty: ';', normal: 'ん', left: 'ん', right: 'む', finger: 'r5', home: true }
            ],
            [
                { qwerty: 'z', normal: 'ー', left: 'ぅ', right: 'っ', finger: 'l5' },
                { qwerty: 'x', normal: 'ひ', left: 'び', right: 'お', finger: 'l4' },
                { qwerty: 'c', normal: 'す', left: 'ず', right: 'む', finger: 'l3' },
                { qwerty: 'v', normal: 'ふ', left: 'ぶ', right: 'わ', finger: 'l2' },
                { qwerty: 'b', normal: 'ゆ', left: 'ゆ', right: 'ゆ', finger: 'l2' },
                { qwerty: 'n', normal: 'め', left: 'め', right: 'ぬ', finger: 'r2' },
                { qwerty: 'm', normal: 'そ', left: 'ぞ', right: 'ゆ', finger: 'r2' },
                { qwerty: ',', normal: 'ね', left: 'ね', right: 'む', finger: 'r3' },
                { qwerty: '.', normal: 'ほ', left: 'ぼ', right: 'わ', finger: 'r4' },
                { qwerty: '/', normal: '・', left: '、', right: 'ぉ', finger: 'r5' }
            ]
        ]
    }
};
