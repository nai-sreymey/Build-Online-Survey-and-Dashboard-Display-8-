
    function fetchApi(){

        fetch(" https://wmad-survey-backend.vercel.app/api/form-answers/question/2/answers?search_created_by=group10",{

            method: 'GET',
            headers:{
                'x-secret-key':'3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let Number1 = data.length;
            console.log(Number1);
            document.getElementById("Number1").innerHTML+=`
              <div class="text">
                <p>Students with previous experience in Web Development</p>
                <div class="number" style="margin-top: 8%">${Number1}</div>
              </div>
             
            `;
        })
        .catch(error => {
            console.error('Error',error);
        });

    fetch("https://wmad-survey-backend.vercel.app/api/form-answers/question/1/answers?search_created_by=group10",{

        method: 'GET',
        headers:{
            'x-secret-key':'3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
        }
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error('Request failed');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        let Number1 = data.length;
        console.log(Number1);
        document.getElementById("Number1").innerHTML+=`
          <div class="text">
            <p>Number of responses</p>
            <div class="number" style="margin-top: 14%">${Number1}</div>
          </div>
         
        `;
    })
    .catch(error => {
        console.error('Error',error);
    });

   

    }
    fetchApi();

    function functionAPI(){
        let grade = document.getElementById("grade").value;
        fetch(" https://wmad-survey-backend.vercel.app/api/form-answers/question/2/answers?search_answer="+grade,{
            method:'GET',
            headers:{
                  'x-secret-key':'3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
            'Content-Type': 'application/json'
            }
        })
        .then ((response)=>{
            if(!response.ok){
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(date => {
            console.log(date);
            let select = date.length;
            console.log(select);
            document.getElementById("select").innerHTML = select;
        })
        .catch(error => {
            console.error('Error',error);
        });
    }
    functionAPI();


    function Myschool() {
        let school = document.getElementById("school").value;
    
        fetch("https://wmad-survey-backend.vercel.app/api/form-answers/question/4/answers?search_created_by=group10&search_answer=" + school, {
            method: 'GET',
            headers: {
                'x-secret-key': '3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let demo = data.length;
            console.log(demo);
            document.getElementById("demo").innerHTML = demo;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    // Call the function to execute on page load or attach it to an event
    Myschool();
    



