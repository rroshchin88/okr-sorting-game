document.addEventListener('DOMContentLoaded', () => {
    const modeKRButton = document.getElementById('modeKR');
    const modeObjectiveButton = document.getElementById('modeObjective');
    const gameArea = document.getElementById('gameArea');
    const checkButton = document.getElementById('checkButton');

    modeKRButton.addEventListener('click', () => setupGame('KR'));
    modeObjectiveButton.addEventListener('click', () => setupGame('Objective'));

    function setupGame(mode) {
        gameArea.innerHTML = ''; // Clear game area
        let content;

        if (mode === 'KR') {
            content = '<p>Objective: Collaborating neurology teams treat strokes more efficiently.</p>';
            content += '<div class="sortable">X% decrease in morbidity rate.</div>';
            content += '<div class="sortable">X% decrease in time from door to treatment.</div>';
            content += '<div class="sortable">X% increase in patients seen during viable “treatment window.”</div>';
            content += '<div class="sortable">X% decrease in 30-day stroke patient mortality.</div>';
        } else {
            content = '<p>Key Results:</p>';
            content += '<ul>';
            content += '<li>X% decrease in morbidity rate.</li>';
            content += '<li>X% decrease in time from door to treatment.</li>';
            content += '<li>X% increase in patients seen during viable “treatment window.”</li>';
            content += '<li>X% decrease in 30-day stroke patient mortality.</li>';
            content += '</ul>';
            content += '<div class="sortable">Collaborating</div>';
            content += '<div class="sortable">neurology</div>';
            content += '<div class="sortable">teams</div>';
            content += '<div class="sortable">treat</div>';
            content += '<div class="sortable">strokes</div>';
            content += '<div class="sortable">more</div>';
            content += '<div class="sortable">efficiently.</div>';
        }

        gameArea.innerHTML = content;
    }

    // Placeholder for check answer logic
    checkButton.addEventListener('click', checkAnswer);

    function checkAnswer() {
        alert('Answer checking not implemented yet.');
    }
});