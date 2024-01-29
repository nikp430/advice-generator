// Get all the elements


const dice = document.querySelector('.dice');
const adviceNum = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');

const getAdvice = () => {
    const req = new XMLHttpRequest();
    const src = `https://api.adviceslip.com/advice?timestamp=${Date.now()}`;

    req.addEventListener('readystatechange', () => {
        // console.log(req);

        if (req.readyState === 4 && req.status === 200) {

            const res = JSON.parse(req.response);
            console.log(res);
            console.log(res.slip.id);
            
            adviceNum.textContent = `Advice #${res.slip.id}`;
            advice.textContent = `"${res.slip.advice}"`;
            
        } else if (req.readyState === 4) {
            console.log('Could not get the Data');
        }
        
    });

    req.open('Get', src);
    req.send();

}

dice.addEventListener('click', () => {
    getAdvice();
});

// dice.addEventListener('click', getAdvice);
