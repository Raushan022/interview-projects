const menus = [
   {
      label: "Home",
      to: '/',
   },
   {
      label: "Profile",
      to: './profile',
      children: [
         {
            label: "Details",
            to: 'details',
            children: [
               {
                  label: "Location",
                  to: "location",
                  children: [
                     {
                        label: "City",
                        to: 'city'
                     },
                  ],
               },
            ],
         },
      ],
   },
   {
      label: "Settings",
      to: './settings',
      children: [
         {
            label: "Accounts",
            to: 'accounts'
         },
         {
            label: "Security",
            to: 'security',
            children: [
               {
                  label: "Login",
                  to: 'login'
               },
               {
                  label: "Register",
                  to: 'register',
                  children: [
                     {
                        label: "Random Data",
                        to: ""
                     }
                  ]
               },
            ],
         },
      ],
   },
]

export default menus;