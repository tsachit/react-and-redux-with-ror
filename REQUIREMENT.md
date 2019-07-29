**Project Requirement**

**CryptoCurrency Portfolio System for top 10 Coins**
- Go to coinmarketcap.com. look through their  api. They provide lastest data for cryptocurrency or you can use another source dig up.

1. **Backend (RoR)**
    - User Management Module
        - Roles Normal User (familiar with role management gem's like Rolify or other)
        - Admin User
        - Devise JWT for Token and Auth
    - Portfolio Managemnt Module
        - Normal User after login can add their portfolio data like how much quanity of certain cryptocurrency they own. Which. Eg: user should enter currency quantity, currency type and purchase date which
          will be used to show real-time current USD value in frontend. For historical price use 3rd party Free API like CyptoCompare.
        - show real-time GAINS or LOSS (diff in price between purchase date and Now)
        - Gains should be stored like day wise. so user can check prev. history of gains. (Optional)
    - Must Send User  a notification email about their Overall Portfolio results at End of Day ( Email Worker doing background job)
    
2. **Frontend (React/Next.js)**
    - Login portal for admin or normal user
    - admin can see user detail their portfolio and CRUD user
    - dashboard for normal login user should have portfolio visualization UI(simple interface which displays portfolio data).
    - there should be filter to view old gains result.


**Deployment:** Use Heroku or any free serivers and provide us with live working demo URL. BEST OF LUCK :+1:
