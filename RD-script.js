function calculate() {
    let numbers = [];
    for (let i = 1; i <= 6; i++) {
        let value = document.getElementById("num" + i).value.trim();
        if (!/^[0-9]$/.test(value)) {
            alert("กรุณากรอกเลข 0-9 ให้ครบทั้ง 6 ช่อง");
            return;
        }
        numbers.push(parseInt(value));
    }
    
    let results = [];
    for (let i = 0; i < 4; i++) {
        let a = (numbers[i] + numbers[i+1]) % 10;
        let b = Math.abs(numbers[i] - numbers[i+1]) % 10;
        let c = (numbers[i] * numbers[i+1] + numbers[i+2]) % 10;
        results.push([a, b, c]);
    }

    let flatResults = results.flat();
    let frequency = {};
    flatResults.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
    
    let sortedResults = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    let mostFrequentThree = sortedResults.slice(0, 3).map(entry => entry[0]);
    let leastFrequentTwo = sortedResults.slice(-2).map(entry => entry[0]);
    let uniqueNumbers = Object.keys(frequency).filter(num => frequency[num] === 1);
    let mostFrequentTwo = sortedResults.slice(0, 2).map(entry => entry[0]);
    
    let resultText = "<h3>ผลลัพธ์</h3>";
    results.forEach((set, index) => {
        resultText += `<p>ชุดที่ ${index + 1}: ${set.join(", ")}</p>`;
    });
    resultText += `<h4>เลขที่ซ้ำมากที่สุด 3 อันดับ: ${mostFrequentThree.join(", ")}</h4>`;
    resultText += `<h4>เลขที่ซ้ำน้อยที่สุด 2 อันดับ: ${leastFrequentTwo.join(", ")}</h4>`;
    resultText += `<h4>เลขที่ไม่ซ้ำเลย: ${uniqueNumbers.join(", ")}</h4>`;
    resultText += `<h4>เลขที่ซ้ำมากที่สุด 2 อันดับ: ${mostFrequentTwo.join(", ")}</h4>`;
    
    document.getElementById("result").innerHTML = resultText;
}

function clearInputs() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("num" + i).value = "";
    }
    document.getElementById("result").innerHTML = "";
}

function moveToNext(event, nextId) {
    if (/^[0-9]$/.test(event.key) && nextId) {
        document.getElementById(nextId).focus();
    }
}


