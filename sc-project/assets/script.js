var solution = {
    1: "median",
    2: "kms",
}

$("#submit").click(function () {

    let n_questions = Object.keys(solution).length
    let correct_answers = 0

    // For each question
    for (let q = 1; q <= n_questions; q++) {

        let answers = $(`input[name='answers${q}']`)
        let n_answers = answers.length

        // For each answer
        for (let a = 0; a < n_answers; a++) {

            if (answers[a].value === solution[q] && answers[a].checked){
                $(`label[for="${answers[a].id}"]`).css("background-color","lightgreen");
                correct_answers += 1
            } else if (answers[a].value === solution[q]) {
                $(`label[for="${answers[a].id}"]`).css("background-color","#FFCCCB");
            } 
        }
    }

    $(`<div id="result" class="alert alert-info mt-2 inline" role="alert">${correct_answers}/${n_questions} questions justes !</div>`).insertAfter("#submit")

});