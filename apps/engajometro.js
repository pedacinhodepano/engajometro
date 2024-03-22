function engajometro() {
    const like = document.getElementById('like').value ? parseInt(document.getElementById('like').value) : false;
    const fieldLike = document.getElementById('like');
    const comments = document.getElementById('comments').value ? parseInt(document.getElementById('comments').value) : false;
    const fieldComments = document.getElementById('comments');
    const send = document.getElementById('send').value ? parseInt(document.getElementById('send').value) : false ;
    const fieldsend = document.getElementById('send');
    const saved = document.getElementById('saved').value ? parseInt(document.getElementById('saved').value) : false;
    const fieldSaved = document.getElementById('saved');
    const peopleReached = document.getElementById('peopleReached').value ? parseInt(document.getElementById('peopleReached').value) : false; 
    const fieldPeopleReached = document.getElementById('peopleReached');

    const errorMessages = [];
    
    function addError(field, message) {
        errorMessages.push(`${field}: ${message}`);
    }

    function highlightErrorField(field) {
        field.style.border = "1px solid red";
    }

    function removeErrorHighlight(field) {
        field.style.border = "1px solid #ced4da";
    }

    function clearErrors() {
        errorMessages.length = 0;
        removeErrorHighlight(fieldLike);
        removeErrorHighlight(fieldComments);
        removeErrorHighlight(fieldsend);
        removeErrorHighlight(fieldSaved);
        removeErrorHighlight(fieldPeopleReached);
    }clearErrors()

    if (!like || like == false || isNaN(like) || typeof like === 'string') {
        addError("Curtidas", "Por favor, preencha este campo de forma correta, somente numeros!");
        highlightErrorField(fieldLike);
    } else {
        removeErrorHighlight(fieldLike);
    }


    if (!comments || comments == false || isNaN(comments) || typeof comments === 'string') {
        addError("Cometários", "Por favor, preencha este campo de forma correta, somente numeros!");
        highlightErrorField(fieldComments);
    } else {
        removeErrorHighlight(fieldComments);
    }

    if (!send || send == false || isNaN(send) || typeof send === 'string') {
        addError("Enviu", "Por favor, preencha este campo de forma correta, somente numeros!");
        highlightErrorField(fieldsend);
    } else {
        removeErrorHighlight(fieldsend);
    }
   
    if (!saved || saved == false || isNaN(saved) || typeof saved === 'string') {
        addError("Salvos", "Por favor, preencha este campo de forma correta, somente numeros!");
        highlightErrorField(fieldSaved);
    } else {
        removeErrorHighlight(fieldSaved);
    }


    if (!peopleReached || peopleReached == false || isNaN(peopleReached) || typeof peopleReached === 'string') {
        addError("Pessoas Alcançadas", "Por favor, preencha este campo de forma correta, somente numeros!");
        highlightErrorField(fieldPeopleReached);
    } else {
        removeErrorHighlight(fieldPeopleReached);
    }

    if (peopleReached == 0) {
        addError("Pessoas Alcançadas", "Por favor, preencha este campo com numero maior que 0");
        highlightErrorField(fieldPeopleReached);
    } else {
        removeErrorHighlight(fieldPeopleReached);
    }
    
    if (errorMessages.length > 0) {
        Swal.fire({
            title: 'Corrija os seguintes campos:',
            text: errorMessages.join("\n"),
            icon: 'error'
        });
        return;
    }
 
    const result = parseFloat(((like + comments + saved + send)/peopleReached)*100).toFixed(2); 

    if (result >= 1 && result <= 5.99) {
        var text = `<div class="d-flex align-items-center p-4" style="background:grey">
                        <h2 class="p-0 mt-2 mr-2" style="color:white">Resultado:</h2>
                        <h1 class="p-0 m-0" style="text-align:center"><strong id="resultValue" style="color:white">${result.replace('.',',')}%</strong> 🤯</h1>
                    </div>
                    <hr>
                    <h5>Orientações:</h5>
                    <p><strong>A taxa de 1% a 5% são consideradas boas 👏,</strong> em outras palavras, isso significa que seu conteúdo é envolvente 👍, variando dentro dessa estimativa o tipo de perfil, exemplo disso é o perfil de pessoas mais famosas que costumam chegar a 5% ou mais.</p>
                    <p>Muitos lugares por aí usam uma fórmula para calcular a taxa de engajamento baseado no número dos seguidores, porém nós do <strong>Pedacinho de Pano</strong> discordamos desse ponto pois sabemos que os algoritmos não entregam massivamente o seu conteúdo para as pessoas que te seguem, o que torna o resultado menos preciso.</p>
                    <p>A fórmula que usamos é baseada no número de pessoas alcançadas pela publicação, pois representa o número de pessoas que tiveram acesso ao seu conteúdo, tornando o cálculo mais próximo da realidade.</p>
                    <small><strong>No entanto, apesar de ser possível alcançar taxas maiores que 5% é comum ter uma frequência menor que 1%, e manter essa variação vai depender das suas estratégias na criação de conteúdo.😎</strong></small>
                    `;
    } else if (result > 5.99) {
        var text = `<div class="d-flex align-items-center p-4" style="background:grey">
                        <h2 class="p-0 mt-2 mr-2" style="color:white">Resultado:</h2>
                        <h1 class="p-0 m-0" style="text-align:center"><strong id="resultValue" style="color:white">${result.replace('.',',')}%</strong> 🚀</h1>
                    </div>
                    <hr>
                    <h5>Orientações:</h5>
                    <p><strong>As taxas maiores que 6% são consideradas excelentes 🎉,</strong>  isso quer dizer que se não foi um golpe de sorte, você entende e domina as regras de como funciona a criação de conteúdo envolvente, que prende e diz o que as pessoas tem que fazer 🎯.</p>
                    <p>A grande sacada para quem está navegando por essas taxas é sempre ficar de olho no comportamento humano e no algoritmo, pois o que hoje está em alta amanhã não está mais e saber ler isso de sua audiência faz toda a diferença! 🕵</p>
                    <p>Parabéns, continue nesse caminho!!!🥳</p>
                    <small><strong>A  fórmula que usamos é baseada no número de pessoas alcançadas pela publicação, pois representa o número de pessoas que tiveram acesso ao seu conteúdo ao invés de basearmos no número de seguidores, tornando o cálculo mais próximo da realidade.</strong></small>
                    `;
    } else {
        var text = `<div class="d-flex align-items-center p-4" style="background:grey">
                         <h2 class="p-0 mt-2 mr-2" style="color:white">Resultado:</h2>
                         <h1 class="p-0 m-0" style="text-align:center"><strong id="resultValue" style="color:white">${result.replace('.',',')}%</strong> 😭</h1>
                     </div>
                     <hr>
                     <h5>Orientações:</h5>
                     <p><strong>As taxas menores que 1% são consideradas ruins 😰</strong>  em outras palavras, seu conteúdo não vai ser entregue para mais pessoas de maneira orgânica pelo algoritmo📱.</p>
                     <p>Isso acontece devido a forma como o conteúdo foi criado, e para resolver esse problema e se tornar relevante é necessário entender como funcionam as regras desse jogo, basicamente seu conteúdo tem que ser capaz de manter as pessoas dentro da rede social, existem vários métodos que se seguido vão fazer seus conteúdos ter mais engajamento.📊</p>
                     <p>Não desista dessa jornada, pois o criador de conteúdo de sucesso de hoje foi iniciante no passado⛹️‍♀️.</p>
                     <small><strong>Nós do Pedacinho de Pano usamos como base o número de pessoas alcançadas pela publicação, muitos lugares por aí usam uma fórmula para calcular a taxa de engajamento baseado no número dos seguidores e isso torna o cálculo menos próximo da realidade.</strong></small>
                     `;
    }
    // Exibe o resultado no elemento de resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `${text}`;
}

