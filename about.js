document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector(".about-text");

    const textToType = [
        "Hi, I'm Chidera Chinemelum Achu, a <strong>full-stack web developer</strong> based in Northern Cyprus ",
        "<br>",
        "I am a driven and adaptable 3rd-year information technology student with a strong passion for web development.",
        "<br>",
        "My journey into web development began with mastering the essentials: HTML,C++,java, CSS,php, and JavaScript.",
        "<br>",
        "Aspiring to be a <strong>full-stack web developer</strong>.", 
        "<br>",
        "My academic journey includes a focus on cyber security, a field I'm passionate about. ",
        "<br>",
        "While I don't have work experience in the industry just yet, I'm actively studying cyber security as part of my coursework, demonstrating my commitment to building a strong foundation in this critical aspect of technology.",
        "<br>",
        "My proactive approach to learning and my academic focus in cyber security make me a promising candidate for future opportunities in the field.",
        "<br>",
        "What truly sets me apart is my unique blend of technical acumen and a deep passion for creating exceptional web solutions.",
        "<br>",
        "My ultimate goal as a web developer is to exceed client expectations, building websites that not only meet your objectives but also drive results.",
        "<br>",
        "If you're a forward-thinking company seeking a <em>dedicated and innovative web developer</em> to enhance your online presence, I'm here to deliver.",
        "<br>",
        "Welcome to my portfolio, where <strong>innovation meets excellence</strong>, and where I'm ready to embark on the next exciting project with you."
    ];

    let paragraphIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (paragraphIndex < textToType.length) {
            const paragraph = textToType[paragraphIndex];
            const char = paragraph.charAt(charIndex);

            if (char === '<') {
                // Handle HTML tags
                let tag = '';
                while (paragraph.charAt(charIndex) !== '>') {
                    tag += paragraph.charAt(charIndex);
                    charIndex++;
                }
                tag += '>';
                aboutText.innerHTML += tag;
            } else {
                aboutText.innerHTML += char;
            }

            charIndex++;

            if (charIndex >= paragraph.length) {
                // Move to the next paragraph
                paragraphIndex++;
                charIndex = 0;
            }

            setTimeout(typeText, 30); // Typing speed (adjust as needed)
        }
    }

    typeText();
});