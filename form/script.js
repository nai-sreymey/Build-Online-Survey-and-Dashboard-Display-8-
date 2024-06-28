document.forms[0].addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    // let from = document.getElementById("from").value;
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let grade = document.querySelector('input[name="grade"]:checked').value;
    let place = document.querySelector('input[name="learning_place"]:checked').value;
    let otherLearningPlace = document.getElementById("otherLearningPlace").value;

    let peerInteraction1 = [];
    let peerInteraction1checkbox= document.querySelectorAll('input[name="peerInteraction1"]:checked');
    for(let i =0 ; i< peerInteraction1checkbox.length; i++){
        peerInteraction1.push(peerInteraction1checkbox[i].value);
    }

    let flexRadioDefault1 = document.querySelector('input[name="webDevExperience"]:checked').value;
    let describe = document.getElementById("experienceDescription").value;

    let interests = [];
    let checkboxes = document.querySelectorAll('input[name="interests"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        interests.push(checkboxes[i].value);
    }
    let other = document.getElementById("other").value;

    let activePedagogy = document.querySelector('input[name="activePedagogy"]:checked').value;
    let activePedagogyDescription = document.getElementById("activePedagogyDescription").value;
    let activePedagogyActivity = document.querySelector('input[name="activePedagogyActivity"]:checked').value;
    let activePedagogyActivityDescription = document.getElementById("activePedagogyActivityDescription").value;

    let learningPreferences = [];
    let learningPreferencesCheckboxes = document.querySelectorAll('input[name="learningPreferences"]:checked');
    for (let i = 0; i < learningPreferencesCheckboxes.length; i++) {
        learningPreferences.push(learningPreferencesCheckboxes[i].value);
    }
    let otherLearningPreference = document.getElementById("otherLearningPreferenceText").value;

    let learningEnvironment = [];
    let learningEnvironmentCheckboxes = document.querySelectorAll('input[name="learningEnvironment"]:checked');
    for (let i = 0; i < learningEnvironmentCheckboxes.length; i++) {
        learningEnvironment.push(learningEnvironmentCheckboxes[i].value);
    }
    let otherEnvironment = document.getElementById("otherEnvironmentText").value;

    let peerInteraction = [];
    let peerInteractionCheckboxes = document.querySelectorAll('input[name="peerInteraction"]:checked');
    for(let i = 0 ; i<peerInteractionCheckboxes.length;i++){
        peerInteraction.push(peerInteractionCheckboxes[i].value);
    }

    let feedbackSupport = [];
    let feedbackSupportcheckboxes= document.querySelectorAll('input[name="feedbackSupport"]:checked');
    for(let i=0 ; i<feedbackSupportcheckboxes.length; i++){
        feedbackSupport.push(feedbackSupportcheckboxes[i].value);
    }


   
    let goals = [];
    let goalsCheckboxes = document.querySelectorAll('input[name="goals"]:checked');
    for (let i = 0; i < goalsCheckboxes.length; i++) {
        goals.push(goalsCheckboxes[i].value);
    }
    let otherGoal = document.getElementById("otherGoalText").value;
    let webDevFuture = document.getElementById("webDevFuture").value;
    let webDevTopics = document.getElementById("webDevTopics").value;

  
    let trainingSuggestions = document.getElementById("trainingSuggestions").value;
    let additionalInfo = document.getElementById("additionalInfo").value;

  
    console.log("Full Name:", fullname);
    console.log("email:", email);
    console.log("Grade:", grade);
    console.log("Place:", place);
    console.log("otherLearningPlace",otherLearningPlace);
    console.log("peerInteraction1:", peerInteraction1);
    console.log("Flex Radio Default:", flexRadioDefault1);
    console.log("Describe Experience:", describe);
    console.log("Skills:", interests);
    console.log("other",other);

    console.log("Active Pedagogy:", activePedagogy);
    console.log("Active Pedagogy Description:", activePedagogyDescription);
    console.log("Active Pedagogy Activity:", activePedagogyActivity);
    console.log("Active Pedagogy Activity Description:", activePedagogyActivityDescription);

    console.log("Learning Preferences:", learningPreferences);
    console.log("Other Learning Preference:", otherLearningPreference);

    console.log("Learning Environment:", learningEnvironment);
    console.log("Other Environment:", otherEnvironment);
    console.log("peerInteraction",peerInteraction);
    console.log("feedbackSupport",feedbackSupport);

    console.log("Goals:", goals);
    console.log("Other Goal:", otherGoal);
    console.log("Web Development Future:", webDevFuture);
    console.log("Web Development Topics:", webDevTopics);

    console.log("Training Suggestions:", trainingSuggestions);
    console.log("Additional Info:", additionalInfo);

    
    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/submit",{
        method: 'POST',
        body:JSON.stringify({
        answers: [
        {
        email: email,
        fullname: fullname,
        question_id: 1,
        answer: [
            fullname,
            email,
            grade,
            place,
            otherLearningPlace,
            peerInteraction1,
            flexRadioDefault1,
            describe,
            interests,
            other,
            activePedagogy,
            activePedagogyDescription,
            activePedagogyActivity,
            activePedagogyActivityDescription,
            learningPreferences,
            otherLearningPreference,
            learningEnvironment,
            otherEnvironment,
            peerInteraction,
            feedbackSupport,
            goals,
            otherGoal,
            webDevFuture,
            webDevTopics,
            trainingSuggestions,
            additionalInfo,
        ],
        created_by: "group10"
        }],
       }),
       headers:{
        "Content-Type":"application/json; charset=UTF-8",
        "x-secret-key":"3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
       }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Form submission successful:', data);
        window.location.href = "../../thankyou/index.html";  
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    



}





