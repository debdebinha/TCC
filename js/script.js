var respostaSelecionada;

function enviaResposta(pergunta) {


    /* Validade se o usuário selecinou alguma opção */
    if (respostaSelecionada == undefined) {
        alert('Seleciona um opção ai bocó');
    } else {
        var inc = 0;
        var questao;
        var is_acertou;

        /* Percorre as alternativas */
        do {
            inc = inc + 1;
            questao = document.querySelector('#r-' + pergunta + '-' + inc).value;

            console.log(respostaSelecionada + ' - ' + questao);
            if (questao == 'correta') {
                respostaSelecionada == inc ? is_acertou = true : is_acertou = false;

            }
        } while (inc < 5);


        /* Mostrar mensagens de acerto/erro de questão */

        if (is_acertou) {
            document.querySelector('.a' + pergunta).style.display = 'block'; /*MOSTRAR*/
            document.querySelector('.e' + pergunta).style.display = 'none';  /*ESCONDE ISSO */
        } else {
            document.querySelector('.a' + pergunta).style.display = 'none';
            document.querySelector('.e' + pergunta).style.cssText = 'border: solid rgb(255, 18, 18) 1px;';
            document.querySelector('.e' + pergunta).style.display = 'block';
        }
    }
}

function testaQuestao(resposta) {

    /* Salva alternativa que o usuário selecionou na variável  (respostaSelecionada) */
    respostaSelecionada = resposta;
    const radioInputs = document.querySelectorAll('input[type="radio"]');


    /* Lógica pra marcar e desmarcar as opções */
    radioInputs.forEach(input => {
        input.addEventListener('click', function () {
            // Desmarca todos os outros inputs
            radioInputs.forEach(otherInput => {
                if (otherInput !== this) {
                    otherInput.checked = false;
                }
            });
        });
    });

}