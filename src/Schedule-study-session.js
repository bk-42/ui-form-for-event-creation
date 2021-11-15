import './ScheduleStudySessionForm.css';

const ScheduleStudySession = () => {
    
    return ( 
        <div className="ScheduleStudySessionForm">
            <div className="grid-container">
                <form action="">
                    <div class="grid-item">
                        <label for="classToStudy">Choose a class:</label>
                    </div>
                    <div class="grid-item">
                        <select id="classToStudy" name="classToStudy">
                            <optgroup label="CSCI">
                                <option value="csci360">CSCI-360</option>
                                <option value="csci362">CSCI-362</option>
                                <option value="csci369">CSCI-369</option>
                                <option value="csci380">CSCI-380</option>
                            </optgroup>
                            <optgroup label="Literature">
                                <option value="lit101">Lit 101</option>
                                <option value="lit106">Lit 106</option>
                                <option value="lit109">Lit 109</option>
                            </optgroup>
                            <optgroup label="Math">
                                <option value="mat101">Mat 101</option>
                                <option value="mat201">Mat 201</option>
                                <option value="mat301">Mat 301</option>
                            </optgroup>                   
                        </select> <br/>
                    </div>
                    <div class="grid-item">
                        <input type="date" name="bday"/><br/>
                    </div>
                    <div class="grid-item">
                        <input type="time"/><br/>
                    </div>
                    <div class="grid-item">
                        <label htmlFor="studyBuddyEmail">
                            Whom with you want to study for this class?
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="email" name="studyBuddyEmail" required />
                        <br/><br/>
                        <input type="button" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ScheduleStudySession;