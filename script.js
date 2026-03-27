document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-links');
    const dateElement = document.getElementById('date');
    const opening = document.getElementById('sh1'); // 這裡抓取 sh1

    // 1. 先處理漢堡選單 (確保每一頁都能用)
    burger.onclick = function() {
        nav.classList.toggle('active');
        burger.classList.toggle('open');
        console.log("選單狀態已切換");
    };

    // 2. 更新年份
    dateElement.textContent = new Date().getFullYear();

    // 3. 【關鍵修正】：只有在「有 sh1 的頁面」才執行閃爍邏輯
    if (opening) {
        opening.innerText = "Welcome";
        opening.style.color = "white";
        opening.style.fontSize = '10vw';
        opening.style.textAlign = 'center';
        opening.style.marginTop = '-20px';  

        let timer = setInterval(function() {
            if (opening.style.visibility === 'hidden') {
                opening.style.visibility = 'visible';
            } else {
                opening.style.visibility = 'hidden';
            }
        }, 500); 

        opening.addEventListener('mousedown', function() {
            if (timer) {
                clearInterval(timer);
                timer = null;
                opening.style.visibility = 'visible';
            } else {
                timer = setInterval(function() {
                    if (opening.style.visibility === 'hidden') {
                        opening.style.visibility = 'visible';
                    } else {
                        opening.style.visibility = 'hidden';
                    }
                }, 500);
            }
        });
    }
});
    