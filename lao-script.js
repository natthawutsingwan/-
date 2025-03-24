document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("lottery-input");
    const checkButton = document.getElementById("check-button");
    const resultBox = document.getElementById("lottery-result");

    // Validate input to allow only numbers
    inputField.addEventListener("input", function () {
        validateNumber(this);
    });

    // Check lottery number when button is clicked
    checkButton.addEventListener("click", function () {
        checkLottery();
    });

    function validateNumber(input) {
        input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
    }

    function checkLottery() {
        const prizes = {
            // First prize (6 digits)
            "757563": "🎉 ยินดีด้วย! คุณถูกรางวัลที่ 1 รับ 6,000,000 บาท!",

            // Adjacent to first prize (6 digits)
            "757562": "🎉 ยินดีด้วย! คุณถูกรางวัลข้างเคียงรางวัลที่ 1 รับ 100,000 บาท!",
            "757564": "🎉 ยินดีด้วย! คุณถูกรางวัลข้างเคียงรางวัลที่ 1 รับ 100,000 บาท!",

            // Second prize (6 digits)
            "989893": "🎉 ยินดีด้วย! คุณถูกรางวัลที่ 2 รับ 200,000 บาท!",
            "041134": "🎉 ยินดีด้วย! คุณถูกรางวัลที่ 2 รับ 200,000 บาท!",
            "465815": "🎉 ยินดีด้วย! คุณถูกรางวัลที่ 2 รับ 200,000 บาท!",
            "875925": "🎉 ยินดีด้วย! คุณถูกรางวัลที่ 2 รับ 200,000 บาท!",
            "748827": "🎉 ยินดีด้วย! คุณถูกรางวัลที่ 2 รับ 200,000 บาท!",

            // Three-digit front numbers (3 digits)
            "595": "🎉 ยินดีด้วย! คุณถูกรางวัลเลขหน้า 3 ตัว รับ 4,000 บาท!",
            "927": "🎉 ยินดีด้วย! คุณถูกรางวัลเลขหน้า 3 ตัว รับ 4,000 บาท!",

            // Three-digit back numbers (3 digits)
            "457": "🎉 ยินดีด้วย! คุณถูกรางวัลเลขท้าย 3 ตัว รับ 4,000 บาท!",
            "309": "🎉 ยินดีด้วย! คุณถูกรางวัลเลขท้าย 3 ตัว รับ 4,000 บาท!",

            // Two-digit back numbers (2 digits)
            "32": "🎉 ยินดีด้วย! คุณถูกรางวัลเลขท้าย 2 ตัว รับ 2,000 บาท!",

            };

        const userNumber = inputField.value.trim();

        // Validate input length
        if (userNumber === "") {
            resultBox.innerHTML = "⚠ กรุณากรอกหมายเลขสลาก";
            resultBox.style.color = "orange";
            return;
        }

        if (userNumber.length !== 6) {
            resultBox.innerHTML = "⚠ หมายเลขสลากต้องมีความยาว 6 หลักเท่านั้น";
            resultBox.style.color = "red";
            return;
        }

        // Array to store all matching results
        const matchedResults = [];

        // Check for exact match (big prizes - 6 digits)
        if (prizes[userNumber]) {
            resultBox.innerHTML = prizes[userNumber];
            resultBox.style.color = "green";
            return;
        }

        // Check for front 3 digits (3 digits)
        const front3Digits = userNumber.slice(0, 3); // Extract the first 3 digits
        if (prizes[front3Digits]) {
            matchedResults.push(prizes[front3Digits]);
        }

        // Check for back 3 digits (3 digits)
        const back3Digits = userNumber.slice(-3); // Extract the last 3 digits
        if (prizes[back3Digits]) {
            matchedResults.push(prizes[back3Digits]);
        }

        // Check for back 2 digits (2 digits)
        const back2Digits = userNumber.slice(-2); // Extract the last 2 digits
        if (prizes[back2Digits]) {
            matchedResults.push(prizes[back2Digits]);
        }

        // Display results
        if (matchedResults.length > 0) {
            resultBox.innerHTML = matchedResults.join("<br>");
            resultBox.style.color = "green";
        } else {
            resultBox.innerHTML = "❌ เสียใจด้วย! หมายเลขนี้ไม่ถูกรางวัล";
            resultBox.style.color = "red";
        }
    }
});