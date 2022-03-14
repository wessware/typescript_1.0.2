import React from 'react'

type Props = {
    question: number;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    questionNr: number;
    totalQuestions: number;
}

const QuestionPart: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
<div>
<p className="number">
    Question: {questionNr} / {totalQuestions}
</p>
<p dangerouslySetInnerHTML={{ _html: question }}/>
    <div>
        {answers.map(answer => (
            <div>
                <button disabled={userAnswer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
            </div>
        ))}
    </div>
</div>

);
export default  QuestionPart;