const statusCodes = [
    {Code : 200, Title : "Success" },
    {Code : 201, Title : "Record Created Successfully" },
    {Code : 204, Title : "Empty Response" },
    {Code : 400, Title : "Bad Request" },
    {Code : 401, Title : "Unauthorized" },
    {Code : 403, Title : "Access Denied" },
    {Code : 404, Title : "Record Not Found" },
    {Code : 405, Title : "Method Not Supported" },
    {Code : 500, Title : "Inernal Server Error" },
    {Code : 600, Title : "JOI Validation Error" },
    {Code : 601, Title : "Password Should Be Betweem 8 - 26 Characters And Must Include Atleast One Lower Case, Upper Case, Numeric And Symbol" },
    {Code : 602, Title : "Email Already Exists" },
    {Code : 603, Title : "Username Already Exists" },
    {Code : 604, Title : "Incorrect Email or Password" },
    {Code : 605, Title : "OTP Expired" },
    {Code : 605, Title : "An Email Has Been Sent To Your Email Address" },
    {Code : 606, Title : "Password And Confirm Password Must Be Same" },
    {Code : 608, Title : "Could Not Process Due To A Technical Failure" },
    {Code : 609, Title : "Could Not Verify Email Due To A Technical Failure" },
    {Code : 610, Title : "Cannot Update To Same Plan" },
    {Code : 611, Title : "Cannot Submit The Same Request Twice" },
    {Code : 612, Title : "User Does Not Possess Membership" },
    {Code : 613, Title : "Membership Expired" },
    {Code : 614, Title : "Applications Limit Reached" },
    {Code : 615, Title : "Application Contracts Limit Reached" },
    {Code : 617, Title : "Link Expired" },
    {Code : 618, Title : "Invalid Name Provided For One Of The Event" },
    {Code : 619, Title : "Repeated Names Identified" },
    {Code : 620, Title : "Account Temporarily Blocked" },
    {Code : 621, Title : "An App With Same Name Already Exists" },
    {Code : 622, Title : "Your Account Will Be Temporarily Blocked If You Enter Incorrect Password Again" },
    {Code : 623, Title : "Your Account Has Been Temporarily Blocked" },
    {Code : 624, Title : "Your Account Is Not Accessable At The Moment" },
    {Code : 626, Title : "You Cannot Use Your Current Password As Your New Password" },
    {Code : 627, Title : 'You Can Only Update A ( Draft or Ready ) App To Delete' },
    {Code : 628, Title : 'You Can Only Update A ( Live or Terminated ) App To Draft Or Delete' },
    {Code : 629, Title : 'Cannot Make Draft Contract Live' },
    {Code : 630, Title : 'Contract Is Already Live' },
    {Code : 631, Title : 'Could Not Delete At The Moment. Please Try Later' },
    {Code : 632, Title : 'Record Already Exists' },
    {Code : 700, Title : "Invalid Pagination Parameters" },
    
]

export default statusCodes