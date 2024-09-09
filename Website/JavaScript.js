
//Function which runs when submit clicked on Registration form.
function submitregform(){
    alert("Thank you for Registering to TechCon 2023.\nYou will recieve an email shortly with more information");
}

//Function which runs when submit clicked on Contact form.
function submitcontactform(){
    alert("We have recieved your query and will reply soon");
}

//Function which replaces empty table in schedule html with a filled table in response to a day selected
function scheduleshow(){
    var daynumber = document.getElementById('day').value;
    var changeelement = document.getElementById('schedule');

    //Day 1 
    if (daynumber == 'day1'){
        changeelement.innerHTML = "<table class=\"schedule\"><tr><th>Day</th><th>Time</th><th>Duration</th><th>Event</th><th>Speaker</th></tr>"+
        "<tr><td>1</td><td>09:00-10:00</td><td>1 hour</td><td>Welcome To TechCon</td><td>Elon Musk</td></tr>"+
        "<tr><td>1</td><td>10:00-10:30</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>1</td><td>10:30-12:30</td><td>2 hours</td><td>Careers Fair with Employability Tips</td><td>Richard Branson</td></tr>" +
        "<tr><td>1</td><td>12:30-13:00</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>1</td><td>13:00-14:00</td><td>1 hour</td><td>How to make games progressively better</td><td>Bobby Kotick</td></tr>" +
        "<tr><td>1</td><td>14:00-15:00</td><td>1 hour</td><td>Hackathon Sponsored by Apple</td><td>Tim Cook</td></tr>" +
        "<tr><td>1</td><td>15:00-15:30</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>1</td><td>15:30-16:00</td><td>30 mins</td><td>New AI technology showcase</td><td>Elon Musk</td></tr>" +
        "<tr><td>1</td><td>16:00-17:00</td><td>1 hour</td><td>Day 1 Round up</td><td>Richard Branson</td></tr></table>";
    }

    //Day 2
    else if (daynumber == 'day2') {
        changeelement.innerHTML = "<table class=\"schedule\"><tr><th>Day</th><th>Time</th><th>Duration</th><th>Event</th><th>Speaker</th></tr>" +
        "<tr><td>2</td><td>09:00-09:30</td><td>30 mins</td><td>Welcome To TechCon Day 2</td><td>Jeff Bezos</td></tr>" +
        "<tr><td>2</td><td>09:30-10:30</td><td>1 hour</td><td>Advancements in Tech in Formula 1</td><td>Adrian Newey</td></tr>" +
        "<tr><td>2</td><td>10:30-11:30</td><td>1 hour</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>2</td><td>11:30-13:30</td><td>2 hours</td><td>Interactive VR experience</td><td>Mark Zuckerberg</td></tr>" +
        "<tr><td>2</td><td>13:30-14:00</td><td>30 mins</td><td>Advancements in PC Tech Q&A</td><td>Lisa Su</td></tr>" +
        "<tr><td>2</td><td>14:00-14:30</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>2</td><td>14:30-15:30</td><td>1 hour</td><td>How to make technology sustainable</td><td>Jeff Bezos</td></tr>" +
        "<tr><td>2</td><td>15:30-16:00</td><td>30 mins</td><td>Hackathon Sponsored by Microsoft</td><td>Bill Gates</td></tr>" +
        "<tr><td>2</td><td>16:00-17:00</td><td>1 hour</td><td>Day 2 Round up</td><td>Lisa Su</td></tr></table>";
    }

    //Day 3
    else if (daynumber == 'day3') {
        changeelement.innerHTML = "<table class=\"schedule\"><tr><th>Day</th><th>Time</th><th>Duration</th><th>Event</th><th>Speaker</th></tr>" +
        "<tr><td>3</td><td>09:00-10:30</td><td>1 hour 30 mins</td><td>Welcome To TechCon Day 3</td><td>Mark Zuckerberg</td></tr>" +
        "<tr><td>3</td><td>10:30-11:30</td><td>1 hour</td><td>The future of Mobile Phones</td><td>Tim Cook</td></tr>" +
        "<tr><td>3</td><td>11:30-12:30</td><td>1 hour</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>3</td><td>12:30-13:00</td><td>30 mins</td><td>Electric Cars Q&A</td><td>Elon Musk</td></tr>" +
        "<tr><td>3</td><td>13:00-14:00</td><td>1 hour</td><td>How technology can help Low Income Countries</td><td>Bill Gates</td></tr>" +
        "<tr><td>3</td><td>14:00-14:30</td><td>30 mins</td><td>Day 3 Round Up</td><td>All</td></tr>" +
        "<tr><td>3</td><td>14:30-15:00</td><td>30 mins</td><td>Farewells and Thank You statements</td><td>All</td></tr></table>";
    }

    //All days
    else{
        changeelement.innerHTML = "<table class=\"schedule\"><tr><th>Day</th><th>Time</th><th>Duration</th><th>Event</th><th>Speaker</th></tr>" +
        "<tr><td>1</td><td>09:00-10:00</td><td>1 hour</td><td>Welcome To TechCon</td><td>Elon Musk</td></tr>" +
        "<tr><td>1</td><td>10:00-10:30</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>1</td><td>10:30-12:30</td><td>2 hours</td><td>Careers Fair with Employability Tips</td><td>Richard Branson</td></tr>" +
        "<tr><td>1</td><td>12:30-13:00</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>1</td><td>13:00-14:00</td><td>1 hour</td><td>How to make games progressively worse</td><td>Bobby Kotick</td></tr>" +
        "<tr><td>1</td><td>14:00-15:00</td><td>1 hour</td><td>Hackathon Sponsored by Apple</td><td>Tim Cook</td></tr>" +
        "<tr><td>1</td><td>15:00-15:30</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>1</td><td>15:30-16:00</td><td>30 mins</td><td>New AI technology showcase</td><td>Elon Musk</td></tr>" +
        "<tr><td>1</td><td>16:00-17:00</td><td>1 hour</td><td>Day 1 Round up</td><td>Richard Branson</td></tr>"+
        "<tr><td>2</td><td>09:00-09:30</td><td>30 mins</td><td>Welcome To TechCon Day 2</td><td>Jeff Bezos</td></tr>" +
        "<tr><td>2</td><td>09:30-10:30</td><td>1 hour</td><td>Advancements in Tech in Formula 1</td><td>Adrian Newey</td></tr>" +
        "<tr><td>2</td><td>10:30-11:30</td><td>1 hour</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>2</td><td>11:30-13:30</td><td>2 hours</td><td>Interactive VR experience</td><td>Mark Zuckerberg</td></tr>" +
        "<tr><td>2</td><td>13:30-14:00</td><td>30 mins</td><td>Advancements in PC Tech Q&A</td><td>Lisa Su</td></tr>" +
        "<tr><td>2</td><td>14:00-14:30</td><td>30 mins</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>2</td><td>14:30-15:30</td><td>1 hour</td><td>How to make technology sustainable</td><td>Jeff Bezos</td></tr>" +
        "<tr><td>2</td><td>15:30-16:00</td><td>30 mins</td><td>Hackathon Sponsored by Microsoft</td><td>Bill Gates</td></tr>" +
        "<tr><td>2</td><td>16:00-17:00</td><td>1 hour</td><td>Day 2 Round up</td><td>Lisa Su</td></tr>"+
        "<tr><td>3</td><td>09:00-10:30</td><td>1 hour 30 mins</td><td>Welcome To TechCon Day 3</td><td>Mark Zuckerberg</td></tr>" +
        "<tr><td>3</td><td>10:30-11:30</td><td>1 hour</td><td>The future of Mobile Phones</td><td>Tim Cook</td></tr>" +
        "<tr><td>3</td><td>11:30-12:30</td><td>1 hour</td><td>Break</td><td>N/A</td></tr>" +
        "<tr><td>3</td><td>12:30-13:00</td><td>30 mins</td><td>Electric Cars Q&A</td><td>Elon Musk</td></tr>" +
        "<tr><td>3</td><td>13:00-14:00</td><td>1 hour</td><td>How technology can help Low Income Countries</td><td>Bill Gates</td></tr>" +
        "<tr><td>3</td><td>14:00-14:30</td><td>30 mins</td><td>Day 3 Round Up</td><td>All</td></tr>" +
        "<tr><td>3</td><td>14:30-15:00</td><td>30 mins</td><td>Farewells and Thank You statements</td><td>All</td></tr></table>";
    }
    
}