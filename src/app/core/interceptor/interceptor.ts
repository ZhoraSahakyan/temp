export const urls = [
  {
    url: '/login',
    json: {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkRvZSIsInJvbGUiOjIsImNyZWF0ZWRBdCI6MTUxNjIzOTAyMiwidXBkYXRlZEF0IjoyNTE2MjM5MjIyfSwiZXhwIjoyNTE2MjM5MDIyfQ.vpeyakCpHEGFGp6KBp2eXdTntLtiegKFLVBkON5CjGg',
      refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZGlzcGxheW5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJleHAiOjE1MTYyMzkwMjJ9.egreTSHgOR2FOeQmqWtvZPSdVS2d3Ceq0oOM8fjCzWQ'
    }
  }, {
    url: '/registration',
    json: {}
  },
  {
    url: '/employees',
    json: [
      {
        id: 1,
        email: 'test@gmail.com',
      },
    ]
  },
  {
    url: '/records',
    json: [
      {
        id: 1,
        name: 'test',
        img: 'https://via.placeholder.com/150',
        description: 'test',
        category: 'unknown'
      },
    ]
  }
];
