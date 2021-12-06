

const Profile = ({users}) => {

  return (
      <>
          <main >
              <h1>
                  profile page 
              </h1>
          </main>
          <body>
            {users?.map(user =>
              user.name
              )}
          </body>
      </>
  )
            }

export default Profile