var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+233544655999'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+233554765383</label></div> </a> <a href='mailto:wwanyizah@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> "
+ "<a target='_blank' href='https://github.com/WittyMA'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a>"
+ "<a target='_blank' href='https://wa.me/0554765383'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> "
+ "<a target='_blank' href='http://t.me/YesulikplimIT'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> "
+ "<a target='_blank' href='https://www.instagram.com/wwkanyizah?igsh=MTg1dWZpd2VmZ2N5ag=='> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> "
+ "<a href='https://www.linkedin.com/in/wwkanyizah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a>"
+ "<a href='https://www.facebook.com/profile.php?id=100012773225511&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/facebook1.svg' alt='' height = 35 width = 35></div> </a>"
+ "<a target='_blank' href='https://join.skype.com/invite/KCwOdjnpRV7f'> <div class='socialItem'><img class='socialItemI' src='images/skype.svg' alt='' height = 35 width = 35></div> </a></div>";
var resumeString = "<img src='images/wittyResume.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Wisdom Korbla Anyizah.pdf</label></div><a href='assets/WisdomAnyizahCV.pdf' download='Wisdom_Korbla_Anyizah_CV.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12633.232618839484!2d0.4671891822206894!3d7.527095156889897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1027cf331ba38069%3A0xc5d0a0f26e538fec!2sKadjebi!5e0!3m2!1sen!2sgh!4v1719080202872!5m2!1sen!2sgh' class='map'></iframe></div><label class='add'><address><br>Kadjebi<br>Oti Region, P. O. Box, Kadjebi-Akan, Ghana </address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello director 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Wisdom Korbla Anyizah</a>.</span><br><br>I am an Information Technology student at <span class='bold'>Unversity of Cape Coast 👨🏻‍💻📚</span><br><br>I am zealous to hear about potential career opportunities, so I would be pleased to chat about job openings in the technological field.<br><br>Send <span class='bold' id='hi'>'hi'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "hi":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site<br><span class='bold'>'home'</span> - to send you back to the homepage</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing BSc. degree in Information Technology.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>Python<br>Kotlin<br>Dart<br>SQL<br>JavaScript(ReatJS & NodeJS)<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Ubuntu & Parrot Linux OS</span> as daily driver on my Dell PC<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing BSc. degree in Information Technology from University of Cape Coast<br>Passing Year : 2023<br><br>I have completed my Diploma in driving<br>Passing Year:2019<br><br>I have completed my senior high school from local school known as KASEC<br>Passing Year:2018");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻☕ This portfolio website is built using HTML, CSS, jquery and JavaScript!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/wwkanyizah?igsh=MTg1dWZpd2VmZ2N5ag=='><span class='bold'>Wisdom K. Anyizah</a> with ❤️☕</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/WittyMA'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        case "bye":
            sendTextMessage("Byee! 👋🏻👋🏻<br>Nice to meet you at any of my contacts.<br><br>Send <span class='bold' id='hi'>'hi'</span> to start...");
            break;
        case "thank":
        sendTextMessage("You are welcome! 🤝<br>Nice to meet you at any of my contacts.🫂<br><br>Send <span class='bold' id='hi'>'hi'</span> to start...");
        break;
        case "home":
            window.location.href = '../index.html';
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>I only understand these keywords: ⮷ <br>【 intro, hi, resume, skills, education, address, clear, about, contact, projects, new, bye, thank, home 】<br><br>Send <span class='bold' id='hi'>'hi'</span> to know more about Mr. Anyizah.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Combining these fields enables the development of sophisticated applications that can analyze vast amounts of data, learn from it, and make intelligent decisions. For instance, a software engineer with knowledge in AI and ML can build robust, scalable applications that incorporate advanced data analysis and predictive capabilities, contributing significantly to fields like healthcare, finance, and technology.";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
