let raw_chars = [char_a, 
                'b', 
                'c', 
                'd', 
                'e', 
                'f', 
                'g', 
                'h', 
                'i', 
                'j', 
                'k', 
                'l', 
                'm', 
                'n', 
                'o', 
                'p', 
                'q', 
                'r', 
                's', 
                't', 
                'u', 
                'v',
                'w',
                'x',
                'y',
                'z',
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '.',
                ',',
                ':',
                '?',
                '=',
                '-',
                '(',
                ')',
                '\"',
                '\''
            ];

const char_a = "•-";
const char_b = "-•••";
const char_c = "-•-•";
const char_d = "-••";
const char_e = "•";
const char_f = "••-•";
const char_g = "--•";
const char_h = "••••";
const char_i = "••";
const char_j = "•---";
const char_k = "-•-";
const char_l = "•-••";
const char_m = "--";
const char_n = "-•";
const char_o = "---";
const char_p = "•--•";
const char_q = "--•-";
const char_r = "•-•";
const char_s = "•••";
const char_t = "-";
const char_u = "••-";
const char_v = "•••-";
const char_w = "•--";
const char_x = "-••-";
const char_y = "-•--";
const char_z = "--••";

const char_0 = "-----";
const char_1 = "•----";
const char_2 = "••---";
const char_3 = "•••--";
const char_4 = "••••-";
const char_5 = "•••••";
const char_6 = "-••••";
const char_7 = "--•••";
const char_8 = "---••";
const char_9 = "----•";

//.
const char_dot = "-----";
//,
const char_comma = "•----";
//;
const char_ddot = "••---";
//?
const char_qm = "•••--";
//=
const char_eq = "••••-";
//-
const char_line = "•••••";
//(
const char_lp = "-••••";
//)
const char_rp = "--•••";
//"
const char_dq = "---••";
//'
const char_sq = "----•";

let morse_chars = [char_a, 
                char_b, 
                char_c, 
                char_d, 
                char_e, 
                char_f, 
                char_g, 
                char_h, 
                char_i, 
                char_j, 
                char_k, 
                char_l, 
                char_m, 
                char_n, 
                char_o, 
                char_p, 
                char_q, 
                char_r, 
                char_s, 
                char_t, 
                char_u, 
                char_v,
                char_w,
                char_x,
                char_y,
                char_z,
                char_0,
                char_1,
                char_2,
                char_3,
                char_4,
                char_5,
                char_6,
                char_7,
                char_8,
                char_9,
                char_dot,
                char_comma,
                char_ddot,
                char_qm,
                char_eq,
                char_line,
                char_lp,
                char_rp,
                char_dq,
                char_sq
            ];

document.getElementById("raw-text").addEventListener("keyup", toMorse);

function toMorse() {
    const raw_txt = document.getElementById("raw-text").innerHTML;

    let morse_txt = "";

    raw_txt.forEach(c => {
        morse_txt += morse_chars[raw_chars.indexOf(c)];
    });

    console.log(morse_txt);

    document.getElementById("morse-text").innerHTML = morse_txt;

    return 0;

}