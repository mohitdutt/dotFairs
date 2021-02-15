const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("963164406217-4af3e7bm05mk465ag8o463dtnqli2f00.apps.googleusercontent.com");
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVlYTFiMWY0MjgwN2E4Y2MxMzZhMDNhM2MxNmQyOWRiODI5NmRhZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTYzMTY0NDA2MjE3LTRhZjNlN2JtMDVtazQ2NWFnOG80NjNkdG5xbGkyZjAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTYzMTY0NDA2MjE3LTRhZjNlN2JtMDVtazQ2NWFnOG80NjNkdG5xbGkyZjAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0MDkwNDQ2NDczMDg1MzEyMDk1IiwiZW1haWwiOiJtb2hpdGR1dHQxOTkzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoic0xqVEJQWThnQlF2UDgwS0JuNXpsdyIsIm5hbWUiOiJtb2hpdCBkdXR0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnOTM0WWNjMDNRSVIzeWRneEluYVlqb3pOUmgtWmp0ODBaQ1Bza1U1az1zOTYtYyIsImdpdmVuX25hbWUiOiJtb2hpdCIsImZhbWlseV9uYW1lIjoiZHV0dCIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNjExNTA1NTUxLCJleHAiOjE2MTE1MDkxNTEsImp0aSI6ImVhMzRhNjMxYmQ4YTFmNDRmZDFmZGZiZTY2ZDM4Y2U2MjMxNTlkMWMifQ.XFo4os3XYZhDj03olaVL8jRFv92-d84dyM-txf7ol9AA-vclpohPOhe5iHjio64DjhTQ_oT5oYHqdvP5HZ56gGmm6onnDuxjulR4KDYsANd2yjqvt1CKVfqvga7HCjMG_puOmk2sZDLP-36QjEiGt2aLMKVEjEjluhXVL89D8lJ9PwFyGnALH354v4Pv5ZYklPzOkY161b4vITL_l19SkyO5OxeEtp7q1sg8OZMWKCBpIJAiQTU2GIIO8FhxtfYBov-5VuyNrTM3NSLTHJCkYliaKJChUjtkwkqKZ2AaUN__xUFro_YpB202uCirYVKXvnqRW4QsoP4e74VYF4UrAg",
      audience: "963164406217-4af3e7bm05mk465ag8o463dtnqli2f00.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  console.log(payload)
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);