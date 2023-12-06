new gridjs.Grid({
    columns: ["Id", "Name", "Username", "Email", "Address", "Company" ],
  
    server: {
        url: 'https://jsonplaceholder.typicode.com/users',
        then: data => data.map(BULUTANGKIS => 
          [BULUTANGKIS.id, BULUTANGKIS.name, BULUTANGKIS.username, BULUTANGKIS.email, (BULUTANGKIS.address.street + " " + BULUTANGKIS.address.suite + ", " + BULUTANGKIS.address.city), BULUTANGKIS.company.name  ]
        ),
      },

  }).render(document.getElementById("wrapper"))