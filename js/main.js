'use strict';

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const run = document.getElementById('run');
const reset = document.getElementById('reset');
const issueNum = document.getElementById('issue-number');
const orderWin = document.getElementById('order-target');
const messageWin = document.querySelector('.message-window > p');

const codeWinVia = document.querySelector('.code-window > textarea');
let codeWin;
let issueId = 0;

function Init() {
    //textareaの内容をcodemirrorにfromTextAreaで転記し、評価時にtoTextAreaでtextareaに返す
    codeWinVia.value = issues[issueId].code;
    codeWin = CodeMirror.fromTextArea(codeWinVia, {
        mode: 'javascript',
        autofocus: true,
        lineNumbers: true,
        indentUnit: 4,
        indentWithTabs: true,
    });
    issueNum.textContent = `問題 ${issueId + 1}/${issues.length}`;
    try {
        messageWin.textContent = eval(codeWinVia.value);
    } catch (e) {
        orderWin.textContent = `「${e.toString()}」を解消し、「${issues[issueId].goal}」を表示してみましょう。`;
    }
    messageWin.textContent = 'ここに実行結果が表示されます。'
}

Init();

run.addEventListener('click', () => {
    run.blur();
    codeWin.toTextArea();
    try {
        messageWin.innerHTML = `結果は「${eval(codeWinVia.value)}」です。<br />`;
        if(eval(codeWinVia.value) === issues[issueId].goal){
            messageWin.innerHTML += `OKです。`;
        } else {
            messageWin.innerHTML += `NGです。`;
        }
    } catch (e) {
        messageWin.innerHTML = `「${e.toString()}」です。<br />NGです。`;
    }
    codeWin = CodeMirror.fromTextArea(codeWinVia, {
        mode: 'javascript',
        autofocus: true,
        lineNumbers: true,
        indentUnit: 4,
        indentWithTabs: true,
    });
});

reset.addEventListener('click', () => {
    reset.blur();
    if(!confirm('本当にリセットしますか？')){
        return
    }
    codeWin.toTextArea();
    Init();
});

prev.addEventListener('click', () => {
    prev.blur();

    if (issueId === 0) {
        return;
    }
    issueId--;
    codeWin.toTextArea();
    Init();
});

next.addEventListener('click', () => {
    next.blur();
    if (issueId === issues.length - 1) {
        return;
    }
    issueId++;
    codeWin.toTextArea();
    Init();
});